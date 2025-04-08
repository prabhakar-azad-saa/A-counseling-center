import React from "react";

import Button from "./Button";
import Ready from "./Ready";
import { useNavigate } from "react-router-dom";
import frameImage from "../img/svgvieweroutput.png";
import Create from "../img/Create"
import Professional from "../img/Professional"
import BookSession from "../img/BookSession"
import Video from "../img/Video"
import Voicecall from "../img/Voicecall"
import Chat from "../img/Chat"
import Chatts from "../img/Chatts";
import { motion } from "framer-motion";

const Session = () => {
  const navigate = useNavigate();

  const handleclick = (sinn) => {
    navigate("/"+sinn);
  };

  return (
    <div className="bg-[#FCF8F4] max-w-[1500px] mx-auto">

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
                Professional Online Counseling Support
              </motion.h2>
              <br />
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
                className="text-lg text-white"
              >
               Connect with licensed therapists and counselors from the comfort of your home. Get the support you need, when you need it.
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </div>

      <div className="max-w-screen-xl mx-auto p-6">
        {/* Professional Counselor Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6 text-black p-20">
            Our Professional Counselor
          </h1>
          <div className="flex flex-col items-center bg-gradient-to-r from-[#007D6E] to-[#5EB47C] rounded-xl w-full max-w-md mx-auto p-6">
           <Professional className='mb-2'/>
            <h2 className="text-2xl font-semibold text-white">
              Dr. Altaf Khan
            </h2>
            <p className="text-lg text-white mb-6">Professional Counselor</p>
            <Button
              onClick={() => handleclick ("booksession")}
              className="bg-[#EC744A] text-white py-3 px-6 rounded-full"
            >
              Book Session
            </Button>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="">
          <h1 className="text-3xl font-semibold text-center mb-8">
            How it Works
          </h1>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex flex-col items-center   p-6 max-w-xs sm:max-w-sm lg:max-w-xs"  onClick={() => handleclick ("signup")}>
            <Create  className="w-16 h-16 mb-4"/>
              <h2 className="text-lg font-semibold mb-2">Create Account</h2>
              <p className="text-sm text-center text-gray-600 font-poppins">
                Schedule an appointment at your preferred time with our easy
                booking system.
              </p>
            </div>
            <div
              className="flex flex-col items-center  p-6 max-w-xs sm:max-w-sm lg:max-w-xs"
              onClick={() => handleclick ("booksession")}
            >
             <BookSession   className="w-16 h-16 mb-4"/>
              <h2 className="text-lg font-semibold mb-2">Book Session</h2>
              <p className="text-sm text-center text-gray-600 font-poppins">
                Schedule an appointment at your preferred time with our easy
                booking system.
              </p>
            </div>
            <div className="flex flex-col items-center  p-6 max-w-xs sm:max-w-sm lg:max-w-xs">
             <Video  className="w-16 h-16 mb-4"/>
              <h2 className="text-lg font-semibold mb-2">Start Session</h2>
              <p className="text-sm text-center text-gray-600 font-poppins">
                Start your session at the scheduled time and enjoy a seamless
                experience.
              </p>
            </div>
          </div>
        </div>


       <div className=" justify-center  p-8 sm:p-16 lg:p-20">
       <h1 className="text-3xl sm:text-4xl font-bold mb-10 text-center text-black">
        Communication Options
          </h1>
        <div className="flex flex-wrap justify-center gap-8">
       
          {/* Video Call */}
          <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-lg w-full sm:max-w-xs lg:w-1/3">
          <Video  className="w-16 h-16 mb-4"/>
            <h1 className="text-xl font-semibold mb-2">Video Call</h1>
            <p className="text-sm text-center text-gray-600 mb-4 font-poppins">
              Face-to-face online sessions with your Counselor. Voice-only
              sessions for more privacy.
            </p>
            <Button  onClick={() => handleclick ("zoomMeeting")} className="bg-[#EC744A] text-white py-3 px-6 sm:py-3 sm:px-8 md:py-4 md:px-10 text-sm sm:text-base md:text-lg rounded-full w-full sm:w-auto">
              Choose Video Call
            </Button>
          </div>

          {/* Phone Call */}
          <div className="flex flex-col items-center bg-gradient-to-r from-[#007D6E] to-[#5EB47C] p-6 rounded-xl shadow-lg w-full sm:max-w-xs lg:w-1/3 relative">
           <Voicecall  className="w-16 h-16 mb-4"/>
            <h1 className="text-xl font-semibold text-white mb-2">
              Phone Call
            </h1>
            <p className="text-sm pb-8 text-center text-white mb-4 font-poppins">
              Voice-only sessions for more privacy
            </p>
            <Button className="bg-[#EC744A] text-white py-3 px-6 sm:py-3 sm:px-8 md:py-4 md:px-10 text-sm sm:text-base md:text-lg rounded-full w-full sm:w-auto">
              Choose Phone Call
            </Button>
          </div>

          {/* Chat Support */}
          <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-lg w-full sm:max-w-xs lg:w-1/3">
           <Chatts  className="w-16 h-16 mb-4"/>
            <h1 className="text-xl font-semibold mb-2">Chat Support</h1>
            <p className="text-sm pb-5 text-center text-gray-600 mb-4 font-poppins">
              Text-based counseling with quick responses
            </p>
            <Button className="bg-[#EC744A] text-white py-3 px-6 sm:py-3 sm:px-8 md:py-4 md:px-10 text-sm sm:text-base md:text-lg rounded-full w-full sm:w-auto">
              Choose Chat
            </Button>
          </div>
        </div>
      </div>
       </div>

      <Ready />
    </div>
  );
};

export default Session;
