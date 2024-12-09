'use client';

import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Pagination from './pagination';
import RecipesList from './recipesList';
import { Recipe } from '@/types/types';

const PaginatedRecipes = () => {
  const searchParams = useSearchParams();

  const currentPage = Number(searchParams.get('page')) || 1;
  const sortBy = searchParams.get('sortBy') || 'default'; // Get the sortBy value from query params
  const query = searchParams.get('query') || ''; // Get the search query
  const itemsPerPage = 9;

  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);
  const [totalItems, setTotalItems] = useState(0); // To calculate total pages

  const fetchRecipes = async () => {
    setLoading(true);

    // Build the dynamic endpoint based on query and sortBy
    const endpoint = query
      ? `https://dummyjson.com/recipes/search?q=${query}&sortBy=${sortBy}&order=asc&limit=${itemsPerPage}&skip=${
          (currentPage - 1) * itemsPerPage
        }`
      : `https://dummyjson.com/recipes?sortBy=${sortBy}&order=asc&limit=${itemsPerPage}&skip=${
          (currentPage - 1) * itemsPerPage
        }`;

    try {
      const response = await fetch(endpoint);
      if (!response.ok) {
        throw new Error('Failed to fetch recipes');
      }
      const data = await response.json();
      setRecipes(data.recipes || []);
      setTotalItems(data.total || 0); // Ensure you handle total items from the API response
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecipes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, sortBy, query]); // Refetch whenever page, sortBy, or query changes

  return (
    <div>
      {loading ? (
        <p className="text-center text-gray-600">Loading recipes...</p>
      ) : recipes.length > 0 ? (
        <>
          <RecipesList recipes={recipes} />
          <Pagination
            currentPage={currentPage}
            totalItems={totalItems}
            itemsPerPage={itemsPerPage}
          />
        </>
      ) : (
        <p className="text-center text-gray-600">No recipes found.</p>
      )}
    </div>
  );
};

export default PaginatedRecipes;
