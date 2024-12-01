'use client';

import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';

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

function Navbar() {
  const path = usePathname();

  const [mobileMenu, setMobileMenu] = useState<boolean>(false);

  const toggleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <div className="flex items-center justify-between w-full">
      <nav className="hidden sm:flex items-center justify-between gap-5">
        <Link href="/">
          <Image src="/logo.png" alt="logo" height={46} width={46} />
        </Link>

        <ul className="hidden gap-4 sm:flex">
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
      </nav>

      <button
        onClick={toggleMobileMenu}
        className="flex bg-amber-600 w-10 h-10 sm:hidden justify-center items-center rounded-full text-white p-1 "
      >
        <Menu className="size-7 " />
      </button>

      <div
        className={`fixed left-0 top-0 z-50 transform ${
          mobileMenu ? 'translate-x-0' : '-translate-x-full'
        } bg-amber-500 w-[300px] min-h-screen shadow-lg transition-transform duration-300`}
      >
        {mobileMenu && (
          <div className="p-4 h-screen flex flex-col">
            <div className="flex justify-end">
              <button
                onClick={toggleMobileMenu}
                className="text-amber-800 hover:text-rose-600 "
              >
                <X className="size-8" />
              </button>
            </div>
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
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
