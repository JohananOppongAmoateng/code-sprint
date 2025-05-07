import { LoadingSpinner } from "@/components/loading-spinner"

interface LoadingStateProps {
  message?: string
}

export function LoadingState({ message = "Loading..." }: LoadingStateProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] w-full">
      <LoadingSpinner size={40} />
      <p className="mt-4 text-sm text-muted-foreground">{message}</p>
    </div>
  )
}
