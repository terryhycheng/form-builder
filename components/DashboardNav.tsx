'use client';

import { dashboardConfig } from '@/config/dashboard';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname, useSelectedLayoutSegment } from 'next/navigation';
import React from 'react';

const DashboardNav = () => {
    const { mainNav: items } = dashboardConfig;
    const path = usePathname();

    return (
        <nav
            className="sticky -top-px bg-white text-sm font-medium text-black ring-1 ring-gray-900 ring-opacity-5 border-t shadow-sm shadow-gray-100 pt-6 md:pb-6 -mt-px dark:bg-slate-900 dark:border-gray-800 dark:shadow-slate-700/[.7]"
            aria-label="Jump links"
        >
            <div className="container snap-x w-full flex items-center overflow-x-auto px-4 sm:px-6 lg:px-8 pb-4 md:pb-0 mx-auto [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-slate-700 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500 dark:bg-slate-900">
                {items.map((item: any) => (
                    <div key={crypto.randomUUID()} className="snap-center shrink-0 pe-5 sm:pe-8 sm:last-pe-0">
                        <Link
                            href={item.href}
                            className={cn(
                                'inline-flex items-center gap-x-2 hover:text-black dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600',
                                item.href.startsWith(`${path}`) ? 'text-black font-semibold' : 'text-gray-800'
                            )}
                        >
                            {item.title}
                        </Link>
                    </div>
                ))}
            </div>
        </nav>
    );
};

export default DashboardNav;
