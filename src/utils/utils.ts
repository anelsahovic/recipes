// Helper Function to Style Difficulty Text
export const getDifficultyColor = (difficulty: string) => {
  switch (difficulty.toLowerCase()) {
    case 'easy':
      return 'text-green-500 bg-green-100';
    case 'medium':
      return 'text-amber-600 bg-amber-100';
    case 'hard':
      return 'text-red-500 bg-red-100';
    default:
      return 'text-gray-500';
  }
};
