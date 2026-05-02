import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Pagination = ({ total, limit, skip, onPageChange }) => {
  const totalPages = Math.ceil(total / limit);
  const currentPage = Math.floor(skip / limit) + 1;

  // Don't show if there's only 1 page
  if (totalPages <= 1) return null;

  return (
    <div className="flex flex-col items-center gap-4 mt-16 pb-10">
      <div className="flex items-center gap-2">
        {/* Previous Button */}
        <button
          disabled={currentPage === 1}
          onClick={() => onPageChange(skip - limit)}
          className="p-3 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 disabled:opacity-30 disabled:cursor-not-allowed hover:border-indigo-600 transition-colors shadow-sm"
        >
          <ChevronLeft size={20} className="text-indigo-600" />
        </button>

        {/* Page Indicators */}
        <div className="flex gap-1">
          {[...Array(Math.min(5, totalPages))].map((_, i) => {
             // Logic to show a few page numbers
             const pageNum = i + 1;
             const isCurrent = currentPage === pageNum;
             return (
               <button
                 key={i}
                 onClick={() => onPageChange((pageNum - 1) * limit)}
                 className={`w-10 h-10 rounded-xl font-bold text-sm transition-all ${
                   isCurrent 
                   ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200' 
                   : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-50'
                 }`}
               >
                 {pageNum}
               </button>
             );
          })}
        </div>

        {/* Next Button */}
        <button
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(skip + limit)}
          className="p-3 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 disabled:opacity-30 disabled:cursor-not-allowed hover:border-indigo-600 transition-colors shadow-sm"
        >
          <ChevronRight size={20} className="text-indigo-600" />
        </button>
      </div>

      <p className="text-xs text-gray-500 font-medium uppercase tracking-widest">
        Showing page {currentPage} of {totalPages}
      </p>
    </div>
  );
};

export default Pagination;