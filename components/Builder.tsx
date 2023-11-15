'use client';

import React from 'react';

import { type BasicField, FieldType } from '../types/fields';
import Field from './Field';

const Builder = () => {
    const [fields, setFields] = React.useState<BasicField[]>([]);

    const createField = (type: FieldType) => {
        setFields((prev) => [
            ...prev,
            {
                id: crypto.randomUUID(),
                type,
            },
        ]);
    };

    console.log(fields);

    return (
        <>
            <section className="flex gap-4 container">
                <div className="border flex-1 p-10">
                    {/* <form action={() => {}}>
                        <label htmlFor={slugify(textField.label)}>{textField.label}</label>
                        <Input
                            type={textField.type}
                            id={slugify(textField.label)}
                            name={slugify(textField.label)}
                            placeholder={textField.placeholder}
                        />
                    </form> */}
                    <form action={() => {}}>
                        {fields.map((field) => (
                            <Field key={field.id} field={field} setFields={setFields} />
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
