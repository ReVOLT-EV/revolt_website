
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const session = request.cookies.get("session")?.value; // ✅ use .value

  // Protect all revolt-team routes
  if (!session) {
    return NextResponse.redirect(new URL("/login", request.url)); // ✅ better UX than homepage
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/revolt-team/:path*",
    "/team-wiki/:path*",
    "/team-systems/:path*"
  ], 
};
