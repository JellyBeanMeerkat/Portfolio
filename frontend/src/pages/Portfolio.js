import React from 'react';
import { ArrowRight, Building2, Clock } from 'lucide-react';

const Portfolio = () => {
  return (
    <div style={{ backgroundColor: '#E3E3FF' }} className="min-h-screen py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-black mb-12">Check out some of my work</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Project 1 */}
          <div className="flex flex-col">
            <div className="bg-white rounded-2xl w-full h-[480px] mb-4 flex items-center justify-center border-2 border-black overflow-hidden">
              <img
                src="https://customer-assets.emergentagent.com/job_ux-portfolio-hub-3/artifacts/716unhww_page.JPG"
                alt="Hotel Booking System Design"
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="text-2xl font-bold text-black mb-2">Designing a Hotel Booking System</h3>
            <p className="text-black mb-4">A responsive hotel booking platform focused on a seamless reservation experience.</p>
            <button className="flex items-center gap-2 text-black font-bold hover:opacity-70 transition-opacity">
              View Case Study
              <div className="w-6 h-6 rounded-full border-2 border-black flex items-center justify-center">
                <ArrowRight className="w-4 h-4" />
              </div>
            </button>
          </div>

          {/* Project 2 - Coming Soon */}
          <div className="flex flex-col">
            <div className="bg-white rounded-2xl w-full h-[480px] mb-4 flex items-center justify-center border-2 border-black">
              <div className="text-center p-8">
                <Clock className="w-24 h-24 mx-auto mb-4 text-black" strokeWidth={1.5} />
                <p className="text-gray-600">More Projects Coming Soon</p>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-black mb-2">Coming Soon</h3>
            <p className="text-black mb-4">As we all know, UX takes time!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
