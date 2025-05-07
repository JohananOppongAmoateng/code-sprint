"use client"

import type * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import { routes } from "@/lib/routes"
import { Button } from "@/components/ui/button"

export function MainNav({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
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
    <nav className={cn("flex items-center space-x-4 lg:space-x-6", className)} {...props}>
      {navItems.map((item) => (
        <Button
          key={item.name}
          asChild
          variant="ghost"
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            item.active ? "text-primary font-semibold" : "text-muted-foreground",
          )}
        >
          <Link href={item.href}>{item.name}</Link>
        </Button>
      ))}
    </nav>
  )
}
