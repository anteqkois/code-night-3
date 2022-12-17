import { useState } from 'react';
import { useRouter } from 'next/navigation';

import {
  EyeIcon,
  HomeIcon,
  InboxIcon,
  MagnifyingGlassIcon,
  StarIcon,
  PlusSmallIcon
} from '@heroicons/react/24/outline';

import { motion } from 'framer-motion';
import { navVariants } from '../lib/motion';
import { LoginButton } from './utils';

const NavBar = () => {
  const [activeSearch, setActiveSearch] = useState<boolean>(false);
  const [search, setSearch] = useState<string>('');
  const router = useRouter();

  const isLogged = true;

  const handleInput = (e: any) => {
    e.preventDefault();

    console.log(search);
  };

  return (
    <>
      <motion.nav
        variants={navVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="bg-black px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0 border-none"
      >
        <div className="container flex flex-wrap items-center justify-between mx-auto px-10">
          <a
            onClick={() => router.push('/')}
            className="flex items-center cursor-pointer"
          >
            <svg
              width="59"
              height="58"
              viewBox="0 0 59 58"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_1_23)">
                <path
                  d="M31.625 24.7159C31.625 26.1878 30.4917 27.3409 29.142 27.3409C27.7924 27.3409 26.6591 26.1878 26.6591 24.7159C26.6591 23.244 27.7924 22.0909 29.142 22.0909C30.4917 22.0909 31.625 23.244 31.625 24.7159Z"
                  fill="white"
                  stroke="white"
                />
                <path
                  d="M11.2443 18.608C22.0398 22.2443 21.6136 35.2746 20.0511 41.3352H19.625C18.6307 41.3352 5.5625 29.6875 11.2443 18.608Z"
                  fill="white"
                  stroke="white"
                />
                <path
                  d="M46.8386 30.9534C44.9481 42.1868 32.0133 43.8185 25.7822 43.2301L25.7151 42.8093C25.5585 41.8274 35.0024 27.0877 46.8386 30.9534Z"
                  fill="white"
                  stroke="white"
                />
                <path
                  d="M47.892 24.7159L14.6534 12.7841V12.5C28.6307 -1.47727 48.1761 9.375 47.892 24.7159Z"
                  fill="white"
                  stroke="white"
                />
                <path
                  d="M53.7841 25C53.7841 38.5283 42.7541 49.5 29.142 49.5C15.5299 49.5 4.5 38.5283 4.5 25C4.5 11.4717 15.5299 0.5 29.142 0.5C42.7541 0.5 53.7841 11.4717 53.7841 25Z"
                  stroke="white"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_1_23"
                  x="0"
                  y="0"
                  width="58.2841"
                  height="58"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood
                    flood-opacity="0"
                    result="BackgroundImageFix"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite
                    in2="hardAlpha"
                    operator="out"
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1_23"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1_23"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
            <span className="self-center text-xl font-semibold whitespace-nowrap text-white pl-2">
              BidStash
            </span>
          </a>

          <div className="flex md:order-2 gap-2">
            <LoginButton />
            {/* <Button type="button">Zaloguj się</Button> */}
            {/* <button
              type="button"
              className="text-primary-orange font-semibold bg-transparent hover:bg-secondary-orange hover:text-black border-2 border-primary-orange active:ring-2 active:outline-none active:ring-secondary-orange rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0"
            >
              Zarejestruj się
            </button> */}
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 text-sm text-primary-orange rounded-lg md:hidden focus:outline-none focus:border-b-4 focus:border-primary-orange"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="#FCA311"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 mt-4 border rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 bg-black">
              <li>
                <a
                  onClick={() => router.push('/')}
                  className="flex gap-2 p-2 hover:text-primary-orange text-primary-orange border-b-2 border-primary-orange hover:cursor-pointer"
                  // klasy do aktywnej strony:
                  // text-primary-orange border-b-2 border-primary-orange
                  aria-current="page"
                >
                  <HomeIcon
                    width={18}
                    height={18}
                  />
                  Strona główna
                </a>
              </li>
              <li>
                <a
                  className={`flex gap-2 text-white p-2 hover:text-primary-orange hover:cursor-pointer ${
                    activeSearch
                      ? 'text-primary-orange border-b-2 border-primary-orange'
                      : ''
                  }`}
                  onClick={() => router.push('/newAuction')}
                >
                  <PlusSmallIcon
                    width={18}
                    height={18}
                  />
                  Dodaj oferte
                </a>
              </li>
              <li>
                <a
                  className={`flex gap-2 text-white p-2 hover:text-primary-orange hover:cursor-pointer ${
                    activeSearch
                      ? 'text-primary-orange border-b-2 border-primary-orange'
                      : ''
                  }`}
                  onClick={() => router.push('/auctions')}
                >
                  <MagnifyingGlassIcon
                    width={18}
                    height={18}
                  />
                  Aukcje
                </a>
              </li>
            </ul>
          </div>
        </div>
      </motion.nav>
      <div className="fixed top-24 left-0 w-full">
        {activeSearch ? (
          <div className="lg:w-1/2 w-3/5 min-w-1/2 mx-auto">
            <form onSubmit={handleInput}>
              <label
                htmlFor="searchText"
                className="sr-only"
              />
              <div className="relative rounded">
                <div className="absolute inset-y-0 left-0 flex items-center px-2 pointer-events-none bg-primary-orange rounded-l-lg">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="none"
                    stroke="#fff"
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
                </div>
                <input
                  type="search"
                  id="searchText"
                  className="block w-full p-3 pl-12 text-sm text-gray-900 border rounded-lg"
                  placeholder="Wyszukaj markę, model..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  className="text-white absolute right-1.5 bottom-1.5 bg-primary-orange hover:bg-secondary-orange active:outline-none font-medium rounded-lg text-sm px-4 py-2"
                >
                  Szukaj
                </button>
              </div>
            </form>
          </div>
        ) : (
          ''
        )}
      </div>
    </>
  );
};

export default NavBar;
