"use client"

import { usePathname, useRouter } from "next/navigation"
import { cn } from "@/lib/utils"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface TabItem {
  label: string
  value: string
  href: string
}

interface TabsNavProps {
  items: TabItem[]
  className?: string
}

export function TabsNav({ items, className }: TabsNavProps) {
  const router = useRouter()
  const pathname = usePathname()

  const currentTab = items.find((item) => item.href === pathname)?.value || items[0].value

  const handleTabChange = (value: string) => {
    const tab = items.find((item) => item.value === value)
    if (tab) {
      router.push(tab.href)
    }
  }

  return (
    <Tabs value={currentTab} onValueChange={handleTabChange} className={cn("w-full", className)}>
      <TabsList className="w-full justify-start">
        {items.map((item) => (
          <TabsTrigger key={item.value} value={item.value}>
            {item.label}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  )
}
