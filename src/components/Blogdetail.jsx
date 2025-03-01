import React from 'react';
import frameImage from "../../src/assets/svgvieweroutput.png";
import Ready from './Ready';

const Blogdetail = () => {

  
  return (
    <div>
      <div>
        <nav className="flex w-full p-8 sm:p-16 lg:p-28 bg-cover" style={{ backgroundImage: `url(${frameImage})` }}>
          <div className="flex max-w-screen-2xl px-4 sm:px-8 md:px-16 lg:px-32">
            <div>
              <div className="border-l-4 h-64 p-5"></div>
            </div>
            <div>
              <h1 className="text-white text-[68px] sm:text-5xl lg:text-[68px] font-extrabold p-4">
                Blog Detail
              </h1>
              <p className="text-white text-lg sm:text-xl  p-4 font-poppins">
                Providing professional mental health support and counseling services to help you live a balanced, fulfilling life.
              </p>
            </div>
          </div>
        </nav>
      </div>

      {/* Blog Detail Content */}
      <div className="max-w-screen-xl mx-auto px-4 pt-40 sm:px-8 md:px-">
  
  <div>
    <img
      src="src/assets/blog/IMG@1x 1.png" 
      alt="Blog Image"
      className="w-full h-auto rounded-lg"
    />
    <div className="flex flex-col md:flex-row gap-8 mt-24">
      {/* Blog Text */}
      <div className="md:w-2/3">
        <h1 className="text-3xl font-semibold  text-black ">How Mental Health Consultants Can Help...</h1>
        <p className="mt-4  text-black  leading-relaxed font-poppins">
        Mental health consultants play a crucial role in helping individuals navigate their emotional and psychological well-being. Through professional guidance and evidence-based approaches, these experts provide valuable support for those facing various mental health challenges.
        </p>
        <p className="mt-4  text-black  leading-relaxed font-poppins">
        Working with a mental health consultant can offer numerous benefits, including:
        <li>Professional assessment and personalized treatment plans</li>
        <li>Safe space to explore emotions and experiences</li>
        <li>Development of coping strategies and resilience</li>
        <li>Support in managing stress, anxiety, and depression</li>
        <li>Guidance in improving relationships and communication</li>
        
        </p>
        <p className="mt-4  text-black  leading-relaxed font-poppins">
        Our experienced consultants utilize various therapeutic approaches, including cognitive behavioral therapy, mindfulness practices, and solution-focused techniques. These methods have proven effective in helping clients achieve better mental health outcomes and improved quality of life
        </p>
        <p className="mt-4 text-black leading-relaxed font-poppins">The Consultation Process</p>
        <p className="mt-4 text-black leading-relaxed font-poppins">During your journey with a mental health consultant, you can expect:
        <ol>
        <li>1.Initial assessment to understand your needs</li>
        <li>2.Development of a tailored treatment plan</li>
        <li>3.Regular sessions focused on your goals</li>
        <li>4.Progress monitoring and plan adjustments</li>
        <li>5.Support in maintaining long-term well-being</li>
      </ol>
        </p>
      </div>

      {/* Recommended Blog Section */}
      <div className="md:w-1/3 mt-12 md:mt-0">
  <h2 className="text-2xl font-semibold text-gray-800">Recommendation Blog</h2>
  <div className="flex flex-wrap gap-6 mt-10">
    {/* Recommended Blog 1 */}
    <div className="flex flex-col sm:flex-row w-full sm:w-1/2 lg:w-full">
      <img
        src="src/assets/blog/blogimgggg1.png"
        alt="Recommended Blog 1"
        className="w-full h-auto mb-4 rounded-lg"
      />
      <div className='pl-5'>
        <h3 className="text-lg font-semibold text-black">Understanding Anxiety Management</h3>
        <p className="text-black">Practical strategies for managing anxiety in daily life <a>See more</a></p>
      </div>
    </div>

    {/* Recommended Blog 2 */}
    <div className="flex flex-col sm:flex-row w-full sm:w-1/2 lg:w-full">
      <img
        src="src/assets/blog/blogimggg.png"
        alt="Recommended Blog 2"
        className="w-full h-auto mb-4 rounded-lg"
      />
      <div className='pl-5'>
        <h3 className="text-lg font-semibold text-black">Mindfulness Techniques.</h3>
        <p className="text-black">Essential mindfulness practices for mental wellness See more</p>
      </div>
    </div>

    {/* Recommended Blog 3 */}
   
  </div>
</div>
</div>
</div>
</div>


        {/* Latest Blog Posts Section */}
      <div className='px-5'>
      <div className="text-center mb-12 mt-16">
          <h1 className="text-3xl font-semibold text-black">Latest Blog Posts</h1>
        </div>

        {/* Blog Post Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-10  justify-center">
          <div className="bg-white rounded-lg border shadow p-6 w-full">
            <img
              src="src/assets/blog/IMG@1x (12) 1.png"
              alt="Blog Post 1"
              className="w-full h-auto mb-4 rounded-lg"
            />
            <h2 className="text-2xl font-bold  text-black  mb-4">Understanding Anxiety: A Comprehensive Guide</h2>
            <p className="text-gray-600 mb-6 font-poppins">
              Learn about the different types of anxiety and effective coping strategies...
            </p>
            <a href="#" className="text-blue-500 hover:text-blue-700 font-medium text-lg">
              Read More
            </a>
          </div>

          <div className="bg-white rounded-lg border  shadow p-6 w-full">
            <img
              src="src/assets/blog/IMG@1x (13) 1.png"
              alt="Blog Post 2"
              className="w-full h-auto mb-4 rounded-lg"
            />
            <h2 className="text-2xl font-bold  text-black  mb-4">Understanding Anxiety: A Comprehensive Guide</h2>
            <p className="text-gray-600 mb-6">
              Learn about the different types of anxiety and effective coping strategies...
            </p>
            <a href="#" className="text-blue-500 hover:text-blue-700 font-medium text-lg">
              Read More
            </a>
          </div>

          <div className="bg-white rounded-lg border  shadow p-6 w-full">
            <img
              src="src/assets/blog/IMG@1x (12) 1.png"
              alt="Blog Post 3"
              className="w-full h-auto mb-4 rounded-lg"
            />
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Understanding Anxiety: A Comprehensive Guide</h2>
            <p className=" text-black  mb-6">
              Learn about the different types of anxiety and effective coping strategies...
            </p>
            <a href="#" className="text-blue-500 hover:text-blue-700 font-medium text-lg">
              Read More
            </a>
          </div>
        </div>
     
      </div>
      
      <Ready/>
        <div className='flex sm:flex-col md:flex-col lg:flex-row  justify-between pt-24 px-20 '>
          <div className=' font-semibold'>
            <h3 className='text-2xl px-60'>Testimonials</h3>
            <h1 className='font-manrope text-[54px] font-bold px-60'>Healing Words Testimonials from a Mental Health Consultant</h1>
          </div>
          
          <div className="flex flex-col items-center  p-6 rounded-xl bg-[#007D6E] shadow-lg w-full sm:max-w-xs lg:w-1/3"
    >
            <img src='src/assets/blog/IMG@1x (13) 1.png'  className="w-16 h-16 mb-4" />
            
            <p className="text-sm text-center text-white mb-4 font-poppins">"The guidance and support I received has been transformative. The personalized approach helped me develop effective strategies for managing my anxiety and stress.".</p>
            <h1 className="text-xl text-white font-semibold mb-2">George J - Client</h1>
          </div>
          <div className="flex flex-col items-center  p-6 rounded-xl shadow-lg w-full sm:max-w-xs lg:w-1/3">
            <img src='src/assets/blog/IMG@1x (11) 2.png'  className="w-16 h-16 mb-4" />
            
            <p className="text-sm text-center text-gray-600 mb-4 font-poppins">"Working with my consultant has been life-changing. They provided me with practical tools and insights that helped me overcome my challenges."
            </p>
            <h1 className="text-xl  font-semibold mb-2">George J - Client</h1>
            </div>
        </div>
    </div>
  );
};

export default Blogdetail;
