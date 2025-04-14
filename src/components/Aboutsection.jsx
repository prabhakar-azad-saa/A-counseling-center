import React from "react";
import { useNavigate } from "react-router-dom";

import Button from "./Button";
import Discover2 from "../img/Discover2.png";

const AboutSection = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/about");
  };

  return (
    <div className="bg-[#FCF8F4] w-full max-w-[2300px] mx-auto px-4 sm:px-6 lg:px-20 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Image Section */}
        <div>
          <img
            src={Discover2}
            alt="About Us"
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Text Section */}
        <div className="text-left">
          <h3 className="text-2xl sm:text-3xl font-bold text-black mb-4">
            About Us
          </h3>
          <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold text-black mb-6 tracking-tight font-manrope">
            Discover the Faces Behind Our Mental Health Consultancy
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-black mb-6 font-poppins">
            A Plus Counseling and Consultancy Services is dedicated to
            supporting mental well-being in today’s fast-paced world. Founded by
            Dr. Altaf A. Khan, a seasoned professional with global experience
            and a background in psychology, we help individuals and families
            manage stress, emotional challenges, parenting concerns, and
            relationship issues.
          </p>
          <p className="text-base sm:text-lg md:text-xl text-black mb-8 font-poppins">
            Our services are confidential, compassionate, and easy to access—
            book online, by phone, or via email. We’re here to help you find
            balance and clarity in everyday life.
          </p>
          <Button
            className="bg-[#EC744A] text-white py-3 px-6 rounded-full hover:bg-[#da623c] transition-all duration-300"
            onClick={handleClick}
          >
            See Detail
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
