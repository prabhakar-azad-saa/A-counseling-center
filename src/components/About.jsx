import React from "react";

import Features from "./Features";
import frameImage from "../img/svgvieweroutput.png";
import Holistic from "../img/Holistic.png";
import Experties from "../img/Experties.png";
import Accessibility from "../img/Accessibility.png";
// import Discover2 from "../img/Discover2.png";
import authenticgrouptherapymeeting from "../img/authenticgrouptherapymeeting.png";
import aboutSelf from "../img/aboutSelf.png";
import aboutSucces2 from "../img/aboutSucces2.png";
import arrowAbout from "../img/arrowAbout.png";

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
    <div>
      <div className="">
        {/* <div
          className="relative w-full h-[500px] overflow-hidden"
          style={{
            backgroundImage: `url(${frameImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 opacity-50"></div>
          <div className="relative z-10 w-full  max-w-[2300px] mx-auto  px-5">
            <div className="grid mt-12 grid-cols-1 md:grid-cols-1 items-center gap-1 min-h-[500px]">
              <div className="flex flex-row ml-8 items-center md:justify-start space-x-8">
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
                    Providing professional mental health support and counseling
                    services to help you live a balanced, fulfilling life.
                  </motion.p>
                </div>
              </div>
            </div>
          </div>
        </div> */}


        <div className="flex flex-col items-center justify-center pt-14 px-4">
              <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text mb-4"
              >
                 About Us
              </motion.h1>
        
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-base sm:text-lg md:text-base text-center text-gray-700 max-w-2xl"
              >
                 Providing professional mental health support and counseling
                 services to help you live a balanced, fulfilling life
              </motion.p>
        
              {/* Optional: Add a subtle glowing underline animation */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="h-1 w-24 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 mt-4 origin-left rounded-full"
              />
            </div>
        {/* About Us Section */}
        <div className="flex flex-col xl:flex-row justify-between items-center bg-[#FCF8F4] max-w-[2300px] mx-auto px-4 sm:px-6 lg:px-12  py-14 space-y-8 xl:space-y-0 xl:space-x-12">
  {/* Image Section */}
  <img
    src={authenticgrouptherapymeeting}
    alt="About Us"
    className="w-full xl:w-1/2 object-cover rounded-lg max-h-[500px] sm:max-h-none"
  />

  {/* Text Section */}
  <div className="flex-1 max-w-full xl:max-w-[50%] text-justify px-2 sm:px-0">
    <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
      About Us
    </h3>

    <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#E8774D]">
      Dr. Altaf A. Khan
    </h4>

    <p className="text-md sm:text-lg md:text-xl font-bold text-gray-700 font-manrope">
      Director
    </p>

    <p className="text-md sm:text-lg md:text-xl font-bold text-gray-700 mb-5 font-manrope">
      A Plus Counseling and Consultancy Services
    </p>

    <p className="text-sm sm:text-base  text-gray-700 mb-3 font-poppins">
      With a PhD and a strong academic foundation, I have a Diploma in Psychology and have had the privilege of working with several international organizations across the globe. My diverse professional experiences have deepened my understanding of the psychological challenges faced by individuals in today’s fast-paced world.
    </p>

    <p className="text-sm sm:text-base  text-gray-700 mb-3 font-poppins">
      Driven by a passion to support mental well-being, I founded A Plus Counseling and Consultancy Services with the aim of providing accessible and compassionate care to those in need. Our mission is to help ease the stress of daily life and guide individuals toward healthier, more balanced living.
    </p>

    <p className="text-sm sm:text-base  text-gray-700 mb-2 font-poppins">
      Modern society presents unique psychological challenges:
    </p>

    <ul className="list-disc pl-5 text-sm sm:text-base  text-gray-700 font-poppins mb-3">
      <li>Parents juggle professional responsibilities with the increasing demands of parenting.</li>
      <li>Children face academic pressures and the burden of performance.</li>
      <li>Peer influence and societal expectations significantly impact emotional health.</li>
      <li>Relationship dynamics are growing increasingly complex.</li>
    </ul>

    <p className="text-sm sm:text-base  text-gray-700 mb-3 font-poppins">
      At A Plus, we offer a supportive environment for individuals and families facing these and other challenges. Our user-friendly website makes it easy to book appointments—whether through our online portal, by phone, or via email.
    </p>

    <p className="text-sm sm:text-base  text-gray-700 font-poppins">
      We welcome your feedback and suggestions as we continuously strive to enhance our services.
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
        <div className="flex flex-col sm:flex-col lg:flex-col xl:flex-row justify-between  max-w-[2300px] mx-auto items-center p-10 bg-[#FCF8F4] rounded-lg">
          <div className="flex-1 sm:max-w-full lg:max-w-1/2  p-5 flex flex-col justify-center">
            <h3 className="text-[22px] pb-8 font-[700px]">Succes Story</h3>
            <h1 className="text-2xl sm:text-3xl lg:text-5xl font-[700px] text-black pb-10   ">
              Breaking the Stigma - The Success Story of a Mental Health
              Consultant
            </h1>

            <ul className="text-lg sm:text-lg text-black  font-poppins">
              <li className="flex items-start  ">
                <img src={arrowAbout} className="mr-2 " alt="Arrow" />
                Transformed anxiety into personal growth through cognitive
                behavioral therapy.
              </li>
              <li className="flex items-start  ">
                <img src={arrowAbout} className="mr-2" alt="Arrow" />
                Developed effective stress management techniques for work-life
                balance.
              </li>
              <li className="flex items-start ">
                <img src={arrowAbout} className="mr-2" alt="Arrow" />
                Built lasting relationships with clients through trust and
                understanding.
              </li>
              <li className="flex items-start  ">
                <img src={arrowAbout} className="mr-2" alt="Arrow" />
                Achieved significant improvements in client mental wellness
                scores.
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
