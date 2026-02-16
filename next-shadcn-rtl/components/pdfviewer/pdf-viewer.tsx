'use client'

import { createPluginRegistration } from '@embedpdf/core'
import { EmbedPDF } from '@embedpdf/core/react'
import { usePdfiumEngine } from '@embedpdf/engines/react'
import { useMemo } from 'react'
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
import { ZoomToolbar } from './zoom-toolbar'
import { ViewManagerPlugin } from '@embedpdf/plugin-view-manager/react'
import { PageControls } from './components/page-controls'

type Props = {
  url: string;
}

export const PDFViewer = ({ url }: Props) => {
  const { engine, isLoading } = usePdfiumEngine()

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
    ]
  }, [])

  if (isLoading || !engine) {
    return (
      <div className="overflow-hidden rounded-lg border border-gray-300 bg-white dark:border-gray-700 dark:bg-gray-900">
        <div className="flex  h-[calc(100vh-7rem)] items-center justify-center">
          <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
            <Loader2 size={48} className="animate-spin" />
          </div>
        </div>
      </div>
    )
  }

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
                  <ZoomToolbar documentId={activeDocumentId} />

                  {/* PDF Viewer Area */}
                  <div className="relative h-[calc(100vh-10rem)]">
                    <Viewport
                      documentId={activeDocumentId}
                      className="absolute inset-0 bg-gray-200 dark:bg-gray-800"
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