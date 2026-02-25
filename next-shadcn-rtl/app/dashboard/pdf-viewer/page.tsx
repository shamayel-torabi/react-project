import { PDFViewer } from "@/components/pdfviewer/pdf-viewer";

export default function PdfViewerPage() {
    return (
        <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6 px-4 lg:px-6">
                <PDFViewer url="/pdf/ebook.pdf"  />
            </div>
        </div>
    );
}
