import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div style={{ backgroundColor: '#E3E3FF' }}>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center px-8 py-16">
        <div className="max-w-7xl mx-auto w-full flex items-center gap-12">
          {/* 60% Section */}
          <div className="flex-[0.6] flex flex-col items-start">
            <h1 className="text-5xl font-bold text-black mb-8 leading-tight">
              Hello, my name is test;<br />
              <span className="block mt-2">UX researcher</span>
              <span className="block">UX designer</span>
            </h1>
            <div className="flex gap-4">
              {/* See My Work Button with Shadow */}
              <button
                onClick={() => navigate('/portfolio')}
                className="relative bg-white text-black border-2 border-black px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
              >
                <div
                  className="absolute rounded-lg border-2 border-black"
                  style={{
                    width: '100%',
                    height: '100%',
                    top: '6px',
                    left: '6px',
                    zIndex: -1,
                    backgroundColor: 'white'
                  }}
                ></div>
                See My Work
              </button>
              {/* Contact Me Button */}
              <button
                onClick={() => navigate('/contact')}
                className="bg-white text-black border-2 border-black px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
              >
                Contact me
              </button>
            </div>
          </div>

          {/* 40% Section - Arch */}
          <div className="flex-[0.4] flex items-center justify-center">
            <div className="relative w-64 h-64">
              <svg width="100%" height="100%" viewBox="0 0 256 256" className="transform">
                <path
                  d="M 30 230 Q 30 50 128 50 Q 226 50 226 230"
                  fill="none"
                  stroke="black"
                  strokeWidth="3"
                />
              </svg>
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
