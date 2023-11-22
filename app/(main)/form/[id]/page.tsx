import { GetFormById } from '@/actions/form';
import Builder from '@/components/Builder';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';
import React from 'react';

const Page = async ({ params }: { params: { id: string } }) => {
    const form = await GetFormById(params.id)
    return (
        <div className="container">
            <Builder form={form}/>
        </div>
    );
};

export default Page;
