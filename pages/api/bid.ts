// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma } from '@/lib/prisma';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // console.log(req.body);
    const { user, auctionId, amount, signature } = req.body;

    try {
      const bid = await prisma.bid.create({data:{amount}})
    } catch (error) {
      
    }

    // TODO create Bid and assign to auction PRISMA

    res.status(200).json({});
  } catch (err) {
    console.error(err);
    res.status(500).json({ err: 'Something went wrong' });
  }
}
