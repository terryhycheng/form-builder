'use client';

import React from 'react';
import { PlusCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';

const CreateFormButton = () => {
    const router = useRouter();
    const onClickHandler = () => {
        // 1. Create a new UUID
        const uuid = self.crypto.randomUUID();
        // 2. Check if the form with this UUID already exists
        // 3. If yes, generate a new UUID again
        // 4. If not, create a new form with this UUID
        // 5. Redirect to the form page
        router.push(`/form/${uuid}`);
    };

    return (
        <button
            className="group flex flex-col justify-center items-center min-h-[180px] bg-white hover:bg-gray-50 dark:hover:bg-slate-900/50 border-2 border-dashed border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7] text-lg font-medium transition-all"
            onClick={onClickHandler}
        >
            <PlusCircle className="w-6 h-6 mb-1 text-slate-700" />
            Create Form
            <span className="text-xs text-gray-400 my-1">Select to create a new form</span>
        </button>
    );
};

export default CreateFormButton;
