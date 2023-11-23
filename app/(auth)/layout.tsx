import Navbar from '@/components/Navbar';
import { authOptions } from '@/lib/authOptions';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import React, { PropsWithChildren } from 'react';

const AuthLayout = async ({ children }: PropsWithChildren) => {
    const session = await getServerSession(authOptions);

    if (session && session.user) {
        redirect('/dashboard');
    }
    return (
        <>
            <Navbar />
            {children}
        </>
    );
};

export default AuthLayout;
