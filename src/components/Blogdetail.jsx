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
              <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-semibold p-4">
                Blog Detail
              </h1>
              <p className="text-white text-lg sm:text-xl font-semibold p-4 font-poppins">
                Providing professional mental health support and counseling services to help you live a balanced, fulfilling life.
              </p>
            </div>
          </div>
        </nav>
      </div>

      {/* Blog Detail Content */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-8 md:px-16">
  {/* Blog Content */}
  <div className="mt-8">
    <img
      src="src/assets/blog/image 43.png"
      alt="Blog Image"
      className="w-full h-auto rounded-lg"
    />
    <div className="flex flex-col md:flex-row gap-8 mt-8">
      {/* Blog Text */}
      <div className="md:w-2/3">
        <h1 className="text-3xl font-semibold text-gray-800">How Mental Health Consultants Can Help...</h1>
        <p className="mt-4 text-gray-600 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur. Convallis est urna adipiscing fringilla nulla diam lorem non mauris.
          Ultrices aliquet at quam adipiscing feugiat interdum mattis. Placerat donec risus diam sed et. A in ullamcorper
          ipsum justo vestibulum sit cursus. A risus donec eget enim aliquet integer cursus et. Phasellus ac augue
          ultricies sem aliquam faucibus sem non volutpat. Cursus mattis interdum sem pretium morbi ornare nunc nunc.
          Pharetra neque ut ipsum nunc pretium nisi vivamus dolor. Suspendisse lectus est sed vulputate ut habitant
          sagittis semper lacinia. Tincidunt faucibus sed et amet eleifend eu. Ut mauris interdum fringilla massa Nisl
          tellus.
        </p>
      </div>

      {/* Recommended Blog Section */}
      <div className="md:w-1/3 mt-12 md:mt-0">
  <h2 className="text-2xl font-semibold text-gray-800">Recommendation Blog</h2>
  <div className="flex flex-wrap gap-6 mt-6">
    {/* Recommended Blog 1 */}
    <div className="flex flex-col sm:flex-row w-full sm:w-1/2 lg:w-full">
      <img
        src="src/assets/blog/image 44.png"
        alt="Recommended Blog 1"
        className="w-full h-auto mb-4 rounded-lg"
      />
      <div>
        <h3 className="text-lg font-semibold text-gray-800">How Mental Health Consultants Can Help...</h3>
        <p className="text-gray-600">Convallis est urna adipiscing fringilla nulla See more</p>
      </div>
    </div>

    {/* Recommended Blog 2 */}
    <div className="flex flex-col sm:flex-row w-full sm:w-1/2 lg:w-full">
      <img
        src="src/assets/blog/image 44.png"
        alt="Recommended Blog 2"
        className="w-full h-auto mb-4 rounded-lg"
      />
      <div>
        <h3 className="text-lg font-semibold text-gray-800">How Mental Health Consultants Can Help...</h3>
        <p className="text-gray-600">Convallis est urna adipiscing fringilla nulla See more</p>
      </div>
    </div>

    {/* Recommended Blog 3 */}
    <div className="flex flex-col sm:flex-row w-full sm:w-1/2 lg:w-full">
      <img
        src="src/assets/blog/image 44.png"
        alt="Recommended Blog 3"
        className="w-full h-auto mb-4 rounded-lg"
      />
      <div>
        <h3 className="text-lg font-semibold text-gray-800">How Mental Health Consultants Can Help...</h3>
        <p className="text-gray-600">Convallis est urna adipiscing fringilla nulla See more</p>
      </div>
    </div>
  </div>
</div>
</div>
</div>



        {/* Latest Blog Posts Section */}
        <div className="text-center mb-12 mt-16">
          <h1 className="text-3xl font-semibold text-gray-800">Latest Blog Posts</h1>
        </div>

        {/* Blog Post Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-10 justify-center">
          <div className="bg-white rounded-lg border p-6 w-full">
            <img
              src="src/assets/blog/IMG@1x (12) 1.png"
              alt="Blog Post 1"
              className="w-full h-auto mb-4 rounded-lg"
            />
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Understanding Anxiety: A Comprehensive Guide</h2>
            <p className="text-gray-600 mb-6 font-poppins">
              Learn about the different types of anxiety and effective coping strategies...
            </p>
            <a href="#" className="text-blue-500 hover:text-blue-700 font-medium text-lg">
              Read More
            </a>
          </div>

          <div className="bg-white rounded-lg border p-6 w-full">
            <img
              src="src/assets/blog/IMG@1x (13) 1.png"
              alt="Blog Post 2"
              className="w-full h-auto mb-4 rounded-lg"
            />
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Understanding Anxiety: A Comprehensive Guide</h2>
            <p className="text-gray-600 mb-6">
              Learn about the different types of anxiety and effective coping strategies...
            </p>
            <a href="#" className="text-blue-500 hover:text-blue-700 font-medium text-lg">
              Read More
            </a>
          </div>

          <div className="bg-white rounded-lg border p-6 w-full">
            <img
              src="src/assets/blog/IMG@1x (12) 1.png"
              alt="Blog Post 3"
              className="w-full h-auto mb-4 rounded-lg"
            />
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Understanding Anxiety: A Comprehensive Guide</h2>
            <p className="text-gray-600 mb-6">
              Learn about the different types of anxiety and effective coping strategies...
            </p>
            <a href="#" className="text-blue-500 hover:text-blue-700 font-medium text-lg">
              Read More
            </a>
          </div>
        </div>
     
      </div>
      <Ready/>
        <div className='flex sm:flex-col md:flex-col lg:flex-row gap-4 justify-between p-7'>
          <div className=' font-semibold'>
            <h3 className='text-2xl'>Testimonials</h3>
            <h1 className='font-monrope text-5xl font-semibold'>Healing Words <br/> Testimonials from  <br/> a Mental Health <br/> Consultant</h1>
          </div>
          
          <div className="flex flex-col items-center  p-6 rounded-xl bg-[#007D6E] shadow-lg w-full sm:max-w-xs lg:w-1/3"
    >
            <img src='src/assets/video call.png' alt="Video Call" className="w-16 h-16 mb-4" />
            <h1 className="text-xl text-white font-semibold mb-2">Video Call</h1>
            <p className="text-sm text-center text-white mb-4 font-poppins">Face-to-face online sessions with your Counselor. Voice-only sessions for more privacy.</p>
          </div>
          <div className="flex flex-col items-center  p-6 rounded-xl shadow-lg w-full sm:max-w-xs lg:w-1/3">
            <img src='src/assets/video call.png' alt="Video Call" className="w-16 h-16 mb-4" />
            <h1 className="text-xl font-semibold mb-2">Video Call</h1>
            <p className="text-sm text-center text-gray-600 mb-4 font-poppins">Face-to-face online sessions with your Counselor. Voice-only sessions for more privacy.</p>
            </div>
        </div>
    </div>
  );
};

export default Blogdetail;
