'use server';

import prisma from '@/lib/db';
import bcrypt from 'bcrypt';

export async function registerUserWithCredentials(email: string, password: string) {
    const salt = await bcrypt.genSalt(Number(process.env.SALT_ROUNDS) || 10);
    const encryptedPassword = await bcrypt.hash(password, salt);
    const user = await prisma.user.create({
        data: {
            email,
            password: encryptedPassword,
        },
    });
    return user;
}
