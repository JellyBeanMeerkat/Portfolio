import React from 'react';

const About = () => {
  return (
    <div style={{ backgroundColor: '#E3E3FF' }} className="min-h-screen py-16 px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-black mb-8">About Me</h2>
        
        <div className="flex items-end gap-4">
          {/* About Me Box */}
          <div className="bg-white rounded-2xl p-8 border-2 border-black flex-1">
            <p className="text-lg text-black mb-6">
              Hello! I'm a passionate UX Researcher and Designer dedicated to creating intuitive and delightful user experiences.
            </p>
            
            <h3 className="text-2xl font-bold text-black mb-4 mt-8">Skills</h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex flex-col gap-2">
                <span className="font-semibold text-black">Research</span>
                <ul className="list-disc list-inside text-black">
                  <li>User Interviews</li>
                  <li>Usability Testing</li>
                  <li>Data Analysis</li>
                </ul>
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-semibold text-black">Design</span>
                <ul className="list-disc list-inside text-black">
                  <li>Wireframing</li>
                  <li>Prototyping</li>
                  <li>Visual Design</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-black mb-4 mt-8">Tools</h3>
            <div className="flex flex-wrap gap-3 mb-8">
              {['Figma', 'FigJam', 'Miro', 'TypeForm'].map((tool) => (
                <span
                  key={tool}
                  className="px-4 py-2 rounded-lg border-2 border-black bg-white text-black font-medium"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Presenting Figure - Outside box at bottom right */}
          <div className="flex-shrink-0" style={{ height: '85%', alignSelf: 'flex-end', marginBottom: '-10px' }}>
            <img
              src="https://customer-assets.emergentagent.com/job_ux-portfolio-hub-3/artifacts/60uu9hlv_Tada%20Me%20no%20background.JPG"
              alt="Presenting"
              className="h-full w-auto object-contain"
              style={{ 
                maxHeight: '500px',
                mixBlendMode: 'multiply',
                filter: 'contrast(1.1)'
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
