import { NextResponse } from "next/server";

export function proxy(request) {
  const requestHeaders = new Headers(request.headers);
  const locale = request.nextUrl.pathname === "/en" || request.nextUrl.pathname.startsWith("/en/")
    ? "en"
    : "fr";

  requestHeaders.set("x-portfolio-locale", locale);

  return NextResponse.next({
    request: { headers: requestHeaders },
  });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|projects/|videos/).*)"],
};
