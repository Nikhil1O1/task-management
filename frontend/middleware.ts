// import { redirectToSignIn } from "@clerk/nextjs";
import { redirectToSignIn } from "@clerk/nextjs";
import { authMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export default authMiddleware({
  publicRoutes: ['/'],
  afterAuth(auth, req){
    if(auth.userId && auth.isPublicRoute){
      let path = '/select-org';
      if(auth.orgId){
        path = `/organization/${auth.orgId}`;
      }
      
      const orgSelection = new URL(path, req.url);
      console.log("orgselection url is coming as :-" + orgSelection)
      return NextResponse.redirect(orgSelection);
    }
    if(!auth.userId && !auth.isPublicRoute){
      return redirectToSignIn({returnBackUrl:req.url})
    }

    if(auth.userId && !auth.orgId && req.nextUrl.pathname !== '/select-org'){
      const orgSelection = new URL("/select-org", req.url);
      return NextResponse.redirect(orgSelection);
    }
  }
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};