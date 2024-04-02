import React from 'react';
import Navbar from '../components/navbar'; 
import Landing from '../components/landing';
import Explore from '../components/explore';
import Services from '../components/services';
import Consultation from '../components/consultation';
import About from '../components/about';
import ContactUs from '../components/contact';
import Footer from '../components/footer';



const Home = () => {
  return (
    <div className="schibsted-grotesk min-h-screen bg-white">
      <Navbar pageType="home" />
      <Landing />
      <Explore />
      <Services id="service" />
      <Consultation />
      <About id="about"/>
      <ContactUs  id="contact"/>
      <Footer id="reviews"/>
    </div>
  );
};

export default Home;



// background #eeedeb 
// consultation #c79288 