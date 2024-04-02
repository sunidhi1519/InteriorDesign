import React from 'react';
import Reviews from '../components/reviews';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'; // Importing specific icons


const Footer = ({id}) => {
  return (
    <div  id={id}>
      {/* Encapsulating Tagline and Image within Flex Container */}
      <div className="flex">
        {/* Tagline Section */}
        <div className="bg-[#d0cce0] text-center flex-1 py-48 dm-sans">
          <h2 className="text-8xl py-5">EMPOWERING YOUR</h2>
          <h2 className="text-8xl font-extrabold py-5">IMAGINATION</h2>
        </div>
      </div>

      {/* Customer Review Section */}
      <Reviews />

      {/* Flex Section after Reviews */}
      <div className="bg-[#c1cbda] py-36 flex flex-col items-center dm-sans">
        {/* Content of the flex section */}
        <h3 className="text-8xl text-center pb-10 ">DESIGNING DREAMS</h3>
        <h3 className="text-3xl text-center  mx-auto sofia-regular">
"The best rooms have something to say about the people who live in them." - David Hicks</h3>
        {/* <div className="flex justify-center space-x-10">
          <FaFacebookF className="text-6xl text-black" />
          <FaTwitter className="text-6xl text-black" />
          <FaInstagram className="text-6xl text-black" />
          <FaLinkedinIn className="text-6xl text-black" />
        </div> */}
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white text-center py-8">
        <p>© {new Date().getFullYear()} DreamScapes. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Footer;