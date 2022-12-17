import { motion } from 'framer-motion';
import { footerVariants } from '../lib/motion';

const Footer = () => {
  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="fixed bottom-0 left-0 p-4 w-full bg-black shadow md:px-6 md:py-8"
    >
      <div className="sm:flex sm:items-center sm:justify-between">
        <a
          href="https://flowbite.com/"
          className="flex items-center mb-4 sm:mb-0"
        >
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            Flowbite
          </span>
        </a>
        <ul className="flex flex-wrap items-center text-sm text-secondary-gray mb-0">
          <li>
            <a
              href="#"
              className="mr-4 hover:underline md:mr-6 "
            >
              Strona Główna
            </a>
          </li>
          <li>
            <a
              href="#"
              className="mr-4 hover:underline md:mr-6"
            >
              Regulamin
            </a>
          </li>
          <li>
            <a
              href="#"
              className="mr-4 hover:underline md:mr-6 "
            >
              Aukcje
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:underline"
            >
              Zaloguj się
            </a>
          </li>
        </ul>
      </div>
      <hr className="my-6 border-primary-orange bg-primary-orange sm:mx-auto lg:my-8" />
      <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2022{' '}
        <a
          href="https://flowbite.com/"
          className="hover:underline"
        >
          Flowbite™
        </a>
        . All Rights Reserved.
      </span>
    </motion.footer>
  );
};

export default Footer;
