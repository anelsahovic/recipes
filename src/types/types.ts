export interface Recipe {
  id: number;
  name: string;
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  caloriesPerServing: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  tags: string[];
  image: string;
  rating: number;
  instructions: string[];
  ingredients: string[];
  cuisine: string;
  mealType: string[];
  reviewCount: number;
}
