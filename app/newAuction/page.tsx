'use client';

import { Button } from '@/components/utils';
import { api } from '@/lib/apiConfig';
import { useFormik } from 'formik';
import { useSession } from 'next-auth/react';
import { useRef, useState } from 'react';
import { toast } from 'react-hot-toast';
import { any } from 'zod';

type InitialValues = {
  title: string;
  mark: string;
  model: string;
  year: number;
  mileage: string;
  radioValue: string;
  CurrentPrice: string;
  vin: string;
  fuelType: string;
  enginePower: string;
  terms: string;
  file: File | null;
  expireDate: any;
};

const initialValues: InitialValues = {
  title: '',
  mark: '',
  model: '',
  year: 0,
  mileage: '',
  radioValue: '',
  CurrentPrice: '',
  vin: '',
  fuelType: '',
  enginePower: '',
  terms: '',
  file: null,
  expireDate: '',
};

const NewAuction = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [previewImage, setPreviewImage] = useState<string>();
  const [imageUrl, setImageUrl] = useState<string>('');
  const { data } = useSession();
  const formik = useFormik({
    initialValues,

    onSubmit: async (values) => {
      console.log(values);
      try {
        const reader = new FileReader();
        reader.readAsDataURL(values.file!);

        reader.onloadend = async () => {
          const res = await api('/auction', {
            method: 'post',
            data: {
              ...values,
              userAddress: data?.user.address,
              file: reader.result,
              fileName: values.file?.name,
              crashed: values.radioValue === 'true',
              userId: data?.user.id,
            },
          });
          toast.success('Twoje ogłoszenie zostało dodane !');
          //TODO przekierować na stronę ogłoszenia
          console.log(res);
        };
      } catch (error) {
        console.log(error);
        toast.error('Coś poszło nie tak, twoje ogłoszenie nie zostało dodane.');
      }
    },
  });

  const handleRadioButtons = (e: any) => {
    formik.values.radioValue = e.target.value;
  };

  const handleCheckbox = (e: any) => {
    formik.values.terms = e.target.value;
  };

  return (
    <main className="flex justify-center w-full">
      <div className="w-2/3 flex flex-col">
        <div className="mx-28 my-4">
          <h1>Stwórz Aukcję</h1>
        </div>
        <div className="h-1 w-full bg-primary-orange" />
        <div className="mx-20 mt-4">
          <form onSubmit={formik.handleSubmit}>
            <div className="mb-3">
              <label
                htmlFor="title"
                className="block mb-2 text-md font-medium text-black"
              >
                Tytuł aukcji:
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formik.values.title}
                onChange={formik.handleChange}
                className="bg-white border border-primary-navy text-black text-sm rounded-lg focus:ring-primary-orange focus:border-primary-orange block w-full p-2.5 "
                placeholder="Tytuł..."
                required
              />
            </div>
            <div className="flex gap-20">
              <div className="mb-3 w-1/2">
                <label
                  htmlFor="mark"
                  className="block mb-2 text-md font-medium text-black"
                >
                  Marka:
                </label>
                <input
                  type="text"
                  id="mark"
                  name="mark"
                  value={formik.values.mark}
                  onChange={formik.handleChange}
                  className="bg-white border border-primary-navy text-black text-sm rounded-lg focus:ring-primary-orange focus:border-primary-orange block w-full p-2.5 "
                  placeholder="Marka..."
                  required
                />
              </div>
              <div className="mb-3 w-1/2">
                <label
                  htmlFor="model"
                  className="block mb-2 text-md font-medium text-black"
                >
                  Model:
                </label>
                <input
                  type="text"
                  id="model"
                  name="model"
                  value={formik.values.model}
                  onChange={formik.handleChange}
                  className="bg-white border border-primary-navy text-black text-sm rounded-lg focus:ring-primary-orange focus:border-primary-orange block w-full p-2.5 "
                  placeholder="Model..."
                  required
                />
              </div>
            </div>
            <div className="flex gap-20">
              <div className="mb-3 w-1/2">
                <label
                  htmlFor="year"
                  className="block mb-2 text-md font-medium text-black"
                >
                  Rok produkcji:
                </label>
                <input
                  type="number"
                  id="year"
                  name="year"
                  value={formik.values.year}
                  onChange={formik.handleChange}
                  className="bg-white border border-primary-navy text-black text-sm rounded-lg focus:ring-primary-orange focus:border-primary-orange block w-full p-2.5 "
                  placeholder="Rok produkcji..."
                  required
                />
              </div>
              <div className="mb-3 w-1/2">
                <label
                  htmlFor="mileage"
                  className="block mb-2 text-md font-medium text-black"
                >
                  Przebieg:
                </label>
                <input
                  type="number"
                  id="mileage"
                  name="mileage"
                  value={formik.values.mileage}
                  onChange={formik.handleChange}
                  className="bg-white border border-primary-navy text-black text-sm rounded-lg focus:ring-primary-orange focus:border-primary-orange block w-full p-2.5 "
                  placeholder="Przebieg..."
                  required
                />
              </div>
            </div>
            <div className="flex gap-20">
              <div className="mb-3 w-1/2">
                <p className="font-medium mb-2 text-black ">Uszkodzony</p>
                <ul className="items-center w-full text-sm font-medium text-black bg-white flex">
                  <li className="w-full">
                    <div className="flex items-center pl-3">
                      <input
                        id="horizontal-list-radio-license"
                        type="radio"
                        value="true"
                        onChange={(e) => handleRadioButtons(e)}
                        name="radio"
                        className="w-4 h-4 text-primary-orange bg-white accent-primary-orange"
                      />
                      <label
                        htmlFor="horizontal-list-radio-license"
                        className="py-3 ml-2 w-full text-sm font-medium text-black"
                      >
                        Tak
                      </label>
                    </div>
                  </li>
                  <li className="w-full">
                    <div className="flex items-center pl-3">
                      <input
                        id="horizontal-list-radio-id"
                        type="radio"
                        value="false"
                        onChange={(e) => handleRadioButtons(e)}
                        name="radio"
                        className="w-4 h-4 text-primary-orange bg-white accent-primary-orange"
                      />
                      <label
                        htmlFor="horizontal-list-radio-id"
                        className="py-3 ml-2 w-full text-sm font-medium text-black"
                      >
                        Nie
                      </label>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="mb-3 w-1/2">
                <label
                  htmlFor="CurrentPrice"
                  className="block mb-2 text-md font-medium text-black"
                >
                  Cena początkowa($):
                </label>
                <input
                  type="number"
                  id="CurrentPrice"
                  name="CurrentPrice"
                  step="0.01"
                  value={formik.values.CurrentPrice}
                  onChange={formik.handleChange}
                  className="bg-white border border-primary-navy text-black text-sm rounded-lg focus:ring-primary-orange focus:border-primary-orange block w-full p-2.5 "
                  placeholder="Cena..."
                  required
                />
              </div>
            </div>

            <div className="mb-3">
              <label
                htmlFor="vin"
                className="block mb-2 text-md font-medium text-black"
              >
                VIN:
              </label>
              <input
                type="text"
                id="vin"
                name="vin"
                value={formik.values.vin}
                onChange={formik.handleChange}
                className="bg-white border border-primary-navy text-black text-sm rounded-lg focus:ring-primary-orange focus:border-primary-orange block w-full p-2.5 "
                placeholder="VIN..."
                required
              />
            </div>
            <div className="flex gap-20">
              <div className="mb-3 w-1/2">
                <label
                  htmlFor="small"
                  className="block mb-2 font-medium text-black"
                >
                  Rodzaj paliwa:
                </label>
                <select
                  id="fuelType"
                  className="block w-full h-[42px] p-2 mb-3 text-sm text-black border border-black rounded-lg bg-white focus:border-primary-orange"
                  name="fuelType"
                  value={formik.values.fuelType}
                  onChange={formik.handleChange}
                >
                  <option value="Diesel">Diesel</option>
                  <option value="Benzyna">Benzyna</option>
                  <option value="BenzLpg">Benzyna + LPG</option>
                </select>
              </div>
              <div className="mb-3 w-1/2">
                <label
                  htmlFor="enginePower"
                  className="block mb-2 text-md font-medium text-black"
                >
                  Moc (km):
                </label>
                <input
                  type="number"
                  id="enginePower"
                  name="enginePower"
                  value={formik.values.enginePower}
                  onChange={formik.handleChange}
                  className="bg-white border border-primary-navy text-black text-sm rounded-lg focus:ring-primary-orange focus:border-primary-orange block w-full p-2.5 "
                  placeholder="Moc..."
                  required
                />
              </div>
            </div>
            <div className="flex flex-col items-start mb-3">
              <div className="flex items-center h-5">
                <input
                  // id="terms"
                  // name="terms"
                  // type="checkbox"
                  // value="accepted"
                  // onChange={(e) => handleCheckbox(e)}
                  // className="w-4 h-4 bg-black rounded border border-black accent-primary-orange"
                  // required
                  ref={inputRef}
                  type="file"
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

                      formik.setFieldValue(
                        'file',
                        event.currentTarget.files?.[0]
                      );
                    }
                  }}
                  accept="image/png, image/jpeg"
                  className="hidden"
                />
              </div>
              <div className="flex flex-col mr-3">
                <Button
                  type="button"
                  onClick={() => inputRef.current?.click()}
                  className="max-w-[121px] mb-3"
                >
                  Dodaj zdjęcie
                </Button>
                {previewImage && (
                  <>
                    <p className="block mb-2 text-md font-medium text-black">
                      Wybrane zdjęcie
                    </p>
                    <img
                      src={previewImage}
                      className="my-4 max-w-4xl"
                    />
                  </>
                )}
              </div>
              <div className="mr-3 flex gap-3">
                <label
                  htmlFor="title"
                  className="block mb-2 text-md font-medium text-black w-fit"
                >
                  Data wygaśnięcia:
                </label>
                <input
                  type="datetime-local"
                  id="expireDate"
                  name="expireDate"
                  value={formik.values.expireDate}
                  onChange={formik.handleChange}
                  className="bg-white border border-primary-navy text-black text-sm rounded-lg focus:ring-primary-orange focus:border-primary-orange block w-full p-2.5 "
                  required
                />
              </div>
            </div>
            <div className="flex items-start mb-3">
              <div className="flex items-center h-5">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  value="accepted"
                  onChange={(e) => handleCheckbox(e)}
                  className="w-4 h-4 bg-black rounded border border-black accent-primary-orange"
                  required
                />
              </div>
              <label
                htmlFor="terms"
                className="ml-2 text-sm font-medium text-black"
              >
                Akceptuję regulamin
              </label>
            </div>
            <Button type="submit">Dodaj Aukcję</Button>
          </form>
        </div>
      </div>
      <div className="w-1/3 min-h-screen bg-[url('https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGNhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60')] bg-cover bg-no-repeat blur-sm"></div>
    </main>
  );
};

export default NewAuction;
