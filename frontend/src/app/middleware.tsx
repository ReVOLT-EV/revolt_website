
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

const JWT_SECRET = process.env.JWT_SECRET || process.env.NEXT_PUBLIC_JWT_SECRET;

export function middleware(req: NextRequest) {
  console.log("🔍 Middleware running for:", req.nextUrl.pathname);
  
  const session = req.cookies.get("session")?.value;
  console.log("🍪 Session cookie exists:", !!session);
  console.log("🍪 Session value (first 20 chars):", session?.substring(0, 20));
  console.log("🔑 JWT_SECRET exists:", !!JWT_SECRET);
  
  // Public routes - allow access without authentication
  const publicPaths = ["/", "/login", "/signup"];
  const isPublicPath = publicPaths.includes(req.nextUrl.pathname);
  
  if (isPublicPath) {
    console.log("🚪 Allowing access to public page");
    return NextResponse.next();
  }
  
  // Protected routes - require authentication
  if (req.nextUrl.pathname.startsWith("/revolt-team")) {
    console.log("🔒 Protecting revolt-team route");
    
    if (!session) {
      console.log("❌ No session cookie - redirecting to /");
      const response = NextResponse.redirect(new URL("/", req.url));
      // Clear any existing session cookie
      response.cookies.delete("session");
      return response;
    }

    if (!JWT_SECRET) {
      console.log("❌ JWT_SECRET not configured");
      return NextResponse.redirect(new URL("/", req.url));
    }

    try {
      const decoded = jwt.verify(session, JWT_SECRET);
      console.log("✅ JWT valid for user:", decoded);
      return NextResponse.next();
    } catch (error) {
      console.log("❌ JWT verification failed:", error);
      
      // Clear invalid session cookie and redirect
      const response = NextResponse.redirect(new URL("/", req.url));
      response.cookies.delete("session");
      return response;
    }
  }

  return NextResponse.next();
}


export const config = {
  matcher: ["/revolt-team/:path*"],
};


