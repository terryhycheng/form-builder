'use client'

import { Braces, FormInput, Paintbrush, Replace } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';

type Feature = {
    id: number, 
    title: string,
    description: string,
    icon: React.JSX.Element,
    image: string,
    selected: boolean
}

const HowItWorks = () => {
    const [features, setFeatures] = useState<Feature[]>([
        {
            id: 1, 
            title: 'Drag',
            description: 'Build your form effortlessly with our user-friendly drag-and-drop interface.',
            icon: <Replace className={`flex-shrink-0 mt-2 h-6 w-6 md:w-7 md:h-7`} />,
            image: 'https://images.unsplash.com/photo-1605629921711-2f6b00c6bbf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&h=1220&q=80',
            selected: true
        },
        {
            id: 2, 
            title: 'Brand',
            description: 'Customize your form to match your brand, creating a cohesive online experience.',
            icon: <Paintbrush className={`flex-shrink-0 mt-2 h-6 w-6 md:w-7 md:h-7`} />,
            image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            selected: false
        },
        {
            id: 3, 
            title: 'Components',
            description: 'Choose from over 30 form components to capture the data you need.',
            icon: <FormInput className={`flex-shrink-0 mt-2 h-6 w-6 md:w-7 md:h-7`} />,
            image: 'https://images.unsplash.com/photo-1680016661694-1cd3faf31c3a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fHdpcmVmcmFtZSUyMGZvcm18ZW58MHx8MHx8fDA%3D',
            selected: false
        },
        {
            id: 4, 
            title: 'Integrate',
            description: 'Use our API to seamlessly retrieve and integrate form data into your frontend projects.',
            icon: <Braces className={`flex-shrink-0 mt-2 h-6 w-6 md:w-7 md:h-7`} />,
            image: 'https://images.unsplash.com/photo-1549692520-acc6669e2f0c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            selected: false
        },
    ])
    const [selectedFeature, setSelectedFeature] = useState<Feature>(features[0])

    const handleFeatureSelection = (id: number) => {
        const updatedArray = features.map(feature => {
            if (feature.id === id) {
                return { ...feature, selected: true };
            } else {
                return { ...feature, selected: false };
            }
        });
        setFeatures(updatedArray)
        setSelectedFeature(updatedArray.filter(x => x.id === id)[0])
    }

    return (
        <>
            {/* <!-- Features --> */}
            <div className="container px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                <div className="relative p-6 md:p-16">
                    {/* <!-- Grid --> */}
                    <div className="relative z-10 lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
                        <div className="mb-10 lg:mb-0 lg:col-span-6 lg:col-start-8 lg:order-2">
                            <h2 className="text-2xl text-gray-800 font-bold sm:text-3xl dark:text-gray-200">
                                How it works
                            </h2>
                            <p>Fully customizable forms to match your unique needs</p>

                            {/* <!-- Tab Navs --> */}
                            <nav className="grid gap-4 mt-5 md:mt-10" aria-label="Tabs" role="tablist">

                                {features.map((feature) => (
                                    <button
                                        key={feature.id}
                                        type="button"
                                        className={`text-start hover:bg-gray-200 p-4 md:p-5 rounded-xl dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 ${feature.selected ? 'bg-white hover:bg-white shadow-md hover:border-transparent dark:bg-slate-800' : 'bg-transparent dark:hover:bg-slate-800' }`}
                                        onClick={() => handleFeatureSelection(feature.id)}
                                    >
                                        <span className={`flex ${feature.selected ? 'text-blue-600 dark:text-blue-600' : 'text-gray-800 dark:text-white'}`}>
                                            {feature.icon}
                                            <span className="grow ms-6">
                                                <span className={`block text-lg font-semibold ${feature.selected ? 'text-blue-500 dark:text-blue-500' : 'text-gray-800 dark:text-white '}`}>
                                                    {feature.title}
                                                </span>
                                                <span className="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-gray-200">
                                                    {feature.description}
                                                </span>
                                            </span>
                                        </span>
                                    </button>
                                ))}

                            </nav>
                            {/* <!-- End Tab Navs --> */}
                        </div>
                        {/* <!-- End Col --> */}

                        <SelectedFeatureImage selectedFeature={selectedFeature} />
                        {/* <!-- End Col --> */}
                    </div>
                    {/* <!-- End Grid --> */}

                    {/* <!-- Background Color --> */}
                    <div className="absolute inset-0 grid grid-cols-12 w-full h-full">
                        <div className="col-span-full lg:col-span-7 lg:col-start-6 bg-gray-100 w-full h-5/6 rounded-xl sm:h-3/4 lg:h-full dark:bg-white/[.075]"></div>
                    </div>
                    {/* <!-- End Background Color --> */}
                </div>
            </div>
            {/* <!-- End Features --> */}
        </>
    );
};

export default HowItWorks;


const SelectedFeatureImage = ({selectedFeature}: any) => {
    const { title, image } = selectedFeature
    return (
        <div className="lg:col-span-6">
            <div className="relative">
                <div>
                    <div>
                        <div className='relative w-full h-[42rem] bg-teal-100'>
                        <Image 
                            src={image ?? ''}
                            alt={title ?? ''}
                            fill
                            className='shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/[.2] object-cover'
                        />
                        </div>
                    </div>
                </div>
                <div className="hidden absolute top-0 end-0 translate-x-20 md:block lg:translate-x-20">
                    <svg
                        className="w-16 h-auto text-orange-500"
                        width="121"
                        height="135"
                        viewBox="0 0 121 135"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164"
                            stroke="currentColor"
                            strokeWidth="10"
                            strokeLinecap="round"
                        />
                        <path
                            d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5"
                            stroke="currentColor"
                            strokeWidth="10"
                            strokeLinecap="round"
                        />
                        <path
                            d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874"
                            stroke="currentColor"
                            strokeWidth="10"
                            strokeLinecap="round"
                        />
                    </svg>
                </div>
            </div>
        </div>
    )
}