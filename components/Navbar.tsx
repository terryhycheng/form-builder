'use client';

import Link from 'next/link';
import React from 'react';
import { Button } from './ui/button';
import { ModeToggle } from './ThemeToggle';
import { useRouter } from 'next/navigation';
import { signOut, useSession } from 'next-auth/react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { LogOutIcon } from 'lucide-react';
import LoggedInUser from './LoggedInUser';

const Navbar = ({ isMainLayout = false }: { isMainLayout?: boolean }) => {
    const router = useRouter();
    const session = useSession();

    return (
        <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-gray-900 border-b border-gray-700 text-sm py-2.5 sm:py-4">
            <nav
                className="container flex justify-between items-center w-full mx-auto px-4 sm:px-6 lg:px-8"
                aria-label="Global"
            >
                <div className="">
                    <Link
                        href="/"
                        className="flex-none text-xl font-semibold text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                        aria-label="Form Builder"
                    >
                        Form Builder
                    </Link>
                </div>

                <div className="flex justify-end items-center gap-3">
                    {isMainLayout &&
                        (!session?.data?.user ? (
                            <Button className="bg-blue-600 hover:bg-blue-700" onClick={() => router.push('/login')}>
                                Login
                            </Button>
                        ) : (
                            <LoggedInUser user={session?.data?.user} />
                        ))}
                    <ModeToggle />
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
