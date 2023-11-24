import { GetFormById } from '@/actions/form';
import Builder from '@/components/Builder';
import { authOptions } from '@/lib/authOptions';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import React from 'react';

const Page = async ({ params }: { params: { id: string } }) => {
    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
        redirect('/login');
    }

    const form = await GetFormById(params.id);

    if (!form) {
        redirect('/dashboard');
    }

    return (
        <div className="container">
            <Builder form={form} />
        </div>
    );
};

export default Page;
