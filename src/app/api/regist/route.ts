
import { registration } from '@/server/services/authService';
import { NextRequest, NextResponse } from 'next/server';



export async function POST(req: NextRequest) {
    const body: { email: string, password: string, securePass: string } = await req.json();

    try {
        await registration(body);
        return NextResponse.json({ success: 'Пользователь создан' }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}   