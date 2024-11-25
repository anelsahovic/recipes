import React from 'react';
import Form from 'next/form';
import { Search } from 'lucide-react';
import SearchFormReset from './searchFormReset';

interface Props {
  query?: string;
}

const SearchForm = ({ query }: Props) => {
  return (
    <Form
      action="/recipes"
      scroll={false}
      className="max-w-3xl w-full min-h-[60px] bg-white border-[3.5px] border-amber-500 rounded-[80px] text-xl mt-1 px-5 flex flex-row items-center gap-5 search-form"
    >
      <input
        name="query"
        defaultValue={query}
        className="flex-1 font-bold placeholder:font-semibold  w-full h-auto outline-none text-amber-500"
        placeholder="Search Recipes"
      />

      <div className="flex gap-2">
        {query && <SearchFormReset />}
        <button
          type="submit"
          className="size-[40px] rounded-full bg-amber-500 flex justify-center items-center !important text-white hover:bg-amber-800 transition duration-300"
        >
          <Search className="size-5" />
        </button>
      </div>
    </Form>
  );
};

export default SearchForm;
