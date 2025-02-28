import React from 'react';
import Ready from './Ready';
import Features from './Features';
import frameImage from "../../src/assets/Frame83.png";
import frameImage2 from "../../src/assets/svgvieweroutput.png";

const Onlinecounseling = () => {

  const sectionData = {
    title: "How Online Counseling Works",
    features: [
      {
        imgSrc: "src/assets/works2.png",
        altText: "Expert",
        heading: "Book Your Session",
        description: "Schedule an appointment at your preferred time with our easy booking system.",
      },
      {
        imgSrc: "src/assets/video call.png",  
        altText: "Personalized Approach",
        heading: "Choose Your Mode",
        description: "Select between video calls, phone calls, or chat-based therapy sessions.",
      },
      {
        imgSrc: "src/assets/online counselling/Group (5).png",  
        altText: "Safe & Confidential",
        heading: "Secure Sessions",
        description: "Connect through our encrypted platform ensuring complete privacy.",
      },
    ],
  };

  const handleClick = (service) => {
    alert(`You clicked on ${service}`);
  };

  return (
    <div>
      {/* Navigation Section */}
      <nav className="relative w-full p-8 sm:p-16 lg:p-28 bg-cover" style={{ backgroundImage: `url(${frameImage2})` }}>
        <div className=" flex  justify-center">
        <div>
          <div className="border-l-4 h-64 p-5"></div>
          </div>
         <div>
         <h1 className="text-white text-3xl sm:text-5xl lg:text-[68px] font-semibold p-4 text-center">
            Online Counseling – Support Anytime, Anywhere
          </h1>
          <p className="text-white text-lg sm:text-xl font-semibold p-4 text-center">
            Professional therapy at your convenience. Connect with licensed therapists from the comfort of your home.
          </p>
         </div>
        </div>
      </nav>

      {/* Features Section */}
      <Features
        heading={sectionData.title}
        features={sectionData.features}
      />

      {/* Specialties Section */}
      <div
  className="relative w-full flex justify-center sm:justify-end bg-cover"
  style={{ backgroundImage: `url(${frameImage})` }}
>
  <div className="text-white flex flex-col p-6 sm:p-12 md:p-16">
    <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-center sm:text-left">
      Our Specialties
    </h1>

    <div className="flex flex-col sm:flex-row justify-between  sm:items-start w-full sm:w-3/4 mb-8">
      {/* Professional Growth Section */}
      <div className="w-full sm:w-1/3 flex mb-8 sm:mb-0 p-3 rounded-xl justify-center sm:justify-start">
        <img
          src="src/assets/Indivisual.png"
          alt="Anxiety & Stress Management"
          className="w-[84px] h-[84px] mb-4 sm:mb-0"
        />
        <div className="pl-5 flex flex-col justify-center text-center sm:text-left">
          <h2 className="text-xl font-semibold mb-3">Anxiety & Stress Management</h2>
          <p className="text-sm font-poppins">Learn effective techniques to manage anxiety and reduce stress.</p>
        </div>
      </div>

      {/* Reduced Burnout Section */}
      <div className="w-full sm:w-1/3 flex mb-8 sm:mb-0 p-3 rounded-xl justify-center sm:justify-start">
        <img
          src="src/assets/Vector (1).png"
          alt="Depression Support"
          className="w-[84px] h-[84px] object-cover mb-4 sm:mb-0"
        />
        <div className="pl-5 flex flex-col justify-center text-center sm:text-left">
          <h2 className="text-xl font-semibold mb-3">Depression Support</h2>
          <p className="text-sm font-poppins">Get help with managing depression and improving emotional well-being.</p>
        </div>
      </div>

      {/* Relationship Therapy Section */}
      <div className="w-full sm:w-1/3 flex mb-8 sm:mb-0 p-3 rounded-xl justify-center sm:justify-start">
        <img
          src="src/assets/online counselling/Group.png"
          alt="Relationship Therapy"
          className="w-[84px] h-[84px] object-cover mb-4 sm:mb-0"
        />
        <div className="pl-5 flex flex-col justify-center text-center sm:text-left">
          <h2 className="text-xl font-semibold mb-3">Relationship Therapy</h2>
          <p className="text-sm font-poppins">Strengthen relationships and improve communication with loved ones.</p>
        </div>
      </div>
    </div>
  </div>
</div>


      {/* Services Section */}
      <div className="mb-10 text-center py-[60px] sm:py-[162px] bg-[#FCF8F4]">
        <h1 className="text-3xl md:text-4xl font-semibold mb-8">Individual Therapy Methods</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 justify-center mt-8 p-10">
          <div className="bg-gradient-to-r from-teal-700 to-teal-400 p-6 rounded-3xl text-white text-center py-20">
            <img src="src/assets/Indivisual.png" alt="Psychoanalytic Therapy" className="w-24 h-24 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Facing stress, anxiety, or depression</h2>
            <p className="text-lg font-poppins">Experience professional support from licensed therapists who specialize in managing stress, anxiety, and depression through confidential online sessions.</p>
          </div>
          <div className="bg-white p-5 rounded-xl text-center">
            <img src="src/assets/online counselling/Group (4).png" alt="Mindfulness Based Therapy" className="w-24 h-24 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Needing relationship counseling</h2>
            <p className="text-lg font-poppins">Get expert guidance on improving communication, resolving conflicts, and strengthening bonds with your partner through specialized relationship therapy.</p>
          </div>
          <div className="bg-white p-5 rounded-xl text-center">
            <img src="src/assets/online counselling/Group (2).png" alt="Cognitive Behavioral Therapy" className="w-24 h-24 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Looking for guidance</h2>
            <p className="text-lg font-poppins">Find clarity and direction with experienced counselors who can help you navigate life's challenges and make meaningful decisions for your future.</p>
          </div>
          <div className="bg-gradient-to-r from-teal-700 to-teal-400 p-6 rounded-3xl text-center text-white py-20">
            <img src="src/assets/online counselling/Group (3).png" alt="Humanistic Therapy" className="w-24 h-24 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Seeking work-life balance</h2>
            <p className="text-lg font-poppins">Learn effective strategies to manage professional stress, set healthy boundaries, and create a more fulfilling balance between your work and personal life.</p>
          </div>
        </div>
      </div>

      <Ready />
    </div>
  );
};

export default Onlinecounseling;
