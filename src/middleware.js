import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {
    console.log(request.nextUrl.pathname)
    const dummyAdmin = {
        role:"admin",
        email:"test@admin.com"
    }
    const path = request.nextUrl.pathname.startsWith("/about")

    if(path && dummyAdmin.role === "admin"){
        return NextResponse.next()
    }
  return NextResponse.redirect(new URL('/', request.url)) //we will use rewrite for navigating from which we have used in react
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/about/:path*',
}