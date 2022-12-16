// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { cloudinary } from '@/lib/cloudinary';
import { prisma } from '@/lib/prisma';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    console.log(req.body);

    //CREATE IMAGE
    const {
      file,
      fileName,
      userAddress,
      crashed,
      CurrentPrice,
      enginePower,
      fuelType,
      mark,
      mileage,
      model,
      VIN,
      year,
    } = req.body;

    const uploadResponse = await cloudinary.uploader.upload(file, {
      upload_preset: 'code-night-3',
      folder: 'code-night-3',
    });

    const auction = prisma.auction.create({
      data: {
        crashed,
        CurrentPrice,
        enginePower,
        fuelType,
        mark,
        mileage,
        model,
        VIN,
        year,
        user: { connect: { address: userAddress } },
        image: {
          create: {
            affixUrl: uploadResponse.public_id,
            fileName,
            id: uploadResponse.public_id,
            url: uploadResponse.secure_url,
            user: { connect: {} },
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
}
