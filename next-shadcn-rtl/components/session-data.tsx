import type { Session } from "next-auth"
import Link from "next/link"

export default function SessionData({ session }: { session: Session | null }) {
  if (session?.user) {
    return (
      <div className="flex w-full flex-col gap-4 rounded-md bg-gray-100 dark:bg-gray-800 p-4">
        <div className="flex flex-col rounded-md bg-neutral-100 dark:bg-neutral-900">
          <div className="rounded-t-md bg-neutral-200 dark:bg-neutral-800 p-4 font-bold">
            اطلاعات جلسه
          </div>
          <pre dir="ltr" className="whitespace-pre-wrap break-all px-4 py-6">
            {JSON.stringify(session, null, 2)}
          </pre>
        </div>
      </div>
    )
  }

  return (
    <p className="flex items-center justify-center w-96 rounded-md bg-gray-100 dark:bg-gray-800 p-4">
      <span>
        وارد وبگاه نشده اید برای ورود
      </span>
      <Link href="/login">
        <span><em className="px-2"> اینجا رو کلیک</em></span>
      </Link>
      <span>
        کنید
      </span>
    </p>
  )
}
