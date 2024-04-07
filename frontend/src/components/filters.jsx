import React, { useState, useEffect } from 'react';

const colorOptions = ['Red', 'Green', 'Blue'];


const Filters = ({ spaces, keywords, onImagesFiltered }) => {
  // Local state for dynamic filters
  const [color, setColor] = useState('');
  const [space, setSpace] = useState('');
  const [keyword, setKeyword] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [priceRanges, setPriceRanges] = useState([]);
  const [images, setImages] = useState([]);

  // console.log(spaces);
  // console.log(keywords);
  // fetch('http://localhost:3001/api/price-ranges')
  // .then(response => {
  //   if (!response.ok) {
  //     throw new Error('Network response was not ok');
  //   }
  //   return response.json();
  // })
  // .then(data => {
  //   console.log(data);
  // })
  // .catch(error => {
  //   console.error('There was a problem with your fetch operation:', error);
  // });

   useEffect(() => {
    // Example fetch call, adjust the URL to match your actual API endpoint
    fetch('http://localhost:3001/api/price-ranges')
      .then(response => response.json())
      .then(data => {
        const formattedPriceRanges = data.priceRanges.map(range => `$${range}`);
        setPriceRanges(formattedPriceRanges);
      })
      .catch(error => {
        console.error('There was a problem with fetching price ranges:', error);
      });
   }, []);
  
const fetchFilteredDesigns = async ({ keyword, space, priceRange }) => {
    const queryParams = new URLSearchParams({
      ...(keyword && { keyword }),
      ...(space && { space }),
      ...(priceRange && { priceRange })
    }).toString();

    try {
      const response = await fetch(`http://localhost:3001/api/filtered-designs?${queryParams}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const { designIds } = await response.json();
      console.log('Fetched designIds:', designIds); // Log the fetched designIds

      displayImagesForDesigns(designIds, space);
    } catch (error) {
      console.error('There was a problem with your fetch operation:', error);
    }
  };

  // Assuming a function to map space name to its folder equivalent
  const spaceToFolderMapping = {
    'Living Room': '1living-room',
    'kitchen': '2kitchen',
    'bathroom': '3bathroom',
    'hall room': '4hall-room',
    'master bedroom': '5master-bedroom',
    'dining area': '6dining-area',
    'outdoor spaces': '7outdoor-spaces',
    'home office': '8home-office',
    'dressing room': '9dressing-room',
    'kids bedroom': '10kids-bedroom',    
  };

  const displayImagesForDesigns = (designIds, selectedSpace) => {
        const imageElements = designIds.map(id => {
            const folderName = spaceToFolderMapping[selectedSpace];
            const imageUrl = `/spaces/${folderName}/${id}.jpg`;
            // Return an object with the necessary data instead of an image element
            return { imageUrl, alt: `Design ${id}`, key: id };
        });
        
        // Call the prop function to update the parent state
        onImagesFiltered(imageElements);
    };



  return (
    <div className="flex justify-center items-center w-full">
      <div className='w-2/3 mt-2'>
        {/* Space Filter Buttons */}
    <div className="mt-4 py-4 flex flex-wrap gap-2 justify-center">
      {spaces.map((name) => (
        <button 
          key={name} 
          onClick={() => {
            const sectionId = name.replace(/\s+/g, '-').toLowerCase(); // Adjust ID format if necessary
            const sectionElement = document.getElementById(sectionId);
            if (sectionElement) {
              sectionElement.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className="filter-button text-black darker-grotesque capitalize text-2xl bg-white border border-gray-300 rounded-md px-6 py-3 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-200 focus:border-transparent"
        >
          {name}
        </button>
      ))}
    </div>
        

        {/* Dynamic Filters */}
        <div className="bg-white text-black bg-opacity-90 rounded-lg shadow-lg p-8 mt-4">
          <div className="flex justify-between items-center mb-6">
            {/* Keyword Dropdown */}
            <div className="flex-1 mr-2">
              <select
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                className="p-3 w-full rounded-md border-gray-300 shadow-md"
              >
                <option value="">Keyword</option>
                {keywords.map((option, index) => (
                  <option key={index} value={option}>{option}</option>
                ))}
              </select>
            </div>

            {/* Color Dropdown */}
            {/* <div className="flex-1 mx-2">
              <select
                value={color}
                onChange={(e) => setColor(e.target.value)}
                className="p-3 w-full rounded-md  border-gray-300 shadow-md "
              >
                <option value="">Color</option>
                {colorOptions.map((option, index) => (
                  <option key={index} value={option}>{option}</option>
                ))}
              </select>
            </div> */}

            {/* Space Dropdown */}
            <div className="flex-1 mx-2">
              <select
                value={space}
                onChange={(e) => setSpace(e.target.value)}
                className="p-3 w-full rounded-md border-gray-300 shadow-md"
              >
                <option value="">Space</option>
                {spaces.map((option, index) => (
                  <option key={index} value={option}>{option}</option>
                ))}
              </select>
            </div>
            

            {/* Price Range Dropdown */}
            <div className="flex-1 ml-2">
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="p-3 w-full rounded-md border-gray-300 shadow-md"
              >
                <option value="">Price Range</option>
                {priceRanges.map((range, index) => (
                  <option key={index} value={range.replace('$', '')}>{range}</option> // Removing $ for value consistency
                ))}
              </select>
            </div>
          </div>

          <div className="flex justify-center">
            <button
              onClick={() => fetchFilteredDesigns({ keyword, space, priceRange })}
              className="py-3 px-8 bg-lavender w-1/2 text-black rounded-md hover:bg-[#cec9e1]"
            >
              Apply Filters
            </button>

          </div>
        </div>
      </div>

      {/* Render filtered images here */}
      {/* <div className="images-container w-full mt-4 flex flex-wrap justify-center gap-4">
        {images.length > 0 ? (
          images
        ) : (
          <p className="text-center w-full">No designs found. Apply filters to see results.</p>
        )}
      </div> */}
    </div>
  );
};


export default Filters;
