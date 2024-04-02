// DesignImage.jsx
import React from 'react';

function DesignImage({ designId }) {
    const imageUrl = `http://localhost:3001/api/design-image/${designId}`;
    return <img src={imageUrl} alt="Design" />;
}

export default DesignImage;
