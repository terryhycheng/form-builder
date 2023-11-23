'use client';

import React from 'react';
import { FieldContext } from '@/contexts/FieldContext';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from './ui/dialog';
import { Button } from './ui/button';
import { Eye } from 'lucide-react';
import { Input } from './ui/input';
import slugify from 'slugify';

const PreviewComponent = () => {
    const { fields } = React.useContext(FieldContext);

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant={'outline'} disabled={!fields.length}>
                    <Eye className="w-4 h-4 mr-2" />
                    Preview
                </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
                <DialogHeader>
                    <DialogTitle>Preview</DialogTitle>
                    <DialogDescription>Preview your form before publishing</DialogDescription>
                </DialogHeader>
                {!!fields.length &&
                    fields.map((field) => (
                        <div key={field.id} className="my-t w-full">
                            <label htmlFor={slugify(field.label ?? '')} className="mb-2 inline-block">
                                {field.label} {field.required && <span className="text-red-500">*</span>}
                            </label>
                            <Input
                                type={field.type}
                                id={slugify(field.label ?? '')}
                                name={slugify(field.label ?? '')}
                                placeholder={field.placeholder ?? ''}
                                required={field.required}
                            />
                        </div>
                    ))}
            </DialogContent>
        </Dialog>
    );
};

export default PreviewComponent;
