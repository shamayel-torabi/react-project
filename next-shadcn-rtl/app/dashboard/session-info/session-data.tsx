import CustomLink from "@/components/custom-link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { Session } from "next-auth"

export default function SessionData({ session }: { session: Session | null }) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>اطلاعات جلسه</CardTitle>
        <CardDescription>
          نمایش اطلاعات کاربر
        </CardDescription>
      </CardHeader>
      <CardContent>
        {
          session?.user ?
            <pre dir="ltr" className="whitespace-pre-wrap break-all px-4 py-6">
              {JSON.stringify(session, null, 2)}
            </pre> :
            <CustomLink href="/login">ورود به وبگاه</CustomLink>
        }
      </CardContent>
    </Card>
  )
}
