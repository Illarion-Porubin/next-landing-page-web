

import { checkMe, login, registration } from '@/server/services/authService';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';


export async function POST(req: NextRequest) {
    const request = await req.json();

    switch (request.action) {
        case 'check':
            try {
                const check = await checkMe(request);
                return NextResponse.json({ check });
            } catch (error) {
                return NextResponse.json({ error: 'Internal server error', status: 500 });
            }

        case 'login':
            const data = await login(request);
            if (data && data.accessToken) {
                cookies().set('accessToken', data.accessToken, {
                    httpOnly: false,
                    maxAge: 60 * 15,
                    sameSite: 'strict',
                    path: "/"
                });
                return NextResponse.json({ ...data });
            }
            else {
                return NextResponse.json({ error: 'Ошибка входа', status: 400 });
            }

        case 'regist':
            try {
                const data = await registration(request);
                if (data) {
                    return NextResponse.json({ success: 'Success', status: 200 });
                }
                return NextResponse.json({ success: 'Error registration', status: 400 });
            } catch (error) {
                return NextResponse.json({ error: 'Internal server error', status: 500 });
            }
        default:
            return NextResponse.json({ error: 'Invalid action', status: 400 });
    }
}   