import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar';
import DesignsLanding from '../components/designLanding';
import DesignGrid from '../components/designGrid';
import FilteredDesignsDisplay from '../components/filteredDesigns';

// This remains unchanged as it's crucial for your image rendering logic
const spaces = [
  '1living-room', '2kitchen', '3bathroom', '4hall-room',
  '5master-bedroom', '6dining-area', '7outdoor-spaces',
  '8home-office', '9dressing-room', '10kids-bedroom',
];

const Designs = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [spaceOptions, setSpaceOptions] = useState([]); 
  const [keywords, setKeywords] = useState([]);

  const [filteredImages, setFilteredImages] = useState([]);


  
  useEffect(() => {
  fetch('http://localhost:3001/api/spaces-and-keywords')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      // Assuming data.keywords is an array of strings with quotes
      const cleanedKeywords = data.keywords.map(keyword => keyword.replace(/"/g, ''));
      setSpaceOptions(data.spaces || []);
      setKeywords(cleanedKeywords || []);
    })
    .catch(error => {
      console.error('Error fetching spaces and keywords:', error);
    });
}, []);



  // Your original mapping logic for images, based on the hardcoded `spaces` array
  const designs = spaces.map((space, index) => ({
    space: space.substring(1), // Removing the number prefix for display purposes
    images: Array.from({ length: 10 }, (_, i) => `/spaces/${space}/${index * 10 + i + 1}.jpg`)
  }));

  return (
    <div>
      <Navbar pageType="designs" />
      {/* Passing dynamic spaceOptions for filters */}
      <DesignsLanding searchTerm={searchTerm} setSearchTerm={setSearchTerm} spaces={spaceOptions} keywords={keywords} onImagesFiltered={setFilteredImages} />

      <FilteredDesignsDisplay images={filteredImages} />

      <DesignGrid designs={designs}  spaces={spaceOptions} searchTerm={searchTerm} />
    </div>
  );
};

export default Designs;
