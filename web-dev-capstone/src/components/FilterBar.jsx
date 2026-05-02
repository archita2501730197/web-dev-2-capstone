import React, { useState } from 'react';
import { ChevronDown, Filter, X } from 'lucide-react';

const FilterBar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const filterOptions = {
    Category: ["Smartphones", "Laptops", "Fragrances", "Skincare"],
    Price: ["Under $50", "$50 - $200", "$200 - $500", "Over $500"],
    Brand: ["Apple", "Samsung", "HP", "Dell"],
    SortBy: ["Newest", "Price: Low to High", "Price: High to Low", "Rating"]
  };

  const toggleDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <div className="bg-white dark:bg-gray-900 sticky top-[72px] z-40 border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-6 py-3 flex items-center gap-4 overflow-x-auto no-scrollbar">
        <div className="flex items-center gap-2 pr-4 border-r dark:border-gray-700 mr-2">
          <Filter size={18} className="text-indigo-600" />
          <span className="font-bold text-sm uppercase tracking-wider">Filters</span>
        </div>

        {Object.keys(filterOptions).map((filter) => (
          <div key={filter} className="relative">
            <button
              onClick={() => toggleDropdown(filter)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all border
                ${activeDropdown === filter 
                  ? 'bg-indigo-600 text-white border-indigo-600 shadow-lg shadow-indigo-200 dark:shadow-none' 
                  : 'bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-transparent hover:border-gray-300 dark:hover:border-gray-600'}`}
            >
              {filter}
              <ChevronDown size={14} className={`${activeDropdown === filter ? 'rotate-180' : ''} transition-transform`} />
            </button>

            {/* Dropdown Menu */}
            {activeDropdown === filter && (
              <div className="absolute top-full left-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-700 p-2 animate-fade-in z-50">
                {filterOptions[filter].map((option) => (
                  <button
                    key={option}
                    className="w-full text-left px-4 py-2.5 text-sm hover:bg-indigo-50 dark:hover:bg-indigo-900/30 rounded-xl transition-colors"
                    onClick={() => setActiveDropdown(null)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
        
        {activeDropdown && (
           <div 
             className="fixed inset-0 z-[-1]" 
             onClick={() => setActiveDropdown(null)}
           ></div>
        )}
      </div>
    </div>
  );
};

export default FilterBar;