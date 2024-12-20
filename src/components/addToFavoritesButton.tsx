'use client';

import {
  addToFavorites,
  getStoredRecipeIDs,
  removeFromFavorites,
} from '@/utils/utils';
import { Heart, HeartOff } from 'lucide-react';
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';

interface Props {
  id: number;
  text: boolean;
}

const AddToFavoritesBtn = ({ id, text }: Props) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const { data: session } = useSession();

  useEffect(() => {
    const storedIDs = getStoredRecipeIDs();

    if (storedIDs.includes(id)) {
      setIsFavorite(true);
    }
  }, [id]);

  const toggleFavorite = (id: number) => {
    if (!isFavorite) {
      addToFavorites(id);
      setIsFavorite(true);
    } else {
      removeFromFavorites(id);
      setIsFavorite(false);
    }
  };

  return (
    <button
      onClick={() => toggleFavorite(id)}
      disabled={!session ? true : false}
      className={`${
        isFavorite
          ? 'bg-rose-500 text-amber-50 hover:bg-rose-700 '
          : 'bg-gray-200 text-gray-800 hover:bg-rose-500 hover:text-amber-50'
      } px-4 py-2 rounded-md  transition duration-300 cursor-pointer ${
        !session &&
        ' cursor-auto hover:bg-slate-200 bg-slate-200 text-slate-400 hover:text-slate-400 opacity-70'
      } `}
    >
      {isFavorite ? (
        <div className="flex items-center justify-center gap-1">
          <HeartOff />
          {text && <p>Remove from favorites</p>}
        </div>
      ) : (
        <div className="flex items-center justify-center gap-1">
          <Heart />
          {text && <p>Add to favorites</p>}
        </div>
      )}
    </button>
  );
};

export default AddToFavoritesBtn;
