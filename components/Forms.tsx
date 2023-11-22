import React, { Suspense } from 'react';
import CreateFormButton from './CreateFormButton';
import CreateFormBtn from './CreateFormButton_rg';
import { GetForms } from '@/actions/form';
import { Skeleton } from './ui/skeleton';
import { Form } from '@prisma/client';

const Forms = () => {
    return (
        <div className="container px-4 py-2 sm:px-6 lg:px-8 mx-auto">
            <div className="border-b-2 border-slate-100 pb-3">
                <h3 className="text-2xl font-semibold mb-2">My Forms</h3>
                <p className="text-slate-400 text-sm">Below is a list of all your forms.</p>
            </div>

            <div className="container px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <CreateFormBtn />
                    {/* <CreateFormButton /> */}
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
        {forms.map((form) => (
            <FormCard key={form.id} form={form} />
        ))}
        </>
    );
}

function FormCard({ form }: { form: Form }) {
    return (
        <div className="group flex flex-col min-h-[180px] bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
            <div className="p-4 md:p-6">
                <span className="block mb-1 text-xs font-semibold uppercase text-blue-600 dark:text-blue-500">
                    Test
                </span>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:hover:text-white">
                    {form.name}
                </h3>
                <p className="mt-3 text-gray-500">{form.description}</p>
            </div>
            <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-gray-700 dark:divide-gray-700">
                <a
                    className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    href="#"
                >
                    View Form
                </a>
                <a
                    className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    href="#"
                >
                    Edit
                </a>
            </div>
        </div>
    )
}

function FormCardSkeleton() {
    return <Skeleton className="border-2 border-primary-/20 h-[190px] w-full" />;
  }

export default Forms;
