import React from "react";
import { useNavigate } from "react-router-dom";
import Ready from "./Ready";
import frameImage from "../img/svgvieweroutput.png";
import Individual22 from "../img/Individual22";
import Relationship from "../img/Relationship";
import Famil from "../img/Famil";
import Leaf from "../img/Leaf";
import Carrier from "../img/Carrier";
import Chat from "../img/Chat"
import Needing from "../img/Needing";
import { motion } from "framer-motion";

const Services = () => {
  const navigate = useNavigate();

  const handleClick = (pagename) => {
    navigate("/" + pagename);
  };

  const therapyData = [
    {
      component: <Individual22 />,
      title: "Individual Therapy",
      description: "Anxiety & Stress Management, Depression & Mood Disorders, Trauma & PTSD Counseling, Anger Management, Self-Esteem & Confidence Building.",
      onClick:() => handleClick("individual"),
    },
    {
      component: <Relationship />,
      title: "Relationship Therapy",
      description: "Marriage & Pre-Marital Counseling, Relationship Conflicts & Communication Issues, Divorce & Separation Support, Infidelity Recovery, Relationship and Emotional Well-being.",
    },
    {
      component: <Famil />,
      title: "Family Counseling",
      description: "Parenting Challenges, Teen Counseling, Family Conflict Resolution, Behavioral Issues in Children.",
    },
    {
      component: <Leaf />,
      title: "Specialized Therapy",
      description: "Cognitive Behavioral Therapy (CBT), Mindfulness-Based Therapy, Psychodynamic Therapy, ADHD, Rational Emotive Behavior Therapy (REBT), Acceptance Therapies (ACT), Autism.",
    },
    {
      component: <Carrier />,
      title: "Career Coaching",
      description: "Career Guidance & Decision-Making, Work-Life Balance, Motivation & Personal Development, Aptitude, Attitude, Interest, Achievement Test & Projective Test, Specific Learning Disability.",
    },
    {
      component: <Chat />,
      title: "Online Sessions",
      description: "Convenient and secure virtual therapy sessions from the comfort of your home, maintaining the same quality care.",
      onClick:() => handleClick("onlinecounseling"),
    },
  ];
  return (
    <div className="bg-[#FCF8F4] ">
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
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5">
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
                Services
              </motion.h2>
              <br />
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
                className="text-lg text-white"
              >
             At   A<sup>+</sup> Counseling & Consultancy Services, we offer a wide range of counseling services tailored to meet the diverse needs of individuals, couples, and families. Our approach integrates evidence-based techniques with compassionate care to help you navigate life’s challenges.
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </div>
<div className="p-6 text-center pt-24 sm:pt-32 px-4 sm:px-10 lg:px-32 max-w-screen-xl mx-auto">
  <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
    Empowering Minds: Our Mental Health Consulting Services
  </h1>

  <div className="space-y-16">
    {therapyData.map((item, index) => (
      <div
        key={index}
        className={`flex flex-col md:flex-row items-center py-10 px-4 sm:px-8 md:px-12 lg:px-20 
        ${index % 2 !== 0 ? "md:flex-row-reverse" : ""} bg-gray-100 rounded-lg shadow-lg`}
        onClick={item.onClick}
      >
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          {item.component}
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 leading-snug">
            {item.title}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 mt-4 font-poppins leading-relaxed">
            {item.description}
          </p>
        </div>
      </div>
    ))}
  </div>
</div>



    

      {/* <div className="p-6 text-center px-4 pt-32 sm:px-10 lg:px-[162px]">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
          Empowering Minds Our Mental Health Consulting Services
        </h1>
        <div
          className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6  justify-center mt-8 p-6 sm:p-10 lg:p-20"
          style={{}}
        >
          {/* Individual Therapy */}

{/*         
          <div
            className="bg-gradient-to-r from-[#007D6E] to-[#5EB47C] p-6 rounded-3xl text-center py-12 sm:py-20 cursor-pointer hover:scale-105 transition-transform duration-300"
            onClick={() => handleClick("individual")}
          > */}
          
            {/* <Individual22 className="w-1/5 sm:w-1/4 lg:w-1/5 h-auto rounded-md mb-4 mx-auto"/>
            <h2 className="text-2xl sm:text-[35px] mb-2 text-white">
              Individual Therapy
            </h2>
            <p className="text-base sm:text-[18px] text-white font-poppins">
              Anxiety & Stress Management, Depression & Mood Disorders, Trauma &
              PTSD Counseling, Anger Management, Self-Esteem & Confidence
              Building.
            </p>
          </div> */}

          {/* Relationship Therapy */}
          {/* <div className="bg-white p-6 rounded-3xl text-center py-12 sm:py-20 cursor-pointer hover:scale-105 transition-transform duration-300">
          
            <Relationship   className="w-1/5 sm:w-1/4 lg:w-1/5 h-auto rounded-md mb-4 mx-auto"/>
            <h2 className="text-[28px] sm:text-[35px] mb-2 text-gray-900">
              Relationship Therapy
            </h2>
            <p className="text-[16px] sm:text-[18px] text-gray-900 font-poppins">
              Marriage & Pre-Marital Counseling, Relationship Conflicts &
              Communication Issues, Divorce & Separation Support, Infidelity
              Recovery, Relationship and Emotional.
            </p>
          </div> */}

          {/* Family Counseling */}
          {/* <div className="bg-white p-6 rounded-3xl text-center py-12 sm:py-20 cursor-pointer hover:scale-105 transition-transform duration-300">
           
            <Famil  className="w-1/5 sm:w-1/4 lg:w-1/5 h-auto rounded-md mb-4 mx-auto"/>
            <h2 className="text-[28px] sm:text-[35px] mb-2 text-gray-900">
              Family Counseling
            </h2>
            <p className="text-[16px] sm:text-[18px] text-gray-900 font-poppins">
              Parenting Challenges, Teen Counseling, Family Conflict Resolution,
              Behavioral Issues in Children.
            </p>
          </div> */}

          {/* Specialized Therapy */}
          {/* <div className="bg-gradient-to-r from-[#007D6E] to-[#5EB47C] p-6 rounded-3xl text-center py-12 sm:py-20 cursor-pointer hover:scale-105 transition-transform duration-300">
           
            <Leaf  className="w-1/5 sm:w-1/4 lg:w-1/5 h-auto rounded-md mb-4 mx-auto"/>
            <h2 className="text-[28px] sm:text-[35px] mb-2 text-white">
              Specialized Therapy
            </h2>
            <p className="text-[16px] sm:text-[18px] text-white font-poppins">
              Cognitive Behavioral Therapy (CBT), Mindfulness-Based Therapy,
              Psychodynamic Therapy, ADHD, Rational Emotive Behavior Therapy (REBT),
             Acceptance Therapies (ACT), Autism
              .
            </p>
          </div> */}

          {/* Career Coaching */}
          {/* <div className="bg-gradient-to-r from-[#007D6E] to-[#5EB47C] p-6 rounded-3xl text-center py-12 sm:py-20 cursor-pointer hover:scale-105 transition-transform duration-300">
           
            <Carrier  className="w-1/5 sm:w-1/4 lg:w-1/5 h-auto rounded-md mb-4 mx-auto"/>
            <h2 className="text-[28px] sm:text-[35px] mb-2 text-white">
              Career Coaching
            </h2>
            <p className="text-[16px] sm:text-[18px] text-white font-poppins">
              Career Guidance & Decision-Making, Work-Life Balance, Motivation &
              Personal Development, Aptitude Attitude, Interest, Achieveme nt Test & Projective Test,Specific Learning Disability
              .
            </p>
          </div> */}

          {/* Online Sessions */}
          {/* <div
            className="bg-white p-6 rounded-3xl text-center py-12 sm:py-20 cursor-pointer hover:scale-105 transition-transform duration-300"
            onClick={() => handleClick("onlinecounseling")}
          >
          
            <Chat  className="w-1/5 sm:w-1/4 lg:w-1/5 h-auto rounded-md mb-4 mx-auto"/>
            <h2 className="text-[28px] sm:text-[35px] mb-2 text-gray-900">
              Online Sessions
            </h2>
            <p className="text-[16px] sm:text-[18px] text-gray-900 font-poppins">
              Convenient and secure virtual therapy sessions from the comfort of
              your home, maintaining the same quality care.
            </p>
          </div>
        </div>
      </div> */} 

      <Ready />
    </div>
  );
};

export default Services;
