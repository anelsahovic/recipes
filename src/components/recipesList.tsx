import { Recipe } from '@/types/types';
import RecipeCard from './recipeCard';

interface Props {
  recipes: Recipe[];
}

const RecipesList = ({ recipes }: Props) => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-4">
        {recipes.map((recipe: Recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default RecipesList;
