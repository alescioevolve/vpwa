import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const session = request.cookies.get("session")
  const { pathname } = request.nextUrl

  // Protect dashboard route
  if (pathname.startsWith("/dashboard") && !session) {
    return NextResponse.redirect(new URL("/signin", request.url))
  }

  // Redirect to dashboard if already signed in
  if (pathname === "/signin" && session) {
    return NextResponse.redirect(new URL("/dashboard", request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/dashboard/:path*", "/signin"],
}
