import React from 'react';
import consultationImage from '/10.jpg'; // Update the path to your image

const Consultation = () => {
  return (
    <div className="flex min-h-screen bg-gray-100 px-16 py-12">
      {/* Image Container - Sticking to the left side */}
      <div className="flex-none hidden lg:block">
        <img src={consultationImage} alt="Consultation" className="h-screen w-full object-cover" />
      </div>

      {/* Right Side Content with Text and Button */}
      <div className="flex-1 flex items-center justify-center px-4 md:px-10 lg:px-20 xl:px-32">
        <div>
          <h2 className="text-4xl font-semibold mb-6">Consultation Services</h2>
          <p className="text-xl leading-relaxed mb-6">
            At DreamScapes, we provide personalized consultation services to help you achieve your ideal space. Our experts are here to guide you through the design process, ensuring that your vision comes to life.
          </p>
            <p className="text-2xl font-bold leading-relaxed my-8 mx-auto">Browse Designer Portfolios</p>
          <button className="bg-custom-nude text-white text-xl py-4 px-5 rounded-full">
            Book a Consultation
                  </button>
        </div>
      </div>
    </div>
  );
};

export default Consultation;
