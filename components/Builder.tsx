'use client';

import React, { useEffect } from 'react';

import { Button } from '@/components/ui/button';
import FieldComponent from './Field';
import { toast } from 'react-toastify';
import { Binary, CheckSquare2, ChevronDown, ChevronLeft, CircleDot, Heading2, Image, Rocket, Save, Text, TextSelect, Video, WholeWord, Image as ImageIcon, LayoutPanelTop } from 'lucide-react';
import { $Enums, Field, Form } from '@prisma/client';
import { useRouter } from 'next/navigation';
import { FieldContext } from '@/contexts/FieldContext';
import PreviewComponent from './PreviewModal';
import { CreateManyFields } from '@/actions/field';
import { BasicField } from '@/types/fields';
import DeleteModal from './modals/DeleteModal';

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
        const newField: BasicField = {
            id: crypto.randomUUID(),
            fieldId: '',
            type: type,
            label: '',
            placeholder: '',
            formId: '',
            fileType: null,
            max: null,
            min: null,
            name: '',
            required: false,
            pattern: null,
            value: null,
            order: fields.length + 1,
        };

        setFields((prev) => [...prev, newField]);
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
            <div className="w-full mt-10 mb-6 flex justify-start items-start gap-6">
                <Button size={'icon'} variant={'secondary'} onClick={() => router.push('/dashboard')}>
                    <ChevronLeft className="w-4 h-4" />
                </Button>
                <div>
                    <h2 className="text-2xl ">{form?.name}</h2>
                    <p className="text-md my-2 text-gray-600 dark:text-slate-500">{form?.description}</p>
                </div>
            </div>
            <section className="mb-8 flex justify-end items-center gap-2">
                <PreviewComponent />
                <Button onClick={saveFormHandler}>
                    <Save className="w-4 h-4 mr-2" />
                    Save
                </Button>
                <Button variant={'primary'}>
                    <Rocket className="w-4 h-4 mr-2" />
                    Publish
                </Button>
                <DeleteModal form={form} />
            </section>
            <section className="flex gap-4">
                <div className="border flex-1 p-10 flex">
                    <form action={() => {}} className="flex-1 flex justify-start items-center flex-col">
                        {!fields.length && 
                            <div className='h-full flex flex-col justify-center items-center gap-3'>
                                <LayoutPanelTop className='w-6 h-6' />
                                <p>There are no fields at the moment :)</p>
                            </div>
                        }
                        {fields.map((field) => (
                            <div key={field.id} className="border rounded-md mt-4 overflow-hidden w-full">
                                <FieldComponent field={field} setFields={setFields} />
                            </div>
                        ))}
                    </form>
                </div>
                <div className="border w-[30%] p-6 flex flex-col justify-start items-start gap-y-6">
                    <div>
                        <p className='mb-2'>Sections</p>
                        <div className="grid grid-cols-2 gap-4">
                            <button className="border p-6 rounded-md flex justify-center items-center gap-3 hover:bg-slate-100/50 dark:hover:bg-slate-900/50" onClick={() => createField('TEXT')}>
                                <Heading2 className='w-4 h-4'/>Heading
                            </button>
                            <button className="border p-6 rounded-md flex justify-center items-center gap-3 hover:bg-slate-100/50 dark:hover:bg-slate-900/50">
                                <Text className='w-4 h-4'/>Paragraph
                            </button>
                            <button className="border p-6 rounded-md flex justify-center items-center gap-3 hover:bg-slate-100/50 dark:hover:bg-slate-900/50" onClick={() => createField('NUMBER')}>
                                <ImageIcon className='w-4 h-4'/>Image
                            </button>
                            <button className="border p-6 rounded-md flex justify-center items-center gap-3 hover:bg-slate-100/50 dark:hover:bg-slate-900/50" onClick={() => createField('NUMBER')}>
                                <Video className='w-4 h-4'/>Video
                            </button>
                        </div>
                    </div>
                    <div>
                        <p className='mb-2'>Fields</p>
                        <div className="grid grid-cols-2 gap-4">
                            <button className="border p-6 rounded-md flex justify-center items-center gap-3 hover:bg-slate-100/50 dark:hover:bg-slate-900/50" onClick={() => createField('TEXT')}>
                                <WholeWord className='w-4 h-4'/>Text
                            </button>
                            <button className="border p-6 rounded-md flex justify-center items-center gap-3 hover:bg-slate-100/50 dark:hover:bg-slate-900/50">
                                <TextSelect className='w-4 h-4'/>Long Text
                            </button>
                            <button className="border p-6 rounded-md flex justify-center items-center gap-3 hover:bg-slate-100/50 dark:hover:bg-slate-900/50" onClick={() => createField('NUMBER')}>
                                <Binary className='w-4 h-4'/>Number
                            </button>
                            <button className="border p-6 rounded-md flex justify-center items-center gap-3 hover:bg-slate-100/50 dark:hover:bg-slate-900/50" onClick={() => createField('NUMBER')}>
                                <ChevronDown className='w-4 h-4'/>Select
                            </button>
                            <button className="border p-6 rounded-md flex justify-center items-center gap-3 hover:bg-slate-100/50 dark:hover:bg-slate-900/50" onClick={() => createField('NUMBER')}>
                                <CheckSquare2 className='w-4 h-4'/>Checkbox
                            </button>
                            <button className="border p-6 rounded-md flex justify-center items-center gap-3 hover:bg-slate-100/50 dark:hover:bg-slate-900/50" onClick={() => createField('NUMBER')}>
                                <CircleDot className='w-4 h-4'/>Radio
                            </button>
                        </div>
                    </div>
                    
                </div>
            </section>
        </>
    );
};

export default Builder;
