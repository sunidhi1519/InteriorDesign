import React from 'react';
// Import your images
import image1 from '/12.jpg'; // Vertical
import image2 from '/t4.jpg'; // Horizontal
import image3 from '/m2.jpg'; // Square
import image4 from '/9.jpg'; // Square
import image5 from '/t6.jpg'; // Horizontal
import image6 from '/51.jpg'; // Vertical

const Explore = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold mt-20 mb-8">Explore Our Designs</h1>
          <p className="text-xl mb-10">A collection of our finest work</p>
        </div>
        {/* Section 1 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start mb-10 cursor-pointer">
          <div className="md:col-span-1 space-y-4">
            <div className="overflow-hidden rounded-lg">
              <img src={image1} alt="Vertical design" className="w-full h-auto object-cover transform hover:scale-105 transition duration-300" />
            </div>
            <div className="overflow-hidden rounded-lg">
              <img src={image2} alt="Horizontal design" className="w-full h-auto object-cover transform hover:scale-105 transition duration-300" />
            </div>
          </div>
          
          {/* Section 2 - Adjusted for vertical stacking of square images */}
          <div className="md:col-span-1 space-y-4">
            <div className="overflow-hidden rounded-lg">
              <img src={image3} alt="Square design 1" className="w-full h-auto object-cover transform hover:scale-105 transition duration-300" />
            </div>
            <div className="overflow-hidden rounded-lg">
              <img src={image4} alt="Square design 2" className="w-full h-auto object-cover transform hover:scale-105 transition duration-300" />
            </div>
          </div>

          {/* Section 3 */}
          <div className="md:col-span-1 space-y-4">
            <div className="overflow-hidden rounded-lg">
              <img src={image5} alt="Horizontal design" className="w-full h-auto object-cover transform hover:scale-105 transition duration-300" />
            </div>
            <div className="overflow-hidden rounded-lg">
              <img src={image6} alt="Vertical design" className="w-full h-auto object-cover transform hover:scale-105 transition duration-300" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;




// import React from 'react';
// // Import your images here
// import image1 from '/1.jpg';
// import image2 from '/t4.jpg';
// import image3 from '/5.jpg';
// import image4 from '/9.jpg';
// // Continue importing images as needed

// const images = [
//   image1,
//   image2,
//   image3,
//   image4,
//   // Add all imported images here
// ];

// const Explore = () => {
//   return (
//     <div className="min-h-screen bg-gray-100 p-5">
//       <div className="container mx-auto">
//         <div className="text-center mb-20"> {/* Increased bottom margin */}
//           <h1 className="text-5xl font-bold my-10">Explore Our Designs</h1> {/* Increased font size and added vertical margins */}
//           <p className="text-xl mb-10">A collection of our finest work</p> {/* Increased bottom margin */}
//         </div>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//           {images.map((image, index) => (
//             <div key={index} className="overflow-hidden rounded-lg shadow-lg">
//               <img src={image} alt={`Design ${index + 1}`} className="w-full h-auto object-cover transform hover:scale-110 transition duration-500" />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Explore;

