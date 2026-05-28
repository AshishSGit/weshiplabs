import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Canonical host is www.weshiplabs.com.
  // Namecheap also handles bare apex → www via a 301 URL redirect record,
  // so this branch is defensive — only fires if traffic ever reaches Railway
  // directly on the bare apex hostname.
  const host = request.headers.get("host");
  if (host === "weshiplabs.com") {
    const target = `https://www.weshiplabs.com${request.nextUrl.pathname}${request.nextUrl.search}`;
    return NextResponse.redirect(target, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|html|txt|xml)$).*)",
  ],
};
