import type { Metadata } from 'next';
import { cn } from '@/lib/utils';
import { Inter as FontSans } from 'next/font/google';
import './globals.css';
import ToastifyWrapper from '@/components/ToastifyWrapper';
import { ThemeProvider } from '@/components/ThemeProvider';
import SessionProvider from '@/components/SessionProvider';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/authOptions';
import { FieldContextProvider } from '@/contexts/FieldContext';

export const fontSans = FontSans({
    subsets: ['latin'],
    variable: '--font-sans',
});

export const metadata: Metadata = {
    title: 'Form Builder',
    description: 'Form Builder for Developers',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
    const session = await getServerSession(authOptions);

    return (
        <html lang="en" className="light" style={{ colorScheme: 'light' }}>
            <body className={cn('min-h-screen bg-background font-sans antialiased flex flex-col', fontSans.variable)}>
                <SessionProvider session={session}>
                    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
                        <ToastifyWrapper />
                        <FieldContextProvider>
                            <main className='w-full min-h-screen'>{children}</main>
                        </FieldContextProvider>
                    </ThemeProvider>
                </SessionProvider>
            </body>
        </html>
    );
}
