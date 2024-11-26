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
