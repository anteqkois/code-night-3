'use client';
import { signIn, signOut, useSession } from 'next-auth/react';

import { Button, Card, ErrorMessage } from '@/components/utils';
import { useSearchParams } from 'next/navigation';

export default function Page() {
  const session = useSession();
  const error = useSearchParams().get('error');

  return (
    <main className="gap-2">
      <div className="flex gap-2">
        <Button
          onClick={() => {
            window.history.replaceState(null, '', '/login');
            signIn('credentials', {
              // callbackUrl: '/protected',
              nick: 'anteqkois',
              password: 'haslo123',
            });
          }}
        >
          Login
        </Button>
        <Button onClick={signOut}>Logout</Button>
      </div>
      {error === 'CredentialsSignin' && (
        <ErrorMessage>Wrong nick or password</ErrorMessage>
      )}
      <h2>Session data:</h2>
      <Card>{JSON.stringify(session)}</Card>
    </main>
  );
}
