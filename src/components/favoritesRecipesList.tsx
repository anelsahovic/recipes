'use client';

import { Recipe } from '@/types/types';
import React, { useEffect, useState } from 'react';
import RecipeCard from './recipeCard';
import { getStoredRecipeIDs } from '@/utils/utils';

type Props = {
  recipes: Recipe[];
};

const FavoritesRecipesList = ({ recipes }: Props) => {
  const [favoriteRecipes, setFavoriteRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    const storedFavorites = getStoredRecipeIDs();
    const filteredRecipes = recipes.filter((recipe) =>
      storedFavorites.includes(recipe.id)
    );
    setFavoriteRecipes(filteredRecipes);
  }, [recipes]);

  return (
    <>
      {favoriteRecipes.length ? (
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-4">
            {favoriteRecipes.map((recipe: Recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        </div>
      ) : (
        <div>
          <p className="text-center text-gray-600 mt-5">
            You have no favorite recipes yet.
          </p>
        </div>
      )}
    </>
  );
};

export default FavoritesRecipesList;
