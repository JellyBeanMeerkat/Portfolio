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

            {/* Embedded PowerPoint Presentation with Arrow */}
            <div className="flex items-center gap-8 justify-center">
              {/* PowerPoint Viewer */}
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

              {/* Whimsical Arrow and Text */}
              <div className="flex flex-col items-center" style={{ width: '25%' }}>
                <svg width="120" height="120" viewBox="0 0 120 120" className="mb-4">
                  {/* Curved arrow path */}
                  <path
                    d="M 10 60 Q 40 20, 70 60"
                    fill="none"
                    stroke="black"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  {/* Arrow head */}
                  <path
                    d="M 70 60 L 60 50 M 70 60 L 60 70"
                    fill="none"
                    stroke="black"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
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
                  <li>Filters so the user can customize their stay</li>
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

          {/* Divider */}
          <div className="w-full h-0.5 bg-black mb-12"></div>

          {/* Usability Testing */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-black mb-4">Usability Testing</h3>
            <div className="bg-white rounded-2xl p-8 border-2 border-black mb-6">
              <p className="text-lg text-black leading-relaxed mb-4" style={{ textAlign: 'justify' }}>
                I chose usability testing for evaluative research, to find out what people are clicking on and what their pain points were.
              </p>
              <p className="text-lg text-black leading-relaxed mb-4" style={{ textAlign: 'justify' }}>
                I both conducted usability testing and took notes from a recording of usability testing performed by another person.
              </p>
              <p className="text-lg text-black leading-relaxed mb-4" style={{ textAlign: 'justify' }}>
                Prior to my own usability session, I sent the user a consent form detailing how their data would be processed in compliance with GDPR and the setup of the testing session, along with contact details in case the user had any questions or concerns. The form also included a section for access needs so adjustments could be made to make the session easier and inclusive for them.
              </p>
              <p className="text-lg text-black leading-relaxed mb-4" style={{ textAlign: 'justify' }}>
                On the day of the session, I presented the user a scenario and website URL and watched as the user navigated through a website to complete their task. I encouraged the user to think aloud and when I interjected to ask questions, I made sure they were not leading questions and completely neutral to avoid a wording bias.
              </p>
              <p className="text-lg text-black leading-relaxed" style={{ textAlign: 'justify' }}>
                Once the testing session had completed, I ran the recordings through a transcriber and rewatched the sessions. I took note of any actions the user could easily conduct and any challenges they stumbled across. I also made a note of quotes the user made to express themselves.
              </p>
            </div>

            {/* Placeholder Images for Usability Testing */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              {[1, 2].map((num) => (
                <div key={`usability-${num}`} className="bg-white rounded-2xl border-2 border-black p-8 flex items-center justify-center" style={{ minHeight: '250px' }}>
                  <div className="text-center">
                    <Image className="w-16 h-16 mx-auto mb-2 text-gray-400" />
                    <p className="text-gray-500">Screenshot {num}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Hyperlink */}
            <a href="#" className="text-black font-bold underline hover:opacity-70 transition-opacity" style={{ fontSize: '18px' }}>
              Watch Usability Interview
            </a>
          </div>
        </section>

        {/* Divider */}
        <div className="w-full h-0.5 bg-black mb-12"></div>

        {/* Results */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-8">
          <CheckCircle className="w-8 h-8 text-black" />
          <h2 className="text-3xl font-bold text-black">Results</h2>
        </div>

        {/* Affinity Diagram */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-black mb-4">Affinity Diagram</h3>
          <div className="bg-white rounded-2xl p-8 border-2 border-black mb-6">
            <p className="text-lg text-black leading-relaxed mb-4" style={{ textAlign: 'justify' }}>
              I used triangulation to compile the unstructured data from all three research methods, and put these into an affinity diagram using Post-it notes in Miro. This allowed me to structure the data into its natural relationships and identify patterns. I created various groups such as "Mental Map" and "Search Results" and within those groups I split the data even further into sub-groups such as "Features which confused the User" and "User Goals". These groups made the data easier to understand and analyse which allowed me to identify patterns and draw conclusions.
            </p>
            <p className="text-lg text-black leading-relaxed mb-4" style={{ textAlign: 'justify' }}>
              With the structured data I could see points of repetition such as liking the map feature and being confused with lack of filters. These patterns were important to me as I wanted to create a product which would be easy to use and follow the mental model of my target market.
            </p>
            <p className="text-lg text-black leading-relaxed mb-4" style={{ textAlign: 'justify' }}>
              From here I could see the most common pain points for the user:
            </p>
            <ul className="list-disc list-inside text-lg text-black space-y-2 ml-4">
              <li>Lack of filters</li>
              <li>Lack of signposting</li>
              <li>Unclear payment information</li>
            </ul>
          </div>

          {/* Placeholder Images for Affinity Diagram */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            {[1, 2].map((num) => (
              <div key={`affinity-${num}`} className="bg-white rounded-2xl border-2 border-black p-8 flex items-center justify-center" style={{ minHeight: '250px' }}>
                <div className="text-center">
                  <Image className="w-16 h-16 mx-auto mb-2 text-gray-400" />
                  <p className="text-gray-500">Screenshot {num}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Hyperlink */}
          <a href="#" className="text-black font-bold underline hover:opacity-70 transition-opacity">
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
              I created a visual roadmap of the user's journey using the perfect path for a user to complete a hotel booking. I used the data obtained from previous research methods to create an intuitive interface.
            </p>
          </div>

          {/* Placeholder Images for User Flow */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            {[1, 2].map((num) => (
              <div key={`userflow-${num}`} className="bg-white rounded-2xl border-2 border-black p-8 flex items-center justify-center" style={{ minHeight: '250px' }}>
                <div className="text-center">
                  <Image className="w-16 h-16 mx-auto mb-2 text-gray-400" />
                  <p className="text-gray-500">Screenshot {num}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Hyperlink */}
          <a href="#" className="text-black font-bold underline hover:opacity-70 transition-opacity">
            View User Flow
          </a>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full h-0.5 bg-black mb-12"></div>

      {/* Solution */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Lightbulb className="w-8 h-8 text-black" />
            <h2 className="text-3xl font-bold text-black">The Solution</h2>
          </div>
          <div className="bg-white rounded-2xl p-8 border-2 border-black">
            <p className="text-lg text-black mb-4" style={{ textAlign: 'justify' }}>
              Using the data from the aforementioned research methods, I designed a streamlined booking experience that prioritizes transparency, ease of use, and visual appeal.
            </p>
            <p className="text-lg text-black mb-4" style={{ textAlign: 'justify' }}>
              I drew each screen state using pen and paper then scanned them into Figma.{' '}
              <a href="#" className="font-bold underline hover:opacity-70 transition-opacity">
                See Interaction Design
              </a>
            </p>
            <p className="text-lg text-black mb-6" style={{ textAlign: 'justify' }}>
              Once I was satisfied the path followed the user's mental mode, I created a working prototype using the scenario specified in the prototype comments.
            </p>
            
            {/* View Prototype Button */}
            <div className="flex justify-center">
              <button className="text-white px-12 py-4 rounded-2xl font-bold text-lg hover:opacity-90 transition-opacity" style={{ backgroundColor: '#ff7777' }}>
                View Prototype
              </button>
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
            <div className="bg-white rounded-2xl p-6 border-2 border-black">
              <h3 className="text-xl font-bold text-black mb-2">Interactive Map View</h3>
              <p className="text-gray-700" style={{ textAlign: 'justify' }}>
                Location-based search with interactive map allows users to visualize hotel locations 
                relative to their destinations of interest.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border-2 border-black">
              <h3 className="text-xl font-bold text-black mb-2">Streamlined Checkout</h3>
              <p className="text-gray-700" style={{ textAlign: 'justify' }}>
                Four-step checkout process with progress indicator to keep user updated on the checkout progress.
              </p>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Impact</h2>
          <div className="bg-white rounded-2xl p-8 border-2 border-black">
            <div className="flex justify-center mb-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-black mb-2">4.8/5</div>
                <p className="text-gray-700">User Satisfaction Rating</p>
              </div>
            </div>
            <p className="text-lg text-black mb-4" style={{ textAlign: 'justify' }}>
              The user who initially partook in the usability testing was invited back to test the prototype.
            </p>
            <p className="text-lg text-black" style={{ textAlign: 'justify' }}>
              The redesigned booking system received overwhelmingly positive feedback from the user and he was able to easily book a room based upon the given criteria.
            </p>
          </div>
        </section>

        {/* Learnings */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Reflection / Future Iterations</h2>
          <div className="bg-white rounded-2xl p-8 border-2 border-black">
            <ul className="space-y-4">
              <li className="text-black" style={{ textAlign: 'justify' }}>
                <span className="font-bold">User research is essential:</span> Direct feedback from target users 
                revealed pain points that weren't initially obvious, shaping the final design direction.
              </li>
              <li className="text-black" style={{ textAlign: 'justify' }}>
                <span className="font-bold">Simplicity wins:</span> Removing unnecessary steps and information 
                from the booking flow significantly improved conversion rates.
              </li>
              <li className="text-black" style={{ textAlign: 'justify' }}>
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
