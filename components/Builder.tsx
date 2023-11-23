'use client';

import React, { useEffect } from 'react';

import { Button } from '@/components/ui/button';
import FieldComponent from './Field';
import { toast } from 'react-toastify';
import { ChevronLeft, Eye, EyeOff, Rocket, Save } from 'lucide-react';
import { $Enums, Field, Form } from '@prisma/client';
import { useRouter } from 'next/navigation';
import { FieldContext } from '@/contexts/FieldContext';
import PreviewComponent from './PreviewModal';
import { CreateManyFields } from '@/actions/field';

interface FormWithFields extends Form {
    fields: Field[];
}

interface BuilderProps {
    form: FormWithFields;
}

const Builder = ({ form }: BuilderProps) => {
    const { fields, setFields } = React.useContext(FieldContext);

    useEffect(() => {
        if (form.fields) {
            setFields(form.fields);
        }
    }, []);

    const router = useRouter();

    const createField = (type: $Enums.FieldType) => {
        setFields((prev) => [
            ...prev,
            {
                id: crypto.randomUUID(),
                fieldId: '',
                type: type,
                label: '',
                placeholder: '',
                isRequired: false,
                formId: '',
                fileType: null,
                options: null,
                createdAt: new Date(),
                updatedAt: new Date(),
                max: null,
                min: null,
                name: '',
                required: false,
                pattern: null,
                value: null,
            },
        ]);
    };

    const saveFormHandler = async () => {
        try {
            await CreateManyFields(fields, form.id);
            toast.success('Your form has successfully saved.');
        } catch (error) {
            console.error((error as Error).message);
            toast.error('Something went wrong, please try again.');
        }
    };

    return (
        <>
            <div className="w-full my-6 flex justify-start items-start gap-6">
                <Button size={'icon'} variant={'secondary'} onClick={() => router.push('/dashboard')}>
                    <ChevronLeft className="w-4 h-4" />
                </Button>
                <div>
                    <h2 className="text-2xl ">{form?.name}</h2>
                    <p className="text-md my-2 text-gray-600 dark:text-slate-500">{form?.description}</p>
                </div>
            </div>
            <section className="mb-4 flex justify-end items-center gap-2">
                <PreviewComponent />
                <Button onClick={saveFormHandler}>
                    <Save className="w-4 h-4 mr-2" />
                    Save
                </Button>
                <Button variant={'primary'}>
                    <Rocket className="w-4 h-4 mr-2" />
                    Publish
                </Button>
            </section>
            <section className="flex gap-4">
                <div className="border flex-1 p-10 flex">
                    <form action={() => {}} className="flex-1 flex justify-center items-center flex-col">
                        {!fields.length && <p>There is no field at the moment :)</p>}
                        {fields.map((field) => (
                            <div key={field.id} className="border rounded-md mt-4 overflow-hidden w-full">
                                <FieldComponent field={field} setFields={setFields} />
                            </div>
                        ))}
                    </form>
                </div>
                <div className="border w-[30%] p-6">
                    <div className="grid grid-cols-2 gap-4">
                        <button className="border p-8 rounded-md" onClick={() => createField('TEXT')}>
                            Text field
                        </button>
                        <button className="border p-8 rounded-md" onClick={() => createField('NUMBER')}>
                            Number field
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Builder;
