import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const cookie = request.cookies.get("accessToken");

  const checkAuth = async (token: string) => {
    const response = await fetch("http://localhost:3000/api/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token
      }),
    });
    if (response.status !== 200) {
      return NextResponse.redirect(new URL('/', request.url));
    }
  }

  if (cookie?.value) {
    checkAuth(cookie?.value)
  }
  else {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/user', '/admin/content', '/admin/gallery', '/admin/slider',],
};
