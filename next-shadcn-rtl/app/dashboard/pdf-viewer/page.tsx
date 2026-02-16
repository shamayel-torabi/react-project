import { Card, CardContent } from "@/components/ui/card";
import { PDFViewer } from "@/components/pdfviewer/pdf-viewer";
//import { DocumentLoadingExample } from "../../../components/pdfviewer/document-loading-example";
//import { ViewerPage } from "@/components/pdfviewer/viewer";


export default function PdfViewerPage() {
    return (
        <Card className="@container/card  h-full">
            <CardContent>
                <PDFViewer url="/ebook.pdf"  />
                {/* <DocumentLoadingExample themePreference="dark"/> */}
                {/* <ViewerPage/> */}
            </CardContent>
        </Card>
    );
}
