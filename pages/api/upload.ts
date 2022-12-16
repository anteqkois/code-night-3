// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { cloudinary } from '@/lib/cloudinary';
import { prisma } from '@/lib/prisma';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { file, fileName, userId } = req.body;
    const uploadResponse = await cloudinary.uploader.upload(file, {
      upload_preset: 'code-night-3',
      folder: 'code-night-3',
    });

    const createdFile = await prisma.file.create({
      data: {
        affixUrl: uploadResponse.public_id,
        fileName,
        id: uploadResponse.public_id,
        url: uploadResponse.secure_url,
        user: { connect: { id: userId } },
      },
    });

    res.status(200).json({ file: createdFile });
  } catch (err) {
    console.error(err);
    res.status(500).json({ err: 'Something went wrong' });
  }
}
