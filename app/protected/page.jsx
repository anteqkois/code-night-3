'use client';

import { Button } from '@/components/utils';
import toast from 'react-hot-toast';

export default function Page() {
  return (
    <main className="flex gap-2">
      <h2>It's protected page</h2>
      <Button onClick={() => toast.success('Success message !')}>Logout</Button>
    </main>
  );
}
