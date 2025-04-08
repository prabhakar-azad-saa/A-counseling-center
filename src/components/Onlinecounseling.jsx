import React from "react";

import Ready from "./Ready";
import Features from "./Features";
import frameImage from "../img/Frame83.png";
import frameImage2 from "../img/svgvieweroutput.png";
import works2 from "../img/works2.png"
import Vector from "../img/Vector.png"
import secure from "../img/secure.png"
import special from "../img/special.png"
import Anxiety from "../img/Anxiety";
import Needing from "../img/Needing";
import Looking from "../img/Looking";
import Seeking from "../img/Seeking";
import Family from "../img/Family";
import Depression from "../img/Depression";
import { motion } from "framer-motion";




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
        imgSrc: Vector,
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

  const Cartdata =
  [
   {
     imgSrc: <Anxiety/>,
     title:"Facing stress, anxiety, or depression",
     description:'Experience professional support from licensed therapists who specialize in managing stress, anxiety, and depression through confidential online sessions.',
    },
    {
     imgSrc: <Needing/>,
     title:"Needing relationship counseling",
     description:'Get expert guidance on improving communication, resolving conflicts, and strengthening bonds with your partner through specialized relationship therapy.',
    },
    {
     imgSrc: <Looking/>,
     title:"Looking for guidance",
     description:"Find clarity and direction with experienced counselors who can help you navigate life's challenges and make meaningful decisions for your future.",
    },
    {
     imgSrc: <Seeking/>,
     title:"Seeking work-life balance",
     description:'Learn effective strategies to manage professional stress, set healthy boundaries, and create a more fulfilling balance between your work and personal life.',
    }
  ]

  

  const handleClick = (service) => {
    alert(`You clicked on ${service}`);
  };

  return (
    <div className=" ">
      {/* Navigation Section */}
      <div
      className="relative w-full h-[500px] overflow-hidden"
      style={{
        backgroundImage: `url(${frameImage2})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 opacity-50"></div>
      <div className="relative z-10 w-full max-w-6xl mx-auto px-5">
        <div className="grid mt-12 grid-cols-1 md:grid-cols-1 items-center gap-1 min-h-[500px]">
          <div className="flex flex-row justify-center items-center md:justify-start space-x-8">
            <div className="h-60 border-l-2 border-white"></div>
            <div className="flex flex-col text-center md:text-left">
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, type: "spring" }}
                className="text-5xl font-bold text-white mb-4" // Added mb-4 for spacing
              >
            Online Counseling Support Anytime, Anywhere
              </motion.h2>
              <br />
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
                className="text-lg text-white"
              >
          Professional therapy at your convenience. Connect with licensed therapists from the comfort of your home.
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </div>

      {/* Features Section */}
      <Features heading={sectionData.title} features={sectionData.features} />

     
    
    <div>
    <div
  className="relative w-full bg-cover flex flex-col md:flex-col lg:flex-row "
  style={{ backgroundImage: `url(${frameImage})` }}
>
  {/* Image Section */}
  <div
    style={{ top: "-90px" }}
    className="static md:static lg:absolute top-0 w-full md:w-full lg:w-[500px] h-[300px] md:h-[550px] lg:h-[800px] ml-0 md:ml-0 lg:ml-10 mb-10 md:mb-10 lg:mb-20"
  >
    <img
      src={special}
      alt="Specialty Image"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Content Section */}
  <div className="flex justify-end w-full">
    <div className="text-white flex flex-col items-center md:items-center lg:items-start sm:w-3/4 p-6 md:p-6 lg:ml-48">
      {/* Specialties List */}
      <div className="flex flex-col md:flex-col lg:flex-col ml-0 md:ml-0 lg:ml-80 justify-between w-full mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-center md:text-center lg:text-left">
          Our Specialties
        </h1>
        {/* Anxiety & Stress Management Section */}
        <div className="w-full md:w-full lg:w-1/3 flex flex-col items-center md:items-center lg:items-start mb-8 md:mb-8 lg:mb-0 p-3 rounded-xl pt-9 justify-center md:justify-center lg:justify-start">
          <div className="static md:static lg:relative">
            <Anxiety className="w-[64px] h-[64px] sm:w-[84px] sm:h-[84px] mb-4 md:mb-4 lg:mb-0 sm:mr-4" />
          </div>
          <div className="flex flex-col justify-center text-center md:text-center lg:text-left">
            <h2 className="text-xl font-semibold mb-3">
              Anxiety & Stress Management
            </h2>
            <p className="text-sm font-poppins">
              Learn effective techniques to manage anxiety and reduce stress.
            </p>
          </div>
        </div>

        {/* Depression Support Section */}
        <div className="w-full md:w-full lg:w-1/3 flex flex-col items-center md:items-center lg:items-start mb-8 md:mb-8 lg:mb-0 p-3 rounded-xl pt-10 justify-center md:justify-center lg:justify-start">
          <div className="static md:static lg:relative">
            <Depression className="w-[64px] h-[64px] sm:w-[84px] sm:h-[84px] mb-4 md:mb-4 lg:mb-0 sm:mr-4" />
          </div>
          <div className="flex flex-col justify-center text-center md:text-center lg:text-left">
            <h2 className="text-xl font-semibold mb-3">
              Depression Support
            </h2>
            <p className="text-sm font-poppins">
              Get help with managing depression and improving emotional well-being.
            </p>
          </div>
        </div>

        {/* Relationship Therapy Section */}
        <div className="w-full md:w-full lg:w-1/3 flex flex-col items-center md:items-center lg:items-start mb-8 md:mb-8 lg:mb-0 p-3 rounded-xl pt-10 justify-center md:justify-center lg:justify-start">
          <div className="static md:static lg:relative">
            <Family className="w-[64px] h-[64px] sm:w-[84px] sm:h-[84px] mb-4 md:mb-4 lg:mb-0 sm:mr-4" />
          </div>
          <div className="flex flex-col justify-center text-center md:text-center lg:text-left">
            <h2 className="text-xl font-semibold mb-3">
              Relationship Therapy
            </h2>
            <p className="text-sm font-poppins">
              Strengthen relationships and improve communication with loved ones.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
      </div>

      {/* Services Section */}
      <div className="mb-10 text-center py-12 sm:py-16 px-4 ">
        <h1 className="text-3xl sm:text-4xl font-semibold mb-8">
          Who Can Benefit from Online Therapy?
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 py-10 px-2 md:px-10  2xl:px-96">
  {Cartdata.map((item, index) => {
    const isGradient = index % 3 === 0; 

    return (
      <div 
        key={index} 
        className={`${isGradient ? 'bg-gradient-to-r from-[#007D6E] to-[#5EB47C]' : 'bg-white'} 
          rounded-3xl  flex justify-center overflow-hidden`}
      >
        <div className="flex flex-col items-center rounded-2xl p-8 sm:p-10 w-full max-w-lg">
       
          <div className="w-28 h-28 sm:w-32 sm:h-32 flex justify-center pb-6">
            {item.imgSrc}
          </div>
          
          {/* Title */}
          <h1 className={`text-xl md:text-2xl lg:text-4xl px-2 pb-3 font-bold 
            ${isGradient ? 'text-white' : 'text-black'}`}>
            {item.title}
          </h1>
          
          {/* Description */}
          <p className={`text-sm sm:text-lg pb-4 
            ${isGradient ? 'text-white' : 'text-black'}`}>
            {item.description}
          </p>
        </div>
      </div>
    );
  })}
</div>

        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 justify-center mt-8 p-10">
          <div className="bg-gradient-to-r from-teal-700 to-teal-400 p-6 rounded-3xl text-center py-12 sm:py-20 cursor-pointer hover:scale-105 transition-transform duration-300">
          
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
      </div> */}
</div>
      
      <Ready />
    </div>
  );
};

export default Onlinecounseling;
