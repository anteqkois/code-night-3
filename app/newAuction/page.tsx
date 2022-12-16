'use client';

import { Button } from '@/components/utils';
import { useFormik } from 'formik';

const NewAuction = () => {
  const formik = useFormik({
    initialValues: {
      title: '',
      brand: '',
      model: '',
      year: '',
      course: '',
      radioValue: '',
      price: '',
      vin: '',
      engine: '',
      power: '',
      terms: '',
    },

    onSubmit: (values) => {
      console.log(values);
    },
  });

  const handleRadioButtons = (e: any) => {
    formik.values.radioValue = e.target.value;
  };

  const handleCheckbox = (e: any) => {
    formik.values.terms = e.target.value;
  };

  return (
    <main className="flex justify-center w-full min-h-screen">
      <div className="w-2/3 ">
        <div className="mx-28 my-6">
          <h1>Stwórz Aukcję</h1>
        </div>
        <div className="h-1 w-full bg-primary-orange" />
        <div className="mx-20 mt-8">
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
                  htmlFor="brand"
                  className="block mb-2 text-md font-medium text-black"
                >
                  Marka:
                </label>
                <input
                  type="text"
                  id="brand"
                  name="brand"
                  value={formik.values.brand}
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
                  htmlFor="course"
                  className="block mb-2 text-md font-medium text-black"
                >
                  Przebieg:
                </label>
                <input
                  type="number"
                  id="course"
                  name="course"
                  value={formik.values.course}
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
                        value="damaged"
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
                        value="not-damaged"
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
                  htmlFor="price"
                  className="block mb-2 text-md font-medium text-black"
                >
                  Cena początkowa($):
                </label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  value={formik.values.price}
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
                  id="engine"
                  className="block w-full h-[42px] p-2 mb-3 text-sm text-black border border-black rounded-lg bg-white focus:border-primary-orange"
                  name="engine"
                  value={formik.values.engine}
                  onChange={formik.handleChange}
                >
                  <option value="Diesel">Diesel</option>
                  <option value="Benzyna">Benzyna</option>
                  <option value="BenzLpg">Benzyna + LPG</option>
                </select>
              </div>
              <div className="mb-3 w-1/2">
                <label
                  htmlFor="power"
                  className="block mb-2 text-md font-medium text-black"
                >
                  Moc (km):
                </label>
                <input
                  type="number"
                  id="power"
                  name="power"
                  value={formik.values.power}
                  onChange={formik.handleChange}
                  className="bg-white border border-primary-navy text-black text-sm rounded-lg focus:ring-primary-orange focus:border-primary-orange block w-full p-2.5 "
                  placeholder="Moc..."
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
      <div className="w-1/3 bg-blue-500"></div>
    </main>
  );
};

export default NewAuction;
