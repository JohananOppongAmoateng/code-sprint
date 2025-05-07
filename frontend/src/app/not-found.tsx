import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ROUTES } from "@/lib/routes"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
      <p className="text-muted-foreground mb-8">The page you're looking for doesn't exist or has been moved.</p>
      <Link href={ROUTES.HOME}>
        <Button>Return Home</Button>
      </Link>
    </div>
  )
}
