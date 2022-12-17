// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { cloudinary } from '@/lib/cloudinary';
import { prisma } from '@/lib/prisma';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case 'POST':
      try {
        // console.log(req.body);

        //CREATE IMAGE
        const {
          file,
          fileName,
          userAddress,
          userId,
          title,
          crashed,
          CurrentPrice,
          enginePower,
          fuelType,
          mark,
          mileage,
          model,
          vin,
          year,
        } = req.body;

        const uploadResponse = await cloudinary.uploader.upload(file, {
          upload_preset: 'code-night-3',
          folder: 'code-night-3',
        });

        const auction = await prisma.auction.create({
          data: {
            title,
            crashed,
            CurrentPrice,
            enginePower,
            fuelType,
            mark,
            mileage,
            model,
            vin,
            year,
            user: { connect: { address: userAddress } },
            image: {
              create: {
                affixUrl: uploadResponse.public_id,
                fileName,
                id: uploadResponse.public_id,
                url: uploadResponse.secure_url,
                user: { connect: { id: userId } },
              },
            },
          },
          include: { bids: true, image: true, user: true },
        });

        // TODO create Bid and assign to auction PRISMA

        res.status(200).json({ auction });
      } catch (err) {
        console.error(err);
        res.status(500).json({ err: 'Something went wrong' });
      }
      break;

    default:
      const auctions = await prisma.auction.findMany({
        include: { bids: true, image: true, user: true },
      });
      res.status(200).json({ auctions });
      break;
  }
}
