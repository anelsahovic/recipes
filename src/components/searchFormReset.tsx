'use client';

import { X } from 'lucide-react';
import Link from 'next/link';

const SearchFormReset = () => {
  const reset = () => {
    const form = document.querySelector('.search-form') as HTMLFormElement;

    if (form) form.reset();
  };
  return (
    <button type="reset" onClick={reset}>
      <Link
        href="/recipes"
        className="size-[40px] rounded-full bg-amber-500 flex justify-center items-center !important text-white hover:bg-amber-800 transition duration-300"
      >
        <X />
      </Link>
    </button>
  );
};

export default SearchFormReset;
