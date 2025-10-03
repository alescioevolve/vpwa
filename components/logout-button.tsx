"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

export function LogoutButton() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const handleLogout = async () => {
    setLoading(true)
    try {
      await fetch("/api/auth/signout", { method: "POST" })
      router.push("/signin")
      router.refresh()
    } catch (error) {
      console.error("Logout failed:", error)
      setLoading(false)
    }
  }

  return (
    <button
      onClick={handleLogout}
      disabled={loading}
      className="rounded-md border border-border bg-background px-4 py-2 text-sm font-medium hover:bg-muted focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-50"
    >
      {loading ? "Logging out..." : "Logout"}
    </button>
  )
}
