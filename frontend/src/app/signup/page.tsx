// import Link from "next/link"
// import { Globe } from "lucide-react"

// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
// import { ROUTES } from "@/lib/routes"

// export default function SignupPage() {
//   return (
//     <div className="flex min-h-screen flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
//       <div className="w-full max-w-md">
//         <div className="flex flex-col items-center space-y-4 mb-6">
//           <Link href={ROUTES.HOME} className="flex items-center gap-2 font-bold text-xl">
//             <Globe className="h-8 w-8 text-primary" />
//             <span>Code Sprint</span>
//           </Link>
//           <h1 className="text-2xl font-bold">Create an account</h1>
//           <p className="text-muted-foreground text-center">
//             Join Code Sprint to start contributing to open-source projects
//           </p>
//         </div>

//         <Card>
//           <CardHeader>
//             <CardTitle>Sign Up</CardTitle>
//             <CardDescription>Enter your information to create an account</CardDescription>
//           </CardHeader>
//           <CardContent className="space-y-4">
//             <div className="grid grid-cols-2 gap-4">
//               <div className="space-y-2">
//                 <Label htmlFor="firstName">First name</Label>
//                 <Input id="firstName" />
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="lastName">Last name</Label>
//                 <Input id="lastName" />
//               </div>
//             </div>
//             <div className="space-y-2">
//               <Label htmlFor="email">Email</Label>
//               <Input id="email" type="email" placeholder="name@example.com" />
//             </div>
//             <div className="space-y-2">
//               <Label htmlFor="password">Password</Label>
//               <Input id="password" type="password" />
//             </div>
//             <div className="space-y-2">
//               <Label htmlFor="confirmPassword">Confirm Password</Label>
//               <Input id="confirmPassword" type="password" />
//             </div>
//           </CardContent>
//           <CardFooter className="flex flex-col space-y-4">
//             <Button className="w-full">Create Account</Button>
//             <div className="text-center text-sm">
//               Already have an account?{" "}
//               <Link href={ROUTES.AUTH.LOGIN} className="text-primary hover:underline">
//                 Sign in
//               </Link>
//             </div>
//           </CardFooter>
//         </Card>
//       </div>
//     </div>
//   )
// }

"use client"

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

export default function SignupPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        <div className="flex flex-col items-center space-y-4 mb-6">
          <Link href={ROUTES.HOME} className="flex items-center gap-2 font-bold text-xl">
            <Globe className="h-8 w-8 text-primary" />
            <span>Code Sprint</span>
          </Link>
          <h1 className="text-2xl font-bold">Create an account</h1>
          <p className="text-muted-foreground text-center">
            Join Code Sprint to start contributing to open-source projects
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Sign Up</CardTitle>
            <CardDescription>
              Choose one of the options below to create your account
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
              Sign up with GitHub
            </Button>

          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <div className="text-center text-sm">
              Already have an account?{" "}
              <Link href={ROUTES.AUTH.LOGIN} className="text-primary hover:underline">
                Sign in
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
