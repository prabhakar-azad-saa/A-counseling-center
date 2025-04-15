import React from "react";
import { useNavigate } from "react-router-dom";
import Ready from "./Ready";
import frameImage from "../img/svgvieweroutput.png";
import Individual22 from "../img/Individual22";
import Relationship from "../img/Relationship";
import Famil from "../img/Famil";
import Leaf from "../img/Leaf";
import Carrier from "../img/Carrier";
import Chat from "../img/Chat";
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
      description:
        "Anxiety & Stress Management, Depression & Mood Disorders, Trauma & PTSD Counseling, Anger Management, Self-Esteem & Confidence Building.",
      onClick: () => handleClick("individual"),
    },
    {
      component: <Relationship />,
      title: "Relationship Therapy",
      description:
        "Marriage & Pre-Marital Counseling, Relationship Conflicts & Communication Issues, Divorce & Separation Support, Infidelity Recovery, Relationship and Emotional Well-being.",
    },
    {
      component: <Famil />,
      title: "Family Counseling",
      description:
        "Parenting Challenges, Teen Counseling, Family Conflict Resolution, Behavioral Issues in Children.",
    },
    {
      component: <Leaf />,
      title: "Specialized Therapy",
      description:
        "Cognitive Behavioral Therapy (CBT), Mindfulness-Based Therapy, Psychodynamic Therapy, ADHD, Rational Emotive Behavior Therapy (REBT), Acceptance Therapies (ACT), Autism.",
    },
    {
      component: <Carrier />,
      title: "Career Coaching",
      description:
        "Career Guidance & Decision-Making, Work-Life Balance, Motivation & Personal Development, Aptitude, Attitude, Interest, Achievement Test & Projective Test, Specific Learning Disability.",
    },
    {
      component: <Chat />,
      title: "Online Sessions",
      description:
        "Convenient and secure virtual therapy sessions from the comfort of your home, maintaining the same quality care.",
      onClick: () => handleClick("onlinecounseling"),
    },
  ];

  return (
    <div className="bg-[#FCF8F4]">
      {/* Hero Section */}
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
             <div className="relative z-10 w-full max-w-[2300px] mx-auto px-4 sm:px-6 lg:px-12">
               <div className="grid mt-12 grid-cols-1 items-center gap-1 min-h-[500px]">
                 <div className="flex flex-row ml-4 sm:ml-8 items-center md:justify-start space-x-6 sm:space-x-8">
                   <div className="h-40 sm:h-60 border-l-2 border-white"></div>
                   <div className="flex flex-col text-center md:text-left">
                     <motion.h2
                       initial={{ opacity: 0, y: -20 }}
                       animate={{ opacity: 1, y: 0 }}
                       transition={{ duration: 0.6, type: "spring" }}
                       className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
                     >
                  Services
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
                  className="text-base sm:text-lg md:text-xl text-white"
                >
                  At A<sup>+</sup> Counseling & Consultancy Services, we offer a
                  wide range of counseling services tailored to meet the diverse
                  needs of individuals, couples, and families.
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="p-6 pt-24 sm:pt-32 px-4 sm:px-10 lg:px-32 max-w-screen-xl mx-auto">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-10 text-center leading-tight">
          Empowering Minds: Our Mental Health Consulting Services
        </h1>

        <div className="space-y-16">
          {therapyData.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center py-10 px-4 sm:px-8 md:px-12 lg:px-20 
                ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}
                bg-gray-100 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer`}
              onClick={item.onClick}
            >
              {/* Image Section */}
              <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
                {item.component}
              </div>

              {/* Text Section */}
              <div className="w-full md:w-1/2 text-center md:text-left p-4 sm:p-6">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 leading-snug">
                  {item.title}
                </h2>
                <p className="text-md sm:text-lg text-gray-600 mt-4 leading-relaxed font-poppins">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Ready CTA Section */}
      <Ready />
    </div>
  );
};

export default Services;
