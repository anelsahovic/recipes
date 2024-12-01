import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token =
    request.cookies.get('next-auth.session-token') ||
    request.cookies.get('__Secure-next-auth.session-token');

  console.log('Token:', token);

  if (!token) {
    const signInUrl = new URL('/api/auth/signin', request.url); // Redirect to NextAuth sign-in.
    signInUrl.searchParams.set('callbackUrl', request.url); // Ensure the user is redirected back after signing in.
    return NextResponse.redirect(signInUrl);
  }

  return NextResponse.next();
}

// Match only protected routes
export const config = {
  matcher: ['/favorites', '/recipes/:path*'],
};
