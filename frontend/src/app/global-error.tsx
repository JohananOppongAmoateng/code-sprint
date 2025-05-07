"use client"

import { useEffect } from "react"
import Link from "next/link"
import { AlertCircle } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <html lang="en">
      <body>
        <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-muted">
            <AlertCircle className="h-10 w-10 text-destructive" />
          </div>
          <h1 className="mt-6 text-3xl font-bold">Something went wrong!</h1>
          <p className="mt-4 text-muted-foreground max-w-md">
            We apologize for the inconvenience. A critical error has occurred.
          </p>
          <div className="mt-8 flex gap-4">
            <Button onClick={() => reset()}>Try again</Button>
            <Button variant="outline" asChild>
              <Link href="/">Return Home</Link>
            </Button>
          </div>
        </div>
      </body>
    </html>
  )
}
