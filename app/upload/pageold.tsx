'use client';
import { Button, Card, Input } from '@/components/utils';
import { useFormik } from 'formik';

type InitialState = { file: File | null };
const InitialState: InitialState = { file: null };

export default async function Page() {
  // const formik = useFormik({
  //   initialValues: InitialState,
  //   onSubmit: (values) => {
  //     console.log(values.file);

  //     console.log(
  //       JSON.stringify(
  //         {
  //           fileName: values.file?.name,
  //           type: values.file?.type,
  //           size: `${values.file?.size} bytes`,
  //         },
  //         null,
  //         2
  //       )
  //     );
  //   },
  // });

  return (
    <main>
      <Card>
        {/* <form onSubmit={formik.handleSubmit}>
          <Input
            type="file"
            label="Image"
            id="file"
            name="file"
            onChange={(event) => {
              formik.setFieldValue('file', event.currentTarget.files?.[0]);
            }}
            // onChange={formik.handleChange}
            // value={formik.values.file}
            // error={formik.errors.file}
          />
        </form> */}
      </Card>
    </main>
  );
}
