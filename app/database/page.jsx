import { Card } from '@/components/utils';
import { prisma } from '@/lib/prisma';

export default async function Page() {
  const data = await prisma.user.findMany();

  return (
    <main>
      <Card>{JSON.stringify(data)}</Card>
    </main>
  );
}
