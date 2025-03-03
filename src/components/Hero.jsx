import React from "react";

import Call from "../img/Call";
import Massage from "../img/Massage";
import heroSection from "../img/heroSection.png"


const Hero = () => {
  

  return (
    <div className="bg-[#FCF8F4] pt-10 grid grid-cols-1 lg:grid-cols-2 p-4 sm:px-12 md:px-14 lg:px-16 ">
      {/* Left Side - Content */}
      <div className="content flex flex-col justify-center">
        <h1 className="text-[40px] sm:text-[56px] md:text-[68px] font-bold text-gray-900 font-manrope">
          Your Journey to Emotional Well-Being
        </h1>
        <p className="text-lg py-6 sm:py-10 text-gray-700 leading-relaxed font-poppins">
          Begin your path to mental wellness with our experienced and
          compassionate counselors. We're here to support your growth and
          healing.
        </p>

        {/* Button */}
        <button className="bg-[#EC744A] font-bold text-[18px] sm:text-[22px] text-white rounded-[30px] w-full sm:w-[366px] h-[60px] px-[30px] sm:px-[50px] py-[12px] sm:py-[15px] gap-[10px]">
          Start Your Journey Today
        </button>

        {/* Contact Info */}
        <div className="calllog flex flex-wrap gap-6 py-10 mt-12 justify-start">
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
            <p className="ml-3 text-lg text-black">logoipsume*</p>
          </div> */}
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="image mt-16 sm:mt-0">
        <img
          src={heroSection}
          alt="layer 2"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default Hero;
