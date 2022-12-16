'use client';
import NavBar from '@/components/NavBar';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SessionProvider } from 'next-auth/react';
import { Toaster } from 'react-hot-toast';
import './globals.css';

const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 5 * 60 * 1000 } },
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <NavBar />
        <SessionProvider>
          <QueryClientProvider client={queryClient}>
            <Toaster
              position="top-center"
              reverseOrder={false}
            />
            {children}
          </QueryClientProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
