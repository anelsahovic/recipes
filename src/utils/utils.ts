// Helper Function to Style Difficulty Text
export const getDifficultyColor = (difficulty: string) => {
  const normalizedDifficulty = difficulty.trim().toLowerCase();
  switch (normalizedDifficulty) {
    case 'easy':
      return 'text-green-500 bg-green-100';
    case 'medium':
      return 'text-orange-500 bg-orange-100';
    case 'hard':
      return 'text-red-500 bg-red-100';
    default:
      console.warn(`Unexpected difficulty value: "${difficulty}"`);
      return 'text-gray-500';
  }
};

export const getStoredRecipeIDs = (): number[] => {
  const stored = localStorage.getItem('recipeIDs');
  return stored ? stored.split(',').map(Number) : [];
};

export const addToFavorites = (id: number) => {
  const ids = getStoredRecipeIDs();
  if (!ids.includes(id)) {
    ids.push(id);
    localStorage.setItem('recipeIDs', ids.join(','));
    console.log(`Added recipe ID: ${id}`);
  } else {
    console.log(`Recipe ID ${id} is already in favorites.`);
  }
};

export const removeFromFavorites = (id: number) => {
  const ids = getStoredRecipeIDs();
  const updatedIds = ids.filter((prev) => prev !== id);
  localStorage.setItem('recipeIDs', updatedIds.join(','));
  console.log(`Removed recipe ID: ${id}`);
};
