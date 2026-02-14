//import { PdfViewerComponent } from "@/components/pdfviewer-component";
import { PDFViewer } from "@/components/pdfviewer/pdfviewer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";


export default function ViewerPage() {
    return (
        <Card className="@container/card  h-full">
            <CardHeader>
                <CardTitle>نمایش فایل پی دی اف</CardTitle>
                <CardDescription>
                    <span className="hidden @[540px]/card:block">
                        نمایش یک فایل پی دی اف
                    </span>
                    <span className="@[540px]/card:hidden">Last 3 months</span>
                </CardDescription>
            </CardHeader>
            <CardContent className="px-2 sm:px-6">
                <PDFViewer url="/ebook.pdf" className="h-[500px]" />
            </CardContent>
        </Card>
    );
}
