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
import { ThumbnailPluginPackage } from '@embedpdf/plugin-thumbnail/react';

import { Loader2 } from 'lucide-react'
import { ViewManagerPlugin } from '@embedpdf/plugin-view-manager/react'
import { PageControls } from './components/page-controls'
import Toolbar from './toolbar'
import { ThumbnailsSidebar } from './thumbnail-sidebar'

type Props = {
  url: string;
}

export const PDFViewer = ({ url }: Props) => {
  const { engine, isLoading } = usePdfiumEngine();
  const [sidebarStates, setSidebarStates] = useState<boolean>(false);

  const plugins = useMemo(() => {
    return [
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
    ]
  }, [])

  if (isLoading || !engine) {
    return (
      <div className="overflow-hidden rounded-lg border border-gray-300 bg-white dark:border-gray-700 dark:bg-gray-900">
        <div className="flex  h-[calc(100vh-8rem)] items-center justify-center">
          <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
            <Loader2 size={48} className="animate-spin" />
          </div>
        </div>
      </div>
    )
  }


  const toggleSidebar = () => {
    setSidebarStates((prev) => !prev);
  };

  return (
    <EmbedPDF
      engine={engine}
      plugins={plugins}
      onInitialized={async (registry) => {
        // Load default PDF URL on initialization
        const document = await registry
          ?.getPlugin<DocumentManagerPlugin>(DocumentManagerPlugin.id)
          ?.provides()
          ?.openDocumentUrl({ url })
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
      {({ activeDocumentId }) =>
        activeDocumentId && (
          <DocumentContent documentId={activeDocumentId}>
            {({ isLoaded }) =>
              isLoaded && (
                <div className="overflow-hidden rounded-lg border border-gray-300 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900">
                  {/* Toolbar */}
                  <Toolbar
                    documentId={activeDocumentId}
                    onToggleThumbnails={toggleSidebar} />
                  {/* PDF Viewer Area */}
                  <div className="relative flex h-[calc(100vh-8.5rem)] md:h-[calc(100vh-10.5rem)]">
                    {
                      sidebarStates && <ThumbnailsSidebar
                        documentId={activeDocumentId}
                        onClose={() => toggleSidebar()}
                      />
                    }

                    <Viewport
                      documentId={activeDocumentId}
                      className="flex-1 bg-gray-200 dark:bg-gray-800"
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
                    </Viewport>
                    <PageControls documentId={activeDocumentId} />
                  </div>
                </div>
              )
            }
          </DocumentContent>
        )
      }
    </EmbedPDF>
  )
}