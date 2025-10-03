import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { LogoutButton } from "@/components/logout-button"

export default async function DashboardPage() {
  const cookieStore = await cookies()
  const session = cookieStore.get("session")

  if (!session) {
    redirect("/signin")
  }

  return (
    <div className="min-h-screen p-4">
      <div className="mx-auto max-w-4xl">
        <header className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            <p className="mt-1 text-muted-foreground">Welcome, demo@demo.com</p>
          </div>
          <LogoutButton />
        </header>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
            <div className="text-sm font-medium text-muted-foreground">Total Users</div>
            <div className="mt-2 text-3xl font-bold">1,234</div>
            <p className="mt-1 text-xs text-muted-foreground">+12% from last month</p>
          </div>

          <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
            <div className="text-sm font-medium text-muted-foreground">Active Sessions</div>
            <div className="mt-2 text-3xl font-bold">567</div>
            <p className="mt-1 text-xs text-muted-foreground">+8% from last month</p>
          </div>

          <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
            <div className="text-sm font-medium text-muted-foreground">Revenue</div>
            <div className="mt-2 text-3xl font-bold">$12,345</div>
            <p className="mt-1 text-xs text-muted-foreground">+23% from last month</p>
          </div>
        </div>

        <div className="mt-8 rounded-lg border border-border bg-card p-6 shadow-sm">
          <h2 className="text-xl font-semibold">Recent Activity</h2>
          <div className="mt-4 space-y-3">
            <div className="flex items-center justify-between border-b border-border pb-3">
              <div>
                <p className="font-medium">New user registration</p>
                <p className="text-sm text-muted-foreground">2 minutes ago</p>
              </div>
            </div>
            <div className="flex items-center justify-between border-b border-border pb-3">
              <div>
                <p className="font-medium">Payment received</p>
                <p className="text-sm text-muted-foreground">15 minutes ago</p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">System update completed</p>
                <p className="text-sm text-muted-foreground">1 hour ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
