import Link from "next/link"
import { Code, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { routes } from "@/lib/routes"

interface EventCardProps {
  event: {
    slug: string
    title: string
    dateRange: string
    contributorsCount: number
    projectsCount: number
    description: string
  }
}

export function EventCard({ event }: EventCardProps) {
  return (
    <Card className="flex flex-col">
      <CardHeader className="p-4 bg-primary text-primary-foreground rounded-t-lg">
        <div className="text-sm">{event.dateRange}</div>
        <h3 className="text-xl font-bold mt-1">{event.title}</h3>
      </CardHeader>
      <CardContent className="p-6 space-y-4 flex-grow">
        <div className="flex items-center gap-2">
          <Users className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">{event.contributorsCount} contributors registered</span>
        </div>
        <div className="flex items-center gap-2">
          <Code className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">{event.projectsCount} open-source projects</span>
        </div>
        <p className="text-sm text-muted-foreground">{event.description}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Link href={routes.eventDetail(event.slug)} className="w-full">
          <Button className="w-full">View Details</Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
