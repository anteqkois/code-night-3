'use client';

import { Button } from '@/components/utils';
import Image from 'next/image';
import { useFormik } from 'formik';
import { ChatBubbleBottomCenterIcon } from '@heroicons/react/24/outline';
import { useQuery } from '@tanstack/react-query';

const Auction = () => {
  const formik = useFormik({
    initialValues: {
      newBid: 25000,
    },

    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <main className="lg:mx-64 mx-32 h-full">
      <div className="flex">
        <div className="w-3/5 my-8 mx-3">
          <h2>Sprzedający adam123</h2>
          <Image
            className="my-8"
            width={480}
            height={360}
            alt="frontImg"
            src="https://assets.oneweb.mercedes-benz.com/iris/iris.jpg?COSY-EU-100-1713d0VXqNEFqtyO67PobzIr3eWsrrCsdRRzwQZg9pZbMw3SGtGyStsd2HdcUfp8qXGEubSJ0l3IJOB2NS1bApRTyI5uGoxQC30CQkzNBtum7jA2mhKViSF%25vq4tTyLRgLFYaxPrSrH1yBRn8wYTyoiZrMYM4FAK2Tg95Yn6PDCruSeWzQWtsd8htcUfircXGE4TXJ0lg6ZOB2PbnbApe79I5ul6xQC3vT6khQOZ9wJ1SeWvyVtsdPJ%25cUfxpBXGE0GYJ0lBHtOB2A85bAp5ilI5uCmZQC3zSTkzN7lbm7sDgubYwR9hDsxevqKj6hVNpLLxdYfqJVf%25XEd9B96N683eUHpi3v1LfIVf&imgt=P27&bkgnd=9&pov=BE040&uni=c&im=Crop,rect=(0,-25,1370,770),gravity=Center;Resize,width=350"
          />
        </div>
        <div className="w-2/5 my-8 mx-3 border border-primary-orange h-fit pb-4">
          <div className="bg-primary-orange p-2">
            <h3 className="text-center text-black text-bold">
              Aktualna oferta: 25 000$
            </h3>
          </div>
          <div className=" flex flex-col my-auto">
            <h5 className="text-center text-semibold text-black my-2">
              Oferta wygasa za: 5:32:23
            </h5>
            <p className="my-2 text-center text-black">Twoja oferta:</p>

            <form onSubmit={formik.handleSubmit}>
              <div className="flex justify-center">
                <input
                  type="number"
                  name="newBid"
                  className="border border-primary-orange text-center rounded mx-1"
                  value={formik.values.newBid}
                  onChange={formik.handleChange}
                  step="250"
                />
              </div>
              <div className="my-2 flex justify-center mx-8">
                <Button
                  type="submit"
                  className="w-full"
                >
                  Licytuj!
                </Button>
              </div>
            </form>
            <h5 className="text-center text-black">
              Aktualna liczba uczestników licytacji: 4
            </h5>
            <div className="flex justify-center my-2">
              <Button className="flex gap-2">
                Napisz do sprzedającego{' '}
                <ChatBubbleBottomCenterIcon
                  width={22}
                  height={22}
                />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <h3 className="text-black my-2">Dane pojazdu:</h3>
      <div className="grid grid-cols-4 grid-rows-2 border border-primary-orange my-2 place-items-center p-3 ">
        <div className="p-3">
          <p>Marka: Audi</p>
        </div>
        <div className="">
          <p>Model: A5</p>
        </div>
        <div className="">
          <p>Rok produkcji: 2020</p>
        </div>
        <div className="">
          <p>Przebieg: 2000000km</p>
        </div>
        <div className="">
          <p>Uszkodzony: Nie</p>
        </div>
        <div className="">
          <p>Vin: 82645645</p>
        </div>
        <div className="">
          <p>Rodzaj paliwa: Benzyna</p>
        </div>
        <div className="">
          <p>Moc silnika: 200KM</p>
        </div>
      </div>
    </main>
  );
};

export default Auction;
