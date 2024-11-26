'use client';

import { useRouter, useSearchParams } from 'next/navigation';

const SortSelector = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;

    // Clone the current search parameters
    const params = new URLSearchParams(searchParams?.toString());

    if (selectedValue === 'default') {
      params.delete('sortBy'); // Remove 'sortBy' if it's default
    } else {
      params.set('sortBy', selectedValue); // Update 'sortBy' with selected value
    }

    router.push(`?${params.toString()}`); // Update the URL and trigger a new server-side request
  };

  return (
    <select
      className="px-3 py-1 rounded-md bg-amber-600 text-white shadow"
      name="sortBy"
      id="sortBy"
      defaultValue={searchParams.get('sortBy') || 'default'}
      onChange={handleSortChange}
    >
      <option value="default">Default</option>
      <option value="prepTimeMinutes">Prep time</option>
      <option value="cookTimeMinutes">Cook time</option>
      <option value="servings">Servings</option>
      <option value="difficulty">Difficulty</option>
      <option value="cuisine">Cuisine</option>
    </select>
  );
};

export default SortSelector;
