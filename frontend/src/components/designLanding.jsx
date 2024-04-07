import React from 'react';
import Filters from './filters'; // Adjust the path as necessary

const DesignsLanding = ({ searchTerm, setSearchTerm, spaces, keywords, onImagesFiltered }) => {

  return (
    <div className="relative min-h-screen w-full pt-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src="/tt3.jpg" alt="Designs Background" loading="lazy" className="w-full h-full object-cover" />
        {/* Overlay with gradient */}
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center text-white h-full">
        {/* Explore Designs Heading */}
        <h2 className="text-6xl font-semibold mt-32 mb-6 dm-sans-md text-bla">Explore Designs</h2>

        {/* Search Bar */}
        {/* <div className="mt-6 w-3/4 md:w-1/2">
          <input
            type="text"
            placeholder="Search for designs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-4 rounded-full outline-none"
          />
        </div> */}

        {/* Filters */}
        <div className="mt-4">
            <Filters spaces={spaces} keywords={keywords} onImagesFiltered={onImagesFiltered} />

        </div>
      </div>
    </div>
  );
};

export default DesignsLanding;
