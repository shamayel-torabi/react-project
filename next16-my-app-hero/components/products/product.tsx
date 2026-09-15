type Props = {
    title: string;
    detail: string;
}

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export function ProductComponent({ title, detail }: Props): React.ReactNode {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>شرح</CardDescription>
            </CardHeader>
            <CardContent>
                <p>{detail}</p>
            </CardContent>
            <CardFooter>
                <p>Card Footer</p>
            </CardFooter>
        </Card>
    );
}
