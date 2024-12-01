import React from 'react';
import FavoritesRecipesList from './favoritesRecipesList';

async function FavoriteRecipes() {
  const response = await fetch('https://dummyjson.com/recipes');
  const data = await response.json();
  return <FavoritesRecipesList recipes={data.recipes} />;
}

export default FavoriteRecipes;
