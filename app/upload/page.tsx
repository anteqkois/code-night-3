'use client';

import { Button, Card, Input } from '@/components/utils';
import { api } from '@/lib/apiConfig';
import { useFormik } from 'formik';
import { useSession } from 'next-auth/react';
import { useRef, useState } from 'react';

type InitialState = { file: File | null };
const InitialState: InitialState = { file: null };

export default function Page() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [previewImage, setPreviewImage] = useState<string>();
  const [imageUrl, setImageUrl] = useState<string>('');
  const { data } = useSession();

  const formik = useFormik({
    initialValues: InitialState,
    onSubmit: async (values) => {
      if (values.file) {
        const reader = new FileReader();
        reader.readAsDataURL(values.file);

        reader.onloadend = async () => {
          const response = await api('/upload', {
            method: 'post',
            data: JSON.stringify({
              file: reader.result,
              fileName: values.file?.name,
              type: values.file?.type,
              size: values.file?.size,
              userId: data?.user.id,
            }),
            headers: { 'Content-Type': 'application/json' },
          });
          // console.log(response);
          setImageUrl(response.data.file.url);
          setPreviewImage('');
        };
      }
    },
  });

  return (
    <main>
      <Card>
        <form onSubmit={formik.handleSubmit}>
          <Button
            type="button"
            onClick={() => inputRef.current?.click()}
          >
            Choose image
          </Button>
          <Input
            ref={inputRef}
            type="file"
            label="Image"
            id="file"
            name="file"
            onChange={(event) => {
              const file = event.target.files?.[0];
              if (file) {
                const reader = new FileReader();
                reader.readAsDataURL(file);

                reader.onloadend = () => {
                  setPreviewImage(reader.result as string);
                  // formik.setFieldValue('file', reader.result);
                };

                formik.setFieldValue('file', event.currentTarget.files?.[0]);
              }
            }}
            accept="image/png, image/jpeg"
            className="hidden"
          />
          <Button type="submit">Submit</Button>
        </form>
        {previewImage && (
          <img
            src={previewImage}
            className="mt-4 max-w-2xl"
          />
        )}
        {imageUrl && (
          <>
            <h2>From Cloudinary</h2>
            <img
              src={imageUrl}
              className="mt-4 max-w-2xl"
            />
          </>
        )}
      </Card>
    </main>
  );
}
