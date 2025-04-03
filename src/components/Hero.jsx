import React from "react";

import Call from "../img/Call";
import Massage from "../img/Massage";
import heroSection from "../img/heroSection.png"
// import Location from "../img/Location"
import { useNavigate } from 'react-router-dom';
import Heroimg from "../img/Heroimg";


const Hero = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/booksession');
  };
  

  return (
    <div className="bg-[#FCF8F4] pt-10 grid grid-cols-1 lg:grid-cols-2 p-4 sm:px-12 md:px-14 lg:px-16 ">
      {/* Left Side - Content */}
      <div className="content flex flex-col justify-center">
        <h1 className="text-[40px] sm:text-[50px] md:text-[68px] font-bold text-gray-900 font-manrope">
          Your Journey to Emotional Well-Being
        </h1>
        <p className="text-lg py-6 sm:py-5 text-gray-700 leading-relaxed font-poppins">
          Begin your path to mental wellness with our experienced and
          compassionate counselors. We're here to support your growth and
          healing.
        </p>

        {/* Button */}
        <button className="bg-[#EC744A] font-bold text-[18px] sm:text-[22px] text-white rounded-[30px] w-full sm:w-[366px] h-[60px] px-[30px] sm:px-[50px] py-[12px] sm:py-[15px] gap-[10px]" onClick={handleClick}>
          Start Your Journey Today
        </button>

        {/* Contact Info */}
        <div className="calllog flex flex-wrap gap-6 py-3 mt-12 justify-start">
          <div className="flex items-center">
            <Call />
            <p className="ml-3 text-lg text-black">+91 9685714245</p>
          </div>
          <div className="flex items-center">
            <Massage />
            <p className="ml-3 text-lg text-black">
              altaf@apluscounselling.com
            </p>
          </div>
          {/* <div className="flex items-center">
            <Location />
            <p className="ml-3 text-lg text-black">D67, BDA Colony, Kohefiza, Bhopal</p>
          </div> */}
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="w-full h-[600px] flex justify-center items-center mt-20">
  <Heroimg className="w-full h-full object-cover" />
</div>
    </div>
  );
};

export default Hero;
