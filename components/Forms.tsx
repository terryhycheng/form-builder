import React, { Suspense } from 'react';
import CreateFormBtn from './CreateFormButton';
import { GetForms } from '@/actions/form';
import { Skeleton } from './ui/skeleton';
import { Form } from '@prisma/client';
import Link from 'next/link';
import { Copy, Eye, Pen } from 'lucide-react';
import FormCard from './FormCard';

const Forms = () => {
    return (
        <div className="container px-4 py-2 sm:px-6 lg:px-8 mx-auto">
            <div className="border-b-2 border-slate-100 dark:border-slate-900 pb-3">
                <h3 className="text-2xl font-semibold mb-2">My Forms</h3>
                <p className="text-slate-400 text-sm">Below is a list of all your forms.</p>
            </div>

            <div className="container px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <CreateFormBtn />
                    <Suspense
                        fallback={[1, 2, 3, 4].map((el) => (
                            <FormCardSkeleton key={el} />
                        ))}
                    >
                        <FormCards />
                    </Suspense>
                </div>
            </div>
        </div>
    );
};

async function FormCards() {
    const forms = await GetForms();
    return (
        <>
            {forms.length == 0 && (
                <div className="grid items-center text-center">
                    <p className="text-gray-400/80 dark:text-slate-600">You have not yet created any forms.</p>
                </div>
            )}
            {forms.map((form) => (
                <FormCard key={form.id} form={form} />
            ))}
        </>
    );
}

function FormCardSkeleton() {
    return <Skeleton className="border-2 border-primary-/20 h-[190px] w-full" />;
}

export default Forms;
