
// // middleware.ts
// import { NextRequest, NextResponse } from 'next/server';

// export function middleware(request: NextRequest) {
//   const session = request.cookies.get('session'); // ✅

//   if (!session && request.nextUrl.pathname.startsWith('/revolt-team')) {
//     return NextResponse.redirect(new URL('/', request.url)); // ✅ safer redirect
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: ['/revolt-team/:path*'], // ✅ catches /revolt-team and subpages
// };



// middleware.ts
import { NextResponse } from 'next/server';

export function middleware() {
  // const session = request.cookies.get('session'); // ✅

  // if (!session && request.nextUrl.pathname.startsWith('/revolt-team')) {
  //   return NextResponse.redirect(new URL('/', request.url)); // ✅ safer redirect
  // }

  return NextResponse.next();
}

export const config = {
  matcher: ['/revolt-team/:path*'], // ✅ catches /revolt-team and subpages
};


