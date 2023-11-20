export type FieldType = 'text' | 'number' | 'email';

export interface BasicField {
    id: string;
    type: FieldType;
    label: string;
    placeholder: string;
    value?: string | number;
    required?: boolean;
    min?: number;
    max?: number;
    pattern?: string;
}
