// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma } from '@/lib/prisma';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { userAddress, auctionId, amount, signature } = req.body;

  try {
    const bid = await prisma.bid.create({
      data: {
        amount,
        signature,
        auction: { connect: { id: auctionId } },
        user: { connect: { address: userAddress } },
      },
      include: { auction: true, user: true },
    });

    await prisma.auction.update({
      where: { id: auctionId },
      data: { CurrentPrice: amount },
    });
    // const updatedAuction = await prisma.auction.update({
    //   where: { id: auctionId },
    //   data: { CurrentPrice: amount },
    // });
    // const updatedAuction = await prisma.auction.update({
    //   data:{CurrentPrice: amount, }
    // });

    // console.log(updatedAuction);

    // console.log(bid);
    res.status(200).json({ bid });
  } catch (error) {
    console.error(error);
    res.status(500).json({ err: 'Something went wrong' });
  }
}
