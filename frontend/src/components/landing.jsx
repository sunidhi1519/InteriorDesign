import React from 'react';

const Landing = () => {
  return (
    <div className="relative min-h-screen w-full" id="home">
      {/* Background with gradient */}
      <div className="absolute inset-0 z-0">
        <img src="/tt.jpg" alt="Background" loading='lazy' className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-transparent opacity-40"></div>
      </div>
      
      <div className="relative z-10 flex flex-col items-center justify-center text-white pt-60 pb-20">
        <h1 className="text-6xl font-semibold mb-4">Welcome to DreamScapes</h1>
        <p className="text-2xl pt-40">Discover your design inspiration.</p>
        <p className="text-2xl mt-2">Collaborate with talented designers, and uncover innovative interior design solutions.</p>
        <a href="#reviews" className="bg-[#c79288] text-black text-2xl font-md py-3 px-6 rounded-3xl mt-10 inline-block">
  Learn More
</a>
      </div>
    </div>
  );
};

export default Landing;
