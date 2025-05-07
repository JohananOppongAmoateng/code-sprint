import type React from "react"
import { cn } from "@/lib/utils"

interface PageHeaderProps {
  heading: string
  text?: string
  children?: React.ReactNode
  className?: string
}

export function PageHeader({ heading, text, children, className }: PageHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-start gap-2 pb-8 pt-6 md:flex-row md:items-center md:justify-between",
        className,
      )}
    >
      <div className="grid gap-1">
        <h1 className="text-3xl font-bold tracking-tight">{heading}</h1>
        {text && <p className="text-lg text-muted-foreground">{text}</p>}
      </div>
      {children}
    </div>
  )
}
