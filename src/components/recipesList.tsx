import { Recipe } from '@/types/types';
import RecipeCard from './recipeCard';

interface Props {
  query?: string;
  tag?: string;
  limit?: number;
  sortBy?: string;
}

const RecipesList = async ({ query, tag, limit, sortBy }: Props) => {
  // Build the API endpoint
  const endpoint = tag
    ? `https://dummyjson.com/recipes/tag/${tag}?sortBy=${sortBy}&order=asc&limit=${
        limit || ''
      }`
    : `https://dummyjson.com/recipes/search?q=${query || ''}&sortBy=${
        sortBy || ''
      }`;

  const response = await fetch(endpoint);

  if (!response.ok) {
    throw new Error('Failed to fetch recipes');
  }

  const data = await response.json();

  if (!data.recipes?.length) {
    return <p className="text-center text-gray-600">No recipes found.</p>;
  }
  console.log(sortBy);

  // Sort the recipes based on the sortBy parameter
  if (sortBy) {
    data.recipes.sort((a: Recipe, b: Recipe) => {
      switch (sortBy) {
        case 'prepTimeMinutes':
          return a.prepTimeMinutes - b.prepTimeMinutes; // Sort by preparation time (ascending)
        case 'cookTimeMinutes':
          return a.cookTimeMinutes - b.cookTimeMinutes; // Sort by cook time (ascending)
        case 'servings':
          return a.servings - b.servings; // Sort by servings (ascending)
        case 'difficulty':
          return a.difficulty.localeCompare(b.difficulty); // Sort by difficulty (alphabetical order)
        case 'cuisine':
          return a.cuisine.localeCompare(b.cuisine); // Sort by cuisine (alphabetical order)
        default:
          return 0; // No sorting if no valid sortBy value
      }
    });
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
