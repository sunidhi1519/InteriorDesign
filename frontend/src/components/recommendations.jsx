import React, { useState, useEffect, useRef } from 'react';
import Navbar from './navbar';

const RecommendationsPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [recommendedImages, setRecommendedImages] = useState([]);
  const uploadedImageRef = useRef(null); // Ref for the uploaded image section

  // Handle file selection and preview
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.substr(0, 5) === "image") {
      setSelectedImage(file);
      setImagePreview(URL.createObjectURL(file));
    } else {
      setSelectedImage(null);
    }
  };

  useEffect(() => {
    // Scroll to the uploaded image section if there is a selectedImage
    if (selectedImage && uploadedImageRef.current) {
      uploadedImageRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [selectedImage]);

  // Dummy function to simulate recommendation retrieval
  const handleRecommendationRetrieval = () => {
    const dummyRecommendedImages = [
        'https://images.pexels.com/photos/5793641/pexels-photo-5793641.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        'https://images.pexels.com/photos/17264275/pexels-photo-17264275.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        'https://images.pexels.com/photos/15493331/pexels-photo-15493331.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        'https://images.pexels.com/photos/10493902/pexels-photo-10493902.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        'https://images.pexels.com/photos/17264276/pexels-photo-17264276.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    ];
    setRecommendedImages(dummyRecommendedImages);
};

  return (
    <>
      <Navbar pageType="recommendations" />
      <div className="relative min-h-screen w-full pt-28 bg-cover bg-center" style={{ backgroundImage: `url(/m2.jpg)` }}>
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="pt-8 relative z-10 flex flex-col items-center justify-center text-white min-h-[50vh]">
          <h2 className="text-6xl font-semibold mb-8">Get Recommendation</h2>
          <div className="mt-6 w-3/4 md:w-1/2">
            <label className="w-full flex flex-col items-center justify-center p-4 rounded-full bg-white text-black cursor-pointer outline-none hover:bg-gray-200 mb-10">
              Upload Image
              <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
            </label>
            <div style={{ height: selectedImage ? 'auto' : '0', transition: 'height 0.3s ease' }}>
              {selectedImage && <p className="mt-8 text-3xl schibsted-grotesk text-white text-center bg-custom-nude p-4 rounded-md">Image Uploaded &#x2193;</p>}
            </div>
          </div>
        </div>
      </div>
      
      {selectedImage && (
        <div ref={uploadedImageRef} className="w-full flex flex-col items-center justify-center pt-12 relative">
          <img src={imagePreview} alt="Preview" className="max-w-full h-auto" style={{ padding: '12px' }} />
          <button onClick={handleRecommendationRetrieval} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4 py-4 w-1/3 text-xl rounded-full bg-white text-black cursor-pointer hover:bg-gray-200 ">
            Get Recommended Images
          </button>
        </div>
      )}

      {recommendedImages.length > 0 && (
        <div className="w-full flex flex-col items-center justify-center py-12">
          <h3 className="text-5xl font-semibold my-8 p-6">Recommendations</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full px-12">
            {recommendedImages.map((image, index) => (
              <img key={index} src={image} alt={`Recommendation ${index}`} className="w-full h-auto" />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default RecommendationsPage;
