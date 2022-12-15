import { Button, Card } from '@/components/utils';
import { prisma } from '@/lib/prisma';

export default async function Page() {
  const data = await prisma.user.findMany();

  return (
    <main>
      <Button>Add user</Button>
      <Card>{JSON.stringify(data)}</Card>
    </main>
  );
}
