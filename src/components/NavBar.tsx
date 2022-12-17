import { useState } from 'react';

import {
  EyeIcon,
  HomeIcon,
  InboxIcon,
  MagnifyingGlassIcon,
  StarIcon,
} from '@heroicons/react/24/outline';

import { motion } from 'framer-motion';
import { navVariants } from '../lib/motion';
import { LoginButton } from './utils';

const NavBar = () => {
  const [activeSearch, setActiveSearch] = useState<boolean>(false);
  const [search, setSearch] = useState<string>('');

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
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <a
            href="https://flowbite.com/"
            className="flex items-center"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-6 mr-3 sm:h-9"
              alt="Flowbite Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
              Nazwa Serwisu
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
                  href="#"
                  className="flex gap-2 p-2 hover:text-primary-orange text-primary-orange border-b-2 border-primary-orange"
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
                  onClick={() => {
                    setActiveSearch(!activeSearch);
                  }}
                >
                  <MagnifyingGlassIcon
                    width={18}
                    height={18}
                  />
                  Aukcje
                </a>
              </li>
              {isLogged ? (
                <>
                  <li>
                    <a
                      href="#"
                      className="flex gap-2 p-2 hover:text-primary-orange text-white"
                      // klasy do aktywnej strony:
                      // text-primary-orange border-b-2 border-primary-orange
                      aria-current="page"
                    >
                      <InboxIcon
                        width={18}
                        height={18}
                      />
                      Wiadomości
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex gap-2 p-2 hover:text-primary-orange text-white"
                      // klasy do aktywnej strony:
                      // text-primary-orange border-b-2 border-primary-orange
                      aria-current="page"
                    >
                      <EyeIcon
                        width={18}
                        height={18}
                      />
                      Obserwowane
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex gap-2 p-2 hover:text-primary-orange text-white"
                      // klasy do aktywnej strony:
                      // text-primary-orange border-b-2 border-primary-orange
                      aria-current="page"
                    >
                      <StarIcon
                        width={18}
                        height={18}
                      />
                      Moje Licytacje
                    </a>
                  </li>
                </>
              ) : (
                ''
              )}
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
