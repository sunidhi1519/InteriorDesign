import React from 'react';

const ServiceCard = ({ title, description, linkText }) => {
  return (
    // Removed the shadow-lg class to remove the box shadow
    <div className="bg-white rounded-lg p-6 flex flex-col justify-between" style={{ height: '300px' }}>
      <h3 className="text-3xl font-semibold mb-6 text-custom-nude text-left ">{title}</h3>
      <p className="mb-4 text-xl text-left">{description}</p>
      <a href="#" className="text-custom-nude text-xl font-medium py-2  rounded-full inline-block align-self-start">
        {linkText}
      </a>
    </div>
  );
};

const Services = ({id}) => {
  return (
    // Adjusted the min-h-screen for full height, and increased the bottom margin for more space between heading and cards
    <div id={id} className="min-h-screen flex flex-col items-center justify-center py-20 w-full">
      <div className="container mx-auto px-14">
        <h2 className="text-6xl font-semibold mb-32 text-left text-black">Discover Our Services</h2> {/* Increased the margin bottom */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
          <ServiceCard
            title="Essential Service"
            description="Explore essential details like value, quality, service duration, and what sets it apart. Or utilize these sections to highlight various key aspects of your products or services."
            linkText="Explore Now"
          />
          <ServiceCard
            title="Premium Service"
            description="Review core details such as cost, value, service duration, and uniqueness. Alternatively, use these sections to exhibit diverse key features of your products or services."
            linkText="Discover More"
          />
          <ServiceCard
            title="Exclusive Service"
            description="Uncover significant information like pricing, value, duration of service, and what makes it exclusive. Alternatively, leverage these sections to showcase varied key attributes of your products or services."
            linkText="Learn More"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
