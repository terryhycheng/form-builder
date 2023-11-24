import React from 'react';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { BasicField } from '@/types/fields';
import { changeField } from '@/lib/helpers';
import FieldHeader from './FieldHeader';

const NumberField = ({
    field,
    setFields,
}: {
    field: BasicField;
    setFields: React.Dispatch<React.SetStateAction<BasicField[]>>;
}) => {
    return (
        <>
            <FieldHeader field={field} heading="Number Field" setFields={setFields} />
            <hr />
            <div className="space-y-4 p-6">
                <div className="grid md:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="label" className="inline-block mb-2">
                            Label<span className="text-red-500">*</span>
                        </label>
                        <Input
                            type="text"
                            name="label"
                            id="label"
                            value={field.label ?? ''}
                            onChange={(e) => changeField(field.id, e.target.value, 'label', setFields)}
                        />
                    </div>
                    <div>
                        <label htmlFor="placeholder" className="inline-block mb-2">
                            Placeholder
                        </label>
                        <Input
                            type="text"
                            name="placeholder"
                            id="placeholder"
                            value={field.placeholder ?? ''}
                            onChange={(e) => changeField(field.id, e.target.value, 'placeholder', setFields)}
                        />
                    </div>
                </div>
                <div className="space-x-2">
                    <Checkbox
                        id={`required-${field.id}`}
                        checked={field.required}
                        onCheckedChange={(e) => changeField(field.id, e, 'required', setFields)}
                    />
                    <label htmlFor={`required-${field.id}`} className="inline-block mb-2">
                        Required field?
                    </label>
                </div>
            </div>
        </>
    );
};

export default NumberField;
