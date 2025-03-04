import React from "react";

import Ready from "./Ready";
import Features from "./Features";
import frameImage from "../img/Frame83.png";
import frameImage2 from "../img/svgvieweroutput.png";
import works2 from "../img/works2.png"
import videocall from "../img/videocall.png"
import secure from "../img/secure.png"
import special from "../img/special.png"
import Anxiety from "../img/Anxiety";
import Needing from "../img/Needing";
import Looking from "../img/Looking";
import Seeking from "../img/Seeking";
import Reduce from "../img/Reduce";
import Family from "../img/Family";
import Depression from "../img/Depression";



const Onlinecounseling = () => {
  const sectionData = {
    title: "How Online Counseling Works",
    features: [
      {
        imgSrc: works2,
        altText: "Expert",
        heading: "Book Your Session",
        description:
          "Schedule an appointment at your preferred time with our easy booking system.",
      },
      {
        imgSrc: videocall,
        altText: "Personalized Approach",
        heading: "Choose Your Mode",
        description:
          "Select between video calls, phone calls, or chat-based therapy sessions.",
      },
      {
        imgSrc: secure,
        altText: "Safe & Confidential",
        heading: "Secure Sessions",
        description:
          "Connect through our encrypted platform ensuring complete privacy.",
      },
    ],
  };

  

  const handleClick = (service) => {
    alert(`You clicked on ${service}`);
  };

  return (
    <div>
      {/* Navigation Section */}
      <nav
  className="relative w-full p-8 sm:p-16 lg:p-28 bg-cover"
  style={{ backgroundImage: `url(${frameImage2})` }}
>
  <div className="flex flex-col sm:flex-row max-w-screen-2xl px-4 sm:px-8 md:px-16 lg:px-32">
    {/* Left Border */}
    <div className="hidden lg:block">
      <div className="border-l-4 h-64 p-5"></div>
    </div>
    {/* Text Content */}
    <div className="sm:w-10/12 text-center sm:text-left">
      <h1 className="text-white text-4xl sm:text-5xl lg:text-[68px] font-extrabold p-4">
        Online Counseling – Support Anytime, Anywhere
      </h1>
      <p className="text-white text-base sm:text-lg lg:text-xl p-4 font-poppins">
        Professional therapy at your convenience. Connect with licensed
        therapists from the comfort of your home.
      </p>
    </div>
  </div>
</nav>

      {/* Features Section */}
      <Features heading={sectionData.title} features={sectionData.features} />

     
    
     <div >
     <div
        className="relative w-full bg-cover flex flex-col sm-flex-row "
        style={{ backgroundImage: `url(${frameImage})` }}
      >
        {/* Image Section */}
        <div
          style={{ top: "-90px" }}
          className="absolute top-0 w-[400px] h-[600px] ml-10 mb-20"
        >
          <img
            src={special}
            alt="Specialty Image"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="flex justify-end w-full">
          <div className="text-white flex flex-col items-center sm:items-start sm:w-3/4 p-6 sm:ml-48">
            {/* Specialties List */}
            <div className="flex flex-col sm:flex-col md:flex-col lg:flex-col ml-80 justify-between w-full mb-8">
              <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-center sm:text-left">
                Our Specialties
              </h1>
              {/* Anxiety & Stress Management Section */}
              <div className="w-full sm:w-1/3 flex mb-8 sm:mb-0 p-3 rounded-xl pt-9 justify-center sm:justify-start">
                {/* <img
                  src=
                  alt="Anxiety & Stress Management"
                  className="w-[84px] h-[84px] mb-4 sm:mb-0"
                /> */}
                <Anxiety/>
                <div className="pl-5 flex flex-col justify-center text-center sm:text-left">
                  <h2 className="text-xl font-semibold mb-3">
                    Anxiety & Stress Management
                  </h2>
                  <p className="text-sm font-poppins">
                    Learn effective techniques to manage anxiety and reduce
                    stress.
                  </p>
                </div>
              </div>

              {/* Depression Support Section */}
              <div className="w-full sm:w-1/3 flex mb-8 sm:mb-0 pt-10 p-3 rounded-xl justify-center sm:justify-start">
                {/* <img
                  src="src/assets/Vector (1).png"
                  alt="Depression Support"
                  className="w-[84px] h-[84px] object-cover mb-4 sm:mb-0"
                /> */}
               <Depression/>
                <div className="pl-5 flex flex-col justify-center text-center sm:text-left">
                  <h2 className="text-xl font-semibold mb-3">
                    Depression Support
                  </h2>
                  <p className="text-sm font-poppins">
                    Get help with managing depression and improving emotional
                    well-being.
                  </p>
                </div>
              </div>

              {/* Relationship Therapy Section */}
              <div className="w-full sm:w-1/3 flex mb-8 sm:mb-0 p-3 pt-10 rounded-xl justify-center sm:justify-start">
                {/* <img
                  src="src/assets/online counselling/Group.png"
                  alt="Relationship Therapy"
                  className="w-[84px] h-[84px] object-cover mb-4 sm:mb-0"
                /> */}
                <Family />
                <div className="pl-5 flex flex-col justify-center text-center sm:text-left">
                  <h2 className="text-xl font-semibold mb-3">
                    Relationship Therapy
                  </h2>
                  <p className="text-sm font-poppins">
                    Strengthen relationships and improve communication with
                    loved ones.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     </div>

      {/* Services Section */}
      <div className="mb-10 text-center py-12 sm:py-16 px-4 sm:px-32">
        <h1 className="text-3xl sm:text-4xl font-semibold mb-8">
          Who Can Benefit from Online Therapy?
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 justify-center mt-8 p-10">
          <div className="bg-gradient-to-r from-teal-700 to-teal-400 p-6 rounded-3xl text-center py-12 sm:py-20 cursor-pointer hover:scale-105 transition-transform duration-300">
            {/* <img
              src="src/assets/Indivisual.png"
              alt="Psychoanalytic Therapy"
              className="w-24 h-24 mx-auto mb-4"
            /> */}
            <Anxiety className="w-24 h-24 mx-auto mb-4"/>
            <h2 className="text-[28px] sm:text-[35px] mb-2 text-white">
              Facing stress, anxiety, or depression
            </h2>
            <p className="text-[16px] sm:text-[18px] text-white font-poppins">
              Experience professional support from licensed therapists who
              specialize in managing stress, anxiety, and depression through
              confidential online sessions.
            </p>
                      
          </div>
          <div className="bg-white p-6 rounded-3xl text-center py-12 sm:py-20 cursor-pointer hover:scale-105 transition-transform duration-300">
            {/* <img
              src="src/assets/online counselling/Group (4).png"
              alt="Mindfulness Based Therapy"
              className="w-24 h-24 mx-auto mb-4"
            /> */}
            <Needing className="w-24 h-24 mx-auto mb-4"/>
            <h2 className="text-[28px] sm:text-[35px] mb-2  text-black">
              Needing relationship counseling
            </h2>
            <p className="text-[16px] sm:text-[18px]  text-black font-poppins">
              Explore deep-seated patterns and unconscious influences to gain
              profound self-understanding and emotional healing.
            </p>
                      
          </div>
          <div className="bg-white p-6 rounded-3xl text-center py-12 sm:py-20 cursor-pointer hover:scale-105 transition-transform duration-300">
            {/* <img
              src="src/assets/online counselling/Group (2).png"
              alt="Cognitive Behavioral Therapy"
              className="w-24 h-24 mx-auto mb-4"
            /> */}
            <Looking  className="w-24 h-24 mx-auto mb-4"/>
            <h2 className="text-[28px] sm:text-[35px] mb-2 text-black">
              Looking for guidance
            </h2>
            <p className="text-[16px] sm:text-[18px] text-black font-poppins">
              Find clarity and direction with experienced counselors who can
              help you navigate life's challenges and make meaningful decisions
              for your future.
            </p>
                      
          </div>
          <div className="bg-gradient-to-r from-teal-700 to-teal-400 p-6 rounded-3xl text-center py-12 sm:py-20 cursor-pointer hover:scale-105 transition-transform duration-300">
            {/* <img
              src="src/assets/online counselling/Group (3).png"
              alt="Humanistic Therapy"
              className="w-24 h-24 mx-auto mb-4"
            /> */}
            <Seeking  className="w-24 h-24 mx-auto mb-4"/>
            <h2 className="text-[28px] sm:text-[35px] mb-2 text-white">
              Seeking work-life balance
            </h2>
            <p className="text-[16px] sm:text-[18px] text-white font-poppins">
              Learn effective strategies to manage professional stress, set
              healthy boundaries, and create a more fulfilling balance between
              your work and personal life.
            </p>
                      
          </div>
        </div>
      </div>

      
      <Ready />
    </div>
  );
};

export default Onlinecounseling;
