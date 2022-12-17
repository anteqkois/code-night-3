'use client';

import { Button, PageSpinner } from '@/components/utils';
import { api } from '@/lib/apiConfig';
import {
  ChatBubbleBottomCenterIcon,
  UserIcon,
} from '@heroicons/react/24/outline';
import { useQuery } from '@tanstack/react-query';
import { useFormik, validateYupSchema } from 'formik';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useEffect } from 'react';
import { erc20ABI, useContractWrite, useSignMessage } from 'wagmi';

const Auction = ({ params }: { params: { id: string[] } }) => {
  const { data: session } = useSession();
  const { data, error } = useQuery({
    queryKey: ['auction', `${params.id[0]}`],
    queryFn: () => api(`http://localhost:3000/api/auction/${params.id[0]}`),
    refetchInterval: 5000,
  });
  const { signMessageAsync } = useSignMessage();

  const contractWrite = useContractWrite({
    mode: 'recklesslyUnprepared',
    addressOrName: '0xb1567FD318D3FC9662edE4D9D1FF74319B259609',
    contractInterface: erc20ABI,
    functionName: 'approve',
  });

  const formik = useFormik({
    initialValues: {
      newBid: data?.data.auction.CurrentPrice,
    },

    onSubmit: async (values) => {
      console.log(values);
      const signature = await signMessageAsync({
        message: `You bit ${values.newBid} $CN`,
      });

      await contractWrite.writeAsync({
        recklesslySetUnpreparedArgs: [
        .user.address,
          values.newBid,
        ],
      });

      const res = await api('/bid', {
        method: 'post',
        data: {
          signature,
          userAddress: session?.user.address,
          amount: values.newBid,
          auctionId: data?.data.auction.id,
        },
      });
      console.log(res);
    },
  });

  const bids = data?.data.auction.bids;
  console.log(bids);

  bids
    ? bids.map((bid: any) => {
        console.log(bid?.user.address);
      })
    : '';

  useEffect(() => {
    if (data?.data) {
      formik.setFieldValue('newBid', data?.data.auction.CurrentPrice);
    }
  }, [data?.data]);

  return data?.data ? (
    <main className="lg:mx-64 mx-32 h-full">
      <div className="flex">
        <div className="w-3/5 my-8 mx-3">
          <h2>{data?.data.auction.title}</h2>
          <Image
            className="my-8"
            width={480}
            height={360}
            alt="frontImg"
            src={`${data?.data.auction.image.url}`}
          />
        </div>
        <div className="w-2/5 my-8 mx-3 border border-primary-orange h-fit pb-4">
          <div className="bg-primary-orange p-2">
            <h3 className="text-center text-black text-bold">
              Aktualna oferta: {data?.data.auction.CurrentPrice}$
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
                  step="100"
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
          <p>Marka: {data?.data.auction.mark}</p>
        </div>
        <div className="">
          <p>Model: {data?.data.auction.model}</p>
        </div>
        <div className="">
          <p>Rok produkcji: {data?.data.auction.year}</p>
        </div>
        <div className="">
          <p>Przebieg: {data?.data.auction.mileage}km</p>
        </div>
        <div className="">
          <p>Uszkodzony: {data?.data.auction.mark ? 'nie' : 'tak'}</p>
        </div>
        <div className="">
          <p>Vin: {data?.data.auction.vin}</p>
        </div>
        <div className="">
          <p>Rodzaj paliwa: {data?.data.auction.fuelType}</p>
        </div>
        <div className="">
          <p>Moc silnika: {data?.data.auction.enginePower}KM</p>
        </div>
      </div>

      {bids
        ? bids.map((bid: any) => {
            <div className="flex gap-4">
              <div className="flex w-fit p-4 my-4 flex-col justify-center items-center border border-primary-orange">
                <div className="flex gap-2">
                  <UserIcon
                    width={24}
                    height={24}
                  />
                  <h4>{bid?.user.address}</h4>
                </div>
                <h3>
                  {data?.data.auction.CurrentPrice}(+{formik.values.newBid})$
                </h3>
              </div>
            </div>;
          })
        : ''}
    </main>
  ) : (
    <PageSpinner />
  );
};

export default Auction;
