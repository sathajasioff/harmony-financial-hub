
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import LoanCalculator from '@/components/LoanCalculator';
import Gallery from '@/components/Gallery';
import AboutUs from '@/components/AboutUs';
import Footer from '@/components/Footer';

const Index = () => {
  // Add scroll animation functionality
  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      elements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight - 100) {
          element.classList.add('animated');
        }
      });
    };
    
    // Run on initial load
    animateOnScroll();
    
    // Add scroll event listener
    window.addEventListener('scroll', animateOnScroll);
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', animateOnScroll);
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main>
        <Hero />
        <div className="container mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <LoanCalculator />
          <Gallery />
        </div>
        <AboutUs />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
