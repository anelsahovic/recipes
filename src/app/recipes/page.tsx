import RecipesList from '@/components/recipesList';
import SearchForm from '@/components/searchForm';
import React from 'react';

interface Props {
  searchParams: { query?: string };
}

const Page = async ({ searchParams }: Props) => {
  const { query } = await searchParams;
  return (
    <main className="px-6 py-3">
      <div className="flex justify-center items-center py-3 pb-6 border-b">
        <SearchForm query={query} />
      </div>

      <div className="text-lg font-semibold text-zinc-700 py-3 flex items-center justify-between">
        {query ? (
          <h2>Showing results for {`"${query}"`}</h2>
        ) : (
          <h2>Showing all recipes</h2>
        )}

        {/* TO BE DONE */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center sm:gap-2 ">
          <p>Sort by</p>
          <select
            className="px-3 py-1 rounded-md bg-amber-600 text-white shadow"
            name=""
            id=""
            defaultValue="default"
          >
            <option value="default">Default</option>
          </select>
        </div>
      </div>

      <div>
        <RecipesList query={query} limit={0} />
      </div>
    </main>
  );
};

export default Page;
