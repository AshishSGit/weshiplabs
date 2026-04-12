import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Redirect www to non-www (SEO: single canonical domain)
  const host = request.headers.get("host");
  if (host?.startsWith("www.")) {
    const targetHost = host.replace(/^www\./, "");
    const target = `https://${targetHost}${request.nextUrl.pathname}${request.nextUrl.search}`;
    return NextResponse.redirect(target, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|html|txt|xml)$).*)",
  ],
};
