'use client';
import { Auction } from '@prisma/client';
import Image from 'next/image';
import React from 'react';
import Slider from 'react-slick';
import CarouselArrow from './CarouselArrow';
import { useRouter } from 'next/navigation';

export default function SimpleSlider({ cars }: { cars: Auction[] }) {
  const router = useRouter();
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <CarouselArrow />,
    prevArrow: <CarouselArrow />,
  };
  if (cars == undefined) return;

  return (
    <div>
      <Slider
        {...settings}
        className="mx-2"
      >
        {cars.map((car) => (
          <div className="my-4">
          <div className="mx-auto w-72 h-60 text-center rounded-xl shadow-2xl bg-white cursor-pointer"  onClick={() => router.push(`/auction/${car.id}`)}>
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
      </Slider>
    </div>
  );
}
