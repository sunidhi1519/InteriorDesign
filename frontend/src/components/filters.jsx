import React, { useState } from 'react';

// Predefined space names (assuming these are your spaces for filters)
const spaceNames = ['Luxury', 'Apartment', 'Lamp', 'Sofa', 'Nude', 'Garden', 'Library', 'Furnishings', 'Marble'];

const Filters = ({ onApplyFilters }) => {
  // Local state for dynamic filters
  const [color, setColor] = useState('');
  const [keyword, setKeyword] = useState('');
  const [priceRange, setPriceRange] = useState([0, 100]); // Assuming price range from 0 to 100 for demonstration

  return (
    <div>
      {/* Space Filter Buttons */}
      <div className="mt-4 py-4 flex flex-wrap gap-2 justify-center">
        {spaceNames.map((name) => (
          <button key={name} className="filter-button text-black darker-grotesque text-2xl bg-white border border-gray-300 rounded-md px-6 py-3 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-200 focus:border-transparent">
            {name}
          </button>
        ))}
      </div>

      {/* Dynamic Filters */}
      <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg mt-4">
        <div className="flex justify-between items-center mb-6">
          {/* Keyword Filter */}
          <div className="flex-1 mr-2">
            <input
              id="keyword"
              type="text"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="Keyword"
              className="p-2 w-full rounded-md border-gray-300 shadow-sm"
            />
          </div>

          {/* Color Filter */}
          <div className="flex-1 mx-2">
            <input
              id="color"
              type="text"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              placeholder="Color"
              className="p-2 w-full rounded-md border-gray-300 shadow-sm"
            />
          </div>

          {/* Price Filter - Placeholder for demonstration */}
          <div className="flex-1 ml-2">
            <p className="text-xs text-gray-500">Price Range</p>
          </div>
        </div>

        <div className="flex justify-center">
          <button
            onClick={() => onApplyFilters({ keyword, color, priceRange })}
            className="py-2 px-8 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filters;
