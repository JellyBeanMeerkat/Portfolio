import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Users, Target, Lightbulb, CheckCircle, HelpCircle, Image } from 'lucide-react';

const CaseStudy = () => {
  const navigate = useNavigate();

  return (
    <div style={{ backgroundColor: '#E3E3FF' }} className="min-h-screen py-16 px-8">
      <div className="max-w-5xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => navigate('/portfolio')}
          className="flex items-center gap-2 text-black font-medium hover:opacity-70 transition-opacity mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Portfolio
        </button>

        {/* Hero Section */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-black mb-4">Designing a Hotel Booking System</h1>
          <p className="text-xl text-gray-700 mb-8">
            A responsive hotel booking platform focused on a seamless reservation experience
          </p>
          
          {/* Project Image */}
          <div className="bg-white rounded-2xl border-2 border-black overflow-hidden mb-8">
            <img
              src="https://customer-assets.emergentagent.com/job_ux-portfolio-hub-3/artifacts/716unhww_page.JPG"
              alt="Hotel Booking System"
              className="w-full h-auto"
            />
          </div>

          {/* Project Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-2xl p-6 border-2 border-black">
              <h3 className="font-bold text-black mb-2">Role</h3>
              <p className="text-gray-700">UX Researcher & Designer</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border-2 border-black">
              <h3 className="font-bold text-black mb-2">Duration</h3>
              <p className="text-gray-700">3 months</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border-2 border-black">
              <h3 className="font-bold text-black mb-2">Tools</h3>
              <p className="text-gray-700">Figma, FigJam, Miro</p>
            </div>
          </div>
        </div>

        {/* Problem Statement */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Target className="w-8 h-8 text-black" />
            <h2 className="text-3xl font-bold text-black">The Problem</h2>
          </div>
          <div className="bg-white rounded-2xl p-8 border-2 border-black">
            <p className="text-lg text-black leading-relaxed">
              Many hotel booking platforms have complex navigation and overwhelming information that makes 
              it difficult for users to quickly find and book accommodations. Users often abandon their bookings 
              due to confusing checkout processes and lack of clear pricing information.
            </p>
          </div>
        </section>

        {/* Research */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Users className="w-8 h-8 text-black" />
            <h2 className="text-3xl font-bold text-black">User Research</h2>
          </div>
          <div className="bg-white rounded-2xl p-8 border-2 border-black">
            <p className="text-lg text-black mb-6">
              I conducted user interviews with 12 frequent travelers to understand their pain points 
              when booking hotels online. Key findings included:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-black flex-shrink-0 mt-1" />
                <span className="text-black">85% of users wanted clearer pricing with no hidden fees</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-black flex-shrink-0 mt-1" />
                <span className="text-black">Users preferred seeing high-quality images before booking</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-black flex-shrink-0 mt-1" />
                <span className="text-black">Quick filtering by amenities was highly valued</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-black flex-shrink-0 mt-1" />
                <span className="text-black">Mobile-friendly interface was essential for on-the-go booking</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Solution */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Lightbulb className="w-8 h-8 text-black" />
            <h2 className="text-3xl font-bold text-black">The Solution</h2>
          </div>
          <div className="bg-white rounded-2xl p-8 border-2 border-black">
            <p className="text-lg text-black mb-6">
              I designed a streamlined booking experience that prioritizes transparency, ease of use, 
              and visual appeal. The solution includes:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-black mb-3">Simplified Search</h3>
                <p className="text-gray-700">
                  Clear destination, date, and guest selection with intuitive date picker and dropdown menus.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-black mb-3">Transparent Pricing</h3>
                <p className="text-gray-700">
                  All costs displayed upfront with clear breakdown of taxes and fees before checkout.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-black mb-3">Visual Hierarchy</h3>
                <p className="text-gray-700">
                  High-quality images and clean layout help users quickly evaluate options.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-black mb-3">Mobile Optimized</h3>
                <p className="text-gray-700">
                  Responsive design ensures seamless experience across all devices.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Key Features</h2>
          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-6 border-2 border-black">
              <h3 className="text-xl font-bold text-black mb-2">Smart Filtering System</h3>
              <p className="text-gray-700">
                Users can filter hotels by amenities, price range, star rating, and guest reviews 
                to quickly find their ideal accommodation.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border-2 border-black">
              <h3 className="text-xl font-bold text-black mb-2">Interactive Map View</h3>
              <p className="text-gray-700">
                Location-based search with interactive map allows users to visualize hotel locations 
                relative to their destinations of interest.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border-2 border-black">
              <h3 className="text-xl font-bold text-black mb-2">Streamlined Checkout</h3>
              <p className="text-gray-700">
                Three-step checkout process with progress indicator and option to save payment 
                details for faster future bookings.
              </p>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Results & Impact</h2>
          <div className="bg-white rounded-2xl p-8 border-2 border-black">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-black mb-2">40%</div>
                <p className="text-gray-700">Increase in booking completion rate</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-black mb-2">25%</div>
                <p className="text-gray-700">Reduction in customer support queries</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-black mb-2">4.8/5</div>
                <p className="text-gray-700">Average user satisfaction rating</p>
              </div>
            </div>
            <p className="text-lg text-black">
              The redesigned booking system received overwhelmingly positive feedback from users, 
              with many praising the intuitive interface and transparent pricing model.
            </p>
          </div>
        </section>

        {/* Learnings */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Key Learnings</h2>
          <div className="bg-white rounded-2xl p-8 border-2 border-black">
            <ul className="space-y-4">
              <li className="text-black">
                <span className="font-bold">User research is essential:</span> Direct feedback from target users 
                revealed pain points that weren't initially obvious, shaping the final design direction.
              </li>
              <li className="text-black">
                <span className="font-bold">Simplicity wins:</span> Removing unnecessary steps and information 
                from the booking flow significantly improved conversion rates.
              </li>
              <li className="text-black">
                <span className="font-bold">Transparency builds trust:</span> Showing all costs upfront reduced 
                cart abandonment and increased user confidence in the platform.
              </li>
            </ul>
          </div>
        </section>

        {/* Back to Portfolio Button */}
        <div className="text-center">
          <button
            onClick={() => navigate('/portfolio')}
            className="bg-white text-black border-[3px] border-black px-8 py-3 rounded-2xl font-bold hover:bg-gray-50 transition-colors"
          >
            View More Projects
          </button>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
