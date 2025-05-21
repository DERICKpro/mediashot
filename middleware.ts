import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

const isPublicRoute = createRouteMatcher([
  "/sign-in",
  "/sign-up",
  "/",
  "/home",
]);

const isPublicApiRoute = createRouteMatcher([
  "/api/videos"
]);

export default clerkMiddleware((auth, req)=>{
  const {userId} =  auth();
  const currentUrl = new URL(req.url);
  const isAccessingDashboard = currentUrl.pathname === "/home";
  const isApiRequest = currentUrl.pathname.startsWith("/api");

  // user is loggedIn and trying to access signnup/signin page so reqirecting to /home page
  if(userId && isPublicRoute(req) && !isAccessingDashboard){
    return NextResponse.redirect(new URL("/home", req.url));
  }

  // user not logged in and trying to access protected route
  if(!userId){
    if(!isPublicRoute(req) && !isPublicApiRoute(req)){
      return NextResponse.redirect(new URL("/sign-in", req.url));
    }
  }

  // if the request is for a protected API and the user is not logged in
  if(isApiRequest && !isPublicApiRoute(req)){
    return NextResponse.redirect(new URL("/sign-in", req.url));
  }
  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],

  // matcher: [
  //   // Skip Next.js internals and all static files, unless found in search params
  //   '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
  //   // Always run for API routes
  //   '/(api|trpc)(.*)',
  // ],
};

