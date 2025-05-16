"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

// Sidebar Provider
interface SidebarContextValue {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const SidebarContext = React.createContext<SidebarContextValue | undefined>(undefined)

export function SidebarProvider({
  children,
  defaultOpen = false,
}: {
  children: React.ReactNode
  defaultOpen?: boolean
}) {
  const [open, setOpen] = React.useState(defaultOpen)

  return <SidebarContext.Provider value={{ open, setOpen }}>{children}</SidebarContext.Provider>
}

export function useSidebar() {
  const context = React.useContext(SidebarContext)
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider")
  }
  return context
}


export function Sidebar({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  const { open } = useSidebar()

  return (
    <div
      className={cn(
        "flex h-screen flex-col border-r bg-background transition-all duration-300",
        open ? "w-64" : "w-16",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}


export function SidebarHeader({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  const { open } = useSidebar()

  return (
    <div
      className={cn("flex h-14 items-center px-4", open ? "justify-between" : "justify-center", className)}
      {...props}
    >
      {open ? children : <div className="flex items-center justify-center">{React.Children.toArray(children)[0]}</div>}
    </div>
  )
}


export function SidebarContent({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement> ) {
  return (
    <div className={cn("flex-1 overflow-auto p-2", className)} {...props}>
      {children}
    </div>
  )
}



export function SidebarFooter({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("mt-auto p-2", className)} {...props}>
      {children}
    </div>
  )
}


export function SidebarGroup({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("mb-4", className)} {...props}>
      {children}
    </div>
  )
}


export function SidebarGroupLabel({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  const { open } = useSidebar()

  if (!open) return null

  return (
    <div className={cn("mb-2 px-2 text-xs font-semibold text-muted-foreground", className)} {...props}>
      {children}
    </div>
  )
}


export function SidebarGroupContent({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("space-y-1", className)} {...props}>
      {children}
    </div>
  )
}



export function SidebarMenu({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("space-y-1", className)} {...props}>
      {children}
    </div>
  )
}



export function SidebarMenuItem({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("", className)} {...props}>
      {children}
    </div>
  )
}

// Sidebar Menu Button
export interface SidebarMenuButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof sidebarMenuButtonVariants> {
  asChild?: boolean
  isActive?: boolean
  tooltip?: string
}

const sidebarMenuButtonVariants = cva(
  "flex h-9 w-full items-center gap-2 rounded-md px-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "",
        ghost: "",
      },
      isActive: {
        true: "bg-accent text-accent-foreground",
        false: "transparent",
      },
    },
    defaultVariants: {
      variant: "default",
      isActive: false,
    },
  },
)

export const SidebarMenuButton = React.forwardRef<HTMLButtonElement, SidebarMenuButtonProps>(
  ({ className, variant, isActive, asChild = false, tooltip, children, ...props }, ref) => {
    const { open } = useSidebar()
    const Comp = asChild ? React.Fragment : "button"
    const childProps = asChild ? { className: "" } : {}

    return (
      <Comp
        ref={ref}
        className={cn(
          sidebarMenuButtonVariants({ variant, isActive }),
          open ? "justify-start" : "justify-center",
          className,
        )}
        title={!open ? tooltip : undefined}
        {...childProps}
        {...props}
      >
        {asChild ? (
          React.Children.map(children, (child) => {
            if (React.isValidElement(child)) {
              return React.cloneElement(child as React.ReactElement<unknown>, {
                className: cn(
                  "flex h-9 w-full items-center gap-2 rounded-md px-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                  isActive && "bg-accent text-accent-foreground",
                  open ? "justify-start" : "justify-center",
                ),
                children: React.Children.map(child.props.children, (grandChild, index) => {
                  if (index === 0 || open) {
                    return grandChild
                  }
                  return null
                }),
              })
            }
            return child
          })
        ) : (
          <>
            {React.Children.map(children, (child, index) => {
              if (index === 0 || open) {
                return child
              }
              return null
            })}
          </>
        )}
      </Comp>
    )
  },
)
SidebarMenuButton.displayName = "SidebarMenuButton"

// Sidebar Separator
export function SidebarSeparator({ className }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("my-2 h-px bg-border", className)} />
}



export function SidebarToggle({ className, children, ...props }:  React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { open, setOpen } = useSidebar()

  return (
    <button
      className={cn(
        "inline-flex h-9 w-9 items-center justify-center rounded-md border border-input bg-transparent text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
        className,
      )}
      onClick={() => setOpen(!open)}
      {...props}
    >
      {children}
    </button>
  )
}
