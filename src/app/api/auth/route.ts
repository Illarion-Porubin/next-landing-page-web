
import { registration } from '@/server/services/userService';
import { serialize } from 'cookie';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';



export async function POST(req: NextRequest, res: NextResponse ) {
    const body: {email: string, password: string, securePass: string} = await req.json();
    try {
        const refreshToken = await registration(body);
        if(refreshToken){
            console.log(2, 'body');
            cookies().set('token', serialize('refreshToken', "a3asd565as4d656asd4", {
                httpOnly: true,
                // maxAge: 60 * 60 * 24 * 7, // 1 week
                maxAge: 60 * 2, // 2 min
                sameSite: 'strict',
                path: '/'
            }));
        }
        return NextResponse.json(refreshToken) 
        // return NextResponse.json({ status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}