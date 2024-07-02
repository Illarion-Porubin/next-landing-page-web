

import { checkMe } from '@/server/services/authService';
import { NextRequest, NextResponse } from 'next/server';


export async function POST(req: NextRequest) {
    const token = await req.json()
    try {
        const res:boolean | undefined = await checkMe(token);   
        if(res) {
            return NextResponse.json({ message: res, status: 200 });
        }
        else {
            return NextResponse.json({ message: res, status: 400 });
        }
    } catch (error) {
        return NextResponse.json({ message: 'Internal server error', status: 500 });
    }
}   