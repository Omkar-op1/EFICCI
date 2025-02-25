// pages/index.tsx
import React from 'react';
import Preloader from '../components/Preloader';
import Navbar from '../components/Navbar';
import HomeSection from '../components/HomeSection';
import FeaturesSection from '../components/FeaturesSection';
import AboutSection from '../components/AboutSection';
import TestimonialSection from '../components/TestimonialSection';
import PricingSection from '../components/PricingSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <>
      <Preloader />
      <Navbar />
      <HomeSection />
      <FeaturesSection />
      <AboutSection />
      <TestimonialSection />
      <PricingSection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default Home;
