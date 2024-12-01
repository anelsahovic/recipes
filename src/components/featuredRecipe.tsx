import React from 'react';
import RecipeCard from './recipeCard';

async function FeaturedRecipe() {
  const response = await fetch('https://dummyjson.com/recipes');
  const allRecipes = await response.json();

  const id = Math.floor(Math.random() * allRecipes.recipes.length);

  const fetchedFeaturedRecipe = await fetch(
    `https://dummyjson.com/recipes/${id}`
  );
  const featuredRecipe = await fetchedFeaturedRecipe.json();
  return (
    <div>
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-zinc-800 pt-5">
        Featured Recipe
      </h1>
      <p className="p-3 text-sm text-center text-zinc-700 italic sm:text-lg md:text-xl">
        Bring the magic of global cuisine into your home with this one-of-a-kind
        recipe.
      </p>
      <RecipeCard recipe={featuredRecipe} />
    </div>
  );
}

export default FeaturedRecipe;
