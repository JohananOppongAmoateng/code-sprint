import { cn } from "@/lib/utils"
import { Loader2 } from "lucide-react"

interface LoadingSpinnerProps {
  className?: string
  size?: number
}

export function LoadingSpinner({ className, size = 24 }: LoadingSpinnerProps) {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <Loader2 className={cn("animate-spin text-muted-foreground", className)} width={size} height={size} />
    </div>
  )
}
