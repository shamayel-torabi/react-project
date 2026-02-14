'use client';

import { PDFViewer } from '@embedpdf/react-pdf-viewer';

type Props = {
    className?: string;
    url: string;
}

export const PdfViewerComponent = ({ url, className }: Props) => {
    return (
        <div className={className}>
            <PDFViewer
                config={{
                    src: url
                }}
            />
        </div>
    )
}
