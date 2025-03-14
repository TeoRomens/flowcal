import { NextResponse } from "next/server";
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher(['/', '/signin(.*)', '/signup(.*)', '/book(.*)'])
const isAuthRoute = createRouteMatcher(['/signin(.*)', '/signup(.*)'])

export default clerkMiddleware(async (auth, request) => {
  const user = await auth()

  if (user.userId && isAuthRoute(request)) {
    const url = request.nextUrl.clone()
    url.pathname = '/events'
    return NextResponse.redirect(url)
  }

  if (!isPublicRoute(request)) {
    await auth.protect()
  }
})

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};