'use client'

import { createPluginRegistration } from '@embedpdf/core'
import { EmbedPDF } from '@embedpdf/core/react'
import { usePdfiumEngine } from '@embedpdf/engines/react'
import { useMemo, useState } from 'react'
import {
  Viewport,
  ViewportPluginPackage,
} from '@embedpdf/plugin-viewport/react'
import { Scroller, ScrollPluginPackage } from '@embedpdf/plugin-scroll/react'
import {
  DocumentContent,
  DocumentManagerPlugin,
  DocumentManagerPluginPackage,
} from '@embedpdf/plugin-document-manager/react'
import { RenderLayer, RenderPluginPackage } from '@embedpdf/plugin-render/react'
import { TilingLayer, TilingPluginPackage } from '@embedpdf/plugin-tiling/react'
import {
  ZoomPluginPackage,
  ZoomMode,
} from '@embedpdf/plugin-zoom/react'
import { Loader2 } from 'lucide-react'
import { ViewManagerPlugin } from '@embedpdf/plugin-view-manager/react'
import Toolbar from './toolbar'
import { LoadingSpinner } from './loading-spinner'
import { ThumbnailsSidebar } from './thumbnail-sidebar'
import { ThumbnailPluginPackage } from '@embedpdf/plugin-thumbnail/react'
import { PageControls } from './page-controls'

export const PDFViewer = () => {
  const { engine, isLoading, error } = usePdfiumEngine();
  const [showThmbnail, setShowThumbnail] = useState(false);

  const toggleThumbnails = () => {
    setShowThumbnail(prev => !prev)
  }

  const plugins = useMemo(
    () => [
      createPluginRegistration(DocumentManagerPluginPackage),
      createPluginRegistration(ViewportPluginPackage),
      createPluginRegistration(ScrollPluginPackage),
      createPluginRegistration(RenderPluginPackage),
      createPluginRegistration(TilingPluginPackage),
      createPluginRegistration(ZoomPluginPackage, {
        defaultZoomLevel: ZoomMode.FitPage,
      }),
      createPluginRegistration(ThumbnailPluginPackage, {
        width: 120,
        paddingY: 10,
      }),

    ],
    [],
  )

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (isLoading || !engine) {
    return (
      <div className="overflow-hidden rounded-lg border border-gray-300 bg-white dark:border-gray-700 dark:bg-gray-900">
        <div className="flex items-center justify-center">
          <div className="flex h-[calc(100vh-7rem)] items-center gap-2 text-gray-500 dark:text-gray-400">
            <Loader2 size={20} className="animate-spin" />
            <span className="text-sm">بار گذاری موتور ...</span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="overflow-hidden h-[calc(100vh-7rem)] flex select-none flex-col p-0 rounded-lg border border-gray-300 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900">
      <EmbedPDF engine={engine} plugins={plugins} onInitialized={async (registry) => {
        // Load default PDF URL on initialization
        const document = await registry
          ?.getPlugin<DocumentManagerPlugin>(DocumentManagerPlugin.id)
          ?.provides()
          ?.openDocumentUrl({ url: '/ebook.pdf' })
          .toPromise();

        if (!document) return;

        const viewManager = registry
          ?.getPlugin<ViewManagerPlugin>(ViewManagerPlugin.id)
          ?.provides();
        if (!viewManager) return;

        const views = viewManager.getAllViews();
        if (views.length > 0 && views[0]) {
          const firstViewId = views[0].id;
          viewManager.addDocumentToView(firstViewId, document.documentId);
          viewManager.setViewActiveDocument(firstViewId, document.documentId);
        }
      }}
      >
        {({ pluginsReady, activeDocumentId }) =>
          <>
            {pluginsReady ?
              <div className="flex h-full flex-col">
                {activeDocumentId && (
                  <Toolbar
                    documentId={activeDocumentId}
                    onToggleThumbnails={toggleThumbnails}
                  />
                )}

                {activeDocumentId && (
                  <div className="flex flex-1 overflow-hidden">
                    {showThmbnail && <ThumbnailsSidebar
                      documentId={activeDocumentId}
                      onClose={() => toggleThumbnails()}
                    />}
                    <div className="flex-1 overflow-hidden">
                      <DocumentContent documentId={activeDocumentId}>
                        {({ isLoading, isError, isLoaded }) =>
                          <>
                            {isLoading && (
                              <div className="flex h-full items-center justify-center">
                                <LoadingSpinner message="بارگذاری سند ..." />
                              </div>
                            )}
                            {isError && (
                              <p>خطای بارگذاری سند</p> 
                            )}
                            {
                              isLoaded && <Viewport
                                documentId={activeDocumentId}
                                className="inset-0 bg-gray-200 dark:bg-gray-800"
                              >
                                <Scroller
                                  documentId={activeDocumentId}
                                  renderPage={({ width, height, pageIndex }) => (
                                    <div
                                      style={{
                                        width,
                                        height,
                                        position: 'relative',
                                      }}
                                    >
                                      <RenderLayer
                                        documentId={activeDocumentId}
                                        pageIndex={pageIndex}
                                      />
                                      <TilingLayer
                                        documentId={activeDocumentId}
                                        pageIndex={pageIndex}
                                      />
                                    </div>
                                  )}
                                />
                                <PageControls documentId={activeDocumentId} />
                              </Viewport>
                            }
                          </>
                        }
                      </DocumentContent>
                      
                    </div>

                  </div>
                )}
              </div> :
              <div className="flex h-full items-center justify-center">
                <LoadingSpinner />
              </div>
            }
          </>}
      </EmbedPDF>
    </div>
  )
}