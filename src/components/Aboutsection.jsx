import React from "react";
import { useNavigate } from "react-router-dom";

import Button from "./Button";
import Discover2 from '../img/Discover2.png'
// import UserProfile from "./UserProfile";

const AboutSection = () => {
    const navigate = useNavigate();
  
    const handleClick = () => {
      navigate("/about");
    };
  
  
  return (
    <div className="py-12 p-5 bg-[#FCF8F4] justify-between  max-w-[2300px] mx-auto w-full ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:px-6">
        {/* Image Section */}
        <div className="w-full">
          <img
            src={Discover2}
            alt="pic"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col  items-start text-left px-4 mt-8 md:mt-0">
          
            <div className="flex-1 sm:max-w-1/2 justify-center max-w-3xl mx-auto text-left ">
            <h3 className="text-2xl sm:text-3xl text-black font-bold mb-4">About Us</h3>
            <h1 className="text-[54px] sm:text-5xl md:text-6xl font-[700px] text-black mb-5  tracking-[0%] font-manrope  ">
              Discover the Faces Behind Our Mental Health Consultancy
            </h1>
            <p className="text-lg sm:text-xl text-black mb-6 font-poppins  ">
            A Plus Counseling and Consultancy Services is dedicated to supporting mental well-being in today’s fast-paced world. Founded by Dr. Altaf A. Khan, a seasoned professional with global experience and a background in psychology, we help individuals and families manage stress, emotional challenges, parenting concerns, and relationship issues.

            </p>
            <p className="text-lg sm:text-xl text-black mb-14 font-poppins  ">
            Our services are confidential, compassionate, and easy to access—book online, by phone, or via email. We’re here to help you find balance and clarity in everyday life.
            </p>
            <Button className="bg-[#EC744A] text-white py-3 px-6 rounded-full" onClick={handleClick} >
              See Detail
            </Button>
          </div>
      </div>
    </div>
    </div>
  );
};

export default AboutSection;
