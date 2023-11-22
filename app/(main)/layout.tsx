import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React, { PropsWithChildren } from 'react';

const MainLayout = ({ children }: PropsWithChildren) => {
    return (
        <>
            <Navbar isMainLayout={true} />
            {children}
            <Footer />
        </>
    );
};

export default MainLayout;
