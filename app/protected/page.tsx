'use client';

import { Button, Card } from '@/components/utils';
import { useSession } from 'next-auth/react';
import toast from 'react-hot-toast';

export default function Page() {
  const { data: session } = useSession();
  return (
    <main className="flex gap-2">
      <h2>It's protected page</h2>
      <Card>
        <h4>Session data:</h4>
        {JSON.stringify(session)}
      </Card>
      <Button onClick={() => toast.success('Success message !')}>Logout</Button>
    </main>
  );
}
