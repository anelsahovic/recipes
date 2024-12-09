import AddToFavoritesBtn from '@/components/addToFavoritesButton';
import { Recipe } from '@/types/types';
import { getDifficultyColor } from '@/utils/utils';
import {
  CookingPot,
  Eye,
  Flame,
  Star,
  Timer,
  UtensilsCrossed,
} from 'lucide-react';
import Image from 'next/image';
import React from 'react';

interface Props {
  params: Promise<{ id: string }>;
}

const Page = async ({ params }: Props) => {
  const { id } = await params;

  if (!id) {
    return <div>Invalid ID</div>;
  }

  const response = await fetch(`https://dummyjson.com/recipes/${id}`);

  if (!response.ok) {
    return <div>Failed to load recipe!</div>;
  }

  const recipe: Recipe = await response.json();
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-5">
      <Image
        src={recipe.image}
        alt={recipe.name}
        width={288}
        height={288}
        className="w-full h-72 object-cover"
      />

      <div className="p-6 space-y-4">
        <div className="flex justify-between items-center">
          <div className="flex flex-wrap gap-2">
            {recipe.tags.map((tag: string, index: number) => (
              <span
                key={index}
                className=" bg-slate-200 font-semibold text-zinc-900 opacity-70 text-sm px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-1 text-slate-500">
            <Eye />
            <p>{recipe.reviewCount}</p>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-amber-700">{recipe.name}</h1>
          <div className="flex justify-between items-center gap-1">
            <p className="text-yellow-500 font-bold text-lg">{recipe.rating}</p>
            <Star className="text-yellow-500" />
          </div>
        </div>

        <div className="text-gray-600  flex flex-col items-center justify-around border ">
          <div className="flex items-center gap-1 justify-between  border px-3 py-2.5 w-full">
            <div className="flex gap-1 items-center">
              <Timer />
              <p className="font-bold uppercase text-sm">Preparation time </p>
            </div>
            <p className="font-semibold">
              {recipe.prepTimeMinutes}
              <span className="italic text-sm">min</span>
            </p>
          </div>

          <div className="flex items-center gap-1 justify-between border px-3 py-2.5 w-full">
            <div className="flex gap-1 items-center">
              <CookingPot />
              <p className="font-bold uppercase text-sm">Cooking time </p>
            </div>
            <p className="font-semibold">
              {recipe.cookTimeMinutes}
              <span className="italic text-sm">min</span>
            </p>
          </div>

          <div className="flex items-center gap-1 justify-between border px-3 py-2.5 w-full">
            <div className="flex gap-1 items-center">
              <UtensilsCrossed />
              <p className="font-bold uppercase text-sm">Total servings </p>
            </div>
            <p className="font-semibold">
              {recipe.servings}
              <span className="italic text-sm">pcs</span>
            </p>
          </div>

          <div className="flex items-center gap-1 justify-between border px-3 py-2.5 w-full">
            <div className="flex gap-1 items-center">
              <Flame />
              <p className="font-bold uppercase text-sm">Kcal per serving </p>
            </div>
            <p className="font-semibold">
              {recipe.caloriesPerServing}
              <span className="italic text-sm">kcal</span>
            </p>
          </div>
        </div>

        <div className="flex justify-between items-center py-2 flex-col sm:flex-row">
          <div className="flex items-center gap-1 justify-around w-full px-1 py-2 sm:justify-center">
            <p className="font-bold text-gray-600 text-sm">Meal type: </p>
            <p className=" bg-fuchsia-100 text-fuchsia-600 font-semibold px-2 py-1 rounded-sm text-sm">
              {recipe.mealType.join(', ')}
            </p>
          </div>

          <div className=" flex items-center gap-1 justify-around w-full px-1 py-2 sm:justify-center">
            <p className="font-bold text-gray-600 text-sm">Difficulty:</p>
            <span
              className={`capitalize font-semibold text-sm px-2 py-1 rounded-sm ${getDifficultyColor(
                recipe.difficulty
              )} `}
            >
              {recipe.difficulty}
            </span>
          </div>

          <div className="flex items-center gap-1 justify-around w-full px-1 py-2 sm:justify-center">
            <p className="font-bold text-gray-600 text-sm">Cuisine: </p>
            <p className=" bg-cyan-100 text-cyan-500 font-semibold px-2 py-1 rounded-sm text-sm">
              {recipe.cuisine}
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-amber-600">Ingredients</h2>
          <ul className="list-disc pl-5 text-sm text-gray-600">
            {recipe.ingredients.map((ingredient: string, index: number) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-amber-600">Instructions</h2>
          <ol className="list-decimal pl-5 text-sm text-gray-600 space-y-2">
            {recipe.instructions.map((instruction: string, index: number) => (
              <li key={index}>{instruction}</li>
            ))}
          </ol>
        </div>
        <div className="flex justify-end">
          <AddToFavoritesBtn id={recipe.id} text={true} />
        </div>
      </div>
    </div>
  );
};

export default Page;
