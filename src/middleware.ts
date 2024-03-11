import { type NextRequest, NextResponse } from 'next/server'

export function middleware (req: NextRequest): NextResponse {
  //   if (req[INTERNALS].cookies.get("user")) {
  //     if (["/login", "/register"].includes(req.nextUrl.pathname))
  //       return NextResponse.rewrite(new URL("/", req.url));
  //     return NextResponse.next();
  //   }
  //   return NextResponse.redirect(new URL("/login", req.url));
  return NextResponse.next()
}

export const config = {
  matcher: ['/']
}
