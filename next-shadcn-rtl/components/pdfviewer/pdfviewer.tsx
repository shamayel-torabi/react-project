"use client"
import { createPluginRegistration } from '@embedpdf/core';
import { EmbedPDF } from '@embedpdf/core/react';
import { usePdfiumEngine } from '@embedpdf/engines/react';

// Import the essential plugins
import { Viewport, ViewportPluginPackage } from '@embedpdf/plugin-viewport/react';
import { Scroller, ScrollPluginPackage } from '@embedpdf/plugin-scroll/react';
import {
  DocumentContent,
  DocumentManagerPluginPackage,
} from '@embedpdf/plugin-document-manager/react';
import { RenderLayer, RenderPluginPackage } from '@embedpdf/plugin-render/react';
import { ZoomToolbar } from './ZoomToolbar';
import { cn } from '@/lib/utils';

// 1. Register the plugins you need
const plugins = (url: string) => {
  return [
    createPluginRegistration(DocumentManagerPluginPackage, {
      initialDocuments: [{ url }],
    }),
    createPluginRegistration(ViewportPluginPackage),
    createPluginRegistration(ScrollPluginPackage),
    createPluginRegistration(RenderPluginPackage),
  ]
};


type Props = {
  className?: string;
  url: string;
}

export const PDFViewer = ({ className, url }: Props) => {
  // 2. Initialize the engine with the React hook
  const { engine, isLoading } = usePdfiumEngine();

  if (isLoading || !engine) {
    return <div>Loading PDF Engine...</div>;
  }

  // return (
  //   <div className={cn("flex flex-col", className)}>
  //     <EmbedPDF engine={engine} plugins={plugins(url)}>
  //       {({ activeDocumentId }) =>
  //         activeDocumentId && (
  //           <DocumentContent documentId={activeDocumentId}>
  //             {({ isLoaded }) =>
  //               isLoaded && (
  //                 <div style={{display: 'flex', height: '100%', flexDirection: 'column'}}>
  //                   <ZoomToolbar documentId={activeDocumentId} /> {/* 2. Add the component here with documentId */}
  //                   <div style={{ flex: 1, overflow: 'hidden' }}>
  //                     <Viewport documentId={activeDocumentId}>
  //                       <Scroller
  //                         documentId={activeDocumentId}
  //                         renderPage={({ width, height, pageIndex }) => (
  //                           <div style={{ width, height }}>
  //                             <RenderLayer
  //                               documentId={activeDocumentId}
  //                               pageIndex={pageIndex}
  //                             />
  //                           </div>
  //                         )}
  //                       />
  //                     </Viewport>
  //                   </div>
  //                 </div>
  //               )
  //             }
  //           </DocumentContent>
  //         )
  //       }
  //     </EmbedPDF>
  //   </div>
  // );

  // 3. Wrap your UI with the <EmbedPDF> provider
  return (
    <div className={className}>
      <EmbedPDF engine={engine} plugins={plugins(url)}>
        {({ activeDocumentId }) =>
          activeDocumentId && (
            <DocumentContent documentId={activeDocumentId}>
              {({ isLoaded }) =>
                isLoaded && (
                  <div>
                    <Viewport
                      documentId={activeDocumentId}
                      style={{
                        backgroundColor: '#f1f3f5',
                      }}
                    >
                      <Scroller
                        documentId={activeDocumentId}
                        renderPage={({ width, height, pageIndex }) => (
                          <div style={{ width, height }}>
                            {/* The RenderLayer is responsible for drawing the page */}
                            <RenderLayer
                              documentId={activeDocumentId}
                              pageIndex={pageIndex}
                            />
                          </div>
                        )}
                      />
                    </Viewport>
                  </div>
                )
              }
            </DocumentContent>
          )
        }
      </EmbedPDF>
    </div>
  );
};