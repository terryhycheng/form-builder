'use client';

import { Form } from '@prisma/client';
import { Copy, Eye, Pen } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { toast } from 'react-toastify';

const FormCard = ({ form }: { form: Form }) => {
    const onClickHandler = () => {
        navigator.clipboard.writeText(form.id);
        toast.success('The form ID has been copied to your clipboard.', { position: 'bottom-center' });
    };

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
            <div className="mt-auto text-sm flex border-t border-gray-200 divide-x divide-gray-200 dark:border-gray-700 dark:divide-gray-700">
                <button
                    className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    onClick={onClickHandler}
                >
                    <Copy className="w-4" />
                    Form ID
                </button>
                <a
                    className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 font-medium bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    href="#"
                >
                    <Eye className="w-5" />
                    View
                </a>
                <Link
                    href={`/form/${form.id}`}
                    className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 font-medium rounded-ee-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >
                    <Pen className="w-4" />
                    Edit
                </Link>
            </div>
        </div>
    );
};

export default FormCard;
