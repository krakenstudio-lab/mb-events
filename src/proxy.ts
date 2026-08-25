import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const BYPASS_COOKIE = "mb_access";
const BYPASS_VALUE = "granted";
const PREVIEW_PARAM = "preview";
const MAX_AGE = 60 * 60 * 24 * 30; // 30 giorni

export function proxy(request: NextRequest) {
  // Interruttore di emergenza: impostare MAINTENANCE_MODE=false su Vercel
  // per disattivare il blocco senza toccare il codice.
  if (process.env.MAINTENANCE_MODE === "false") {
    return NextResponse.next();
  }

  const { pathname, searchParams } = request.nextUrl;

  if (pathname.startsWith("/wip")) {
    return NextResponse.next();
  }

  const secret = process.env.PREVIEW_SECRET;
  const previewParam = searchParams.get(PREVIEW_PARAM);

  // Link segreto: ?preview=CODICE sblocca il sito e imposta un cookie di accesso.
  if (secret && previewParam === secret) {
    const cleanUrl = request.nextUrl.clone();
    cleanUrl.searchParams.delete(PREVIEW_PARAM);

    const response = NextResponse.redirect(cleanUrl);
    response.cookies.set(BYPASS_COOKIE, BYPASS_VALUE, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: MAX_AGE,
      path: "/",
    });
    return response;
  }

  const hasAccess = request.cookies.get(BYPASS_COOKIE)?.value === BYPASS_VALUE;
  if (hasAccess) {
    return NextResponse.next();
  }

  const wipUrl = request.nextUrl.clone();
  wipUrl.pathname = "/wip";
  wipUrl.search = "";

  const response = NextResponse.rewrite(wipUrl);
  response.headers.set("X-Robots-Tag", "noindex, nofollow");
  return response;
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|images/).*)",
  ],
};
