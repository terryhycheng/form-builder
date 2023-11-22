'use client';

import React from 'react';
import Link from 'next/link';
import { signIn } from 'next-auth/react';

const LoginPageComponent = () => {
    return (
        <div className="dark:bg-slate-900 bg-gray-100 flex h-full flex-1 items-center py-16">
            <div className="w-full max-w-md mx-auto p-6">
                <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-4 sm:p-7">
                        <div className="text-center">
                            <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">Sign in</h1>
                            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                                Don&apos;t have an account yet?
                                <Link
                                    className="text-blue-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                    href={'/register'}
                                >
                                    Sign up here
                                </Link>
                            </p>
                        </div>

                        <div className="mt-5 space-y-2">
                            <button
                                type="button"
                                className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                onClick={() => signIn('github', { callbackUrl: '/dashboard' })}
                            >
                                <svg
                                    className="w-6 h-auto"
                                    viewBox="0 0 38 38"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M18.9998 3.16666C16.9206 3.16666 14.8617 3.5762 12.9407 4.3719C11.0197 5.1676 9.27424 6.33387 7.80398 7.80413C4.83465 10.7735 3.1665 14.8007 3.1665 19C3.1665 25.9983 7.71067 31.9358 13.9965 34.0417C14.7882 34.1683 15.0415 33.6775 15.0415 33.25V30.5742C10.6557 31.5242 9.7215 28.4525 9.7215 28.4525C8.99317 26.6158 7.964 26.125 7.964 26.125C6.52317 25.1433 8.07484 25.175 8.07484 25.175C9.65817 25.2858 10.4973 26.8058 10.4973 26.8058C11.8748 29.2125 14.2023 28.5 15.1048 28.12C15.2473 27.0908 15.659 26.3942 16.1023 25.9983C12.5873 25.6025 8.89817 24.2408 8.89817 18.2083C8.89817 16.4508 9.49984 15.0417 10.529 13.9175C10.3707 13.5217 9.8165 11.875 10.6873 9.73749C10.6873 9.73749 12.0173 9.30999 15.0415 11.3525C16.2923 11.0042 17.654 10.83 18.9998 10.83C20.3457 10.83 21.7073 11.0042 22.9582 11.3525C25.9823 9.30999 27.3123 9.73749 27.3123 9.73749C28.1832 11.875 27.629 13.5217 27.4707 13.9175C28.4998 15.0417 29.1015 16.4508 29.1015 18.2083C29.1015 24.2567 25.3965 25.5867 21.8657 25.9825C22.4357 26.4733 22.9582 27.4392 22.9582 28.9117V33.25C22.9582 33.6775 23.2115 34.1842 24.019 34.0417C30.3048 31.92 34.8332 25.9983 34.8332 19C34.8332 16.9207 34.4236 14.8618 33.6279 12.9408C32.8322 11.0198 31.666 9.27439 30.1957 7.80413C28.7254 6.33387 26.98 5.1676 25.059 4.3719C23.138 3.5762 21.0791 3.16666 18.9998 3.16666Z"
                                        fill="black"
                                    />
                                </svg>
                                Sign in with GitHub
                            </button>
                            <button
                                type="button"
                                className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                onClick={() => signIn('google', { callbackUrl: '/dashboard' })}
                            >
                                <svg className="w-4 h-auto" width="46" height="47" viewBox="0 0 46 47" fill="none">
                                    <path
                                        d="M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z"
                                        fill="#4285F4"
                                    />
                                    <path
                                        d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z"
                                        fill="#34A853"
                                    />
                                    <path
                                        d="M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z"
                                        fill="#FBBC05"
                                    />
                                    <path
                                        d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z"
                                        fill="#EB4335"
                                    />
                                </svg>
                                Sign in with Google
                            </button>

                            <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:me-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ms-6 dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600">
                                Or
                            </div>

                            {/* <!-- Form --> */}
                            <form>
                                <div className="grid gap-y-4">
                                    {/* <!-- Form Group --> */}
                                    <div>
                                        <label htmlFor="email" className="block text-sm mb-2 dark:text-white">
                                            Email address
                                        </label>
                                        <div className="relative">
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 ring-1 ring-black/10"
                                                required
                                                aria-describedby="email-error"
                                            />
                                            <div className="hidden absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3">
                                                <svg
                                                    className="h-5 w-5 text-red-500"
                                                    width="16"
                                                    height="16"
                                                    fill="currentColor"
                                                    viewBox="0 0 16 16"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <p className="hidden text-xs text-red-600 mt-2" id="email-error">
                                            Please include a valid email address so we can get back to you
                                        </p>
                                    </div>
                                    {/* <!-- End Form Group --> */}

                                    {/* <!-- Form Group --> */}
                                    <div>
                                        <div className="flex justify-between items-center">
                                            <label htmlFor="password" className="block text-sm mb-2 dark:text-white">
                                                Password
                                            </label>
                                            <a
                                                className="text-sm text-blue-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                                href="../examples/html/recover-account.html"
                                            >
                                                Forgot password?
                                            </a>
                                        </div>
                                        <div className="relative">
                                            <input
                                                type="password"
                                                id="password"
                                                name="password"
                                                className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 ring-1 ring-black/10"
                                                required
                                                aria-describedby="password-error"
                                            />
                                            <div className="hidden absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3">
                                                <svg
                                                    className="h-5 w-5 text-red-500"
                                                    width="16"
                                                    height="16"
                                                    fill="currentColor"
                                                    viewBox="0 0 16 16"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <p className="hidden text-xs text-red-600 mt-2" id="password-error">
                                            8+ characters required
                                        </p>
                                    </div>
                                    {/* <!-- End Form Group --> */}

                                    {/* <!-- Checkbox --> */}
                                    <div className="flex items-center">
                                        <div className="flex">
                                            <input
                                                id="remember-me"
                                                name="remember-me"
                                                type="checkbox"
                                                className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                            />
                                        </div>
                                        <div className="ms-3">
                                            <label htmlFor="remember-me" className="text-sm dark:text-white">
                                                Remember me
                                            </label>
                                        </div>
                                    </div>
                                    {/* <!-- End Checkbox --> */}

                                    <button
                                        type="submit"
                                        className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                    >
                                        Sign in
                                    </button>
                                </div>
                            </form>
                            {/* <!-- End Form --> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPageComponent;
