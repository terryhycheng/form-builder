'use client';

import React from 'react';

import { type BasicField, FieldType } from '../types/fields';
import { Button } from '@/components/ui/button';
import Field from './Field';
import { clsx } from 'clsx';
import { Input } from './ui/input';
import slugify from 'slugify';
import { toast } from 'react-toastify';

const Builder = () => {
    const [fields, setFields] = React.useState<BasicField[]>([]);
    const [isPreview, setIsPreview] = React.useState(false);

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
            <section className="my-4 flex">
                <div className="space-x-2">
                    <Button
                        className={clsx('border border-slate-800', {
                            'bg-white text-gray-300 border-gray-300 hover:bg-gray-100': isPreview,
                        })}
                        onClick={() => setIsPreview((prev) => !prev)}
                    >
                        Preview
                    </Button>
                    <Button onClick={() => toast('Hello')}>Save</Button>
                </div>
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
