import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Toaster } from '@/components/ui/toaster';
import React, { PropsWithChildren } from 'react';

const MainLayout = ({ children }: PropsWithChildren) => {
    return (
        <>
            <Navbar isMainLayout={true} />
            {children}
            <Footer />
            <Toaster />
        </>
    );
};

export default MainLayout;
