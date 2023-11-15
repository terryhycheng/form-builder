import { BasicField } from '@/types/fields';
import React from 'react';
import TextField from './TextField';
import NumberField from './NumberField';

const Field = ({
    field,
    setFields,
}: {
    field: BasicField;
    setFields: React.Dispatch<React.SetStateAction<BasicField[]>>;
}) => {
    switch (field.type) {
        case 'text':
            return <TextField key={field.id} field={field} setFields={setFields} />;
        case 'number':
            return <NumberField key={field.id} field={field} setFields={setFields} />;
        default:
            return null;
    }
};

export default Field;
