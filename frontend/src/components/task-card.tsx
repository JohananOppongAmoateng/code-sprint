import Link from "next/link"
import { Award } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { routes } from "@/lib/routes"

interface TaskCardProps {
  task: {
    id: string
    title: string
    project: string
    description: string
    points: number
    tags: string[]
    difficulty: "Easy" | "Medium" | "Hard"
  }
}

export function TaskCard({ task }: TaskCardProps) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-base">{task.title}</CardTitle>
            <CardDescription>{task.project}</CardDescription>
          </div>
          <div className="flex items-center gap-1 text-sm bg-primary/10 text-primary px-2 py-1 rounded-full">
            <Award className="h-3 w-3" />
            <span>{task.points} points</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="flex flex-wrap gap-2 mb-2">
          {task.tags.map((tag) => (
            <Badge key={tag} className="text-xs" variant="secondary">
              {tag}
            </Badge>
          ))}
          <Badge
            className="text-xs"
            variant="outline"
            style={{
              backgroundColor:
                task.difficulty === "Easy"
                  ? "rgba(132, 204, 22, 0.1)"
                  : task.difficulty === "Medium"
                    ? "rgba(249, 115, 22, 0.1)"
                    : "rgba(239, 68, 68, 0.1)",
              color:
                task.difficulty === "Easy"
                  ? "rgb(132, 204, 22)"
                  : task.difficulty === "Medium"
                    ? "rgb(249, 115, 22)"
                    : "rgb(239, 68, 68)",
            }}
          >
            {task.difficulty}
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground">{task.description}</p>
      </CardContent>
      <CardFooter>
        <div className="flex gap-2 w-full">
          <Link href={routes.taskDetail(task.id)} className="flex-1">
            <Button variant="outline" className="w-full">
              View Task
            </Button>
          </Link>
          <Link href={`${routes.taskDetail(task.id)}/claim`} className="flex-1">
            <Button className="w-full">Claim Task</Button>
          </Link>
        </div>
      </CardFooter>
    </Card>
  )
}
