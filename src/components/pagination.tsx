'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { CircleArrowLeft, CircleArrowRight } from 'lucide-react';

interface Props {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
}

const Pagination = ({ currentPage, totalItems, itemsPerPage }: Props) => {
  const router = useRouter();
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Track the screen width
  const [screenWidth, setScreenWidth] = useState<number>(
    typeof window !== 'undefined' ? window.innerWidth : 0
  );

  useEffect(() => {
    // Update screenWidth state on window resize
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Determine how many pages to show based on screen size
  const maxPageButtons = screenWidth < 768 ? 3 : 5; // 3 pages for mobile, 5 for larger screens

  const pageStart = Math.max(currentPage - Math.floor(maxPageButtons / 2), 1);
  const pageEnd = Math.min(pageStart + maxPageButtons - 1, totalPages);

  const handlePageChange = (pageNumber: number) => {
    router.push(`?page=${pageNumber}`);
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      router.push(`?page=${currentPage + 1}`);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      router.push(`?page=${currentPage - 1}`);
    }
  };

  return (
    <div className="flex justify-center mb-4 mt-8 items-center">
      <button
        onClick={handlePrev}
        disabled={currentPage === 1}
        className={`p-2 mx-1 rounded-md flex items-center gap-1 ${
          currentPage === 1
            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
            : 'bg-gray-200 text-gray-800 hover:bg-amber-600 hover:text-white transition duration-300'
        }`}
      >
        <CircleArrowLeft />
      </button>

      {Array.from({ length: pageEnd - pageStart + 1 }, (_, index) => {
        const page = pageStart + index;
        return (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`px-4 py-2 mx-1 rounded-md ${
              currentPage === page
                ? 'bg-amber-500 text-white'
                : 'bg-gray-200 text-gray-800 hover:bg-amber-500 hover:text-white transition duration-300'
            }`}
          >
            {page}
          </button>
        );
      })}

      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className={`p-2 mx-1 rounded-md flex items-center ${
          currentPage === totalPages
            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
            : 'bg-gray-200 text-gray-800 hover:bg-amber-600 hover:text-white transition duration-300'
        }`}
      >
        <CircleArrowRight />
      </button>
    </div>
  );
};

export default Pagination;
