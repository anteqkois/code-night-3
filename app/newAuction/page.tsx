import { useFormik } from 'formik';

const NewAuction = () => {
  return (
    <main className="flex justify-center w-full min-h-screen">
      <div className="w-2/3 ">
        <div className="mx-28 my-6">
          <h1>Stwórz Aukcję</h1>
        </div>
        <div className="h-1 w-full bg-primary-orange" />
        <div className="mx-20 mt-8">
          <form>
            <div className="mb-6">
              <label
                htmlFor="title"
                className="block mb-2 text-md font-medium text-black"
              >
                Tytuł aukcji:
              </label>
              <input
                type="text"
                id="title"
                className="bg-secondary-gray border border-primary-navy text-black text-sm rounded-lg focus:ring-primary-orange focus:border-primary-orange block w-full p-2.5 "
                placeholder="Tytuł..."
                required
              />
            </div>
            <div className="flex gap-20">
              <div className="mb-6 w-1/2">
                <label
                  htmlFor="brand"
                  className="block mb-2 text-md font-medium text-black"
                >
                  Marka:
                </label>
                <input
                  type="text"
                  id="brand"
                  className="bg-secondary-gray border border-primary-navy text-black text-sm rounded-lg focus:ring-primary-orange focus:border-primary-orange block w-full p-2.5 "
                  placeholder="Marka..."
                  required
                />
              </div>
              <div className="mb-6 w-1/2">
                <label
                  htmlFor="email"
                  className="block mb-2 text-md font-medium text-black"
                >
                  Model:
                </label>
                <input
                  type="text"
                  id="model"
                  className="bg-secondary-gray border border-primary-navy text-black text-sm rounded-lg focus:ring-primary-orange focus:border-primary-orange block w-full p-2.5 "
                  placeholder="Model..."
                  required
                />
              </div>
            </div>
            <div className="flex gap-20">
              <div className="mb-6 w-1/2">
                <label
                  htmlFor="year"
                  className="block mb-2 text-md font-medium text-black"
                >
                  Rok produkcji:
                </label>
                <input
                  type="number"
                  id="year"
                  className="bg-secondary-gray border border-primary-navy text-black text-sm rounded-lg focus:ring-primary-orange focus:border-primary-orange block w-full p-2.5 "
                  placeholder="Rok produkcji..."
                  required
                />
              </div>
              <div className="mb-6 w-1/2">
                <label
                  htmlFor="course"
                  className="block mb-2 text-md font-medium text-black"
                >
                  Przebieg:
                </label>
                <input
                  type="number"
                  id="course"
                  className="bg-secondary-gray border border-primary-navy text-black text-sm rounded-lg focus:ring-primary-orange focus:border-primary-orange block w-full p-2.5 "
                  placeholder="Przebieg..."
                  required
                />
              </div>
            </div>
            <div className="flex gap-20">
              <div className="mb-6 w-1/2">
                <p className="font-medium mb-2 text-black ">Uszkodzony</p>
                <ul className="items-center w-full text-sm font-medium text-black bg-white flex">
                  <li className="w-full">
                    <div className="flex items-center pl-3">
                      <input
                        id="damaged-yes"
                        type="radio"
                        value=""
                        name="damaged-yes"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                      />
                      <label
                        htmlFor="horizontal-list-radio-license"
                        className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Tak
                      </label>
                    </div>
                  </li>
                  <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                    <div className="flex items-center pl-3">
                      <input
                        id="horizontal-list-radio-id"
                        type="radio"
                        value=""
                        name="list-radio"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      />
                      <label
                        htmlFor="horizontal-list-radio-id"
                        className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Nie
                      </label>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="mb-6 w-1/2">
                <label
                  htmlFor="course"
                  className="block mb-2 text-md font-medium text-black"
                >
                  Cena początkowa:
                </label>
                <input
                  type="number"
                  id="course"
                  className="bg-secondary-gray border border-primary-navy text-black text-sm rounded-lg focus:ring-primary-orange focus:border-primary-orange block w-full p-2.5 "
                  placeholder="Przebieg..."
                  required
                />
              </div>
            </div>
            <div className="flex items-start mb-6">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                  required
                />
              </div>
              <label
                htmlFor="remember"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Remember me
              </label>
            </div>
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="w-1/3 bg-blue-500"></div>
    </main>
  );
};

export default NewAuction;
