
// middleware.ts
import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {

  const session = request.cookies.get('session'); // ✅
  if (!session && request.nextUrl.pathname.startsWith('/revolt-team')) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/revolt-team/:path*'],
};

