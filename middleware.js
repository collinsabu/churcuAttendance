import { NextResponse } from 'next/server'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
 
// This function can be marked `async` if using `await` inside
export async function middleware(request) {
 


  const supabase = createServerComponentClient({ cookies })
  const { data } = await supabase.auth.getSession()

  if (!data.session) {
    
    return  NextResponse.redirect(
      new URL('/login', request.url)
    )
  }

  return NextResponse.next()
 
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/', '/attendance']
}