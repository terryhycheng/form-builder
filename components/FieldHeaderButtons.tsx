import React from 'react';

import { ArrowDownIcon, ArrowUpIcon, TrashIcon } from '@heroicons/react/24/outline';
import { changeField, deleteField, moveDownwardField, moveUpwardField } from '@/lib/helpers';
import { BasicField } from '@/types/fields';

const FieldHeaderButtons = ({ id, setFields }: { id: string, setFields: React.Dispatch<React.SetStateAction<BasicField[]>>}) => {
    return (
        <div className="flex gap-2">
            <button>
                <ArrowDownIcon className="h-5" onClick={() => moveDownwardField(id, setFields)} />
            </button>
            <button>
                <ArrowUpIcon className="h-5" onClick={() => moveUpwardField(id, setFields)} />
            </button>
            <button onClick={() => deleteField(id, setFields)}>
                <TrashIcon className="h-5" />
            </button>
        </div>
    );
};

export default FieldHeaderButtons;
