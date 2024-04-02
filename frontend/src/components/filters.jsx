import React from 'react';

const filterNames = ['Luxury', 'Apartment', 'Lamp', 'Sofa', 'Nude','Garden', 'Library', 'Furnishings', 'Marble'];

const Filters = () => {
  return (
    <div className="mt-4 py-4 flex flex-wrap gap-2 justify-center">
      {filterNames.map((name) => (
        <button key={name} className="filter-button  text-black darker-grotesque text-2xl bg-white border border-gray-300 rounded-md px-6 py-3 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-200 focus:border-transparent">{name}</button>
      ))}
    </div>
  );
};

export default Filters;
