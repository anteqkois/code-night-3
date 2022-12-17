'use client';
import NavBar from '@/components/NavBar';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SessionProvider } from 'next-auth/react';
import { ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';
import { chain, configureChains, createClient, WagmiConfig } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import './globals.css';

const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 5 * 60 * 1000 } },
});

export const { chains, provider } = configureChains(
  [chain.mainnet, chain.goerli],
  [publicProvider()]
);

const client = createClient({
  autoConnect: true,
  provider,
});

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </head>
      <body>
        <WagmiConfig client={client}>
          <SessionProvider>
            <QueryClientProvider client={queryClient}>
              <Toaster
                position="top-center"
                reverseOrder={false}
              />
              <NavBar />
              {children}
            </QueryClientProvider>
          </SessionProvider>
        </WagmiConfig>
      </body>
    </html>
  );
}
