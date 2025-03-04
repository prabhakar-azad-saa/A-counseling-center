import React from 'react';


import blog111 from "../img/blog111.png"
import blog222 from "../img/blog222.png"
import blog333 from "../img/blog333.png"

const Blogsection = () => {
  return (
    <div className="p-8 bg-[#FCF8F4]">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-semibold text-black">Latest Blog Posts</h1>
      </div>

      {/* Blog Post Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
        <div className="bg-white rounded-lg border p-6 w-full">
          <img
            src={ blog111}
            alt="Blog Post 1"
            className="w-full h-auto mb-4 rounded-lg"
          />
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Understanding Anxiety: A Comprehensive Guide
          </h2>
          <p className="text-gray-600 mb-6 font-poppins">
            Learn about the different types of anxiety and effective coping strategies...
          </p>
          <a href="#" className="text-blue-500 hover:text-blue-700 font-medium text-lg">
            Read More
          </a>
        </div>

        <div className="bg-white rounded-lg border p-6 w-full">
          <img
            src={ blog222}
            alt="Blog Post 2"
            className="w-full h-auto mb-4 rounded-lg"
          />
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
          5 Daily Habits for Better Mental Health
          </h2>
          <p className="text-gray-600 mb-6">
          Discover simple yet effective daily practices that can improve your mental wellbeing...
          </p>
          <a href="#" className="text-blue-500 hover:text-blue-700 font-medium text-lg">
            Read More
          </a>
        </div>

        <div className="bg-white rounded-lg border p-6 w-full">
          <img
            src={ blog333}
            alt="Blog Post 3"
            className="w-full h-auto mb-4 rounded-lg"
          />
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
          The Power of Mindfulness Meditation
          </h2>
          <p className="text-gray-600 mb-6">
          Explore how mindfulness meditation can transform your mental state...
          </p>
          <a href="#" className="text-blue-500 hover:text-blue-700 font-medium text-lg">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Blogsection;
