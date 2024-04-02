import React from 'react';
import aboutImage from '/51.jpg'; // Assuming you have an image file you're importing

const About = ({ id }) => {
  return (
    <div id={id} className="flex min-h-screen bg-gray-100 ">
      <div className="flex-1 flex items-center justify-center px-4 md:px-10 lg:px-20 xl:px-32 bg-[#e1ccbe] bg-opacity-100">
        {/* Centered Text Content with Spacing */}
        <div>
          {/* Increased the margin bottom for the heading */}
          <h2 className="text-5xl font-semibold mb-10">About Us</h2>
          {/* Paragraph remains the same */}
          <p className="text-xl py-10 pr-11">
            DreamScapes is dedicated to offering exceptional design services, focusing on creativity, innovation, and client satisfaction. Our team of expert designers work closely with clients to transform their spaces into dreamscapes that reflect their personality and lifestyle.
          </p>
        </div>
      </div>
      
      {/* Image Container - Making it stick to the right side */}
      <div className="flex-none">
              {/* <img src={aboutImage} alt="About Us" className="max-h-[810px] w-auto object-cover mx-auto"  /> */}
        <img src={aboutImage} alt="About Us" className="object-cover" style={{ height: '100vh', width: 'auto' }} />
      </div>
    </div>
  );
};

export default About;
