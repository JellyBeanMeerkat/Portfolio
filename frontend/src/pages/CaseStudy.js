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
          
          {/* Project Image - Question Mark */}
          <div className="bg-white rounded-2xl border-2 border-black overflow-hidden mb-8 flex items-center justify-center" style={{ minHeight: '400px' }}>
            <HelpCircle className="w-48 h-48 text-gray-400" strokeWidth={1} />
          </div>

          {/* Project Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white rounded-2xl p-6 border-2 border-black">
              <h3 className="font-bold text-black mb-2">Role</h3>
              <p className="text-gray-700">UX Researcher & Designer</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border-2 border-black">
              <h3 className="font-bold text-black mb-2">Tools</h3>
              <p className="text-gray-700">Figma, FigJam, Miro, TypeForm</p>
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
            <p className="text-lg text-black leading-relaxed mb-4" style={{ textAlign: 'justify' }}>
              I conducted various user testing to identify areas of user frustration. I will detail this further down the page but the pain points were:
            </p>
            <ul className="list-disc list-inside text-lg text-black space-y-2 ml-4">
              <li>Lack of filters</li>
              <li>Lack of signposting</li>
              <li>Unclear payment information</li>
            </ul>
          </div>
        </section>

        {/* User Research */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-8">
            <Users className="w-8 h-8 text-black" />
            <h2 className="text-3xl font-bold text-black">User Research</h2>
          </div>

          {/* Competitive Benchmarking */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-black mb-4">Competitive Benchmarking</h3>
            <div className="bg-white rounded-2xl p-8 border-2 border-black mb-6">
              <p className="text-lg text-black leading-relaxed mb-4" style={{ textAlign: 'justify' }}>
                The Cambridge dictionary's definition of benchmarking is "the act of measuring the quality of something by comparing it with something else of an accepted standard"
              </p>
              <p className="text-lg text-black leading-relaxed mb-4" style={{ textAlign: 'justify' }}>
                I chose 3 competitor websites which primarily focus on hotel bookings.
              </p>
              <ol className="list-decimal text-lg text-black space-y-2 ml-8 mb-4" style={{ textAlign: 'justify' }}>
                <li><span className="font-bold">Booking.com</span> – the largest hotel booking website</li>
                <li><span className="font-bold">Agoda.com</span> – a website which focuses on hotel bookings and add on features such as SIM cards and card rentals</li>
                <li><span className="font-bold">Marriott.com</span> – a website which caters specifically to Marriott hotels worldwide</li>
              </ol>
              <p className="text-lg text-black leading-relaxed mb-4" style={{ textAlign: 'justify' }}>
                I went through the process of booking a hotel on all 3 websites by taking screenshots of every page up to the payment page, alongside an analysis of their strategies, strengths and weaknesses.
              </p>
              <p className="text-lg text-black leading-relaxed" style={{ textAlign: 'justify' }}>
                My goal was to find out how my competitors complete the booking process and how I could make the process more efficient with my booking site.
              </p>
            </div>

            {/* Placeholder Images for Competitive Benchmarking */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[1, 2, 3, 4].map((num) => (
                <div key={num} className="bg-white rounded-2xl border-2 border-black p-8 flex items-center justify-center" style={{ minHeight: '250px' }}>
                  <div className="text-center">
                    <Image className="w-16 h-16 mx-auto mb-2 text-gray-400" />
                    <p className="text-gray-500">Screenshot {num}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-0.5 bg-black mb-12"></div>

          {/* Online Surveys */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-black mb-4">Online Surveys</h3>
            <div className="bg-white rounded-2xl p-8 border-2 border-black mb-6">
              <p className="text-lg text-black leading-relaxed mb-4" style={{ textAlign: 'justify' }}>
                I used online surveys for a mix of evaluative research and generative research; to find out the user's goals, mental models, and experiences.
              </p>
              <p className="text-lg text-black leading-relaxed mb-4" style={{ textAlign: 'justify' }}>
                For my survey, I composed both closed and open questions. The closed questions allowed me to find out which features were popular or unpopular, through quantitative responses. The qualitative responses from open questions, allowed me to gain a deeper understanding of hotel bookings, including aspects which I hadn't considered, but were important to the user.
              </p>
              <p className="text-lg text-black leading-relaxed mb-4" style={{ textAlign: 'justify' }}>
                I double checked that the questions asked within the survey were GDPR compliant – I didn't ask identifiable questions as this would require the data to be securely processed using a manner such as encryption. I asked questions which were relevant and limited to what was necessary for me to conduct my research.
              </p>
              <p className="text-lg text-black leading-relaxed mb-4" style={{ textAlign: 'justify' }}>
                Before sending out my questions to potential users, I considered accessibility. According to Recite Me, 20% of the UK population requires assistive technology to access the internet. I didn't want there to be any barriers to entry so I chose Typeform to create and distribute my surveys. Typeform's default screen is WCAG 2.1, Level AA compliant and there is also an accessibility checker located within the form creation screen.
              </p>
              <p className="text-lg text-black leading-relaxed" style={{ textAlign: 'justify' }}>
                Once I had received all survey responses, I compiled the data and presented it into a user-friendly format using Microsoft PowerPoint. I used a bar chart to clearly display both the quantitative and qualitative data I obtained. Each slide included summarisation of the findings.
              </p>
            </div>

            {/* Placeholder Images for Online Surveys */}
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((num) => (
                <div key={`survey-${num}`} className="bg-white rounded-2xl border-2 border-black p-8 flex items-center justify-center" style={{ minHeight: '250px' }}>
                  <div className="text-center">
                    <Image className="w-16 h-16 mx-auto mb-2 text-gray-400" />
                    <p className="text-gray-500">Screenshot {num}</p>
                  </div>
                </div>
              ))}
            </div>
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
