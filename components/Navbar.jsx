import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="text-white">
      <div className="relative flex max-w-screen-xl flex-col overflow-hidden px-4 py-4 sm:mx-auto sm:flex-row sm:items-center">
        <Link href="/" className="cursor-pointer whitespace-nowrap font-black">
          BOOK STORE
        </Link>
        <input type="checkbox" className="peer hidden" id="navbar-open" />
        <label
          className="absolute right-7 top-5 cursor-pointer sm:hidden"
          htmlFor="navbar-open"
        >
          <span className="sr-only">Toggle Navigation</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </label>
        <nav
          aria-label="Header Navigation"
          className="flex max-h-0 w-full flex-col items-center justify-between overflow-hidden transition-all peer-checked:mt-8 peer-checked:max-h-56 sm:ml-24 sm:max-h-full sm:flex-row sm:items-start"
        >
          <ul className="flex flex-col items-center space-y-2 sm:ml-auto sm:flex-row sm:space-y-0">
            <li className="font-bold sm:mr-12">
              <Link href="/">Home</Link>
            </li>
            <li className="sm:mr-12">
              <Link href="favourites">Favourites</Link>
            </li>
            <li className="sm:mr-12">
              <Link href="#">Support</Link>
            </li>
            <li className="sm:mr-12">
              <button className="rounded-full border-2 border-white px-6 py-1 text-white transition-colors hover:bg-white hover:text-indigo-600">
                Login
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
