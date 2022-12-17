import Image from 'next/image';
import Button from '../src/components/utils/Button';
import SliderCarousel from '../src/components/utils/SliderCarousel';

export default function Home() {
  return (
    <div>
      <main>
        <div className="h-[calc(100vh-91px)] flex justify-center items-start pt-20 bg-gradient-to-r from-primary-orange to-blue-500e">
          <div className="w-[450px] h-96 mr-20 rounded shadow-2xl bg-white p-2">
            <h1 className="text-center pt-2 text-3xl">AUKCJE SAMOCHODOWE</h1>
            <div className="flex justify-evenly pt-2">
              <span className="bg-black rounded px-2 py-[2px] text-white">
                Licytacje
              </span>
              <span className="bg-black rounded px-2 py-[2px] text-white">
                Dostawa pod dom
              </span>
              <span className="bg-black rounded px-2 py-[2px] text-white">
                Odprawa celna
              </span>
            </div>
<<<<<<< HEAD
            <button className="mt-3 flex justify-center items-center py-2.5 px-2 text-center w-full text-sm font-medium text-black bg-primary-orange rounded-lg focus:ring-4 focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.902 7.098a3.75 3.75 0 013.903-.884.75.75 0 10.498-1.415A5.25 5.25 0 008.005 9.75H7.5a.75.75 0 000 1.5h.054a5.281 5.281 0 000 1.5H7.5a.75.75 0 000 1.5h.505a5.25 5.25 0 006.494 2.701.75.75 0 00-.498-1.415 3.75 3.75 0 01-4.252-1.286h3.001a.75.75 0 000-1.5H9.075a3.77 3.77 0 010-1.5h3.675a.75.75 0 000-1.5h-3c.105-.14.221-.274.348-.402z"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="pl-1">Zacznij licytować</span>
            </button>
            <div className="h-48 mt-4 flex justify-center items-center">
              <img
                src="https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../releases/preview/2018/png/iconmonstr-gavel-1.png&r=0&g=0&b=0"
                width={150}
                alt="bid"
              />
=======
            <div className='m-5 h-64 mt-4 flex flex-col justify-center items-center bg-primary-orange rounded'>
              <img src="https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../releases/preview/2018/png/iconmonstr-gavel-1.png&r=0&g=0&b=0" width={150} alt="bid" />
              <span className='pl-1 font-medium pt-4'>Zacznij licytować już teraz</span>
>>>>>>> e921b94e674531ac60aab09124c8946361e6ded0
            </div>
          </div>
          <form className="bg-white w-[450px] h-96 rounded shadow-2xl">
            <h2 className="text-black text-center py-2 text-xl  border-b-2 border-white">
              Samochody osobowe
            </h2>
            <div className="grid grid-cols-2 mt-2">
              <div className="p-2">
                <label
                  htmlFor="small"
                  className="block mb-2 pl-2 text-sm font-medium text-gray-900 dark:text-black"
                >
                  Marka
                </label>
                <select
                  id="small"
                  className="block w-full p-2 mb-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-black dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option selected>Wybierz marke</option>
                  <option value="Audi">Audi</option>
                  <option value="Mercedes">Mercedes</option>
                  <option value="Seat">Seat</option>
                </select>
              </div>
              <div className="p-2">
                <label
                  htmlFor="small"
                  className="block mb-2 pl-2 text-sm font-medium text-gray-900 dark:text-black"
                >
                  Model pojazdu
                </label>
                <select
                  id="small"
                  className="block w-full p-2 mb-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-black dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option selected>Wybierz model</option>
                  <option value="Audi">Audi</option>
                  <option value="Mercedes">Mercedes</option>
                  <option value="Seat">Seat</option>
                </select>
              </div>
              <div className="p-2 pt-0">
                <label
                  htmlFor="visitors"
                  className="block mb-2 pl-2 text-sm font-medium text-gray-900 dark:text-black"
                >
                  Rocznik
                </label>
                <input
                  type="number"
                  id="visitors"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-black dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                />
              </div>
              <div className="p-2 pt-0">
                <label
                  htmlFor="visitors"
                  className="block mb-2 pl-2 text-sm font-medium text-gray-900 dark:text-black"
                >
                  Maksymalny przebieg
                </label>
                <input
                  type="number"
                  id="visitors"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-black dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                />
              </div>
              <div className="p-2 pt-0">
                <label
                  htmlFor="visitors"
                  className="block mb-2 pl-2 text-sm font-medium text-gray-900 dark:text-black"
                >
                  Minimalna cena
                </label>
                <input
                  type="number"
                  id="visitors"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-black dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                />
              </div>
              <div className="p-2 pt-0">
                <label
                  htmlFor="visitors"
                  className="block mb-2 pl-2 text-sm font-medium text-gray-900 dark:text-black"
                >
                  Maksymalna cena
                </label>
                <input
                  type="number"
                  id="visitors"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-black dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                />
              </div>
              <div className="col-span-2 p-2">
                <button
                  type="submit"
                  className="flex justify-center items-center py-2.5 px-2 text-center w-full text-sm font-medium text-black bg-primary-orange rounded-lg focus:ring-4 focus:outline-none"
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 mr-2 -ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                  Wyszukaj
                </button>
              </div>
            </div>
          </form>
        </div>
        <div>
          <div className="bg-gradient-to-r from-primary-orange my-5 py-5 text-center text-3xl">
            Znajdź swój wymarzony samochód w okazyjnej cenie
          </div>
          <div className="pt-5 h-96">
            <div className="text-center py-4">
              <span className="text-center text-3xl px-10 pb-3 font-thin border-b-2 border-black">
                Ostatnio wyszukiwane
              </span>
            </div>
            <SliderCarousel />
          </div>
          <div className="bg-gradient-to-l from-primary-orange my-5 py-5 text-center text-3xl">
            Nasze oferty dobrane specjalnie dla ciebie
          </div>
          <div className="h-80 pt-5">
            <div className="text-center py-4">
              <span className="text-center text-3xl px-10 pb-3 font-thin border-b-2 border-black">
                Wybrane dla ciebie
              </span>
            </div>
            <SliderCarousel />
          </div>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}
