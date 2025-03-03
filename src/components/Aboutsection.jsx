import React from "react";
import Button from "./Button";

const AboutSection = () => {
  return (
    <div className="py-12 px-6 bg-[#FCF8F4]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-6">
        {/* Image Section */}
        <div className="w-full">
          <img
            src="/src/assets/Frame 80.png"
            alt="pic"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col items-start text-left px-4 mt-8 md:mt-0">
          
            <div className="flex-1 sm:max-w-1/2 text-left  w-[689px] h-[513px]">
            <h3 className="text-2xl sm:text-3xl text-black font-bold mb-4">About Us</h3>
            <h1 className="text-[54px] sm:text-5xl md:text-6xl font-[700px] text-black mb-5  tracking-[0%] font-manrope  w-[689px] h-[222px]">
              Discover the Faces Behind Our Mental Health Consultancy
            </h1>
            <p className="text-lg sm:text-xl text-black mb-14 font-poppins  w-[689px] h-[81px]">
              Our mental health consultancy brings together experienced professionals dedicated to your well-being. We believe in creating a supportive environment where you can explore, heal, and grow.
            </p>
            <Button className="bg-[#EC744A] text-white py-3 px-6 rounded-full">
              See Detail
            </Button>
          </div>
      </div>
    </div>
    </div>
  );
};

export default AboutSection;
