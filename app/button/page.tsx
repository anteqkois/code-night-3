import { Button } from '@/components/utils';

export default function Page() {
  return (
    <main className="flex gap-2">
      <Button>default</Button>
      <Button variant="special">special</Button>
      <Button variant="danger">danger</Button>
      <Button variant="success">success</Button>
      <Button variant="ghost">ghost</Button>
      <Button variant="overlay">overlay</Button>
      <Button variant="minimalist">minimalist</Button>
      <Button variant="link">link</Button>
      <Button variant="clear">clear</Button>
      <Button variant="info">info</Button>
    </main>
  );
}
