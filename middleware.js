import { NextResponse } from 'next/server'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

// This function can be marked `async` if using `await` inside
export async function middleware(request) {
  const supabase = createServerComponentClient({ cookies })
  const { data } = await supabase.auth.getSession()

  // Public routes that are accessible without authentication
  const publicRoutes = ['/firsttimmer', '/thanks', '/login']

  // Check if the request URL is a public route
  if (publicRoutes.includes(new URL(request.url).pathname)) {
    return NextResponse.next()
  }

  // If the user is not authenticated and trying to access a protected route
  if (!data.session) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/', 
    '/attendance',
    '/firsttimerlist', 
    '/firsttimmer', 
    '/thanks', 
    '/login'
  ],
}
