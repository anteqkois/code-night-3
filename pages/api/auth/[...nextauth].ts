import { prisma } from '@/lib/prisma';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { getCsrfToken } from 'next-auth/react';
import { SiweMessage } from 'siwe';

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export default async function auth(req: any, res: any) {
  const providers = [
    CredentialsProvider({
      name: 'Ethereum',
      credentials: {
        message: {
          label: 'Message',
          type: 'text',
          placeholder: '0x0',
        },
        signature: {
          label: 'Signature',
          type: 'text',
          placeholder: '0x0',
        },
      },
      async authorize(credentials) {
        try {
          const siwe = new SiweMessage(
            JSON.parse(credentials?.message || '{}')
          );
          const nextAuthUrl = new URL(process.env.NEXTAUTH_URL);

          const result = await siwe.verify({
            signature: credentials?.signature || '',
            domain: nextAuthUrl.host,
            nonce: await getCsrfToken({ req }),
          });

          if (result.success) {
            //TODO Get account info from PRISMA
            const user = await prisma.user.findFirst({
              where: { address: siwe.address },
              include: { auctions: true, bids: true },
            });
            if (user) {
              // return {
              //   id: siwe.address,
              //   user: user,
              // };
              return user ?? (null as any);
            } else {
              const user = prisma.user.create({
                data: { address: siwe.address },
                include: { auctions: true, bids: true },
              });
              // return {
              //   id: siwe.address,
              //   user: user,
              // };
              return user ?? (null as any);
            }

            // return {
            //   id: siwe.address,
            // };
          }
          return null as any;
        } catch (e) {
          return null;
        }
      },
    }),
  ];

  const isDefaultSigninPage =
    req.method === 'GET' && req.query.nextauth.includes('signin');

  // Hide Sign-In with Ethereum from default sign page
  if (isDefaultSigninPage) {
    providers.pop();
  }

  return await NextAuth(req, res, {
    // https://next-auth.js.org/configuration/providers/oauth
    providers,
    session: {
      strategy: 'jwt',
    },
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
      async jwt({ token, user }) {
        // console.log(token, user);
        if (user) {
          return { ...token, user };
        }
        return token;
      },
      async session({ session, token }: { session: any; token: any }) {
        // console.log(token, session);
        // session.address = token.sub;
        // session.user.name = token.sub;
        // session.user.image = 'https://www.fillmurray.com/128/128';
        // return session;
        return { ...session, user: token.user };
      },
    },
  });
}
