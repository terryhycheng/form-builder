import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import { PrismaAdapter } from '@auth/prisma-adapter';
import CredentialsProvider from 'next-auth/providers/credentials';
import { AuthOptions } from 'next-auth';
import prisma from '@/lib/db';
import axios, { AxiosError } from 'axios';
import { User } from '@prisma/client';

export const authOptions: AuthOptions = {
    adapter: PrismaAdapter(prisma),
    session: { strategy: 'jwt', maxAge: 24 * 60 * 60 },
    // Configure one or more authentication providers
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID ?? '',
            clientSecret: process.env.GITHUB_SECRET ?? '',
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID ?? '',
            clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
        }),
        CredentialsProvider({
            name: 'Credentials',
            type: 'credentials',
            credentials: {
                email: { label: 'Email', type: 'text', placeholder: 'jsmith' },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials) {
                if (!credentials) {
                    return null;
                }

                try {
                    const { data } = await axios.post<{ user: User | null; message: string }>(
                        'http://localhost:3000/api/credentials',
                        {
                            email: credentials.email,
                            password: credentials.password,
                        }
                    );
                    return data.user;
                } catch (error) {
                    throw new Error(
                        (error as AxiosError<{ user: User | null; message: string }>).response?.data.message ??
                            'Unknown authorisation error'
                    );
                }
            },
        }),
    ],
    pages: {
        signIn: '/login',
        error: '/login',
    },
    callbacks: {
        // session: async ({ session, token, user }) => {
        //     if (session?.user) {
        //         session.user.id = user.id;
        //     }
        //     return session;
        // },
    },
};
