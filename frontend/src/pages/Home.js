import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div style={{ backgroundColor: '#E3E3FF' }}>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center px-12 py-16 relative">
        <div className="max-w-7xl mx-auto w-full flex items-center gap-16">
          {/* Left Section */}
          <div className="flex-1 flex flex-col items-start">
            {/* HELLO! Badge */}
            <div className="flex items-center gap-2 px-5 py-2 rounded-full border-2 border-gray-400 mb-8" style={{ backgroundColor: '#E3F2FF' }}>
              <span className="text-black text-lg font-bold">*</span>
              <span className="text-sm font-bold text-black">HELLO!</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-6xl font-bold text-black mb-4 leading-tight" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
              I'm Sharisse Cole;
            </h1>
            <p className="text-5xl italic text-black mb-1">UX Researcher</p>
            <p className="text-5xl italic text-black mb-8">UX Designer</p>

            {/* Subtitle */}
            <p className="text-lg text-gray-600 mb-12 max-w-md">
              Based in the Midlands and happy to relocate throughout the UK and abroad
            </p>

            {/* Buttons */}
            <div className="flex gap-4">
              {/* See My Work Button with Shadow */}
              <button
                onClick={() => navigate('/portfolio')}
                className="relative bg-white text-black border-[3px] border-black px-8 py-3 rounded-2xl font-medium hover:bg-gray-50 transition-colors"
              >
                <div
                  className="absolute rounded-2xl border-[3px] border-black bg-white"
                  style={{
                    width: '100%',
                    height: '100%',
                    top: '6px',
                    left: '-6px',
                    zIndex: -1
                  }}
                ></div>
                See My Work
              </button>
              {/* Contact Me Button with Shadow */}
              <button
                onClick={() => navigate('/contact')}
                className="relative bg-white text-black border-[3px] border-black px-8 py-3 rounded-2xl font-medium hover:bg-gray-50 transition-colors"
              >
                <div
                  className="absolute rounded-2xl border-[3px] border-black bg-white"
                  style={{
                    width: '100%',
                    height: '100%',
                    top: '6px',
                    left: '-6px',
                    zIndex: -1
                  }}
                ></div>
                Contact Me
              </button>
            </div>
          </div>

          {/* Right Section - Photo with Arch Frame */}
          <div className="flex-1 flex items-center justify-center relative">
            {/* Sparkle Decoration */}
            <div className="absolute top-8 right-12 z-10">
              <Sparkles className="w-12 h-12 text-black" strokeWidth={1.5} />
            </div>

            {/* Arch Frame with Image */}
            <div className="relative w-96 h-[500px]">
              {/* Arch Border */}
              <div className="absolute inset-0 rounded-t-full border-2 border-black overflow-hidden bg-white">
                {/* Image from original screenshot */}
                <img
                  src="https://customer-assets.emergentagent.com/job_ux-portfolio-hub-3/artifacts/h1je79l5_image_2026-02-23_221942584.png"
                  alt="Professional portrait"
                  className="w-full h-full object-cover object-center"
                  style={{ objectPosition: '65% 20%' }}
                />
              </div>

              {/* Decorative Lines at Bottom Right */}
              <div className="absolute -bottom-8 -right-8">
                <svg width="100" height="100" viewBox="0 0 100 100">
                  <line x1="20" y1="80" x2="80" y2="80" stroke="black" strokeWidth="2" />
                  <line x1="30" y1="90" x2="70" y2="90" stroke="black" strokeWidth="2" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Black Line Separator */}
      <div className="w-full h-0.5 bg-black"></div>
    </div>
  );
};

export default Home;
