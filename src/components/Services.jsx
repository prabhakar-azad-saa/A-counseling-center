import React, { useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
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
  const { state } = useLocation();

  const individualRef = useRef(null);
  const relationshipRef = useRef(null);
  const familyRef = useRef(null);
  const specializedRef = useRef(null);
  const careerRef = useRef(null);
  const onlineRef = useRef(null);

  const scrollToSection = (slug) => {
    const refs = {
      individual: individualRef,
      relationship: relationshipRef,
      family: familyRef,
      specialized: specializedRef,
      career: careerRef,
      online: onlineRef,
    };
    const ref = refs[slug];
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    if (state?.slug) {
      scrollToSection(state.slug);
    }
  }, [state]);

  const therapyData = [
    {
      ref: individualRef,
      component: <Individual22 />,
      title: "Individual Therapy",
      slug: "individual",
      description:
        "Anxiety & Stress Management, Depression & Mood Disorders, Trauma & PTSD Counseling, Anger Management, Self-Esteem & Confidence Building.",
    },
    {
      ref: relationshipRef,
      component: <Relationship />,
      title: "Relationship Therapy",
      slug: "relationship",
      description:
        "Marriage & Pre-Marital Counseling, Relationship Conflicts & Communication Issues, Divorce & Separation Support, Infidelity Recovery, Relationship and Emotional Well-being.",
    },
    {
      ref: familyRef,
      component: <Famil />,
      title: "Family Counseling",
      slug: "family",
      description:
        "Parenting Challenges, Teen Counseling, Family Conflict Resolution, Behavioral Issues in Children.",
    },
    {
      ref: specializedRef,
      component: <Leaf />,
      title: "Specialized Therapy",
      slug: "specialized",
      description:
        "Cognitive Behavioral Therapy (CBT), Mindfulness-Based Therapy, Psychodynamic Therapy, ADHD, Rational Emotive Behavior Therapy (REBT), Acceptance Therapies (ACT), Autism.",
    },
    {
      ref: careerRef,
      component: <Carrier />,
      title: "Career Coaching",
      slug: "career",
      description:
        "Career Guidance & Decision-Making, Work-Life Balance, Motivation & Personal Development, Aptitude, Attitude, Interest, Achievement Test & Projective Test, Specific Learning Disability.",
    },
    {
      ref: onlineRef,
      component: <Chat />,
      title: "Online Sessions",
      slug: "online",
      description:
        "Convenient and secure virtual therapy sessions from the comfort of your home, maintaining the same quality care.",
    },
  ];

  const handleButtonClick = (e) => {
    e.stopPropagation();
    navigate("/booksession");
  };

  return (
    <div className="bg-[#FCF8F4] mb-10">
     
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
            <div className="flex flex-row ml-8 items-center md:justify-start space-x-6 sm:space-x-8">
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
      {/* Hero + Section */}
      {/* (Keep your original code here for the hero section) */}

      <div className="space-y-16 pt-32 px-4 sm:px-10 lg:px-32 max-w-screen-xl mx-auto">
        {therapyData.map((item, index) => (
          <div
            key={index}
            ref={item.ref}
            className={`flex flex-col md:flex-row items-center py-10 px-4 sm:px-8 md:px-12 lg:px-20 
              ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}
              bg-gray-100 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300`}
          >
            <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
              {item.component}
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left p-4 sm:p-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 leading-snug">
                {item.title}
              </h2>
              <p className="text-md sm:text-lg text-gray-600 mt-4 leading-relaxed font-poppins">
                {item.description}
              </p>
              <button
                onClick={handleButtonClick}
                className="mt-6 px-4 py-2 bg-[#007D6E] text-white rounded-lg hover:bg-[#005f5b] transition duration-300"
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>

      <Ready />
    </div>
  );
};

export default Services;
