import { RecipeCardProps } from '@/types/types';
import { getDifficultyColor } from '@/utils/utils';
import { Flame, Heart, Star, Timer, UtensilsCrossed } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const RecipeCard = ({ recipe }: RecipeCardProps) => {
  return (
    <div className="mx-auto flex flex-col bg-white shadow-md ring-1 ring-gray-200 p-4 rounded-lg relative">
      <div className="w-full h-56 overflow-hidden rounded-lg mb-4">
        <Image
          src={recipe.image}
          alt={recipe.name}
          width={600}
          height={400}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between h-14">
          <h1 className="text-xl font-bold  text-gray-800">{recipe.name}</h1>
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
              <Flame />
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
              {recipe.prepTimeMinutes}
              <span className="italic text-sm">pcs</span>
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center py-2">
          <div className=" flex items-center gap-1">
            <p className="font-bold text-gray-600 text-sm">Difficulty:</p>
            <span
              className={`capitalize font-semibold text-sm px-2 py-1 rounded-sm ${getDifficultyColor(
                recipe.difficulty
              )} `}
            >
              {recipe.difficulty}
            </span>
          </div>

          <div className="flex items-center gap-1">
            <p className="font-bold text-gray-600 text-sm">Cuisine: </p>
            <p className=" bg-indigo-100 text-indigo-500 font-semibold px-2 py-1 rounded-sm text-sm">
              {recipe.cuisine}
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col pt-1 pb-3">
        <p className="font-bold text-zinc-700 ">Instructions</p>
        <p className="text-sm text-gray-700 ">
          {recipe.instructions.join(',').slice(0, 100) + '...'}
        </p>
      </div>
      <div className="flex flex-wrap gap-2 py-2 absolute top-4 left-5">
        {recipe.tags.map((tag, index) => (
          <span
            key={index}
            className="text-xs bg-slate-300 font-semibold text-zinc-900 px-2 py-1 rounded-full opacity-80"
          >
            {tag}
          </span>
        ))}
      </div>
      {/* Action Buttons */}
      <div className=" flex justify-end gap-3">
        <Link
          href="#"
          className="bg-amber-500 text-white px-4 py-2 rounded-md hover:bg-amber-600 transition"
        >
          View Details
        </Link>
        <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md  transition duration-300 hover:bg-rose-500 hover:text-amber-50">
          <Heart />
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;
