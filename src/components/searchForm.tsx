import React from 'react';
import Form from 'next/form';
import { Search } from 'lucide-react';
import SearchFormReset from './searchFormReset';

type Props = {
  query?: string;
};

const SearchForm = ({ query }: Props) => {
  return (
    <Form
      action="/"
      scroll={false}
      className="max-w-3xl w-full min-h-[70px] bg-white border-[4px] border-amber-700 rounded-[80px] text-[24px] mt-1 px-5 flex flex-row items-center gap-5"
    >
      <input
        name="query"
        defaultValue={query}
        className="flex-1 font-bold placeholder:font-semibold  w-full h-auto outline-none text-amber-700"
        placeholder="Search Recipes"
      />

      <div className="flex gap-2">
        {query && <SearchFormReset />}
        <button
          type="submit"
          className="size-[40px] rounded-full bg-amber-800 flex justify-center items-center !important text-white"
        >
          <Search className="size-5" />
        </button>
      </div>
    </Form>
  );
};

export default SearchForm;
