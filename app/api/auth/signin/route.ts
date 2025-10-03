import { cookies } from "next/headers"
import { NextResponse } from "next/server"

const DEMO_EMAIL = "demo@demo.com"
const DEMO_PASSWORD = "demo123"

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json()

    // Demo authentication logic
    if (email === DEMO_EMAIL && password === DEMO_PASSWORD) {
      // Set a simple session cookie
      const cookieStore = await cookies()
      cookieStore.set("session", "demo-user", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 60 * 60 * 24 * 7, // 1 week
        path: "/",
      })

      return NextResponse.json({ success: true, user: { email } })
    }

    return NextResponse.json({ error: "Invalid email or password" }, { status: 401 })
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
