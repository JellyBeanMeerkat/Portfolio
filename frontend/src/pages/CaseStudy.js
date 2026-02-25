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
              <li>Unclear information</li>
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
                I chose 3 competitor websites which primarily focus on hotel bookings.
              </p>
              <ol className="list-decimal text-lg text-black space-y-2 ml-8 mb-4" style={{ textAlign: 'justify' }}>
                <li><span className="font-bold">Booking.com</span> – the largest hotel booking website</li>
                <li><span className="font-bold">Agoda.com</span> – a website which focuses on hotel bookings and add on features such as SIM cards and card rentals</li>
                <li><span className="font-bold">Marriott.com</span> – a website which caters specifically to Marriott hotels worldwide</li>
              </ol>
              <p className="text-lg text-black leading-relaxed" style={{ textAlign: 'justify' }}>
                My goal was to find out how my competitors complete the booking process and how I could make the process more efficient with my booking site.
              </p>
            </div>

            {/* Embedded PowerPoint Presentation with Arrow */}
            <div className="flex items-center gap-1" style={{ marginLeft: '15%' }}>
              {/* PowerPoint Viewer - Moved Right */}
              <div className="bg-white rounded-2xl border-2 border-black overflow-hidden" style={{ minHeight: '338px', width: '56%' }}>
                <iframe
                  src="https://view.officeapps.live.com/op/embed.aspx?src=https://customer-assets.emergentagent.com/job_ux-portfolio-hub-3/artifacts/tcjg98vt_Sharisse%20Cole_Benchmarking.pptx&wdAr=1.7777777777777777&ui=en-US&rs=en-US&WdEmbedCode=0"
                  width="100%"
                  height="338px"
                  frameBorder="0"
                  title="Competitive Benchmarking Presentation"
                  className="w-full"
                  allowFullScreen
                >
                  This browser does not support embedded presentations. 
                  <a href="https://customer-assets.emergentagent.com/job_ux-portfolio-hub-3/artifacts/tcjg98vt_Sharisse%20Cole_Benchmarking.pptx" 
                     className="text-black underline"
                     download>
                    Download the presentation here
                  </a>
                </iframe>
              </div>

              {/* Pointing Hand and Text */}
              <div className="flex flex-col items-center flex-1">
                {/* Pointing hand emoji */}
                <span className="text-6xl mb-4">👈</span>
                <p className="text-lg font-bold text-black text-center leading-snug">
                  View my<br />Benchmarking<br />Analysis here
                </p>
              </div>
            </div>

            {/* Competitive Benchmarking Results */}
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-black mb-4">Competitive Benchmarking Results</h3>
              <div className="bg-white rounded-2xl p-8 border-2 border-black">
                <p className="text-lg text-black mb-4" style={{ textAlign: 'justify' }}>
                  The benchmarked websites contained the following which I will be using for my own booking system as they enhance the user experience:
                </p>
                <ol className="list-decimal text-lg text-black space-y-2 ml-8" style={{ textAlign: 'justify' }}>
                  <li>Booking panel at the top of the page with user information to remind user at every step</li>
                  <li>An obvious search button</li>
                  <li>Filters so the user only views relevant data</li>
                  <li>Map version of the results</li>
                </ol>
              </div>
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
              <p className="text-lg text-black leading-relaxed mb-2" style={{ textAlign: 'justify' }}>
                <span className="underline font-bold">Survey Priorities</span>
              </p>
              <ul className="list-disc list-inside text-lg text-black space-y-1 ml-4 mb-4">
                <li>Open questions for qualitative data</li>
                <li>Closed questions for quantitative data</li>
                <li>GDPR compliant</li>
                <li>Accessible platform for survey distribution</li>
              </ul>
              <p className="text-lg text-black leading-relaxed mb-2" style={{ textAlign: 'justify' }}>
                <span className="underline font-bold">Analysis</span>
              </p>
              <ul className="list-disc list-inside text-lg text-black space-y-1 ml-4">
                <li>PowerPoint including summarisation of findings</li>
              </ul>
            </div>

            {/* Embedded PowerPoint for Online Surveys */}
            <div className="mt-8">
              <div className="flex items-center gap-1" style={{ marginLeft: '15%' }}>
                {/* PowerPoint Viewer */}
                <div className="bg-white rounded-2xl border-2 border-black overflow-hidden" style={{ minHeight: '338px', width: '56%' }}>
                  <iframe
                    src="https://view.officeapps.live.com/op/embed.aspx?src=https://customer-assets.emergentagent.com/job_ux-portfolio-hub-3/artifacts/iuyjjx3v_UX%20Project%202%20Scole.pptx&wdAr=1.7777777777777777&ui=en-US&rs=en-US&WdEmbedCode=0"
                    width="100%"
                    height="338px"
                    frameBorder="0"
                    title="Online Survey Questions"
                    className="w-full"
                    allowFullScreen
                  >
                    This browser does not support embedded presentations.
                    <a href="https://customer-assets.emergentagent.com/job_ux-portfolio-hub-3/artifacts/iuyjjx3v_UX%20Project%202%20Scole.pptx" 
                       className="text-black underline"
                       download>
                      Download the survey questions here
                    </a>
                  </iframe>
                </div>

                {/* Pointing Hand and Text */}
                <div className="flex flex-col items-center flex-1">
                  <span className="text-6xl mb-4">👈</span>
                  <p className="text-lg font-bold text-black text-center leading-snug">
                    View my<br />Online Survey<br />Questions here
                  </p>
                </div>
              </div>

              {/* Online Surveys Results */}
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-black mb-4">Online Surveys Results</h3>
                <div className="bg-white rounded-2xl p-8 border-2 border-black">
                  <p className="text-lg text-black mb-4" style={{ textAlign: 'justify' }}>
                    From the online survey I discovered the following which I'll be implementing in my booking system:
                  </p>
                  <ol className="list-decimal text-lg text-black space-y-2 ml-8" style={{ textAlign: 'justify' }}>
                    <li>90% of users did not include a pet in their booking so my search bar will contain adult, children and room only</li>
                    <li>Pricing is an important factor so must be clearly displayed on all items</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-0.5 bg-black mb-12"></div>

          {/* Usability Testing */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-black mb-4">Usability Testing</h3>
            <div className="bg-white rounded-2xl p-8 border-2 border-black mb-6">
              <p className="text-lg text-black leading-relaxed mb-4" style={{ textAlign: 'justify' }}>
                I both conducted usability testing and took notes from a recording of usability testing performed by another person.
              </p>
              <p className="text-lg text-black leading-relaxed mb-2" style={{ textAlign: 'justify' }}>
                <span className="underline font-bold">Before Test Day</span>
              </p>
              <ul className="list-disc list-inside text-lg text-black space-y-1 ml-4 mb-4">
                <li>Sent user consent form</li>
              </ul>
              <p className="text-lg text-black leading-relaxed mb-2" style={{ textAlign: 'justify' }}>
                <span className="underline font-bold">During the Test</span>
              </p>
              <ul className="list-disc list-inside text-lg text-black space-y-1 ml-4 mb-4">
                <li>Presented a scenario and website URL</li>
                <li>Encouraged the user to think aloud</li>
                <li>I asked open questions</li>
              </ul>
              <p className="text-lg text-black leading-relaxed mb-2" style={{ textAlign: 'justify' }}>
                <span className="underline font-bold">After the Test</span>
              </p>
              <ul className="list-disc list-inside text-lg text-black space-y-1 ml-4">
                <li>Played recordings through transcriber</li>
                <li>Rewatched sessions</li>
                <li>Took notes including quotes from the user</li>
              </ul>
            </div>

            {/* Usability Testing Screenshot 1 - Agoda */}
            <div className="flex justify-center mb-4">
              <div className="bg-white rounded-2xl border-2 border-black overflow-hidden flex items-center justify-center" style={{ width: '56%', height: '280px' }}>
                <img
                  src="https://customer-assets.emergentagent.com/job_ux-portfolio-hub-3/artifacts/9lj8hr2w_AgodaCapture.JPG"
                  alt="Agoda Usability Testing Screenshot"
                  className="object-contain"
                  loading="eager"
                  style={{ imageRendering: 'high-quality', maxHeight: '90%', maxWidth: '98%' }}
                />
              </div>
            </div>

            {/* Hyperlink for Agoda */}
            <div className="text-center mb-12">
              <a href="#" className="text-black font-bold underline hover:opacity-70 transition-opacity" style={{ fontSize: '18px' }}>
                Watch Usability Test for Agoda.com
              </a>
            </div>

            {/* Usability Testing Screenshot 2 - Traveloka */}
            <div className="flex justify-center mb-4">
              <div className="bg-white rounded-2xl border-2 border-black overflow-hidden flex items-center justify-center" style={{ width: '56%', height: '280px' }}>
                <img
                  src="https://customer-assets.emergentagent.com/job_ux-portfolio-hub-3/artifacts/eq5600jy_TravelokaCapture.JPG"
                  alt="Traveloka Usability Testing Screenshot"
                  className="object-contain"
                  loading="eager"
                  style={{ imageRendering: 'high-quality', maxHeight: '90%', maxWidth: '98%' }}
                />
              </div>
            </div>

            {/* Hyperlink for Traveloka */}
            <div className="text-center mb-8">
              <a href="#" className="text-black font-bold underline hover:opacity-70 transition-opacity" style={{ fontSize: '18px' }}>
                Watch Test Interview for Traveloka.com
              </a>
            </div>

            {/* Results of Usability Testing */}
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-black mb-4">Results of Usability Testing</h3>
              <div className="bg-white rounded-2xl p-8 border-2 border-black">
                <p className="text-lg text-black mb-4" style={{ textAlign: 'justify' }}>
                  From the usability testing I have extracted the following results
                </p>
                <ol className="list-decimal text-lg text-black space-y-2 ml-8" style={{ textAlign: 'justify' }}>
                  <li>The user likes filters and uses them whenever possible</li>
                  <li>The user likes the map function to see where a hotel is located</li>
                  <li>The user values language which is easy to understand and interpret</li>
                  <li>The user values photos and reviews to build trust in a listing</li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="w-full h-0.5 bg-black mb-12"></div>

        {/* Analysis of Results */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-8">
          <CheckCircle className="w-8 h-8 text-black" />
          <h2 className="text-3xl font-bold text-black">Analysis of Results</h2>
        </div>

        {/* Affinity Diagram */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-black mb-4">Affinity Diagram</h3>
          <div className="bg-white rounded-2xl p-8 border-2 border-black mb-6">
            <p className="text-lg text-black leading-relaxed mb-4" style={{ textAlign: 'justify' }}>
              I triangulated the results of previous research using an affinity map to structure the data into its natural relationships and identify patterns.
            </p>
            <p className="text-lg text-black leading-relaxed mb-4" style={{ textAlign: 'justify' }}>
              From here I could see the most common pain points for the user:
            </p>
            <ul className="list-disc list-inside text-lg text-black space-y-2 ml-4">
              <li>Lack of filters</li>
              <li>Lack of signposting</li>
              <li>Unclear information</li>
            </ul>
          </div>

          {/* Affinity Diagram Images */}
          <div className="flex justify-center mb-4">
            <div className="grid grid-cols-2 gap-4" style={{ width: '56%', height: '220px' }}>
              <div className="bg-white rounded-2xl border-2 border-black overflow-hidden">
                <img
                  src="https://customer-assets.emergentagent.com/job_ux-portfolio-hub-3/artifacts/rsdyynvz_Aff1.JPG"
                  alt="Affinity Diagram 1"
                  className="w-full h-full object-cover"
                  loading="eager"
                  style={{ imageRendering: 'high-quality' }}
                />
              </div>
              <div className="bg-white rounded-2xl border-2 border-black overflow-hidden">
                <img
                  src="https://customer-assets.emergentagent.com/job_ux-portfolio-hub-3/artifacts/olaz7jiu_Aff2.JPG"
                  alt="Affinity Diagram 2"
                  className="w-full h-full object-cover"
                  loading="eager"
                  style={{ imageRendering: 'high-quality' }}
                />
              </div>
            </div>
          </div>

          {/* Hyperlink */}
          <a href="https://miro.com/app/board/uXjVLDgvFhY=/?share_link_id=182772803199" target="_blank" rel="noopener noreferrer" className="text-black font-bold underline hover:opacity-70 transition-opacity">
            View Affinity Diagram
          </a>
        </div>

        {/* Divider */}
        <div className="w-full h-0.5 bg-black mb-12"></div>

        {/* User Flow */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-black mb-4">User Flow</h3>
          <div className="bg-white rounded-2xl p-8 border-2 border-black mb-6">
            <p className="text-lg text-black leading-relaxed" style={{ textAlign: 'justify' }}>
              I created a visual roadmap of the user's journey using the perfect path for a user to complete a hotel booking. This allowed me to create an intuitive interface.
            </p>
          </div>

          {/* User Flow Images */}
          <div className="flex justify-center gap-4 mb-4">
            <div className="bg-white rounded-2xl border-2 border-black overflow-hidden" style={{ width: '37.5%', height: '188px' }}>
              <img
                src="https://customer-assets.emergentagent.com/job_ux-portfolio-hub-3/artifacts/k4dvcfq4_UF1.JPG"
                alt="User Flow 1"
                className="w-full h-full object-contain"
                loading="eager"
                style={{ imageRendering: 'high-quality' }}
              />
            </div>
            <div className="bg-white rounded-2xl border-2 border-black overflow-hidden" style={{ width: '37.5%', height: '188px' }}>
              <img
                src="https://customer-assets.emergentagent.com/job_ux-portfolio-hub-3/artifacts/9jkyw9w3_UF2.JPG"
                alt="User Flow 2"
                className="w-full h-full object-contain"
                loading="eager"
                style={{ imageRendering: 'high-quality' }}
              />
            </div>
          </div>

          {/* Hyperlink */}
          <a href="https://www.figma.com/board/QyjHhclb8od2hxABNf0vw1/User-Flow?t=qKYelUWbtqfOUOSm-1" target="_blank" rel="noopener noreferrer" className="text-black font-bold underline hover:opacity-70 transition-opacity">
            View User Flow
          </a>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full h-0.5 bg-black mb-12"></div>

      {/* Results */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Lightbulb className="w-8 h-8 text-black" />
            <h2 className="text-3xl font-bold text-black">Results</h2>
          </div>
          <div className="bg-white rounded-2xl p-8 border-2 border-black">
            <p className="text-lg text-black mb-4" style={{ textAlign: 'justify' }}>
              Using the data from the aforementioned research methods, I designed a streamlined booking experience that prioritizes transparency, ease of use, and visual appeal.
            </p>
            <p className="text-lg text-black mb-4" style={{ textAlign: 'justify' }}>
              I drew each screen state using pen and paper and scanned this into Figma.{' '}
              <a href="https://www.figma.com/board/cD2JgmqF41K7lsxrdFQsWz/SharisseCole_Screen_States?t=dAB653THRgwtSetG-1" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:opacity-70 transition-opacity">
                See Interaction Design
              </a>
            </p>
            <p className="text-lg text-black mb-6" style={{ textAlign: 'justify' }}>
              Once I was satisfied the path followed the user's mental mode, I created a working prototype using the scenario specified in the prototype comments.
            </p>
            
            {/* View Prototype Button */}
            <div className="flex justify-center">
              <a 
                href="https://www.figma.com/proto/PK5oEwPVnsqPeKcWra6n3V/SharisseCole_Portfolio_Prototype?node-id=57-1043&t=kXWpP9m2v5rhsZho-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=57%3A1043&show-proto-sidebar=1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white px-12 py-4 rounded-2xl font-bold text-lg hover:opacity-90 transition-opacity"
                style={{ backgroundColor: '#ff7777' }}
              >
                View Prototype
              </a>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Key Features</h2>
          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-6 border-2 border-black">
              <h3 className="text-xl font-bold text-black mb-2">Simplified Search</h3>
              <p className="text-gray-700" style={{ textAlign: 'justify' }}>
                Clear destination, date, and guest selection with intuitive date picker and dropdown menus.
              </p>
            </div>
            {/* Simplified Search Images */}
            <div className="flex justify-center gap-4 my-4">
              <div className="bg-white rounded-2xl border-2 border-black overflow-hidden" style={{ width: '48%', height: '280px' }}>
                <img
                  src="https://customer-assets.emergentagent.com/job_aa39e269-52f6-4c85-a37e-cbf455b03d24/artifacts/yhuyqut3_Calendar.JPG"
                  alt="Calendar Search Feature"
                  className="w-full h-full object-contain"
                  loading="eager"
                  style={{ imageRendering: 'high-quality' }}
                />
              </div>
              <div className="bg-white rounded-2xl border-2 border-black overflow-hidden" style={{ width: '48%', height: '280px' }}>
                <img
                  src="https://customer-assets.emergentagent.com/job_aa39e269-52f6-4c85-a37e-cbf455b03d24/artifacts/1sesq0c8_Calendar2.JPG"
                  alt="Guest Selection Feature"
                  className="w-full h-full object-contain"
                  loading="eager"
                  style={{ imageRendering: 'high-quality' }}
                />
              </div>
            </div>
            <div style={{ marginBottom: '2.5rem' }}></div>
            <div className="bg-white rounded-2xl p-6 border-2 border-black">
              <h3 className="text-xl font-bold text-black mb-2">Filters</h3>
              <p className="text-gray-700" style={{ textAlign: 'justify' }}>
                Filters used to narrow down options so the user only views relevant data, reducing decision fatigue and streamlining the booking process.
              </p>
            </div>
            {/* Filters Images */}
            <div className="flex justify-center gap-4 my-4">
              <div className="bg-white rounded-2xl border-2 border-black overflow-hidden" style={{ width: '48%', height: '280px' }}>
                <img
                  src="https://customer-assets.emergentagent.com/job_aa39e269-52f6-4c85-a37e-cbf455b03d24/artifacts/tprwp5s0_Filter1.JPG"
                  alt="Filter Feature - All Photos"
                  className="w-full h-full object-contain"
                  loading="eager"
                  style={{ imageRendering: 'high-quality' }}
                />
              </div>
              <div className="bg-white rounded-2xl border-2 border-black overflow-hidden" style={{ width: '48%', height: '280px' }}>
                <img
                  src="https://customer-assets.emergentagent.com/job_aa39e269-52f6-4c85-a37e-cbf455b03d24/artifacts/hi6l2drw_Filter2.JPG"
                  alt="Filter Feature - Bathroom"
                  className="w-full h-full object-contain"
                  loading="eager"
                  style={{ imageRendering: 'high-quality' }}
                />
              </div>
            </div>
            <div style={{ marginBottom: '2.5rem' }}></div>
            <div className="bg-white rounded-2xl p-6 border-2 border-black">
              <h3 className="text-xl font-bold text-black mb-2">Interactive Map View</h3>
              <p className="text-gray-700" style={{ textAlign: 'justify' }}>
                Location-based map allows users to visualize hotel location relative to their destinations of interest.
              </p>
            </div>
            {/* Map Image */}
            <div className="flex justify-center my-4">
              <div className="bg-white rounded-2xl border-2 border-black overflow-hidden" style={{ width: '70%', height: '400px' }}>
                <img
                  src="https://customer-assets.emergentagent.com/job_aa39e269-52f6-4c85-a37e-cbf455b03d24/artifacts/49myp41c_Map.JPG"
                  alt="Interactive Map View Feature"
                  className="w-full h-full object-contain"
                  loading="eager"
                  style={{ imageRendering: 'high-quality' }}
                />
              </div>
            </div>
            <div style={{ marginBottom: '2.5rem' }}></div>
            <div className="bg-white rounded-2xl p-6 border-2 border-black">
              <h3 className="text-xl font-bold text-black mb-2">Streamlined Checkout</h3>
              <p className="text-gray-700" style={{ textAlign: 'justify' }}>
                Four-step checkout process with progress indicator to keep user updated on the checkout progress.
              </p>
            </div>
            {/* Progress Images */}
            <div className="flex justify-center gap-4 my-4">
              <div className="bg-white rounded-2xl border-2 border-black overflow-hidden" style={{ width: '48%', height: '280px' }}>
                <img
                  src="https://customer-assets.emergentagent.com/job_aa39e269-52f6-4c85-a37e-cbf455b03d24/artifacts/3bmi91cp_Progress1.JPG"
                  alt="Checkout Step 1 - Customer Information"
                  className="w-full h-full object-contain"
                  loading="eager"
                  style={{ imageRendering: 'high-quality' }}
                />
              </div>
              <div className="bg-white rounded-2xl border-2 border-black overflow-hidden" style={{ width: '48%', height: '280px' }}>
                <img
                  src="https://customer-assets.emergentagent.com/job_aa39e269-52f6-4c85-a37e-cbf455b03d24/artifacts/2ges60tp_Progress2.JPG"
                  alt="Checkout Step 3 - Payment Information"
                  className="w-full h-full object-contain"
                  loading="eager"
                  style={{ imageRendering: 'high-quality' }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Impact</h2>
          <div className="bg-white rounded-2xl p-8 border-2 border-black">
            <div className="flex justify-center mb-6">
              <div className="text-center">
                <div className="font-bold text-black mb-2" style={{ fontSize: '34px' }}>50% less booking time*</div>
              </div>
            </div>
            <p className="text-lg text-black mb-4" style={{ textAlign: 'justify' }}>
              *This impact was measured by the one tester who also took part in earlier usability testing
            </p>
            <p className="text-lg text-black" style={{ textAlign: 'justify' }}>
              When given a similar scenario to the Traveloka and Agoda usability testing, the user's booking time was cut down by 50%
            </p>
          </div>
        </section>

        {/* Learnings */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Reflection / Future Iterations</h2>
          <div className="bg-white rounded-2xl p-8 border-2 border-black">
            <ol className="list-decimal text-lg text-black space-y-2 ml-8" style={{ textAlign: 'justify' }}>
              <li>The prototype was successful – the user could book a hotel with no issues and in half the time</li>
              <li>However a sample size of 1 is too small to form a solid conclusion so a future testing session would include at least 10 people</li>
              <li>A future iteration would include a sign in option as 80% of those surveyed specified that they sign into a website when booking a hotel</li>
            </ol>
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
