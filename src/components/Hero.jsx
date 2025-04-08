import React from "react";
import Call from "../img/Call";
import Massage from "../img/Massage";
import Heroimg from "../img/Heroimg";
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/booksession');
  };

  return (
    <div className="bg-[#FCF8F4] pt-10 px-4 sm:px-8 md:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-2 items-center gap-8 ">
      {/* Left Side - Content */}
      <div className="flex flex-col justify-center text-center lg:text-left">
        <h1 className="text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px] xl:text-[68px] font-bold text-gray-900 font-manrope leading-tight">
          Your Journey to Emotional Well-Being
        </h1>
        <p className="text-base sm:text-lg md:text-xl py-4 sm:py-5 text-gray-700 leading-relaxed font-poppins">
          Begin your path to mental wellness with our experienced and
          compassionate counselors. We're here to support your growth and healing.
        </p>

        {/* Button */}
        <button
          className="bg-[#EC744A] font-bold text-[16px] sm:text-[20px] md:text-[22px] text-white rounded-full w-full sm:w-[300px] md:w-[350px] h-[50px] md:h-[60px] px-4 md:px-6 py-2 md:py-3 transition-transform transform hover:scale-105"
          onClick={handleClick}
        >
          Start Your Journey Today
        </button>

        {/* Contact Info */}
        <div className="flex flex-wrap gap-6 py-6 mt-6 justify-center lg:justify-start">
          <div className="flex items-center">
            <Call />
            <p className="ml-2 text-base md:text-lg text-black">+91 9685714245</p>
          </div>
          <div className="flex items-center">
            <Massage />
            <p className="ml-2 text-base md:text-lg text-black">
              altaf@apluscounselling.com
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="flex justify-center items-center w-full">
        <Heroimg className="w-full max-w-[450px] sm:max-w-[500px] md:max-w-[550px] lg:max-w-[600px] h-auto object-cover" />
      </div>
    </div>
  );
};

export default Hero;
