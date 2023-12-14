import prisma from '@/lib/db';
import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';

export async function POST(request: Request) {
    const body = await request.json();

    if (!body?.email || !body?.password)
        return NextResponse.json({ user: null, message: 'missing credential' }, { status: 400 });

    const user = await prisma.user.findFirst({
        where: {
            email: body.email,
        },
    });

    if (!user?.password) return NextResponse.json({ user: null, message: 'no password' }, { status: 400 });

    const match = await bcrypt.compare(body.password, user.password);

    if (!match) {
        return NextResponse.json({ user: null, message: 'invalid credentials' }, { status: 401 });
    } else {
        return NextResponse.json({ user, message: 'successfully got user' });
    }
}
