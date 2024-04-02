// Designs.jsx
import React, { useState } from 'react';
import Navbar from '../components/navbar';
import DesignsLanding from '../components/designLanding';
import DesignGrid from '../components/designGrid';

const spaces = [
  '1living-room', '2kitchen', '3bathroom', '4hall-room',
  '5master-bedroom', '6dining-area', '7outdoor-spaces',
  '8home-office', '9dressing-room', '10kids-bedroom',
];

const Designs = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const designs = spaces.map((space, index) => ({
    space: space.substring(1), // Removing the number prefix for display purposes
    images: Array.from({ length: 10 }, (_, i) => `/spaces/${space}/${index * 10 + i + 1}.jpg`)
  }));

  return (
    <div>
      <Navbar pageType="designs" />
      <DesignsLanding searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <DesignGrid designs={designs} searchTerm={searchTerm} />
    </div>
  );
};

export default Designs;
