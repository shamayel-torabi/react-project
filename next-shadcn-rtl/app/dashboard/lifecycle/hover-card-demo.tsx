import { Button } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function HoverCardDemo() {
  return (
    <Card className="@container/card ">
      <CardHeader>
        <CardTitle>آزمایش پنجره اشاره گر</CardTitle>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6 flex gap-5">
        <HoverCard openDelay={10} closeDelay={100}>
          <HoverCardTrigger asChild>
            <Button variant="link">اینجا اشاره کن</Button>
          </HoverCardTrigger>
          <HoverCardContent className="flex w-64 flex-col gap-0.5">
            <div className="font-semibold">@nextjs</div>
            <div>The React Framework – created and maintained by @vercel.</div>
            <div className="text-muted-foreground mt-1 text-xs">
              Joined December 2021
            </div>
          </HoverCardContent>
        </HoverCard>
      </CardContent>
    </Card>
  )
}
