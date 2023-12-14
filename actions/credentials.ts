'use server';

import prisma from '@/lib/db';
import bcrypt from 'bcrypt';

export async function checkIsEmailUnique(email: string) {
    const user = await prisma.user.findFirst({
        where: {
            email,
        },
    });

    return user ? false : true;
}

export async function registerUserWithCredentials(email: string, password: string, name: string) {
    const salt = await bcrypt.genSalt(Number(process.env.SALT_ROUNDS) || 10);
    const encryptedPassword = await bcrypt.hash(password, salt);

    try {
        const user = await prisma.user.create({
            data: {
                email,
                name,
                password: encryptedPassword,
            },
        });
        return user;
    } catch (error) {
        throw new Error(`Error creating user: ${(error as Error).message}`);
    }
}
