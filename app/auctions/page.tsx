'use client';
import { useQuery } from '@tanstack/react-query';
import { api } from '@/lib/apiConfig';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
export default function Page() {
  const router = useRouter();
  const { data, error } = useQuery({
    queryKey: ['auction'],
    queryFn: () => api('http://localhost:3000/api/auction'),
    suspense: true,
    retry: false,
    refetchInterval: 2000,
  });

  let cars = data?.data.auctions!;
  console.log(cars);

  return (
    <main className="bg-gradient-to-r from-primary-orange h-[calc(100vh-91px)]">
      <div className="bg-gradient-to-l from-primary-orange my-5 py-5 text-center text-3xl">
        Samochody osobowe na licytacje
      </div>
      <div className="grid grid-cols-4">
        {cars.map((car: any) => (
          <div className="my-4">
            <div
              className="mx-auto w-72 h-60 text-center rounded-xl shadow-2xl bg-white cursor-pointer"
              onClick={() => router.push(`/auction/${car.id}`)}
            >
              <h3 className="text-sm font-medium py-3 rounded-t-xl border-b-2 border-black">
                {car.mark} {car.model}
              </h3>
              <Image
                className="block mx-auto pb-5"
                alt="car"
                width={208}
                height={1}
                src={car.image!.url}
              />
              <div className="border-t-2 border-black pt-3 flex justify-evenly">
                <span>{car.year}</span>
                <span>{car.mileage} km</span>
                <span>{car.fuelType || 'Benzyna'}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
