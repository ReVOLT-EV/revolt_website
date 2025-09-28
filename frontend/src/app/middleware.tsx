
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
  console.log("🔍 Middleware running for:", req.nextUrl.pathname);
  
  const session = req.cookies.get("session")?.value;
  console.log("🍪 Session cookie exists:", !!session);
  console.log("🍪 Session value (first 20 chars):", session?.substring(0, 20));
  console.log("🔑 JWT_SECRET exists:", !!JWT_SECRET);
  console.log("🔑 JWT_SECRET length:", JWT_SECRET?.length);
  console.log("🍪 All cookies:", req.cookies.getAll().map(c => c.name));
  
  // Don't protect login/signup pages to avoid redirect loops
  if (req.nextUrl.pathname === "/login" ||
      req.nextUrl.pathname === "/signup" ||
      req.nextUrl.pathname === "/") {
    console.log("🚪 Allowing access to public page");
    return NextResponse.next();
  }
  
  // Protect /revolt-team routes
  if (req.nextUrl.pathname.startsWith("/revolt-team")) {
    console.log("🔒 Protecting revolt-team route");
    
    if (!session) {
      console.log("❌ No session cookie - redirecting to /");
      return NextResponse.redirect(new URL("/", req.url));
    }

    try {
      const decoded = jwt.verify(session, JWT_SECRET);
      console.log("✅ JWT valid for user:", decoded);
      console.log("✅ Allowing access to protected route");
    } catch (error) {
      console.log("❌ JWT verification failed");
      console.log("❌ Error type:", typeof error);
      console.log("❌ Full error:", error);
      
      // Safely access error properties
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const err = error as any;
      console.log("❌ Error message:", err.message || 'No message available');
      console.log("❌ Error name:", err.name || 'No name available');
      
      if (error instanceof Error) {
        console.log("❌ Error stack:", error.stack);
      }
      
      console.log("❌ Session token (first 50 chars):", session?.substring(0, 50));
      console.log("❌ JWT_SECRET (first 10 chars):", JWT_SECRET?.substring(0, 10));
      console.log("❌ Redirecting to /");
      return NextResponse.redirect(new URL("/", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/revolt-team/:path*"],
};


