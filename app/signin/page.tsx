import { SignInForm } from "@/components/signin-form"

export default function SignInPage() {
  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight">Welcome Back</h1>
          <p className="mt-2 text-muted-foreground">Sign in to access your dashboard</p>
        </div>
        <SignInForm />
      </div>
    </div>
  )
}
