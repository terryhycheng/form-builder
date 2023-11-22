import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { AuthOptions } from 'next-auth';
import prisma from '@/lib/db'

export const authOptions: AuthOptions = {
    adapter: PrismaAdapter(prisma),
    // session: { strategy: "jwt", maxAge: 24 * 60 * 60 },
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
    ],
    callbacks: {
      session: async ({ session, token, user }) => {
        if (session?.user) {
          session.user.id = user.id;
        }
        return session;
      },
    }
};
