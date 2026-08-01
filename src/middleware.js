import { NextResponse } from "next/server";

export function middleware(request) {
  const token = request.cookies.get("admin_token")?.value;
  const isDashboardRoute = request.nextUrl.pathname.startsWith(
    "/admin/dashboard",
  );

  if (isDashboardRoute && !token) {
    return NextResponse.redirect(
      new URL("/admin/login", request.url),
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/dashboard/:path*"],
};
