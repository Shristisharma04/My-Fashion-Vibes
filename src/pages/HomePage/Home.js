import React from 'react';
import Nav from '../../components/Navbar/Nav';
import Dashboard from '../../components/Dashboard/Dashboard';
import About from '../../components/AboutUs/About';
import FeaturedCollection from '../../components/Collection/FeaturedCollection';
import Service from '../../components/Services/Service';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <div>
      <Nav />
      <Dashboard />
      <FeaturedCollection />
      <About />
      <Service />
      <Footer/>
    </div>
  );
};

export default Home;
