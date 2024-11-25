'use client';

import { useMediaQuery } from '@mui/material';
import { Menu, SquarePlus, User, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navLinks = [
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '/recipes',
    label: 'Recipes',
  },
  {
    href: '/favorites',
    label: 'Favorites',
  },
];

export default function Header() {
  const path = usePathname();
  const isSmallScreen = useMediaQuery('(max-width: 600px)');

  const [mobileMenu, setMobileMenu] = useState<boolean>(false);

  const toggleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };
  return (
    <header className="flex justify-between items-center px-6 py-4 border-b shadow-sm border-amber-300 text-lg">
      <nav className="flex items-center justify-between gap-5">
        <Link href="/">
          <Image src="/logo.png" alt="logo" height={46} width={46} />
        </Link>
        {!isSmallScreen && (
          <ul className="flex gap-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  className={
                    path === link.href
                      ? 'text-amber-600 font-semibold'
                      : 'text-amber-400' +
                        ' hover:text-amber-600 transition duration-300'
                  }
                  href={link.href}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>

      {!isSmallScreen && (
        <div className="flex gap-4 items-center">
          <Link
            className="px-2 py-1 ring-1 gap-1 ring-amber-400 text-amber-400 hover:text-amber-600 hover:ring-amber-600 rounded-sm transition duration-300 flex items-center justify-center"
            href="#"
          >
            <User /> Sign in
          </Link>
          <Link
            className="px-2 py-1 flex items-center justify-center  bg-amber-600 text-white rounded-sm hover:bg-amber-800 transition duration-300 gap-1"
            href="#"
          >
            <SquarePlus />
            New Recipe
          </Link>
        </div>
      )}

      {isSmallScreen && (
        <button
          onClick={toggleMobileMenu}
          className="bg-amber-600 w-10 h-10 flex justify-center items-center rounded-full text-white p-1 "
        >
          <Menu className="size-7 " />
        </button>
      )}

      {/* {mobileMenu && (
        <div className="absolute bg-amber-300 min-h-screen w-[300px] top-0 right-0">
          <div className="p-2">
            <button
              onClick={toggleMobileMenu}
              className="text-amber-800 hover:text-rose-600"
            >
              <X className="size-8" />
            </button>
          </div>
        </div>
      )} */}

      <div
        className={`fixed right-0 top-0 z-50 transform ${
          mobileMenu ? 'translate-x-0' : 'translate-x-full'
        } bg-amber-500 w-[300px] min-h-screen shadow-lg transition-transform duration-300`}
      >
        {mobileMenu && (
          <div className="p-4 h-screen">
            <button
              onClick={toggleMobileMenu}
              className="text-amber-800 hover:text-rose-600"
            >
              <X className="size-8" />
            </button>
            <div className="flex flex-col justify-center gap-20 h-full items-center">
              <div className="flex items-center gap-2">
                <Link className="border-2 border-white rounded-full" href="/">
                  <Image src="/logo.png" alt="logo" height={46} width={46} />
                </Link>
                <h1 className={` text-2xl uppercase text-amber-50 font-bold`}>
                  Recipes
                </h1>
              </div>
              <nav className="text-center">
                <ul className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <li className="text-2xl " key={link.label}>
                      <Link
                        className={
                          path === link.href
                            ? 'text-amber-800 font-semibold'
                            : 'text-amber-50' +
                              ' hover:text-amber-800 transition duration-300'
                        }
                        href={link.href}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="flex flex-col gap-4">
                <Link
                  className="px-2 py-1 ring-1 gap-1 ring-amber-50 text-amber-50 hover:text-amber-600 hover:ring-amber-600 rounded-sm transition duration-300 flex items-center justify-center"
                  href="#"
                >
                  <User /> Sign in
                </Link>
                <Link
                  className="px-2 py-1 flex items-center justify-center  bg-amber-600 text-white rounded-sm hover:bg-amber-800 transition duration-300 gap-1"
                  href="#"
                >
                  <SquarePlus />
                  New Recipe
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
