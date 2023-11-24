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
            <DialogContent className="w-screen h-screen max-h-screen max-w-full flex flex-col flex-grow p-0 gap-0">
                <div className="px-4 py-2 border-b">
                    <p className="text-lg font-bold text-muted-foreground">Form preview</p>
                    <p className="text-sm text-muted-foreground">Preview your form before publishing</p>
                </div>
                {/* <DialogHeader>
                    <DialogTitle>Preview</DialogTitle>
                    <DialogDescription>Preview your form before publishing</DialogDescription>
                </DialogHeader> */}
                <div className="bg-gray-100 dark:bg-slate-900 flex flex-col flex-grow items-center justify-center p-4 overflow-y-auto">
                    <div className="max-w-[620px] flex flex-col gap-4 flex-grow bg-background h-full w-full rounded-2xl p-8 overflow-y-auto shadow">
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
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default PreviewComponent;
