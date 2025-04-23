import React from 'react';
import Button from '../ui/Button';

const HeroSection: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-16 bg-black text-white"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="animate-fadeIn">
            <h2 className="text-red-500 font-bold text-xl md:text-2xl mb-4">
              TRANSFORM YOUR BODY, TRANSFORM YOUR LIFE
            </h2>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
              LET'S GET MOVING
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Michael Ryan - Online Fitness Coach
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                href="#services" 
                variant="primary" 
                size="large"
              >
                Explore Services
              </Button>
              <Button 
                href="#contact" 
                variant="outline" 
                size="large"
              >
                Start Now
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <a
          href="#about"
          className="flex items-center justify-center w-10 h-10 rounded-full bg-red-600 text-white hover:bg-red-700 transition-colors"
          aria-label="Scroll down"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;