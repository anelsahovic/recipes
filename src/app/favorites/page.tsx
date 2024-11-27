import FavoritesRecipesList from '@/components/favoritesRecipesList';

const Page = async () => {
  const response = await fetch('https://dummyjson.com/recipes');
  const data = await response.json();

  return (
    <main className="px-6 py-3">
      <h1 className="text-2xl text-zinc-700 font-semibold">
        Your favorite recipes
      </h1>
      <FavoritesRecipesList recipes={data.recipes} />
    </main>
  );
};

export default Page;
