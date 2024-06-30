
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';



export async function POST(req: NextRequest) {
    const body: { email: string, password: string, securePass: string } = await req.json();
    try {
        const res = await authMe(body);
        if (res) {
            cookies().set('accessToken', res.accessToken, {
                httpOnly: false,
                maxAge: 60 * 2, 
                sameSite: 'strict',
                path: "http://localhost:3000/login"
            });
        }
        else {
            return NextResponse.json({ error: 'Ошибка запроса' }, { status: 400 });
        }
        return NextResponse.json({ success: 'Пользователь создан' }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}   