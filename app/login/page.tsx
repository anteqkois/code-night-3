'use client';

import { Card, LoginButton } from '@/components/utils';
import { useSession } from 'next-auth/react';

export default function Page() {
  const { data: session } = useSession();
  return (
    <main>
      <Card>
        <h4>Session data:</h4>
        {JSON.stringify(session)}
      </Card>
      <LoginButton />
    </main>
  );
}
