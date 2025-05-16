import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Globe } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ROUTES } from "@/lib/routes"

export const metadata: Metadata = {
  title: "About | Code Sprint",
  description: "Learn about Code Sprint's mission, vision, and the team behind the platform.",
}

export default function AboutPage() {
  return (
    <div className="container py-10 space-y-16">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">About Code Sprint</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Code Sprint is a platform that connects contributors with time-based contribution events, making it easy to
          track impact and recognize valuable contributions.
        </p>
      </section>

      <section className="grid gap-12 md:grid-cols-2 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Our Mission</h2>
          <p className="text-lg text-muted-foreground">
            Code Sprint&apos;s mission is to make contribution accessible, measurable, and rewarding. We believe that everyone
            has valuable skills to contribute, and we&apos;re building the tools to help people connect with meaningful
            opportunities and track their impact.
          </p>
          <p className="text-lg text-muted-foreground">
            By focusing on time-based contributions, we create a universal metric that values all types of skills and
            contributions equally, from coding to design, writing to community building.
          </p>
        </div>
        <div className="relative h-[400px] rounded-lg overflow-hidden border">
          <Image src="/placeholder.svg?height=800&width=600" alt="Code Sprint mission" fill className="object-cover" />
        </div>
      </section>

      <section className="grid gap-12 md:grid-cols-2 items-center">
        <div className="relative h-[400px] rounded-lg overflow-hidden border md:order-1">
          <Image src="/placeholder.svg?height=800&width=600" alt="Code Sprint vision" fill className="object-cover" />
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Our Vision</h2>
          <p className="text-lg text-muted-foreground">
            We envision a world where contribution is recognized as a valuable currency, where people can build
            portfolios of impact that showcase their skills and dedication, and where organizations can easily find and
            engage with passionate contributors.
          </p>
          <p className="text-lg text-muted-foreground">
            Code Sprint aims to be the central hub for time-based contributions across various sectors, from open source
            to nonprofits, education to community service.
          </p>
        </div>
      </section>

      <section className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold">Our Values</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            These core values guide everything we do at Code Sprint.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Inclusivity</h3>
                <p className="text-muted-foreground">
                  We believe everyone has valuable skills to contribute, and we design our platform to be accessible and
                  welcoming to all.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Transparency</h3>
                <p className="text-muted-foreground">
                  We operate with openness and honesty, sharing our processes, decisions, and the impact of
                  contributions on our platform.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Impact</h3>
                <p className="text-muted-foreground">
                  We focus on creating meaningful change through contribution, measuring and celebrating the real-world
                  impact of our community.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Community</h3>
                <p className="text-muted-foreground">
                  We foster a supportive community where contributors and organizers can connect, collaborate, and learn
                  from each other.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold">Our Team</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Code Sprint is built by a passionate team dedicated to making contribution accessible and impactful.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="flex flex-col items-center text-center space-y-4">
              <div className="relative h-40 w-40 rounded-full overflow-hidden border">
                <Image
                  src={`/placeholder.svg?height=160&width=160&text=Team Member ${i}`}
                  alt={`Team member ${i}`}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">Team Member {i}</h3>
                <p className="text-muted-foreground">Role / Position</p>
              </div>
              <p className="text-sm text-muted-foreground">
                Short bio about the team member and their background, expertise, and passion for the project.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold">Our Story</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The journey of Code Sprint from idea to platform.
          </p>
        </div>

        <div className="space-y-12">
          <div className="grid gap-6 md:grid-cols-2 items-center">
            <div>
              <h3 className="text-xl font-bold mb-4">The Beginning</h3>
              <p className="text-muted-foreground mb-4">
                Code Sprint started as an idea in 2023 when our founders noticed a gap in how contributions were tracked
                and recognized across different platforms and communities.
              </p>
              <p className="text-muted-foreground">
                They envisioned a unified platform that would make it easy for people to find opportunities, contribute
                their skills, and build a portfolio of their impact.
              </p>
            </div>
            <div className="relative h-[300px] rounded-lg overflow-hidden border">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Code Sprint beginnings"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 items-center">
            <div className="relative h-[300px] rounded-lg overflow-hidden border md:order-1">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Code Sprint growth"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Growth and Development</h3>
              <p className="text-muted-foreground mb-4">
                After months of development and testing with early users, Code Sprint launched its beta version in early
                2024, focusing on open source and nonprofit sectors.
              </p>
              <p className="text-muted-foreground">
                The platform quickly gained traction, with hundreds of contributors joining events and thousands of
                contribution hours logged in the first few months.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 items-center">
            <div>
              <h3 className="text-xl font-bold mb-4">Today and Beyond</h3>
              <p className="text-muted-foreground mb-4">
                Today, Code Sprint continues to grow and evolve, with new features and improvements based on feedback
                from our community of contributors and organizers.
              </p>
              <p className="text-muted-foreground">
                We're excited about the future of Code Sprint and our mission to make contribution accessible,
                measurable, and rewarding for everyone.
              </p>
            </div>
            <div className="relative h-[300px] rounded-lg overflow-hidden border">
              <Image src="/placeholder.svg?height=600&width=800" alt="Code Sprint today" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted p-8 rounded-lg">
        <div className="text-center space-y-6 max-w-2xl mx-auto">
          <div className="flex justify-center">
            <div className="bg-background p-4 rounded-full">
              <Globe className="h-12 w-12 text-primary" />
            </div>
          </div>
          <h2 className="text-2xl font-bold">Join the Code Sprint Community</h2>
          <p className="text-muted-foreground">
            Whether you're looking to contribute your skills, organize an event, or just learn more about time-based
            contributions, we'd love to have you as part of our community.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <Link href={ROUTES.AUTH.SIGNUP}>
                Create an Account <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href={ROUTES.EVENTS.LIST}>Browse Events</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
