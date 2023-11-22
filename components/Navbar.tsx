'use client';

import Link from 'next/link';
import React from 'react';
import { Button } from './ui/button';
import { ModeToggle } from './ThemeToggle';
import { useRouter } from 'next/navigation';
import { signOut, useSession } from 'next-auth/react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { LogOutIcon } from 'lucide-react';

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
                            <>
                                <div className="text-white flex gap-4 justify-center items-center">
                                    <p>{session.data.user.name}</p>
                                    <Avatar>
                                        <AvatarImage src={session.data.user.image} alt="@shadcn" />
                                        <AvatarFallback className="bg-slate-700">
                                            {session.data.user.name?.substring(0, 1)}
                                        </AvatarFallback>
                                    </Avatar>
                                </div>
                                <Button size="icon" onClick={() => signOut()}>
                                    <LogOutIcon className="w-5 hover:text-blue-400" />
                                </Button>
                            </>
                        ))}
                    <ModeToggle />
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
