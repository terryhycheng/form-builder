'use client';

import React from 'react';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import { Chrome, Github } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useSearchParams } from 'next/navigation';
import clsx from 'clsx';
import { toast } from 'react-toastify';

const formSchema = z.object({
    email: z.string().email(),
    password: z.string().min(1),
});

export type formSchemaType = z.infer<typeof formSchema>;

const LoginPageComponent = () => {
    const {
        handleSubmit,
        register,
        formState: { errors },
        reset,
    } = useForm<formSchemaType>({
        resolver: zodResolver(formSchema),
    });
    const params = useSearchParams();
    const error = params.get('error');

    const onSubmitHandler = async (data: formSchemaType) => {
        await signIn('credentials', {
            email: data.email,
            password: data.password,
        });
    };

    return (
        <div className="dark:bg-slate-900 bg-gray-100 flex h-full flex-1 items-center py-16">
            <div className="w-full max-w-md mx-auto p-6">
                <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-slate-800/20 dark:border-gray-700">
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
                                <Github className="w-5 h-5 mr-1" />
                                Sign in with GitHub
                            </button>
                            <button
                                type="button"
                                className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                onClick={() => signIn('google', { callbackUrl: '/dashboard' })}
                            >
                                <Chrome className="w-5 h-5 mr-1" />
                                Sign in with Google
                            </button>

                            <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:me-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ms-6 dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600">
                                Or
                            </div>

                            {/* <!-- Form --> */}
                            <form onSubmit={handleSubmit(onSubmitHandler)}>
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
                                                className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 ring-1 ring-black/10"
                                                {...register('email')}
                                                aria-describedby="email-error"
                                            />
                                            <div
                                                className={clsx(
                                                    'absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3',
                                                    {
                                                        hidden: !errors.email,
                                                    }
                                                )}
                                            >
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
                                                {...register('password')}
                                                className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 ring-1 ring-black/10"
                                                aria-describedby="password-error"
                                            />
                                            <div
                                                className={clsx(
                                                    'absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3',
                                                    {
                                                        hidden: !errors.password,
                                                    }
                                                )}
                                            >
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

                                    {/* Error message */}
                                    {error && (
                                        <div className="bg-red-100 border rounded-md border-red-200 p-4">
                                            <p className="text-xs text-red-600">{getErrorMessage(error)}</p>
                                        </div>
                                    )}

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

const getErrorMessage = (error: string) => {
    switch (error) {
        case 'invalid credentials':
            return 'The email or password you entered is not correct. Please try again';
        default:
            return 'Something went wrong, please try again';
    }
};
