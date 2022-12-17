"use client"
import { api } from '@/lib/apiConfig';
import Image from 'next/image';
import { useQuery } from '@tanstack/react-query';
import Button from '../src/components/utils/Button';
import SliderCarousel from '../src/components/utils/SliderCarousel';

export default function Home() {
  const { data, error } = useQuery({
    queryKey: ['auction'],
    queryFn: () => api('http://localhost:3000/api/auction'),
    suspense: true,
    retry: false,
    refetchInterval: 2000,
  });
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
            <div className="m-5 h-64 mt-4 flex flex-col justify-center items-center bg-primary-orange rounded">
              <img
                src="https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../releases/preview/2018/png/iconmonstr-gavel-1.png&r=0&g=0&b=0"
                width={150}
                alt="bid"
              />
              <span className="pl-1 font-medium pt-4">
                Zacznij licytować już teraz
              </span>
            </div>
            <form className='bg-white w-[450px] h-96 rounded shadow-2xl'>
              <h2 className='text-black text-center py-2 text-xl  border-b-2 border-white'>Samochody osobowe</h2>
              <div className="grid grid-cols-2 mt-2">
                <div className='p-2'>
                  <label htmlFor="small" className="block mb-2 pl-2 text-sm font-medium text-gray-900 dark:text-black">Marka</label>
                  <select id="small" className="block w-full p-2 mb-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-black dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option selected>Wybierz marke</option>
                    <option value="Audi">Audi</option>
                    <option value="Mercedes">Mercedes</option>
                    <option value="Seat">Seat</option>
                  </select>
                </div>
                <div className='p-2'>
                  <label htmlFor="small" className="block mb-2 pl-2 text-sm font-medium text-gray-900 dark:text-black">Model pojazdu</label>
                  <select id="small" className="block w-full p-2 mb-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-black dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option selected>Wybierz model</option>
                    <option value="Audi">Audi</option>
                    <option value="Mercedes">Mercedes</option>
                    <option value="Seat">Seat</option>
                  </select>
                </div>
                <div className='p-2 pt-0'>
                  <label htmlFor="visitors" className="block mb-2 pl-2 text-sm font-medium text-gray-900 dark:text-black">Rocznik</label>
                  <input type="number" id="visitors" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-black dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" />
                </div>
                <div className='p-2 pt-0'>
                  <label htmlFor="visitors" className="block mb-2 pl-2 text-sm font-medium text-gray-900 dark:text-black">Maksymalny przebieg</label>
                  <input type="number" id="visitors" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-black dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" />
                </div>
                <div className='p-2 pt-0'>
                  <label htmlFor="visitors" className="block mb-2 pl-2 text-sm font-medium text-gray-900 dark:text-black">Minimalna cena</label>
                  <input type="number" id="visitors" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-black dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" />
                </div>
                <div className='p-2 pt-0'>
                  <label htmlFor="visitors" className="block mb-2 pl-2 text-sm font-medium text-gray-900 dark:text-black">Maksymalna cena</label>
                  <input type="number" id="visitors" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-black dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" />
                </div>
                <div className='col-span-2 p-2'>
                  <button type="submit" className="flex justify-center items-center py-2.5 px-2 text-center w-full text-sm font-medium text-black bg-primary-orange rounded-lg focus:ring-4 focus:outline-none">
                    <svg aria-hidden="true" className="w-5 h-5 mr-2 -ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>Wyszukaj
                  </button>
                </div>
              </div>
            </form>
          </div>
<<<<<<< HEAD
          <div>
            <div className='bg-gradient-to-r from-primary-orange my-5 py-5 text-center text-3xl'>Znajdź swój wymarzony samochód w okazyjnej cenie</div>
            <div className="pt-5 h-96">
              <div className="text-center py-4">
                <span className="text-center text-3xl px-10 pb-3 font-thin border-b-2 border-black">
                  Ostatnio wyszukiwane
                </span>
=======
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
>>>>>>> d5bb7db822f2fe36cc20439f084d266ea918f85a
              </div>
              <SliderCarousel cars={data?.data.auctions} />
            </div>
<<<<<<< HEAD
            <div className='bg-gradient-to-l from-primary-orange my-5 py-5 text-center text-3xl'>Nasze oferty dobrane specjalnie dla ciebie</div>
            <div className="h-80 pt-5">
              <div className="text-center py-4">
                <span className="text-center text-3xl px-10 pb-3 font-thin border-b-2 border-black">
                  Wybrane dla ciebie
                </span>
              </div>
              <SliderCarousel cars={data?.data.auctions} />
            </div>
=======
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
>>>>>>> d5bb7db822f2fe36cc20439f084d266ea918f85a
          </div>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}
