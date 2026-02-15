import { PDFViewer } from "@/components/pdfviewer/pdf-viewer";
import { Card, CardContent } from "@/components/ui/card";


export default function ViewerPage() {
    return (
        <Card className="@container/card  h-full">
            <CardContent>
                <PDFViewer url="/ebook.pdf"  />
            </CardContent>
        </Card>
    );
}
