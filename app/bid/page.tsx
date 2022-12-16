'use client';

import { Button, Input } from '@/components/utils';
import { api } from '@/lib/apiConfig';
import { useSession } from 'next-auth/react';
import { ChangeEvent, useState } from 'react';
import { erc20ABI, useContract, useContractWrite, useSignMessage } from 'wagmi';

const handleInputPattern = (amount: string) => {
  // 7 digits exponent, 18 mantissa
  let match = amount.match(/^(\d{0,7}[.]\d{0,18})$|^(\d{0,7})$/g);
  //@ts-ignore
  if (match) match = match[0] === '.' ? '0.' : match[0];
  return match;
};

export default function Page() {
  const { data } = useSession();
  const { signMessageAsync } = useSignMessage();
  const [amount, setAmount] = useState('0');
  const auctionId = '1';

  const contract = useContract({
    addressOrName: '0xb1567FD318D3FC9662edE4D9D1FF74319B259609',
    contractInterface: erc20ABI,
    //  address: '0xb1567FD318D3FC9662edE4D9D1FF74319B259609',
    //  abi: ensRegistryABI,
  });

  // const contractWrite = useContractWrite({
  //   mode: 'recklesslyUnprepared',
  //   addressOrName: '0xb1567FD318D3FC9662edE4D9D1FF74319B259609',
  //   contractInterface: erc20ABI,
  //   functionName: 'transferFrom',
  // });
  const contractWrite = useContractWrite({
    mode: 'recklesslyUnprepared',
    addressOrName: '0xb1567FD318D3FC9662edE4D9D1FF74319B259609',
    contractInterface: erc20ABI,
    functionName: 'approve',
    //kto moze wydac (zabrac z ogloszeni address) - amount
    args: ['0x69e952d100e786aaa6b63a3473d67ccaf1183271', amount],
  });

  const handleBid = async () => {
    const signature = await signMessageAsync({
      message: `You bit ${amount} $CN`,
    });

    await contractWrite.writeAsync();
    // console.log(signature);

    //TODO make transferFrom

    const res = api('/bid', {
      data: { signature, user: data?.user, amount, auctionId },
    });
  };

  const handleAmount = (event: ChangeEvent<HTMLInputElement>) => {
    const match = handleInputPattern(event?.target?.value);
    if (match !== null) {
      //@ts-ignore
      setAmount(match);
    }
  };

  return (
    <main className="mt-96">
      <Input
        onChange={handleAmount}
        value={amount}
        label="Amount"
        type="text"
        inputMode="decimal"
        autoComplete="off"
        autoCorrect="off"
      />
      <Button onClick={() => handleBid()}>Make bid</Button>
    </main>
  );
}
