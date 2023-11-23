'use client';

import { BasicField } from '@/types/fields';
import { Dispatch, PropsWithChildren, SetStateAction, createContext, useState } from 'react';

const initialState: {
    fields: BasicField[];
    setFields: Dispatch<SetStateAction<BasicField[]>>;
} = {
    fields: [],
    setFields: () => {},
};

export const FieldContext = createContext(initialState);

export const FieldContextProvider = ({ children }: PropsWithChildren) => {
    const [fields, setFields] = useState<BasicField[]>([]);

    return <FieldContext.Provider value={{ fields, setFields }}>{children}</FieldContext.Provider>;
};
