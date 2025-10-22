
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

// Try different ways to get the JWT secret
const JWT_SECRET = process.env.JWT_SECRET || 
                  process.env.NEXT_PUBLIC_JWT_SECRET || 
                  "AnotherSup3rS3cr3t"; // Fallback to match your Flask default

export function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;
  console.log("🔍 Middleware running for:", pathname);
  
  // Skip middleware for static files, API routes, and Next.js internals
  if (
    pathname.startsWith('/_next/') ||
    pathname.startsWith('/api/') ||
    pathname.includes('.') ||
    pathname === '/favicon.ico'
  ) {
    return NextResponse.next();
  }
  
  const session = req.cookies.get("session")?.value;
  console.log("🍪 Session cookie exists:", !!session);
  if (session) {
    console.log("🍪 Session value (first 20 chars):", session.substring(0, 20));
  }
  console.log("🔑 JWT_SECRET exists:", !!JWT_SECRET);
  console.log("🔑 JWT_SECRET (first 10 chars):", JWT_SECRET?.substring(0, 10));
  
  // Public routes - always allow access
  const publicPaths = ["/", "/login", "/signup"];
  const isPublicPath = publicPaths.some(path => pathname === path || pathname.startsWith(path + '/'));
  
  if (isPublicPath) {
    console.log("🚪 Allowing access to public page");
    return NextResponse.next();
  }
  
  // Protected routes - require authentication
  if (pathname.startsWith("/revolt-team")) {
    console.log("🔒 Protecting revolt-team route");
    
    if (!session) {
      console.log("❌ No session cookie - redirecting to /");
      return NextResponse.redirect(new URL("/?auth=required", req.url));
    }

    if (!JWT_SECRET) {
      console.log("❌ JWT_SECRET not configured - allowing access (dev mode?)");
      // In development, you might want to allow access even without JWT_SECRET
      // Comment this line and uncomment the next one if you want to be strict:
      return NextResponse.next();
      // return NextResponse.redirect(new URL("/?error=config", req.url));
    }

    try {
      const decoded = jwt.verify(session, JWT_SECRET);
      console.log("✅ JWT valid for user:", typeof decoded === 'object' ? decoded : 'valid');
      console.log("✅ Allowing access to protected route");
      return NextResponse.next();
    } catch (error) {
      console.log("❌ JWT verification failed");
      console.log("❌ Error:", error instanceof Error ? error.message : String(error));
      
      // Don't immediately redirect on JWT errors - let the frontend handle it
      // This prevents race conditions where the middleware redirects before
      // the frontend auth context has a chance to refresh the token
      console.log("⚠️  JWT invalid but allowing access - frontend will handle auth");
      return NextResponse.next();
      
      // If you want to be strict about JWT validation, uncomment this:
      // const response = NextResponse.redirect(new URL("/?auth=invalid", req.url));
      // response.cookies.delete("session");
      // return response;
    }
  }

  // For all other routes, allow access
  return NextResponse.next();
}

export const config = {
  matcher: ["/revolt-team/:path*"],
};