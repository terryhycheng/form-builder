import { Bot, Hand, Palette, Replace, Type } from 'lucide-react';
import React from 'react';

const HomeFeaures = () => {
    return (
        <>
            {/* <!-- Features --> */}
            <section className="container px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto my-10">
                {/* <!-- Grid --> */}
                <div className="mt-5 lg:mt-16 grid lg:grid-cols-3 gap-8 lg:gap-12">
                    <div className="lg:col-span-1">
                        <h2 className="font-bold text-2xl md:text-3xl text-gray-800 dark:text-gray-200">
                            Why FormCraftHub?
                        </h2>
                        <p className="mt-2 md:mt-4 text-gray-500">
                            Crafted for professionals and beginners alike, our powerful features empower you to create stunning forms without breaking a sweat.
                        </p>
                    </div>
                    {/* <!-- End Col --> */}

                    <div className="lg:col-span-2">
                        <div className="grid sm:grid-cols-2 gap-8 md:gap-12">
                            {/* <!-- Icon Block --> */}
                            <div className="flex gap-x-5">
                                <Replace className='w-12 h-12 text-blue-500' />
                                <div className="grow">
                                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                                        Drag and Drop Simlicity
                                    </h3>
                                    <p className="mt-1 text-gray-600 dark:text-gray-400">
                                        Our intuitive drag-and-drop interface lets you effortlessly design forms to suit your unique needs.
                                    </p>
                                </div>
                            </div>
                            {/* <!-- End Icon Block --> */}

                            {/* <!-- Icon Block --> */}
                            <div className="flex gap-x-5">
                                <Palette className='flex-shrink-0 mt-1 w-6 h-6 text-blue-500' />
                                <div className="grow">
                                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                                        Branding that Speaks Volumes
                                    </h3>
                                    <p className="mt-1 text-gray-600 dark:text-gray-400">
                                        Elevate your brand presence with fully customizable forms. Add your logo, choose your colors to make it fit you.
                                    </p>
                                </div>
                            </div>
                            {/* <!-- End Icon Block --> */}

                            {/* <!-- Icon Block --> */}
                            <div className="flex gap-x-5">
                                <Type className='flex-shrink-0 mt-1 w-6 h-6 text-blue-500' />
                                {/* <svg
                                    className="flex-shrink-0 mt-1 w-6 h-6 text-blue-600 dark:text-blue-500"
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
                                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                                </svg> */}
                                <div className="grow">
                                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                                        30+ Form Components
                                    </h3>
                                    <p className="mt-1 text-gray-600 dark:text-gray-400">
                                        From simple text fields to advanced date pickers and file uploads, we’ve got you covered.
                                    </p>
                                </div>
                            </div>
                            {/* <!-- End Icon Block --> */}

                            {/* <!-- Icon Block --> */}
                            <div className="flex gap-x-5">
                                {/* <svg
                                    className="flex-shrink-0 mt-1 w-6 h-6 text-blue-600 dark:text-blue-500"
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
                                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                    <circle cx="9" cy="7" r="4" />
                                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                </svg> */}
                                <Bot className='flex-shrink-0 mt-1 w-6 h-6 text-blue-500' />
                                <div className="grow">
                                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                                        API Integration
                                    </h3>
                                    <p className="mt-1 text-gray-600 dark:text-gray-400">
                                        Harness the power of our API to effortlessly retrieve form data and integrate it into any frontend development project.
                                    </p>
                                </div>
                            </div>
                            {/* <!-- End Icon Block --> */}
                        </div>
                    </div>
                    {/* <!-- End Col --> */}
                </div>
                {/* <!-- End Grid --> */}
            </section>
            {/* <!-- End Features --> */}
        </>
    );
};

export default HomeFeaures;
