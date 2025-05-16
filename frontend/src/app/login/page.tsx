"use client";

import Link from "next/link";
import { Globe, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ROUTES } from "@/lib/routes";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        <div className="flex flex-col items-center space-y-4 mb-6">
          <Link href={ROUTES.HOME} className="flex items-center gap-2 font-bold text-xl">
            <Globe className="h-8 w-8 text-primary" />
            <span>Code Sprint</span>
          </Link>
          <h1 className="text-2xl font-bold">Welcome back</h1>
          <p className="text-muted-foreground text-center">
            Sign in to your account to continue contributing
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Sign In</CardTitle>
            <CardDescription>
              Choose one of the options below to access your account
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* GitHub OAuth */}
            <Button
              variant="outline"
              className="w-full flex items-center justify-center gap-2"
              onClick={() => null}
            >
              <Github className="h-5 w-5" />
              Sign in with GitHub
            </Button>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <div className="text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link href={ROUTES.AUTH.SIGNUP} className="text-primary hover:underline">
                Sign up
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
