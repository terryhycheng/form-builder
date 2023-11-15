import React from 'react';
import FieldHeaderButtons from './FieldHeaderButtons';
import { BasicField } from '@/types/fields';

const FieldHeader = ({
    field,
    setFields,
    heading,
}: {
    heading: string;
    field: BasicField;
    setFields: React.Dispatch<React.SetStateAction<BasicField[]>>;
}) => {
    return (
        <div className="flex justify-between text-white font-bold bg-slate-800 p-4 px-6">
            <h2>{heading}</h2>
            <FieldHeaderButtons id={field.id} setFields={setFields} />
        </div>
    );
};

export default FieldHeader;
