import { BasicField } from '@/types/fields';
import { ToastOptions } from 'react-toastify';

export const toastOptions: ToastOptions = {
    position: 'bottom-center',
};

// updates the value of a field in the globel `Fields` state
export const changeField = (
    id: string,
    value: string | boolean | number,
    label: keyof BasicField,
    setFunction: React.Dispatch<React.SetStateAction<BasicField[]>>
) => {
    setFunction((prev) => {
        const index = prev.findIndex((f) => f.id === id);
        const updatedField = { ...prev[index], [label]: value };
        const updatedFields = [...prev];
        updatedFields[index] = updatedField;
        return updatedFields;
    });
};

export const deleteField = (id: string, setFunction: React.Dispatch<React.SetStateAction<BasicField[]>>) => {
    setFunction((prev) => {
        const updatedFields = prev.filter((f) => f.id !== id);
        return updatedFields;
    });
};

export const moveUpwardField = (id: string, setFunction: React.Dispatch<React.SetStateAction<BasicField[]>>) => {
    setFunction((prev) => {
        const index = prev.findIndex((f) => f.id === id);

        if (index === 0) return prev;

        const updatedFields = [...prev];
        const temp = updatedFields[index];
        updatedFields[index] = updatedFields[index - 1];
        updatedFields[index - 1] = temp;
        return updatedFields;
    });
};

export const moveDownwardField = (id: string, setFunction: React.Dispatch<React.SetStateAction<BasicField[]>>) => {
    setFunction((prev) => {
        const index = prev.findIndex((f) => f.id === id);

        if (index === prev.length - 1) return prev;

        const updatedFields = [...prev];
        const temp = updatedFields[index];
        updatedFields[index] = updatedFields[index + 1];
        updatedFields[index + 1] = temp;
        return updatedFields;
    });
};
