import React from "react";

import Features from "./Features";
import frameImage from "../img/svgvieweroutput.png";
import Holistic from "../img/Holistic.png"
import Experties from "../img/Experties.png"
import Accessibility from "../img/Accessibility.png"
import Discover2 from "../img/Discover2.png"
import aboutSelf from "../img/aboutSelf.png"
import aboutSucces2 from "../img/aboutSucces2.png"
import arrowAbout from "../img/arrowAbout.png"

import { motion } from "framer-motion";




const About = () => {
  
  const sectionData = {
    heading: "Why?",
    title: "Why Our Mental Health Consultants are the Best Choice",
    description: "",
    features: [
      {
        imgSrc: Holistic,
        altText: "Expert",
        heading: "Holistic Approach",
        description:
          "We integrate multiple therapeutic methods to address your unique mental health needs",
      },
      {
        imgSrc: Experties,
        altText: "Personalized Approach",
        heading: "Expertise Team",
        description:
          "Our certified professionals bring years of experience in various mental health specialties",
      },
      {
        imgSrc: Accessibility,
        altText: "Safe & Confidential",
        heading: "Accessibility",
        description:
          "Flexible scheduling and multiple consultation options to fit your lifestyle.",
      },
    ],
  };

  return (
    <div >
      <div  className="" >
      <div
      className="relative w-full h-[500px] overflow-hidden"
      style={{
        backgroundImage: `url(${frameImage})`,
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
                About Us
              </motion.h2>
              <br />
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
                className="text-lg text-white"
              >
               Providing professional mental health support and counseling services to help you live a balanced, fulfilling life.
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </div>
        {/* About Us Section */}
        <div className="flex flex-col sm:flex-col lg:flex-col xl:flex-row justify-between bg-[#FCF8F4] items-center p-8 sm:p-12 md:space-x-12 lg:px-32">
          <img
          src={Discover2}
            alt="About Us"
            className="w-full sm:w-1/2 object-cover rounded-lg mb-6 sm:mb-0"
          />
          <div className="flex-1 sm:max-w-1/2 text-left ">
            <h3 className="text-2xl sm:text-3xl text-black font-bold mb-4">About Us</h3>
            <h1 className="text-[54px] sm:text-5xl md:text-6xl font-[700px] text-black mb-5  tracking-[0%] font-manrope ">
              Discover the Faces Behind Our Mental Health Consultancy
            </h1>
            <p className="text-lg sm:text-xl text-black mb-14 font-poppins ">
              Our mental health consultancy brings together experienced professionals dedicated to your well-being. We believe in creating a supportive environment where you can explore, heal, and grow.
            </p>
           
          </div>
        </div>

        {/* Features Section */}
        <Features
          heading={sectionData.heading}
          title={sectionData.title}
          description={sectionData.description}
          features={sectionData.features}
        />

        {/* Image Section */}
        <div className="w-full h-auto flex justify-center items-center  ">
          <img
            src={aboutSelf}
            alt="Additional Image"
            className="w-full sm:w-full md:w-full lg:w-full h-auto"
          />
        </div>

   {/* Success Story Section */}
<div className="flex flex-col sm:flex-col lg:flex-col xl:flex-row justify-between items-center p-10 bg-[#FCF8F4] rounded-lg">
  <div className="flex-1 sm:max-w-full lg:max-w-1/2 p-5 flex flex-col justify-center">
  <h3 className="text-[22px] pb-8 font-[700px]">Succes Story</h3>
    <h1 className="text-[54px] sm:text-4xl lg:text-5xl font-[700px] text-black pb-10   ">
      Breaking the Stigma - The Success Story of a Mental Health Consultant
    </h1>

    <ul className="text-lg sm:text-lg text-black  font-poppins">
      <li className="flex items-start  ">
        <img src={arrowAbout} className="mr-2 " alt="Arrow" />
        Transformed anxiety into personal growth through cognitive behavioral therapy.
      </li>
      <li className="flex items-start  ">
        <img src={arrowAbout}  className="mr-2" alt="Arrow" />
        Developed effective stress management techniques for work-life balance.
      </li>
      <li className="flex items-start ">
        <img src={arrowAbout}  className="mr-2" alt="Arrow" />
        Built lasting relationships with clients through trust and understanding.
      </li>
      <li className="flex items-start  ">
        <img src={arrowAbout}  className="mr-2" alt="Arrow" />
        Achieved significant improvements in client mental wellness scores.
      </li>
    </ul>
  </div>

  <div className="flex-1 sm:max-w-full lg:max-w-full p-5">
    <img
      src={aboutSucces2}
      alt="Success Story"
      className="w-full sm:w-full  lg:w-full h-auto rounded-lg"
    />
  </div>
</div>

      </div>
    </div>
  );
};

export default About;
