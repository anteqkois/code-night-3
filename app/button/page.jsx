import { Button } from '@/components/utils';

export default function Page() {
  return (
    <main className="flex gap-2 p-4">
      <Button>default</Button>
      <Button variant="ghost">ghost</Button>
      <Button variant="link">link</Button>
    </main>
  );
}
