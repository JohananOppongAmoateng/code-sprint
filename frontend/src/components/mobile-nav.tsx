"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { routes } from "@/lib/routes"

export function MobileNav() {
  const [open, setOpen] = React.useState(false)
  const pathname = usePathname()

  const navItems = [
    {
      name: "Home",
      href: routes.home,
      active: pathname === routes.home,
    },
    {
      name: "Events",
      href: routes.events,
      active: pathname === routes.events || pathname.startsWith("/events/"),
    },
    {
      name: "Projects",
      href: routes.projects,
      active: pathname === routes.projects || pathname.startsWith("/projects/"),
    },
    {
      name: "Leaderboard",
      href: routes.leaderboard,
      active: pathname === routes.leaderboard,
    },
    {
      name: "How It Works",
      href: routes.howItWorks,
      active: pathname === routes.howItWorks,
    },
    {
      name: "Contribute",
      href: routes.contribute,
      active: pathname === routes.contribute,
    },
    {
      name: "About",
      href: routes.about,
      active: pathname === routes.about,
    },
  ]

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0">
        <div className="px-7">
          <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
              <span className="text-lg font-bold text-primary-foreground">TP</span>
            </div>
            <span className="text-lg font-semibold">TimePledge</span>
          </Link>
        </div>
        <div className="mt-8 flex flex-col gap-4 px-7">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-base font-medium transition-colors hover:text-primary",
                item.active ? "text-primary font-semibold" : "text-muted-foreground",
              )}
              onClick={() => setOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="mt-8 flex flex-col gap-4 px-7">
          <Link
            href={routes.login}
            className="text-base font-medium text-muted-foreground transition-colors hover:text-primary"
            onClick={() => setOpen(false)}
          >
            Log In
          </Link>
          <Link
            href={routes.signup}
            className="text-base font-medium text-muted-foreground transition-colors hover:text-primary"
            onClick={() => setOpen(false)}
          >
            Sign Up
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  )
}
