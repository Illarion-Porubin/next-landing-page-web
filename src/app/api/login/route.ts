
import { login } from '@/server/services/authService';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import { redirect } from 'next/navigation'

interface IResUser {
    accessToken: string;
    user: {
        id: string;
        isActivated: boolean;
        isAdmin: boolean;
    }
}


export async function POST(req: NextRequest, res: NextResponse) {
    const body: { email: string, password: string } = await req.json();

    try {
        const data: IResUser | false = await login(body);
        if (data) {
            if (data.user.isAdmin && data.user.isActivated) {
                cookies().set('accessToken', data.accessToken, {
                    httpOnly: false,
                    maxAge: 60 * 15 * 1000,
                    sameSite: 'strict',
                    path: "/"
                });
                return NextResponse.json({ ...data });
            }
            else{
                return NextResponse.json({ error: 'Ошибка входа' , status: 400 });
            }
        }
        else {
            return NextResponse.json({ error: 'Ошибка запроса', status: 400 });
        }
    } catch (error) {
        return NextResponse.json({ error: 'Internal server error', status: 500 });
    }
}   