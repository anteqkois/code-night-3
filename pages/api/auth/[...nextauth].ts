import { prisma } from '@/lib/prisma';
import NextAuth from 'next-auth';
// import { Awaitable } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export default NextAuth({
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
        formData: { label: 'formData', type: 'text' },
      },
      async authorize(credentials, req) {
        //check if SignUp or login
        if (credentials?.formData) {
          const formData = JSON.parse(credentials.formData);

          //TODO handle unique errors from prisma
          const user = await prisma.user.create({
            data: { ...formData },
          });
          return user ?? (null as any);
        }

        const user = await prisma.user.findFirst({
          where: { nick: credentials?.nick, password: credentials?.password },
        });
        return user ?? (null as any);
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
    async session({
      session,
      token,
      user,
    }: {
      session: any;
      token: any;
      user: any;
    }) {
      return { ...session, user: token.user };
    },
  },
});
