'use server';

import { authOptions } from '@/lib/authOptions';
import prisma from '@/lib/db';
import { formSchema, formSchemaType } from '@/schemas/form';
import { getServerSession } from 'next-auth';
import { revalidatePath } from 'next/cache';

class UserNotFoundErr extends Error {}

export async function CreateForm(data: formSchemaType) {
    const session = await getServerSession(authOptions);

    const validation = formSchema.safeParse(data);
    if (!validation.success) {
        throw new Error('form not valid');
    }

    if (!session?.user) {
        throw new UserNotFoundErr();
    }

    const user = session?.user;

    const { name, description } = data;

    const form = await prisma.form.create({
        data: {
            userId: user.id,
            name,
            description: description ?? '',
        },
    });

    if (!form) {
        throw new Error('something went wrong');
    }
    revalidatePath('/dashboard');
    return form.id;
}

export async function GetForms() {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
        throw new UserNotFoundErr();
    }

    const user = session.user;

    return await prisma.form.findMany({
        where: {
            userId: user.id,
        },
        orderBy: {
            createdAt: 'desc',
        },
    });
}

export async function GetFormById(id: string) {
    return await prisma.form.findUnique({
        where: {
            id,
        },
        include: {
            fields: { orderBy: { order: 'asc' } },
        },
    });
}
