import React from "react";

import Features from "./Features";
import Button from "./Button";

import frameImage from "../img/svgvieweroutput.png";
import Holistic from "../img/Holistic.png"
import Experties from "../img/Experties.png"
import Accessibility from "../img/Accessibility.png"
import Discover from "../img/Discover.png"
import aboutSelf from "../img/aboutSelf.png"
import aboutSucces from "../img/aboutSucces.png"
import arrowAbout from "../img/arrowAbout.png"




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
      <div >
        <nav
          className="flex w-full p-8 sm:p-16 md:p-24 lg:p-28 bg-cover"
          style={{ backgroundImage: `url(${frameImage})` }}
        >
          <div className="flex  max-w-screen-2xl px-4 sm:px-8 md:px-16 lg:px-32 ">
          <div>
          <div className="border-l-4 h-64 p-5"></div>
          </div>
           <div> <h1 className="text-white  text-[68px] sm:text-5xl lg:text-[68px] font-extrabold p-4">
              About Us
            </h1>
            <p className="text-white text-lg sm:text-xl  p-4  font-poppins">
              Providing professional mental health support and counseling services to help you live a balanced, fulfilling life.
            </p></div>
          </div>
        </nav>

        {/* About Us Section */}
        <div className="flex flex-col sm:flex-col lg:flex-col xl:flex-row justify-between bg-[#FCF8F4] items-center p-8 sm:p-12 md:space-x-12 lg:px-32">
          <img
          src={Discover}
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
            <Button className="bg-[#EC744A] text-white py-3 px-6 rounded-full">
              See Detail
            </Button>
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
        <div className="w-full h-auto flex justify-center items-center ">
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
    <h1 className="text-[54px] sm:text-4xl lg:text-5xl font-[700px] text-black leading-tight  ">
      Breaking the Stigma - The Success Story of a Mental Health Consultant
    </h1>

    <ul className="text-lg sm:text-lg text-black mb-8 list-disc pl-6 font-poppins">
      <li className="flex items-start mb-2 pb-10 ">
        <img src={arrowAbout} className="mr-2 " alt="Arrow" />
        Transformed anxiety into personal growth through cognitive behavioral therapy.
      </li>
      <li className="flex items-start mb-2 py-10 ">
        <img src={arrowAbout}  className="mr-2" alt="Arrow" />
        Developed effective stress management techniques for work-life balance.
      </li>
      <li className="flex items-start mb-2 py-10 w-">
        <img src={arrowAbout}  className="mr-2" alt="Arrow" />
        Built lasting relationships with clients through trust and understanding.
      </li>
      <li className="flex items-start mb-2 py-12 ">
        <img src={arrowAbout}  className="mr-2" alt="Arrow" />
        Achieved significant improvements in client mental wellness scores.
      </li>
    </ul>
  </div>

  <div className="flex-1 sm:max-w-full lg:max-w-full p-5">
    <img
      src={aboutSucces}
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
