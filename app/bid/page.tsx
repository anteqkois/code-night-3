'use client';

import { erc20ABI, useContractWrite } from 'wagmi';

export default function Page() {
  const higestBid = { amount: 34124, user: '', auction: '' };

  const contractWrite = useContractWrite({
    mode: 'recklesslyUnprepared',
    addressOrName: '0xb1567FD318D3FC9662edE4D9D1FF74319B259609',
    contractInterface: erc20ABI,
    functionName: 'transferFrom',
  });
  // const data?.data.auction.CurrentPrice;
  // od kogo - do kogo - ile
  // contractWrite.writeAsync({
  //   recklesslySetUnpreparedArgs: [
  //     higestBid.user.address,
  //     data?.data.auction.user.address,
  //     higestBid.amount,
  //   ],
  // });
  return <main></main>;
}
