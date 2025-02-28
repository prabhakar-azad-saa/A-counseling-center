import React from 'react';
import { useNavigate } from 'react-router-dom';
import Ready from './Ready';
import frameImage from "../../src/assets/svgvieweroutput.png";

const Services = () => {
  const navigate = useNavigate();

  const handleClick = (pagename) => {
    navigate('/' + pagename);
  };

  return (
    <div className="bg-[#FCF8F4]">
      <nav
        className="flex w-full p-8 sm:p-16 lg:p-28 bg-cover"
        style={{ backgroundImage: `url(${frameImage})` }}
      >
        <div className="flex flex-col border-l-4 max-w-screen-2xl px-4 sm:px-8 lg:px-20">
          <h1 className="text-white text-[36px] sm:text-[48px] lg:text-[68px] font-semibold p-4">
            Services
          </h1>
          <p className="text-white text-sm sm:text-lg font-semibold p-4 font-poppins">
            At A+ Counseling Center, we offer a wide range of counseling services tailored to meet the diverse needs of individuals, couples,
            and families. Our approach integrates evidence-based techniques with compassionate care to help you navigate life's 
            challenges.
          </p>
        </div>
      </nav>

      <div className="p-6 text-center px-4 sm:px-10 lg:px-[162px]">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
          Empowering Minds: Our Mental Health Consulting Services
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6  justify-center mt-8 p-6 sm:p-10 lg:p-20"style={{}}>
          {/* Individual Therapy */}
        <div
  className="bg-gradient-to-r from-[#007D6E] to-[#2F4B4E] p-6 rounded-3xl text-center py-12 sm:py-20 cursor-pointer hover:scale-105 transition-transform duration-300"
  onClick={() => handleClick('individual')}
>
            <img
              src="src/assets/Indivisual.png"
              alt="Individual Therapy"
              className="w-1/5 sm:w-1/4 lg:w-1/5 h-auto rounded-md mb-4 mx-auto"
            />
            <h2 className="text-2xl sm:text-[35px] mb-2 text-white">Individual Therapy</h2>
            <p className="text-base sm:text-[18px] text-white font-poppins">
              Anxiety & Stress Management, Depression & Mood Disorders, Trauma & PTSD Counseling, Anger Management, Self-Esteem & Confidence Building.
            </p>
          </div>

          {/* Relationship Therapy */}
          <div
            className="bg-white p-6 rounded-3xl text-center py-12 sm:py-20 cursor-pointer hover:scale-105 transition-transform duration-300"
            onClick={() => handleClick('blogs')}
          >
            <img
              src="src/assets/relationship.png"
              alt="Relationship Therapy"
              className="w-1/5 sm:w-1/4 lg:w-1/5 h-auto rounded-md mb-4 mx-auto"
            />
            <h2 className="text-[28px] sm:text-[35px] mb-2 text-gray-900">Relationship Therapy</h2>
            <p className="text-[16px] sm:text-[18px] text-gray-900 font-poppins">
              Marriage & Pre-Marital Counseling, Relationship Conflicts & Communication Issues, Divorce & Separation Support, Infidelity Recovery.
            </p>
          </div>

          {/* Family Counseling */}
          <div
            className="bg-white p-6 rounded-3xl text-center py-12 sm:py-20 cursor-pointer hover:scale-105 transition-transform duration-300"
            onClick={() => handleClick('blogdetail')}
          >
            <img
              src="src/assets/family.png"
              alt="Family Counseling"
              className="w-1/5 sm:w-1/4 lg:w-1/5 h-auto rounded-md mb-4 mx-auto"
            />
            <h2 className="text-[28px] sm:text-[35px] mb-2 text-gray-900">Family Counseling</h2>
            <p className="text-[16px] sm:text-[18px] text-gray-900 font-poppins">
              Parenting Challenges, Teen Counseling, Family Conflict Resolution, Behavioral Issues in Children.
            </p>
          </div>

          {/* Specialized Therapy */}
          <div
            className="bg-gradient-to-r from-teal-700 to-teal-400 p-6 rounded-3xl text-center py-12 sm:py-20 cursor-pointer hover:scale-105 transition-transform duration-300"
            onClick={() => handleClick('pyment')}
          >
            <img
              src="src/assets/Specialize.png"
              alt="Specialized Therapy"
              className="w-1/5 sm:w-1/4 lg:w-1/5 h-auto rounded-md mb-4 mx-auto"
            />
            <h2 className="text-[28px] sm:text-[35px] mb-2 text-white">Specialized Therapy</h2>
            <p className="text-[16px] sm:text-[18px] text-white font-poppins">
              Cognitive Behavioral Therapy (CBT), Mindfulness-Based Therapy, Psychodynamic Therapy.
            </p>
          </div>

          {/* Career Coaching */}
          <div
            className="bg-gradient-to-r from-teal-700 to-teal-400 p-6 rounded-3xl text-center py-12 sm:py-20 cursor-pointer hover:scale-105 transition-transform duration-300"
            onClick={() => handleClick('upipayment')}
          >
            <img
              src="src/assets/carrier.png"
              alt="Career Coaching"
              className="w-1/5 sm:w-1/4 lg:w-1/5 h-auto rounded-md mb-4 mx-auto"
            />
            <h2 className="text-[28px] sm:text-[35px] mb-2 text-white">Career Coaching</h2>
            <p className="text-[16px] sm:text-[18px] text-white font-poppins">
              Career Guidance & Decision-Making, Work-Life Balance, Motivation & Personal Development.
            </p>
          </div>

          {/* Online Sessions */}
          <div
            className="bg-white p-6 rounded-3xl text-center py-12 sm:py-20 cursor-pointer hover:scale-105 transition-transform duration-300"
            onClick={() => handleClick('onlinecounseling')}
          >
            <img
              src="src/assets/online.png"
              alt="Online Sessions"
              className="w-1/5 sm:w-1/4 lg:w-1/5 h-auto rounded-md mb-4 mx-auto"
            />
            <h2 className="text-[28px] sm:text-[35px] mb-2 text-gray-900">Online Sessions</h2>
            <p className="text-[16px] sm:text-[18px] text-gray-900 font-poppins">
              Convenient and secure virtual therapy sessions from the comfort of your home, maintaining the same quality care.
            </p>
          </div>
        </div>
      </div>

      <Ready />
    </div>
  );
};

export default Services;
