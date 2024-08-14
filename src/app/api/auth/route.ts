"use server"

import { checkMe, login, registration } from '@/server/services/authService';
import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
// import { redirect } from 'next/navigation' почему не работает?


export async function POST(req: NextRequest,) {
    const request = await req.json();

    switch (request.action) {
        case 'check':
            const accessToken = req.cookies.get('accessToken')?.value;
            const refreshToken = req.cookies.get('refreshToken')?.value;

            try {
                if(!accessToken && refreshToken){
                    const check = await checkMe(refreshToken);
                    if(check && check.accessToken && check.refreshToken){
                        cookies().set('accessToken', check.accessToken, {
                            httpOnly: true, 
                            maxAge: 60 * 10,
                            sameSite: 'strict',
                            path: "/"
                        });
                        cookies().set('refreshToken', check.refreshToken, {
                            httpOnly: true, 
                            maxAge: 60 * 30,
                            sameSite: 'strict',
                            path: "/"
                        });
                        return NextResponse.json({ ...check });
                    }
                }
                else if(!refreshToken) {
                    return NextResponse.json(false); 
                }
                return NextResponse.json({ message: "Verification completed" });
            } catch (error) {
                return NextResponse.json(false); 
            }

        case 'login':
            const data = await login(request);
            if (data && data.accessToken && data.refreshToken) {
                cookies().set('accessToken', data.accessToken, {
                    httpOnly: true, 
                    maxAge: 60 * 15,
                    sameSite: 'strict',
                    path: "/"
                });
                cookies().set('refreshToken', data.refreshToken, {
                    httpOnly: true, 
                    maxAge: 60 * 40,
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