import FavoriteRecipes from '@/components/favoriteRecipes';

const Page = async () => {
  return (
    <main className="px-6 py-3">
      <h1 className="text-2xl text-zinc-700 font-semibold">
        Your favorite recipes
      </h1>
      <FavoriteRecipes />
    </main>
  );
};

export default Page;
