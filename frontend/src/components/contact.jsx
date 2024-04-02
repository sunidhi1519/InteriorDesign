import React from 'react';

const ContactUs = ({ id }) => {
  return (
    <div id={id} className="min-h-screen flex items-center justify-center">
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center gap-4">
        {/* Footer Information on the left, adjusted classes for better centering and less gap */}
        <div className="w-full md:w-1/4 text-left mr-10 dm-sans-md">
          <div className="mb-8">
            <h3 className="text-2xl mb-3 font-normal  ">Location</h3>
            <p className='text-lg'>123 DreamScapes Lane</p>
            <p className='text-lg'>Imagination City, Fantasy</p>
          </div>
          <div className="mb-8">
            <h3 className="text-2xl mb-3">Contact</h3>
            <p className='text-lg'>Email: contact@dreamscapes.com</p>
          </div>
          <div className="mb-8">
            <h3 className="text-2xl mb-3">Hours</h3>
            <p className='text-lg'>Monday - Friday</p>
            <p className='text-lg'>9:00 AM - 11:30 PM</p>
          </div>
        </div>

        {/* Contact Form on the right, adjusted classes for better centering */}
        <div className="w-full md:w-1/2 px-10">
          <h2 className="text-5xl font-semibold mb-8">Contact Us</h2>
          <p className="text-xl mb-8">Have questions or want to start a project? Reach out to us!</p>
          <form className="w-full md:max-w-xl">
            <input
              type="text"
              placeholder="Your Name"
              className="block w-full p-4 mb-4 rounded-lg text-lg border border-black border-opacity-20 focus:border-black focus:ring-0"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="block w-full p-4 mb-4 rounded-lg text-lg border border-black border-opacity-20 focus:border-black focus:ring-0"
            />
            <textarea
              placeholder="Your Message"
              className="block w-full p-4 mb-4 rounded-lg text-lg border border-black border-opacity-20 focus:border-black focus:ring-0"
              rows="4"
            ></textarea>
            <button
              type="submit"
              className="bg-[#c79288] text-black text-xl font-medium py-3 px-8 rounded-full hover:bg-[#b38179] transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
