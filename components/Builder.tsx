'use client';

import React from 'react';

import { type BasicField, FieldType } from '../types/fields';
import { Button } from '@/components/ui/button';
import Field from './Field';
import { clsx } from 'clsx';
import { Input } from './ui/input';
import slugify from 'slugify';
import { toast } from 'react-toastify';
import { ChevronLeft, Eye, EyeOff, Rocket, Save } from 'lucide-react';
import { Form } from '@prisma/client';
import { useRouter } from 'next/navigation';

interface BuilderProps {
    form: Form | null
}

const Builder = ({ form } : BuilderProps) => {
    const [fields, setFields] = React.useState<BasicField[]>([]);
    const [isPreview, setIsPreview] = React.useState(false);

    const router = useRouter()

    const createField = (type: FieldType) => {
        setFields((prev) => [
            ...prev,
            {
                id: crypto.randomUUID(),
                type,
                label: '',
                placeholder: '',
            },
        ]);
    };

    return (
        <>
            <div className='w-full my-6 flex justify-start items-start gap-6'>
                <Button size={'icon'} variant={'secondary'} onClick={() => router.push('/dashboard')}>
                    <ChevronLeft className='w-4 h-4'/>
                </Button>
                <div>
                    <h2 className='text-2xl '>{form?.name}</h2>
                    <p className='text-md my-2 text-gray-600 dark:text-slate-500'>{form?.description}</p>
                </div>
            </div>
            <section className="mb-4 flex justify-end items-center gap-2">
                <Button
                    variant={'outline'}
                    // className={clsx('border border-slate-800', {
                    //     'bg-white text-gray-300 border-gray-300 hover:bg-gray-100': isPreview,
                    // })}
                    onClick={() => setIsPreview((prev) => !prev)}
                >
                    {isPreview ? <EyeOff className='w-4 h-4 mr-2' /> : <Eye className='w-4 h-4 mr-2'/>}
                    Preview
                </Button>
                <Button onClick={() => toast('Hello')}>
                    <Save className='w-4 h-4 mr-2'/>
                    Save
                </Button>
                <Button variant={'primary'}>
                    <Rocket className='w-4 h-4 mr-2' />
                    Publish
                </Button>
            </section>
            <section className="flex gap-4">
                <div className="border flex-1 p-10 flex">
                    <form action={() => {}} className="flex-1 flex justify-center items-center flex-col">
                        {!fields.length && <p>There is no field at the moment :)</p>}
                        {isPreview &&
                            !!fields.length &&
                            fields.map((field) => (
                                <div key={field.id} className="my-2 w-full">
                                    <label htmlFor={slugify(field.label)}>{field.label}</label>
                                    <Input
                                        type={field.type}
                                        id={slugify(field.label)}
                                        name={slugify(field.label)}
                                        placeholder={field.placeholder}
                                    />
                                </div>
                            ))}
                        {!isPreview &&
                            fields.map((field) => (
                                <div key={field.id} className="border rounded-md mt-4 overflow-hidden w-full">
                                    <Field field={field} setFields={setFields} />
                                </div>
                            ))}
                    </form>
                </div>
                <div className="border w-[30%] p-6">
                    <div className="grid grid-cols-2 gap-4">
                        <button className="border p-8 rounded-md" onClick={() => createField('text')}>
                            Text field
                        </button>
                        <button className="border p-8 rounded-md" onClick={() => createField('number')}>
                            Number field
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Builder;
