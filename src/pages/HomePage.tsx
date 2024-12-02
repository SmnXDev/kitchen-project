import React from 'react';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import About from '../components/home/About';
import Projects from '../components/home/Projects';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Projects />
    </>
  );
};

export default HomePage;