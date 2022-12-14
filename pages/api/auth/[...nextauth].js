import { prisma } from '@/lib/prisma';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'default',
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        nick: { label: 'Nick', type: 'text', placeholder: 'anteqkois' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        const user = await prisma.user.findFirst({
          where: { nick: credentials.nick, password: credentials.password },
        });

        return user ?? null;
      },
    }),
  ],
  session: {
    strategy: 'jwt',
    maxAge: 15 * 24 * 30 * 60, // 15 days
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/login',
    error: '/login',
    signOut: '/login',
    // error: '/auth/error', // Error code passed in query string as ?error=
    // verifyRequest: '/auth/verify-request', // (used for check email message)
    // newUser: '/auth/new-user', // New users will be directed here on first sign in (leave the property out if not of interest)
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        return { ...token, user };
      }
      return token;
    },
    async session({ session, token, user }) {
      return { ...session, user: token.user };
    },
  },
};

export default NextAuth(authOptions);
