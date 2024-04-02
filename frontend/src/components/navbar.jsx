import React, { useState, useEffect } from 'react';
import { Collapse } from '@material-tailwind/react';
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';


const Navbar = ({ pageType }) => {
  const [open, setOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const scrollListener = () => {
      setIsScrolling(window.scrollY > 0);
    };

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  }, []);

  const linkBaseClasses = "text-xl relative hover:scale-110 transition-transform inline-block";
const hoverEffectClasses = "after:content-[''] after:block after:w-0 after:h-0.5 after:bg-white after:absolute after:bottom-[-2px] after:left-0 after:transition-all after:duration-300 hover:after:w-full";

// The rest of your component remains unchanged...



  const renderLinks = () => {
    switch (pageType) {
      case 'home':
        return (
          <>
            <li className={linkBaseClasses}>
              <a href="/designs"  className={hoverEffectClasses}>Explore</a>
            </li>
            <li className={linkBaseClasses}>
              <a href="/#service" className={hoverEffectClasses}>Service</a>
            </li>
            <li className={linkBaseClasses}>
              <a href="/#about" className={hoverEffectClasses}>About</a>
            </li>
            <li className={linkBaseClasses}>
              <a href="/#contact" className={hoverEffectClasses}>Contact Us</a>
            </li>
          </>
        );
      case 'designs':
        return (
          <>
            <li className={linkBaseClasses}>
              <a href="/" className={hoverEffectClasses}>Homepage</a>
            </li>
            <li className={linkBaseClasses}>
              <a href="/designs" className={hoverEffectClasses}>Designs</a>
            </li>
            <li className={linkBaseClasses}>
              <a href="/designers" className={hoverEffectClasses}>Designers</a>
            </li>
            <li className={linkBaseClasses}>
              <a href="/dashboard" className={hoverEffectClasses}>Dashboard</a>
            </li>
          </>
        );
      default:
        return null;
    }
  };


   return (
    <header className={`schibsted-grotesk  fixed top-0 left-0 right-0 z-50 w-full ${isScrolling ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <nav className="flex justify-between items-center p-6">
        <div className={`text-4xl hover:scale-110 transition-transform ml-4 ${isScrolling ? 'text-gray-800' : 'text-white'}`}>
          <a href="/" className="cursor-pointer">DreamScapes</a>
        </div>
        <div className="flex items-center">
          <ul className={`flex space-x-10 mr-5 ${isScrolling ? 'text-gray-800' : 'text-white'}`}>
            {renderLinks()}
          </ul>
          {/* Conditionally render the Upload Image button for the designs page */}
          {pageType === 'designs' && (
            <button className={`text-xl font-md py-3 px-6 rounded-3xl ml-4 mr-6 bg-custom-nude`}> {/* Adjust the bg-custom-blue to your color */}
              Upload Image
            </button>
          )}
          {/* Show Book Appointment button for other pages except designs */}
          {pageType !== 'designs' && (
            <button className={`text-xl font-md py-3 px-6 rounded-3xl ml-4 mr-6 bg-custom-nude`}>
              Book Appointment
            </button>
          )}
          <button onClick={() => setOpen(!open)} className="lg:hidden">
            {open ? <XMarkIcon className="h-5 w-5 text-white" /> : <Bars3Icon className="h-5 w-5 text-white" />}
          </button>
        </div>
      </nav>
      <Collapse open={open} className="lg:hidden">
        <div className="bg-white px-4 py-2">
          <div className="flex flex-col">
            {/* Adjust links for mobile menu here */}
          </div>
        </div>
      </Collapse>
    </header>
  );
};


export default Navbar;

// const Navbar = () => {
//   return (
//     <header className="schibsted-grotesk absolute top-0 left-0 right-0 z-10">
//       <nav className="flex justify-between items-center p-6 bg-black bg-opacity-0">
//         {/* Company Name with margin-left for positioning */}
//         <div className="text-white text-4xl hover:scale-110 transition-transform ml-4"> {/* Adjust ml-4 as needed */}
//           <a href="#home" className="hover:text-gray-300 cursor-pointer">DreamScapes</a>
//         </div>

//         {/* Right-side container for links and button */}
//         <div className="flex items-center">
//           {/* Navigation Links */}
//           <ul className="flex space-x-10 mr-5 text-white"> {/* Added marginRight (mr-4) for spacing */}
//             <li className=" text-xl hover:scale-110 transition-transform">
//               <a href="#explore" className="hover:text-gray-300 cursor-pointer">Explore</a>
//             </li>
//             <li className=" text-xl hover:scale-110 transition-transform">
//               <a href="#service" className="hover:text-gray-300 cursor-pointer">Service</a>
//             </li>
//             <li className=" text-xl hover:scale-110 transition-transform">
//               <a href="#about" className="hover:text-gray-300 cursor-pointer">About</a>
//             </li>
//             <li className=" text-xl hover:scale-110 transition-transform">
//               <a href="#contact" className="hover:text-gray-300 cursor-pointer">Contact Us</a>
//             </li>
//           </ul>

//           {/* Book Appointment Button with custom background color */}
//           <button className="bg-custom-nude text-black text-xl font-md py-3 px-6 rounded-3xl ml-4 mr-6">
//             Book Appointment
//           </button>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;
