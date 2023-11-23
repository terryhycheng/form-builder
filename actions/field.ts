'use server';

import prisma from '@/lib/db';
import { Field } from '@prisma/client';

export async function CreateManyFields(fields: Field[], formId: string) {
    const data = fields.map((field) => {
        return { ...field, formId };
    });
    // ({ fieldId, type, label, placeholder, required, fileType, max, min, pattern, value, name }) => ({
    //     fieldId,
    //     type,
    //     label,
    //     placeholder,
    //     formId,
    //     fileType,

    //     max,
    //     min,
    //     name,
    //     required,
    //     pattern,
    //     value,
    // })
    // );

    try {
        data.forEach(async (input) => {
            const field = await prisma.field.findUnique({
                where: {
                    id: input.id,
                },
            });

            if (field) {
                await prisma.field.update({
                    where: {
                        id: input.id,
                    },
                    data: {
                        ...input,
                    },
                });
            } else {
                await prisma.field.create({
                    data: {
                        ...input,
                    },
                });
            }
        });
    } catch (error) {
        throw new Error((error as Error).message);
    }
}
