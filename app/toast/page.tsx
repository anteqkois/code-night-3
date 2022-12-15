'use client';

import { Button } from '@/components/utils';
import toast from 'react-hot-toast';

export default function Page() {
  return (
    <main className="flex gap-2">
      <Button onClick={() => toast.success('Success message !')}>
        show success toast
      </Button>
      <Button onClick={() => toast.error('Error message !')}>
        show error toast
      </Button>
    </main>
  );
}
