import { auth } from "@/auth";
import SessionData from "@/components/session-data";

export default async function Page() {
  const session = await auth()
  return (
    <div className="@container/main h-screen flex flex-1 flex-col gap-2">
      <div className="flex h-full items-center justify-center gap-4 py-4 md:gap-6 md:py-6">
        <SessionData session={session} />
      </div>
    </div>
  )
}
