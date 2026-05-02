import React from 'react';

const Sidebar = () => {
  const filters = ["Brand", "Size", "Price", "Discount", "Color"];
  return (
    <aside className="hidden md:block w-64 p-6 border-r border-gray-200 dark:border-gray-800 h-screen sticky top-20 overflow-y-auto">
      <h3 className="font-bold text-lg mb-4">Filters</h3>
      {filters.map((filter) => (
        <div key={filter} className="mb-6">
          <h4 className="font-semibold text-sm text-gray-500 uppercase mb-2">{filter}</h4>
          <div className="space-y-2">
            {[1, 2, 3].map(i => (
              <label key={i} className="flex items-center gap-2 text-sm cursor-pointer hover:text-indigo-600">
                <input type="checkbox" className="rounded border-gray-300" />
                Option {i}
              </label>
            ))}
          </div>
        </div>
      ))}
    </aside>
  );
};

export default Sidebar;