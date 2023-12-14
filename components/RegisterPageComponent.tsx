'use client';

import { checkIsEmailUnique, registerUserWithCredentials } from '@/actions/credentials';
import { zodResolver } from '@hookform/resolvers/zod';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { z } from 'zod';

const registerFormSchema = z
    .object({
        email: z.string().email({ message: 'Please enter a valid email address' }),
        password: z.string().min(6, { message: 'Password must be at least 6 characters long' }),
        confirmPassword: z.string().min(6, { message: 'Password must be at least 6 characters long' }),
        firstName: z.string().min(1, { message: 'First Name is required' }),
        lastName: z.string().min(1, { message: 'Last Name is required' }),
        terms: z.literal(true, {
            errorMap: () => ({ message: 'You must accept Terms and Conditions' }),
        }),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: 'Passwords do not match',
        path: ['confirmPassword'],
    });

export type registerFormSchemaType = z.infer<typeof registerFormSchema>;

const RegisterPageComponent = () => {
    const [isValidEmail, setIsValidEmail] = React.useState<boolean>(false);
    const [isChecking, setIsChecking] = React.useState<boolean>(false);
    const router = useRouter();
    const {
        handleSubmit,
        register,
        formState: { errors },
        reset,
        setError,
        clearErrors,
    } = useForm<registerFormSchemaType>({
        resolver: zodResolver(registerFormSchema),
    });

    const emailChecker = async (e: React.FocusEvent<HTMLInputElement>) => {
        if (e.target.value === '') {
            return;
        }
        setIsChecking(true);
        const isUnique = await checkIsEmailUnique(e.target.value);
        if (!isUnique) {
            setError('email', {
                message: 'This email address has already existed.',
            });
            setIsValidEmail(false);
        } else {
            setIsValidEmail(true);
        }
        setIsChecking(false);
    };

    const onSubmitHandler = async (data: registerFormSchemaType) => {
        try {
            await registerUserWithCredentials(data.email, data.password, `${data.firstName} ${data.lastName}`);
            toast.success(`Successfully registered. Please use the credentials to log in.`);
            reset();
            router.push('/login');
        } catch (error) {
            console.error((error as Error).message);
            toast.error('Something went wrong. Please try again later');
        }
    };

    return (
        <div className="dark:bg-slate-900 bg-gray-100 flex h-full items-center py-16 flex-1">
            <div className="w-full max-w-lg mx-auto p-6">
                <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-4 sm:p-7">
                        <div className="text-center">
                            <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">Sign up</h1>
                            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                                Already have an account?
                                <Link
                                    className="text-blue-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                    href={'/login'}
                                >
                                    Sign in here
                                </Link>
                            </p>
                        </div>

                        <div className="mt-5">
                            {/* <!-- Form --> */}
                            <form onSubmit={handleSubmit(onSubmitHandler)}>
                                <div className="grid gap-y-4">
                                    {/* <!-- Form Group --> */}
                                    <div className="flex lg:flex-row flex-col gap-4">
                                        <div className="relative flex-1">
                                            <label htmlFor="first-name" className="block text-sm mb-2 dark:text-white">
                                                First Name
                                            </label>
                                            <input
                                                type="text"
                                                id="first-name"
                                                className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 ring-1 ring-black/10"
                                                {...register('firstName')}
                                            />
                                        </div>
                                        <div className="relative flex-1">
                                            <label htmlFor="last-name" className="block text-sm mb-2 dark:text-white">
                                                Last Name
                                            </label>
                                            <input
                                                type="text"
                                                id="last-name"
                                                className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 ring-1 ring-black/10"
                                                {...register('lastName')}
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm mb-2 dark:text-white">
                                            Email address
                                        </label>
                                        <div className="relative">
                                            <input
                                                type="email"
                                                id="email"
                                                {...register('email', {
                                                    onBlur: emailChecker,
                                                    onChange: () => {
                                                        clearErrors('email');
                                                        setIsValidEmail(false);
                                                    },
                                                })}
                                                disabled={isChecking}
                                                className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 ring-1 ring-black/10"
                                                aria-describedby="email-error"
                                            />
                                            {isChecking && (
                                                <div className="text-xs text-gray-600 absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3">
                                                    checking...
                                                </div>
                                            )}
                                            {isValidEmail && (
                                                <div className="absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth={1.5}
                                                        stroke="currentColor"
                                                        className="w-7 h-7 text-green-600"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                                        />
                                                    </svg>
                                                </div>
                                            )}
                                            {errors.email && (
                                                <div className=" absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3">
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
                                            )}
                                        </div>
                                        {errors.email && (
                                            <p className="p-3 my-2 border border-red-200 bg-red-100 text-red-600 text-sm rounded-md">
                                                {errors.email.message}
                                            </p>
                                        )}
                                        <p className="hidden text-xs text-red-600 mt-2" id="email-error">
                                            Please include a valid email address so we can get back to you
                                        </p>
                                    </div>
                                    {/* <!-- End Form Group --> */}

                                    {/* <!-- Form Group --> */}
                                    <div>
                                        <label htmlFor="password" className="block text-sm mb-2 dark:text-white">
                                            Password
                                        </label>
                                        <div className="relative">
                                            <input
                                                type="password"
                                                id="password"
                                                {...register('password')}
                                                className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 ring-1 ring-black/10"
                                                aria-describedby="password-error"
                                            />
                                            {errors.password && (
                                                <div className="absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3">
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
                                            )}
                                        </div>
                                        {errors.password && (
                                            <p className="p-3 my-2 border border-red-200 bg-red-100 text-red-600 text-sm rounded-md">
                                                {errors.password.message}
                                            </p>
                                        )}
                                    </div>
                                    {/* <!-- End Form Group --> */}

                                    {/* <!-- Form Group --> */}
                                    <div>
                                        <label
                                            htmlFor="confirm-password"
                                            className="block text-sm mb-2 dark:text-white"
                                        >
                                            Confirm Password
                                        </label>
                                        <div className="relative">
                                            <input
                                                type="password"
                                                id="confirm-password"
                                                {...register('confirmPassword')}
                                                className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 ring-1 ring-black/10"
                                                aria-describedby="confirm-password-error"
                                            />
                                            {errors.confirmPassword && (
                                                <div className="absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3">
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
                                            )}
                                        </div>
                                        {errors.confirmPassword && (
                                            <p className="p-3 my-2 border border-red-200 bg-red-100 text-red-600 text-sm rounded-md">
                                                {errors.confirmPassword.message}
                                            </p>
                                        )}
                                    </div>
                                    {/* <!-- End Form Group --> */}

                                    {/* <!-- Checkbox --> */}
                                    <div className="flex items-center">
                                        <div className="flex">
                                            <input
                                                id="terms"
                                                {...register('terms')}
                                                type="checkbox"
                                                className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                            />
                                        </div>
                                        <div className="ms-3">
                                            <label htmlFor="terms" className="text-sm dark:text-white">
                                                I accept the{' '}
                                                <a
                                                    className="text-blue-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                                    href="#"
                                                >
                                                    Terms and Conditions
                                                </a>
                                            </label>
                                        </div>
                                    </div>
                                    {errors.terms && (
                                        <p className="p-3 mb-2 border border-red-200 bg-red-100 text-red-600 text-sm rounded-md">
                                            {errors.terms.message}
                                        </p>
                                    )}
                                    {/* <!-- End Checkbox --> */}

                                    <button
                                        type="submit"
                                        disabled={!isValidEmail}
                                        className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                    >
                                        Sign up
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

export default RegisterPageComponent;
