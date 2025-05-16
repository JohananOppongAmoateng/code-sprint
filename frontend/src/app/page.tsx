import Link from "next/link"
import { ArrowRight, Award, Calendar, Clock, Code, Github, Target, Users } from "lucide-react"
import { Button } from "../components/ui/button"
import Image from "next/image"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Contribute, Collaborate, Earn Rewards
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Join time-based contribution events, work on exciting open-source projects, and earn recognition for
                    your impact.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/events">
                    <Button size="lg" className="gap-1">
                      Browse Events <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/organize">
                    <Button size="lg" variant="outline">
                      Organize an Event
                    </Button>
                  </Link>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>2,500+ Contributors</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Code className="h-4 w-4" />
                    <span>500+ Projects</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>150+ Events</span>
                  </div>
                </div>
              </div>
              <div className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last">
                <Image
                  src="/placeholder.svg"
                  width={550}
                  height={550}
                  alt="Contributors collaborating on projects"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Everything You Need to Contribute</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform provides all the tools needed for successful open-source contribution events.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
              {/* Feature 1 */}
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <Calendar className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Event Registration</h3>
                <p className="text-center text-muted-foreground">
                  Register for sprints and hackathons to track your contributions and earn rewards.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <Award className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Leaderboards</h3>
                <p className="text-center text-muted-foreground">
                  Compete with other contributors and see your ranking in real-time.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <Target className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Task Matching</h3>
                <p className="text-center text-muted-foreground">
                  Get matched with tasks that fit your skills and interests.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <Github className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Automated Tracking</h3>
                <p className="text-center text-muted-foreground">
                  Automatically track your GitHub issues, PRs, and comments.
                </p>
              </div>

              {/* Feature 5 */}
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <Users className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Peer Feedback</h3>
                <p className="text-center text-muted-foreground">
                  Get feedback from organizers and mentors to improve your contributions.
                </p>
              </div>

              {/* Feature 6 */}
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <Clock className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Time-Based Events</h3>
                <p className="text-center text-muted-foreground">
                  Participate in structured events with clear timelines and goals.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming Events Section */}
        <section id="upcoming-events" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Upcoming Events</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join these upcoming contribution events and start making an impact.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
              {/* Event 1 */}
              <div className="flex flex-col rounded-lg border shadow-sm">
                <div className="p-4 bg-primary text-primary-foreground rounded-t-lg">
                  <div className="text-sm">May 15 - June 15, 2025</div>
                  <h3 className="text-xl font-bold mt-1">Summer Code Sprint</h3>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">125 contributors registered</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Code className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">15 open-source projects</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Focus on web accessibility and performance improvements across popular frameworks.
                  </p>
                  <Link href="/events/summer-code-sprint">
                    <Button className="w-full">View Details</Button>
                  </Link>
                </div>
              </div>

              {/* Event 2 */}
              <div className="flex flex-col rounded-lg border shadow-sm">
                <div className="p-4 bg-primary text-primary-foreground rounded-t-lg">
                  <div className="text-sm">July 1 - July 14, 2025</div>
                  <h3 className="text-xl font-bold mt-1">AI Tools Hackathon</h3>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">78 contributors registered</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Code className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">8 open-source projects</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Build and improve open-source AI tools and libraries for developers.
                  </p>
                  <Link href="/events/ai-tools-hackathon">
                    <Button className="w-full">View Details</Button>
                  </Link>
                </div>
              </div>

              {/* Event 3 */}
              <div className="flex flex-col rounded-lg border shadow-sm">
                <div className="p-4 bg-primary text-primary-foreground rounded-t-lg">
                  <div className="text-sm">August 5 - August 19, 2025</div>
                  <h3 className="text-xl font-bold mt-1">Documentation Sprint</h3>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">42 contributors registered</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Code className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">20 open-source projects</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Improve documentation, tutorials, and examples for popular open-source libraries.
                  </p>
                  <Link href="/events/documentation-sprint">
                    <Button className="w-full">View Details</Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-8">
              <Link href="/events">
                <Button variant="outline" size="lg">
                  View All Events
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Ready to Start Contributing?</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join our platform today and start making an impact on open-source projects.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/signup">
                  <Button size="lg">Sign Up Now</Button>
                </Link>
                <Link href="/events">
                  <Button size="lg" variant="outline">
                    Browse Events
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
