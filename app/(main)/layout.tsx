import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import PageNav from '@/components/PageNav';
import { Toaster } from '@/components/ui/toaster';
import React, { PropsWithChildren } from 'react';

const MainLayout = ({ children }: PropsWithChildren) => {
    return (
        <>
            <PageNav />
            <main className='min-h-screen'>
                {children}
            </main>
            <Footer />
            <Toaster />
        </>
    );
};

export default MainLayout;
