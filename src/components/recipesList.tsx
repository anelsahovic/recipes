import { Recipe } from '@/types/types';
import RecipeCard from './recipeCard';

interface Props {
  query?: string;
  tag?: string;
  limit: number;
}

const RecipesList = async ({ query, tag, limit }: Props) => {
  const endpoint = tag
    ? `https://dummyjson.com/recipes/tag/${tag}?limit=${limit}`
    : `https://dummyjson.com/recipes/search?q=${query || ''}`;

  const response = await fetch(endpoint);

  if (!response.ok) {
    throw new Error('Failed to fetch recipes');
  }

  const data = await response.json();

  if (!data.recipes?.length) {
    return <p className="text-center text-gray-600">No recipes found.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-4">
      {data.recipes.map((recipe: Recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipesList;
