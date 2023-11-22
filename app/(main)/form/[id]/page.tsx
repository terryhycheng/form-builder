import Builder from '@/components/Builder';
import React from 'react';

interface Props {
    params: {
        id: string;
    };
}

const Page = ({ params: { id } }: Props) => {
    return (
        <div className="container">
            <p>{id}</p>
            <Builder />
        </div>
    );
};

export default Page;
