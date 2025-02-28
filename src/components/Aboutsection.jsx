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
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#333333] mb-4">
            About Us
          </h3>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-[700] text-[#333333] mb-5 leading-9 sm:leading-[45px] md:leading-[60px] lg:leading-[73.76px] tracking-normal font-manrope">
            Discover the Faces Behind Our Mental Health Consultancy
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-[#666666] py-4 font-poppins leading-relaxed">
            Our mental health consultancy brings together experienced professionals dedicated to your well-being. We believe in creating a supportive environment where you can explore, heal, and grow.
          </p>
          <Button className="bg-[#EC744A] text-white py-3 px-8 rounded-full">
            See Details
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
