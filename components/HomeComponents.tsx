import { LayoutPanelTop } from 'lucide-react';
import React from 'react';

const components = [
    {
        id: crypto.randomUUID(),
        name: 'Sample Component',
        icon: <LayoutPanelTop className='w-6 h-6 mr-2' />
    },
    {
        id: crypto.randomUUID(),
        name: 'Sample Component',
        icon: <LayoutPanelTop className='w-6 h-6 mr-2' />
    },
    {
        id: crypto.randomUUID(),
        name: 'Sample Component',
        icon: <LayoutPanelTop className='w-6 h-6 mr-2' />
    },
    {
        id: crypto.randomUUID(),
        name: 'Sample Component',
        icon: <LayoutPanelTop className='w-6 h-6 mr-2' />
    },
    {
        id: crypto.randomUUID(),
        name: 'Sample Component',
        icon: <LayoutPanelTop className='w-6 h-6 mr-2' />
    },
    {
        id: crypto.randomUUID(),
        name: 'Sample Component',
        icon: <LayoutPanelTop className='w-6 h-6 mr-2' />
    },
    {
        id: crypto.randomUUID(),
        name: 'Sample Component',
        icon: <LayoutPanelTop className='w-6 h-6 mr-2' />
    },
    {
        id: crypto.randomUUID(),
        name: 'Sample Component',
        icon: <LayoutPanelTop className='w-6 h-6 mr-2' />
    },
    {
        id: crypto.randomUUID(),
        name: 'Sample Component',
        icon: <LayoutPanelTop className='w-6 h-6 mr-2' />
    },
    {
        id: crypto.randomUUID(),
        name: 'Sample Component',
        icon: <LayoutPanelTop className='w-6 h-6 mr-2' />
    },
]

const HomeComponents = () => {
    return (
        <>
            {/* <!-- Card Section --> */}
            <section className="container px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto my-10">
                {/* Title */}
                <h2 className="font-bold text-2xl md:text-3xl text-gray-800 dark:text-gray-200 mb-16 text-center">
                    We create <span className="text-blue-500">components</span> for your next form
                </h2>
                {/* <!-- Grid --> */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6">
                    {components.map((item) => (
                        <>
                            {/* <!-- Card --> */}
                            <a
                                className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                href="#"
                                key={item.id}
                            >
                                <div className="p-4 md:p-5">
                                    <div className="flex justify-between items-center group">
                                        <div className='text-gray-800 group-hover:text-blue-600'>
                                        {item.icon}
                                        </div>
                                        <div>
                                            <h3 className="group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200">
                                                {item.name}
                                            </h3>
                                            {/* <p className="text-sm text-gray-500">4 job positions</p> */}
                                        </div>
                                        <div className="ps-3">
                                            <svg
                                                className="flex-shrink-0 w-5 h-5"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path d="m9 18 6-6-6-6" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </a>
                            {/* <!-- End Card --> */}
                        </>
                    ))}
                </div>
                {/* <!-- End Grid --> */}
            </section>
            {/* <!-- End Card Section --> */}
        </>
    );
};

export default HomeComponents;
