
// // middleware.ts
// import { NextRequest, NextResponse } from 'next/server';

// export function middleware(request: NextRequest) {

//   const session = request.cookies.get('session'); // ✅
//   if (!session && request.nextUrl.pathname.startsWith('/revolt-team')) {
//     return NextResponse.redirect(new URL('/', request.url));
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: ['/revolt-team/:path*'],
// };


// middleware.ts
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET!;

export function middleware(req: NextRequest) {
  const session = req.cookies.get("session")?.value;

  // Protect both /revolt-team AND /(member-access) routes
  const isProtectedRoute = 
    req.nextUrl.pathname.startsWith("/revolt-team") ||
    req.nextUrl.pathname.match(/^\/[^/]*\(member-access\)/);

  if (isProtectedRoute) {
    if (!session) {
      return NextResponse.redirect(new URL("/", req.url));
    }

    try {
      jwt.verify(session, JWT_SECRET);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/revolt-team/:path*", "/(member-access)/:path*"],
};


