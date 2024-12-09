import PaginatedRecipes from '@/components/paginatedRecipes';
import SearchForm from '@/components/searchForm';
import SortSelector from '@/components/sortSelector';

interface Props {
  searchParams: Promise<{ query?: string; sortBy?: string }>;
}

const Page = async ({ searchParams }: Props) => {
  const { query = '' } = await searchParams;

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

        <div className="flex flex-col sm:flex-row items-start sm:items-center sm:gap-2">
          <p>Sort by</p>
          <SortSelector />
        </div>
      </div>

      <div>
        <PaginatedRecipes />
      </div>
    </main>
  );
};

export default Page;
