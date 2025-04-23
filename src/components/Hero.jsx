// import React from "react";
// import Call from "../img/Call";
// import Massage from "../img/Massage";
// import Heroimg from "../img/Heroimg";
// import FrameImage6 from "../img/FrameImage6"; 
// import { useNavigate } from 'react-router-dom';

// const Hero = () => {
//   const navigate = useNavigate();

//   const handleClick = () => {
//     navigate('/booksession');
//   };

//   return (
//     <div className="bg-[#FCF8F4] pt-10 px-4 sm:px-8 md:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-2 items-center  max-w-[2300px] mx-auto gap-8 ">
//       {/* Left Side - Content */}
//       <div className="flex flex-col justify-center text-center lg:text-left">
//         <h1 className="text-2xl sm:text-3xl md:text-4xl pb-5 lg:text-5xl font-bold bg-gradient-to-r from-[#E8774D] to-[#ffac5f] text-transparent bg-clip-text tracking-tight drop-shadow-lg ">
//           Your Journey to Emotional Well-Being
//         </h1>
//         <p className="text-base sm:text-lg md:text-xl py-4 sm:py-5 text-gray-700 leading-relaxed font-poppins">
//           Begin your path to mental wellness with our experienced and
//           compassionate counselors. We're here to support your growth and healing.
//         </p>

//         {/* Button */}
//         <button
//           className="bg-[#EC744A] font-bold text-[16px] sm:text-[20px] md:text-[22px] text-white rounded-full w-full sm:w-[300px] md:w-[350px] h-[50px] md:h-[60px] px-4 md:px-6 py-2 md:py-3 transition-transform transform hover:scale-105"
//           onClick={handleClick}
//         >
//           Start Your Journey Today
//         </button>

//         {/* Contact Info */}
//         <div className="flex flex-wrap gap-6 py-6 mt-6 justify-center lg:justify-start">
//           <div className="flex items-center">
//             <Call />
//             <p className="ml-2 text-base md:text-lg text-black">+91 9685714245</p>
//           </div>
//           <div className="flex items-center">
//             <Massage />
//             <p className="ml-2 text-base md:text-lg text-black">
//               info@apluscounselling.com
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Right Side - Image */}
//       <div className="flex justify-center items-center w-full">
//         {/* <Heroimg className="w-full max-w-[450px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[600px] h-auto object-cover" /> */}
//         <FrameImage6 className="w-full h-auto" />
//       </div>
//     </div>
//   );
// };

// export default Hero;



// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React from "react";
import { useNavigate } from "react-router-dom";
import homepic from "../img/homepic.png";
import { motion } from "framer-motion";
import {
  FaBrain,
  FaHeart,
  FaMoon,
  FaHandsHelping,
  FaCheckCircle,
  FaUserShield,
  FaCertificate,
  FaVideo
} from "react-icons/fa";

const features = [
  {
    icon: FaBrain,
    title: "Anxiety Management",
    description: "Techniques to manage anxiety and stress effectively.",
    color: "bg-blue-100 text-blue-600"
  },
  {
    icon:FaHandsHelping ,
    title: "Depression Support",
    description: "Guidance to overcome depression and find joy again.",
    color: "bg-green-100 text-green-600"
  },
  {
    icon: FaMoon,
    title: "Sleep Therapy",
    description: "Improve sleep patterns for overall mental well-being.",
    color: "bg-purple-100 text-purple-600"
  },
  {
    icon: FaHeart,
    title: "Relationship Counseling",
    description: "Build strong, healthy relationships with expert support.",
    color: "bg-red-100 text-red-600"
  }
];

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
    <div className="relative min-h-screen">
      <img
        src={homepic}
        alt="Mental wellness background"
        className="absolute inset-0 w-full h-full object-cover object-top z-0"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-teal-900/90 via-teal-800/70 to-transparent z-10"></div>
  
      <div className="relative z-20 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-10 flex items-center min-h-screen">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center w-full">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight mb-6">
              Start Your Healing Journey Today
            </h1>
            <p className="text-base sm:text-lg lg:text-xl mb-8 max-w-xl">
              We're here to guide you toward better mental health. Connect with certified counselors and begin your path to emotional well-being.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => navigate("/booksession")}
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-full transition duration-300 transform hover:scale-105"
              >
                Book Consultation
              </button>
              <button
                onClick={() => navigate("/services")}
                className="bg-white/10 border border-white text-white font-semibold py-3 px-6 rounded-full hover:bg-white/20 transition duration-300"
              >
                Learn More
              </button>
            </div>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-white">
              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-orange-400" />
                24/7 Support
              </div>
              <div className="flex items-center gap-3">
                <FaUserShield className="text-orange-400" />
                100% Confidential
              </div>
              <div className="flex items-center gap-3">
                <FaCertificate className="text-orange-400" />
                Certified Therapists
              </div>
              <div className="flex items-center gap-3">
                <FaVideo className="text-orange-400" />
                Online Sessions
              </div>
            </div>
          </motion.div>
  
          {/* Right feature cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="w-full"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/90 p-5 rounded-2xl shadow-md hover:shadow-xl transition"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div
                      className={`w-12 h-12 ${item.color.split(" ")[0]} rounded-full flex items-center justify-center`}
                    >
                      {React.createElement(item.icon, {
                        className: `${item.color.split(" ")[1]} text-xl`
                      })}
                    </div>
                    <h3 className="text-md font-semibold text-gray-800">{item.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default Hero;
