'use client';

import { Button, PageSpinner } from '@/components/utils';
import { api } from '@/lib/apiConfig';
import {
  ChatBubbleBottomCenterIcon,
  UserIcon,
} from '@heroicons/react/24/outline';
import { useQuery } from '@tanstack/react-query';
import { ethers } from 'ethers';
import { useFormik } from 'formik';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { erc20ABI, useContractWrite, useSignMessage } from 'wagmi';

const Auction = ({ params }: { params: { id: string[] } }) => {
  const { data: session } = useSession();
  const { data, error } = useQuery({
    queryKey: ['auction', `${params.id[0]}`],
    queryFn: () => api(`http://localhost:3000/api/auction/${params.id[0]}`),
    refetchInterval: 1000,
  });
  const { signMessageAsync } = useSignMessage();

  const higestBid = data?.data.auction.bids.sort(
    (a: any, b: any) => b.amount - a.amount
  )[0];
  // console.log(higestBid);

  const contractWrite = useContractWrite({
    mode: 'recklesslyUnprepared',
    addressOrName: '0xb1567FD318D3FC9662edE4D9D1FF74319B259609',
    contractInterface: erc20ABI,
    functionName: 'approve',
  });

  const contractWriteTransfer = useContractWrite({
    mode: 'recklesslyUnprepared',
    addressOrName: '0xb1567FD318D3FC9662edE4D9D1FF74319B259609',
    contractInterface: erc20ABI,
    functionName: 'transferFrom',
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
          data?.data.auction.user.address,
          // values.newBid,
          ethers.utils.parseUnits(values.newBid.toString()),
        ],
      });
      console.log({
        signature,
        userAddress: session?.user.address,
        amount: values.newBid,
        auctionId: data?.data.auction.id,
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

  useEffect(() => {
    if (data?.data) {
      formik.setFieldValue('newBid', data?.data.auction.CurrentPrice);
    }
  }, [data?.data]);

  const expireDateToFormat = data?.data.auction.expireDate;
  const expireDate: any = new Date(expireDateToFormat);
  const actualDate: any = new Date();
  const diffTime = Math.abs(expireDate - actualDate);

  const diffTimeSec = Math.floor(diffTime / 1000);

  // FROM 0x69e952d100e786aaa6b63a3473d67ccaf1183271
  //SPENDER 0x8cDb08dD113ca08465F81ACC9b2F24A85cC3ef70
  const endAuction = async () => {
    console.log({
      1: higestBid.user.address,
      2: data?.data.auction.user.address,
    });
    await contractWriteTransfer.writeAsync({
      recklesslySetUnpreparedArgs: [
        higestBid.user.address,
        data?.data.auction.user.address,
        ethers.utils.parseUnits(higestBid.amount.toString()),
        // higestBid.amount,
      ],
    });
    toast.success(
      `Uźytkownik o adresie ${higestBid.user.address} wygrał licytację, zakupuł auto za ${higestBid.amount} $CN (Code Night Coin).`
    );
  };
  if (diffTimeSec <= 0) {
    (async () => {
      await endAuction();
    })();
  }

  let carData = data?.data.auction;

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
              Aktualna oferta: {data?.data.auction.CurrentPrice} $CN
            </h3>
          </div>
          <div className=" flex flex-col my-auto">
            <h5 className="text-center text-semibold text-black my-2">
              Oferta wygasa za: {diffTimeSec} sekund
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
            <div className="my-2 flex justify-center mx-8">
              {session?.user.address === data?.data.auction.user.address && (
                <Button onClick={() => endAuction()}>
                  Odbierz swoje tokeny
                </Button>
              )}
            </div>
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

      <h3 className="text-white bg-black p-2 rounded-t-xl">Dane samochodu:</h3>
      <div className="grid grid-cols-4 grid-rows-2">
        <div className="bg-primary-orange text-center p-1">
          <span className="mx-auto block w-32 bg-blue-100 text-blue-800 text-xs font-semibold py-2 rounded dark:bg-black dark:text-white">
            Marka
          </span>
          <div className="text-center p-1">{carData.mark}</div>
        </div>
        <div className="bg-primary-orange text-center p-1">
          <span className="mx-auto block w-32 bg-blue-100 text-blue-800 text-xs font-semibold py-2 rounded dark:bg-black dark:text-white">
            Model
          </span>
          <div className="text-center p-1">{carData.model}</div>
        </div>
        <div className="bg-primary-orange text-center p-1">
          <span className="mx-auto block w-32 bg-blue-100 text-blue-800 text-xs font-semibold py-2 rounded dark:bg-black dark:text-white">
            Rok Produkcji
          </span>
          <div className="text-center p-1">{carData.year}</div>
        </div>
        <div className="bg-primary-orange text-center p-1">
          <span className="mx-auto block w-32 bg-blue-100 text-blue-800 text-xs font-semibold py-2 rounded dark:bg-black dark:text-white">
            Przebieg
          </span>
          <div className="text-center p-1">{carData.mileage}</div>
        </div>
        <div className="bg-primary-orange text-center p-1">
          <span className="mx-auto block w-32 bg-blue-100 text-blue-800 text-xs font-semibold py-2 rounded dark:bg-black dark:text-white">
            Uszkodzony
          </span>
          <div className="text-center p-1">{carData.mark ? 'nie' : 'tak'}</div>
        </div>
        <div className="bg-primary-orange text-center p-1">
          <span className="mx-auto block w-32 bg-blue-100 text-blue-800 text-xs font-semibold py-2 rounded dark:bg-black dark:text-white">
            Numer VIN
          </span>
          <div className="text-center p-1">{carData.vin}</div>
        </div>
        <div className="bg-primary-orange text-center p-1">
          <span className="mx-auto block w-32 bg-blue-100 text-blue-800 text-xs font-semibold py-2 rounded dark:bg-black dark:text-white">
            Rodzaj paliwa
          </span>
          <div className="text-center p-1">{carData.fuelType}</div>
        </div>
        <div className="bg-primary-orange text-center p-1">
          <span className="mx-auto block w-32 bg-blue-100 text-blue-800 text-xs font-semibold py-2 rounded dark:bg-black dark:text-white">
            Konie mechaniczne
          </span>
          <div className="text-center p-1">{carData.enginePower}</div>
        </div>
      </div>

      {bids
        ? bids.map((bid: any) => (
            <div className="flex gap-4">
              <div className="flex w-fit p-4 my-4 flex-col justify-center items-center border border-primary-orange">
                <div className="flex gap-2">
                  <UserIcon
                    width={24}
                    height={24}
                  />
                  <h4>{bid?.user.address}</h4>
                </div>
                <h3>{bid?.amount}$</h3>
              </div>
            </div>
          ))
        : ''}
    </main>
  ) : (
    <PageSpinner />
  );
};

export default Auction;
