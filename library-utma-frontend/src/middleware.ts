import { jwtVerify } from 'jose';
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'


export default async function middleware(request: NextRequest) {

    const token = request.cookies.get('AuthToken')?.value;

    if (!token) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    try {
        const secretKey = new TextEncoder().encode(process.env.NEXT_PUBLIC_JWT_SECRET!);

        const { payload } = await jwtVerify(token, secretKey);

        const requestHeaders = new Headers(request.headers);

        const name = payload.name as string;

        requestHeaders.set('name', name);

        return NextResponse.next({
            request: {
                headers: requestHeaders,
            },
        });
    } catch (error) {
        console.error('Token no válido', error);
        return NextResponse.redirect(new URL('/login', request.url));
    }
}

export const config = {
    matcher: '/auth/:home*',
}
