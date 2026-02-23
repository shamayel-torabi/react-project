import {
    Item,
    ItemContent,
    ItemDescription,
    ItemMedia,
    ItemTitle,
} from "@/components/ui/item"
import { InboxIcon } from "lucide-react"


import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export function ItemDemo() {
    return (

        <Card className="@container/card ">
            <CardHeader>
                <CardTitle>آزمایش آیتم</CardTitle>
            </CardHeader>
            <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6 flex flex-col gap-5">
                <Item  variant="outline">
                    <ItemMedia variant="icon">
                        <InboxIcon />
                    </ItemMedia>
                    <ItemContent>
                        <ItemTitle>Default Variant</ItemTitle>
                        <ItemDescription>
                            Transparent background with no border.
                        </ItemDescription>
                    </ItemContent>
                </Item>
                <Item variant="outline">
                    <ItemMedia variant="icon">
                        <InboxIcon />
                    </ItemMedia>
                    <ItemContent>
                        <ItemTitle>Outline Variant</ItemTitle>
                        <ItemDescription>
                            Outlined style with a visible border.
                        </ItemDescription>
                    </ItemContent>
                </Item>
                <Item variant="muted">
                    <ItemMedia variant="icon">
                        <InboxIcon />
                    </ItemMedia>
                    <ItemContent>
                        <ItemTitle>Muted Variant</ItemTitle>
                        <ItemDescription>
                            Muted background for secondary content.
                        </ItemDescription>
                    </ItemContent>
                </Item>
            </CardContent>
        </Card>

    )
}
