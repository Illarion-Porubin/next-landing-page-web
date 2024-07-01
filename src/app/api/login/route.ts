
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


export async function POST(req: NextRequest) {
    const body: { email: string, password: string } = await req.json();

    try {
        const res: IResUser | false = await login(body);
        if (res) {
            if (res.user.isAdmin && res.user.isActivated) {
                cookies().set('accessToken', res.accessToken, {
                    httpOnly: false,
                    maxAge: 60 * 2,
                    sameSite: 'strict',
                    path: "/"
                });
                return NextResponse.json({ ...res });
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