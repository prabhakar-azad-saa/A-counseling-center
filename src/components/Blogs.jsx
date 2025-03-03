import React from 'react';
import frameImage from "../img/svgvieweroutput.png";
import { useNavigate } from 'react-router-dom';
import blogDetail3 from "../img/blogDetail3.png"
import blogDetail4 from "../img/blogDetail4.png"
import blogImg1 from "../img/blogImg1.png"
import blogImg2 from "../img/blogImg2.png"
import blogDetail6 from "../img/blogDetail6.png"


const Blogs = () => {
  const navigate = useNavigate();

  const handleClick = (page) => {
    navigate('/' + page);
  };

  return (
    <div className='bg-[#FCF8F4]'>
      <nav 
        className="flex w-full p-8 sm:p-16 lg:p-28 bg-cover"
        style={{ backgroundImage: `url(${frameImage})` }}
      >
        <div className="flex max-w-screen-xl mx-auto justify-between ">
          <div className="border-l-4 h-64 p-5"></div>
          <div>
            <h1 className="text-white text-[68px] sm:text-[68px] font-semibold p-4">
              Blogs
            </h1>
            <p className="text-white text-lg font-semibold p-4 font-poppins">
              Explore transformative insights and expert guidance on your journey to mental wellness.
            </p>
          </div>
        </div>
      </nav>

      <div className="flex flex-col mt-20 sm:flex-row justify-evenly sm:gap-12 p-8 ">
        <div className="flex flex-col sm:w-1/2 rounded-lg shadow-lg p-6 mb-8 bg-white"  onClick={() => handleClick('blogdetail')}>
        <img src={blogImg1}/>
          <h1 className="text-3xl font-semibold mb-4">The Power of Mindful Living: A Guide to Present Moment Awareness</h1>
          <p className="text-base text-gray-700 mb-6 font-poppins">
            Discover how mindfulness can transform your daily life and improve your mental well-being through simple yet effective practices.
          </p>
        </div>

        <div className="sm:w-1/2 rounded-lg shadow-lg p-6  mb-8 bg-white">
          <h1 className="text-3xl font-semibold mb-4">Popular Posts</h1>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <img src={blogImg2} alt="10 Minutes to Better Mental Health" className="w-20 h-20 object-cover" />
              <p className="text-base font-poppins">10 Minutes to Better Mental Health</p>
            </div>
            <div className="flex items-center gap-4">
              <img src={blogDetail6} alt="Work-Life Balance Tips" className="w-20 h-20 object-cover" />
              <p className="text-base font-poppins">Work-Life Balance Tips</p>
            </div>
            <div className="flex items-center gap-4">
              <img src={blogImg1} alt="10 Minutes to Better Mental Health" className="w-20 h-20 object-cover" />
              <p className="text-base font-poppins">10 Minutes to Better Mental Health</p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Blog 1 */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <img
              src={blogDetail4}
              alt="Understanding Different Types of Therapy: Finding What Works for You"
              className="w-full h-auto object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Understanding Different Types of Therapy: Finding What Works for You
            </h2>
            <p className="text-gray-600 font-poppins">
              Explore various therapeutic approaches and learn how to choose the right one for your mental health journey.
            </p>
          </div>

          {/* Blog 2 */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <img
               src={blogDetail3}
              alt="Natural Anxiety Relief: Simple Techniques for Daily Calm"
              className="w-full h-auto object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Natural Anxiety Relief: Simple Techniques for Daily Calm
            </h2>
            <p className="text-gray-600 font-poppins">
              Discover practical methods to manage anxiety naturally and create more peace in your daily life.
            </p>
          </div>

          {/* Blog 3 */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <img
              src={ blogDetail4}
              alt="Understanding Different Types of Therapy: Finding What Works for You"
              className="w-full h-auto object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Understanding Different Types of Therapy: Finding What Works for You
            </h2>
            <p className="text-gray-600 font-poppins">
              Explore various therapeutic approaches and learn how to choose the right one for your mental health journey.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
