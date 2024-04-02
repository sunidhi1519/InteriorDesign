import React from 'react';
import backgroundImage1 from '/tt9.jpg';
import backgroundImage2 from '/tt7.jpg';
import backgroundImage3 from '/tt8.jpg';

const reviews = [
  {
    image: backgroundImage1,
    text: "DreamScapes transformed our living space into a sanctuary. We couldn't be happier with the results!",
    client: "Alex & Jamie",
  },
  {
    image: backgroundImage2,
    text: "The attention to detail and innovative design has truly made our home a dream come true.",
    client: "Morgan L.",
  },
  {
    image: backgroundImage3,
    text: "From concept to execution, DreamScapes exceeded all our expectations. Highly recommended!",
    client: "The Hendersons",
  },
];

const Reviews = () => {
  return (
    <div className="bg-gray-100 py-20 mb-20"> {/* Increased top and bottom padding */}
      <div className="container mx-auto max-w-86xl"> {/* Set maximum width and horizontal padding */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mt-10 mb-12">What Our Clients Are Saying</h2> {/* Increased heading size */}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {reviews.map(({ image, text, client }, index) => (
            <div key={index} className="space-y-6 mx-2"> {/* Added horizontal margin */}
              <img src={image} alt={`Review ${index + 1}`} className="w-full object-cover rounded-lg" style={{ maxHeight: '24rem' }} />
              <div>
                <p className="text-2xl dm-sans-md mx-auto px-6 mb-8 text-center" style={{ maxWidth: '100%' }}>{text}</p> {/* Increased font size and adjusted margin */}
                <p className="text-xl dm-sans-md mx-auto text-center" style={{ maxWidth: '100%' }}>- {client}</p> {/* Client name styling */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
