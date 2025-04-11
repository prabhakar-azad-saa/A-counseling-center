import React from "react";
import frameImage from "../img/svgvieweroutput.png";
import individual1 from "../img/individual1.png";
import individual2 from "../img/individual2.png";
import individual3 from "../img/individual3.png";
import Psychoanalytic from "../img/Psychoanalytic";
import Mind from "../img/Mind";
import Cognitive from "../img/Cognitive";
import Human from "../img/Human";
import Professionall from "../img/Professionall";
import Reduce from "../img/Reduce";
import { motion } from "framer-motion";
const Individualsection = () => {
  const Cartdata = [
    {
      imgSrc: <Psychoanalytic />,
      title: "Psychoanalytic Therapy",
      description:
        "Explore deep-seated patterns and unconscious influences to gain profound self-understanding and emotional healing.",
    },
    {
      imgSrc: <Mind />,
      title: "Mindfulness Based Therapy",
      description:
        "Learn practical techniques to stay present, manage stress, and develop greater emotional awareness.",
    },
    {
      imgSrc: <Cognitive />,
      title: "Cognitive Behavioral Therapy",
      description:
        "Identify and transform challenging thought patterns to improve emotional well-being and daily functioning.",
    },
    {
      imgSrc: <Human />,
      title: "Humanistic Therapy",
      description:
        "Discover your inner potential through person-centered approaches that emphasize self-growth and awareness.",
    },
  ];

  return (
    <div className=" ">
      {/* Navigation Section */}
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
        <div className="relative z-10 w-full px-5">
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
                  Services Detail
                </motion.h2>
                <br />
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
                  className="text-lg text-white"
                >
                  At A<sup>+</sup> Counseling & Consultancy Services, we offer a
                  wide range of counseling services tailored to meet the diverse
                  needs of individuals, couples, and families. Our approach
                  integrates evidence-based techniques with compassionate care
                  to help you navigate life’s challenges.
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-5 bg-[#FCF8F4]">
        {/* Individual Therapy Section */}
        <div className="flex flex-wrap gap-5 px-4 sm:px-32 mt-24 mb-10">
          <div className="w-full">
            <img
              // src="src/assets/Mask group.png"
              src={individual1}
              alt="Individual Therapy"
              className="w-full rounded-lg"
              style={{ width: "100%", height: "100%", objectFit: "none" }}
            />
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center py-20 sm:py-0">
            <div className="w-full sm:w-1/2">
              <h1 className="text-4xl sm:text-5xl font-bold mb-5">
                Individual Therapy
              </h1>
            </div>
            <div className="w-full sm:w-1/2">
              <p className="text-lg font-poppins mb-4">
                Our individual therapy sessions provide a safe, confidential
                space for personal growth and healing. We work together to
                address your specific concerns and develop effective coping
                strategies.
              </p>
              <p className="text-lg font-poppins">
                Through personalized treatment plans and evidence-based
                approaches, we help you achieve meaningful progress in your
                mental health journey.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-10 text-center py-12 sm:py-16 px-4 sm:px-32">
          <h1 className="text-3xl sm:text-4xl font-semibold mb-8">
            Individual Therapy Method
          </h1>
          {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 justify-center mt-8 p-10">
           
            <div className="bg-gradient-to-r from-teal-700 to-teal-400 p-6 rounded-3xl text-center py-12 sm:py-20 cursor-pointer hover:scale-105 transition-transform duration-300">
            
              <Psychoanalytic   className="w-24 h-24 mx-auto mb-4"/>
              <h2 className="text-[28px] sm:text-[35px] mb-2 text-white">
                Psychoanalytic Therapy
              </h2>
              <p className="text-[16px] sm:text-[18px] text-white font-poppins">
                Explore deep-seated patterns and unconscious influences to gain
                profound self-understanding and emotional healing.
              </p>
            </div>

          

            <div className="bg-white p-6 rounded-3xl text-center py-12 sm:py-20 cursor-pointer hover:scale-105 transition-transform duration-300">
             
              <Mind  className="w-24 h-24 mx-auto mb-4"/>
              <h2 className="text-[28px] sm:text-[35px] mb-2 text-gray-900">
                Mindfulness Based Therapy
              </h2>
              <p className="text-[16px] sm:text-[18px] text-gray-900 font-poppins">
                Learn practical techniques to stay present, manage stress, and
                develop greater emotional awareness.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl text-center py-12 sm:py-20 cursor-pointer hover:scale-105 transition-transform duration-300">
            
              <Cognitive  className="w-24 h-24 mx-auto mb-4"/>
              <h2 className="text-[28px] sm:text-[35px] mb-2 text-gray-900">
                Cognitive Behavioral Therapy
              </h2>
              <p className="text-[16px] sm:text-[18px] text-gray-900 font-poppins">
                Identify and transform challenging thought patterns to improve
                emotional well-being and daily functioning.
              </p>
            </div>

           
            <div className="bg-gradient-to-r from-teal-700 to-teal-400 p-6 rounded-3xl text-center py-12 sm:py-20 cursor-pointer hover:scale-105 transition-transform duration-300">
             
              <Human className="w-24 h-24 mx-auto mb-4"/>
              <h2 className="text-[28px] sm:text-[35px] mb-2 text-white">
                Humanistic Therapy
              </h2>
              <p className="text-[16px] sm:text-[18px] text-white font-poppins">
                Discover your inner potential through person-centered approaches
                that emphasize self-growth and awareness.
              </p>
            </div>
          </div> */}

          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 py-10 px-2 md:px-6 gap-3 2xl:px-56 ">
            {Cartdata.map((item, index) => {
              const isGradient = index % 3 === 0;

              return (
                <div
                  key={index}
                  className={`${
                    isGradient
                      ? "bg-gradient-to-r from-[#007D6E] to-[#5EB47C]"
                      : "bg-white"
                  } 
          rounded-3xl  flex justify-center overflow-hidden`}
                >
                  <div className="flex flex-col items-center rounded-2xl p-4 sm:p-20 w-full max-w-lg">
                    <div className="w-28 h-28 sm:w-32 sm:h-32 flex justify-center pb-6">
                      {item.imgSrc}
                    </div>

                    {/* Title */}
                    <h1
                      className={`text-xl md:text-2xl lg:text-4xl  pt-12 px-12 pb-3 font-bold 
            ${isGradient ? "text-white" : "text-black"}`}
                    >
                      {item.title}
                    </h1>

                    {/* Description */}
                    <p
                      className={`text-base sm:text-lg pb-4 
            ${isGradient ? "text-white" : "text-black"}`}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* Mentor Section */}
        <div>
          {/* Image Container */}

          {/* Text Container */}
          {/* <div className="flex justify-end w-full pl-0 sm:pl-96 relative z-20">
    <div className="text-white flex flex-col items-center sm:items-start sm:w-3/4 p-6">
      <h3 className="text-2xl mb-3">Mentor</h3>
      <h1 className="text-3xl sm:text-4xl font-bold mb-4">
        Introduction to Experienced Consulting
      </h1>

      <div className="w-full sm:w-3/4 mb-8">
        {/* Professional Growth Section */}
          {/* <div className="w-full flex mb-8 sm:mb-4 p-3 rounded-xl">
          <Professionall />
          <div className="pl-5 flex flex-col justify-center">
            <h2 className="text-xl font-semibold mb-3">Professional Growth</h2>
            <p className="text-sm font-poppins">
              Enhance your personal and professional development through expert
              guidance.
            </p>
          </div>
        </div> */}

          {/* Reduced Burnout Section */}
          {/* <div className="w-full flex p-3 mb-8 rounded-xl">
          <Reduce />
          <div className="pl-5 flex flex-col justify-center">
            <h2 className="text-xl font-semibold mb-3">Reduced Burnout</h2>
            <p className="text-sm font-poppins">
              Learn effective stress management techniques to maintain work-life
              balance and emotional well-being.
            </p>
          </div>
        </div>
      </div>
    </div> */}
          {/* </div> */}

          <div
            className="flex items-center justify-center min-h-screen bg-cover bg-center px-4 py-8"
            style={{ backgroundImage: `url(${frameImage})` }}
          >
            <div className="max-w-5xl w-full bg-opacity-80 rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-2xl">
              {/* Left Side with Image */}
              <div className="w-full md:w-1/2 relative">
                <img
                  src={individual2}
                  alt="Section"
                  className="w-full h-full object-cover rounded-t-3xl md:rounded-l-3xl md:rounded-t-none"
                />
              </div>

              {/* Right Side */}
              <div className="w-full md:w-1/2 p-8 md:p-12 text-white relative flex flex-col justify-center">
                <p className="text-lg uppercase font-semibold text-gray-200 mb-2">
                  Mentor
                </p>
                <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                  Introducing Experienced Consulting
                </h1>

                {/* Features */}
                <div className="mt-8">
                  <div className="flex items-start space-x-6 mb-8">
                    <span className="text-4xl text-green-400">🌱</span>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Professional Growth
                      </h3>
                      <p className="text-gray-300 text-lg leading-relaxed">
                        Enhance your personal and professional development
                        through expert guidance and support.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6">
                    <span className="text-4xl text-purple-400">🧘</span>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Reduced Burnout
                      </h3>
                      <p className="text-gray-300 text-lg leading-relaxed">
                        Learn effective stress management techniques to maintain
                        work-life balance and emotional well-being.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Breaking the Stigma Section */}
        <div className="text-center p-10 mb-10 flex flex-col items-center mt-48">
          <img
            src={individual3}
            alt="Breaking the Stigma"
            className="w-full rounded-lg "
            style={{ maxWidth: "1200px" }}
          />
          <h1 className="text-4xl md:text-5xl font-bold mt-9 font-manrope">
            Breaking the Stigma Mental Health Counseling
          </h1>
          <p className="text-lg md:text-xl justify-center font-manrope pt-12 mb-4 mx-auto max-w-3xl">
            Join us in our mission to create an open dialogue about mental
            health and promote understanding and support in our community.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Individualsection;
