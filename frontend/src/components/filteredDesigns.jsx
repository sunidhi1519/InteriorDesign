import React, { useEffect, useRef } from 'react';

const FilteredDesignsDisplay = ({ images }) => {
    const imagesRef = useRef(null);

    useEffect(() => {
        // Scrolls to the images section when the images update
        if (images.length > 0 && imagesRef.current) {
            imagesRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, [images]);

    return (
        <div ref={imagesRef} className="images-container w-full mt-8 px-4 flex flex-col items-center">
            <h2 className="text-2xl font-semibold mb-4">Filtered Results</h2>
            <div className="w-full">
                {images.length > 0 ? (
                    images.map(({ imageUrl, alt, key }) => (
                        <img src={imageUrl} alt={alt} key={key} className="w-full h-auto my-4 object-cover" />
                    ))
                ) : (
                    <p className="text-center w-full">No designs found. Apply filters to see results.</p>
                )}
            </div>
        </div>
    );
};

export default FilteredDesignsDisplay;
