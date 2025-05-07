import Link from "next/link"

import { Button } from "@/components/ui/button"
import { MainNav } from "@/components/main-nav"
import { MobileNav } from "@/components/mobile-nav"
import { UserNav } from "@/components/user-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import { routes } from "@/lib/routes"

interface SiteHeaderProps {
  isLoggedIn?: boolean
  isOrganizer?: boolean
}

export function SiteHeader({ isLoggedIn = false, isOrganizer = false }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <MobileNav />
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
              <span className="text-lg font-bold text-primary-foreground">CH</span>
            </div>
            <span className="text-lg font-semibold hidden md:inline-block">ContribHub</span>
          </Link>
          <div className="hidden md:ml-6 md:flex">
            <MainNav />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          {isLoggedIn ? (
            <UserNav />
          ) : (
            <div className="hidden md:flex md:items-center md:gap-2">
              <Link href={routes.login}>
                <Button variant="ghost" size="sm">
                  Log In
                </Button>
              </Link>
              <Link href={routes.signup}>
                <Button size="sm">Sign Up</Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
