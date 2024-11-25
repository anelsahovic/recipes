export interface RecipeCardProps {
  recipe: {
    id: number;
    name: string;
    prepTimeMinutes: number;
    cookTimeMinutes: number;
    servings: number;
    difficulty: 'Easy' | 'Medium' | 'Hard';
    tags: string[];
    image: string;
    rating: number;
    instructions: string[];
    ingredients: string[];
    cuisine: string;
  };
}

export interface Recipe {
  id: number;
  name: string;
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  tags: string[];
  image: string;
  rating: number;
  instructions: string[];
  ingredients: string[];
  cuisine: string;
}
