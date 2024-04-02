// DesignGrid.jsx
import React from 'react';

const DesignGrid = ({ designs, searchTerm }) => {
  // Assuming the getImageSizeClass function is here or imported if used across multiple components
  const getImageSizeClass = (index, totalImages) => {
    if (index === totalImages - 1) {
      return "col-span-3 md:col-span-5";
    }
    const patterns = [
      "col-span-2 row-span-2",
      "col-span-1 row-span-1",
      "col-span-1 row-span-1",
      "col-span-1 row-span-1",
      "col-span-1 row-span-1",
    ];
    return patterns[index % patterns.length];
  };

  return (
    <div className="px-12 py-8 ">
      {designs.filter(({ space }) => space.toLowerCase().includes(searchTerm.toLowerCase())).map(({ space, images }) => (
        <div key={space} className="py-12">
          <h2 className="text-6xl font-semibold my-12 uppercase text-center dm-sans-md">{space}</h2>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
            {images.map((image, index) => (
              <img key={index} src={image} alt={space} className={`w-full h-auto object-cover rounded-md ${getImageSizeClass(index, images.length)}`} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DesignGrid;
