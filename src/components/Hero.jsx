import React from 'react';

const Hero = () => {
  return (
    <div id="home" className="relative h-screen pt-16 flex items-center justify-center overflow-hidden">
      {/* Video background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-amber-900/50 z-10"></div>
        <video 
          className="absolute inset-0 min-w-full min-h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/assets/mainvideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Welcome to Chef Evan's Culinary Creations
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-amber-100">
          Mastering the Art of Cooking with Passion, Precision, and Innovation
        </p>
        <div className="space-x-4">
          <a
            href="#portfolio"
            className="bg-amber-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-amber-600 transition duration-300 shadow-lg"
          >
            Explore My Work
          </a>
          <a
            href="#contact"
            className="bg-transparent border-2 border-amber-300 text-white px-8 py-3 rounded-full font-semibold hover:bg-amber-700 hover:border-amber-200 transition duration-300"
          >
            Book a Consultation
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
