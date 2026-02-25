"use client"
import CustomLink from "@/components/custom-link"
import { useEffect, useState } from "react"

export default function Page() {
  const [data, setData] = useState()
  useEffect(() => {
    ; (async () => {
      const res = await fetch("/api/test")
      const json = await res.json()
      setData(json)
    })()
  }, [])
  return (
    <div className="@container/main flex flex-1 flex-col gap-2">
      <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6 px-4 lg:px-6">
        <h1 className="text-3xl font-bold">Route Handler Usage</h1>
        <p dir="ltr">
          This page fetches data from an API{" "}
          <CustomLink href="https://nextjs.org/docs/app/building-your-application/routing/route-handlers">
            Route Handler
          </CustomLink>
          . The API is protected using the universal{" "}
          <CustomLink href="https://nextjs.authjs.dev#auth">
            <code>auth()</code>
          </CustomLink>{" "}
          method.
        </p>
        <div className="flex flex-col rounded-md bg-gray-100 dark:bg-gray-800">
          <div className="rounded-t-md bg-gray-200 dark:bg-gray-600 p-4 font-bold">
            Data from API Route
          </div>
          <pre className="whitespace-pre-wrap break-all px-4 py-6">
            {JSON.stringify(data, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  )
}
