import Link from "next/link"
import { routes } from "@/lib/routes"

export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built with ❤️ for the community. © {new Date().getFullYear()} Code Sprint.
          </p>
        </div>
        <div className="flex gap-4">
          <Link
            href={routes.terms}
            className="text-sm text-muted-foreground underline underline-offset-4 hover:text-primary"
          >
            Terms
          </Link>
          <Link
            href={routes.privacy}
            className="text-sm text-muted-foreground underline underline-offset-4 hover:text-primary"
          >
            Privacy
          </Link>
          <Link
            href={routes.contact}
            className="text-sm text-muted-foreground underline underline-offset-4 hover:text-primary"
          >
            Contact
          </Link>
          <Link
            href={routes.faq}
            className="text-sm text-muted-foreground underline underline-offset-4 hover:text-primary"
          >
            FAQ
          </Link>
          <Link
            href={routes.team}
            className="text-sm text-muted-foreground underline underline-offset-4 hover:text-primary"
          >
            Team
          </Link>
        </div>
      </div>
    </footer>
  )
}
