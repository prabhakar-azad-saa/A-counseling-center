import React from "react";
import { useNavigate } from "react-router-dom";

import Button from "./Button";
import Discover from '../img/Discover.png'
// import UserProfile from "./UserProfile";

const AboutSection = () => {
    const navigate = useNavigate();
  
    // const handleClick = () => {
    //   navigate("/userprofile");
    // };
  
  
  return (
    <div className="py-12 p-5 bg-[#FCF8F4]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:px-6">
        {/* Image Section */}
        <div className="w-full">
          <img
            src={Discover}
            alt="pic"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col items-start text-left px-4 mt-8 md:mt-0">
          
            <div className="flex-1 sm:max-w-1/2 text-left ">
            <h3 className="text-2xl sm:text-3xl text-black font-bold mb-4">About Us</h3>
            <h1 className="text-[54px] sm:text-5xl md:text-6xl font-[700px] text-black mb-5  tracking-[0%] font-manrope  ">
              Discover the Faces Behind Our Mental Health Consultancy
            </h1>
            <p className="text-lg sm:text-xl text-black mb-14 font-poppins  ">
              Our mental health consultancy brings together experienced professionals dedicated to your well-being. We believe in creating a supportive environment where you can explore, heal, and grow.
            </p>
            <Button className="bg-[#EC744A] text-white py-3 px-6 rounded-full" >
              See Detail
            </Button>
          </div>
      </div>
    </div>
    </div>
  );
};

export default AboutSection;
