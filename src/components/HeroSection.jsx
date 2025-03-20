import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Transform Your Digital Presence
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8">
          Innovative solutions for modern businesses. Let's build something amazing together.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2 mx-auto transition-all">
          Get Started
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default HeroSection;