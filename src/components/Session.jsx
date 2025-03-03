import React from "react";
import Button from "./Button";
import Ready from "./Ready";
import { useNavigate } from "react-router-dom";
import frameImage from "../../src/assets/svgvieweroutput.png";

const Session = () => {
  const navigate = useNavigate();

  const handleclick = () => {
    navigate("/booksession");
  };

  return (
    <div className="bg-[#FCF8F4]">
      <nav
        className="flex w-full p-8 sm:p-16 lg:p-28 bg-cover"
        style={{ backgroundImage: `url(${frameImage})` }}
      >
        <div className="flex max-w-screen-2xl px-4 sm:px-8 md:px-16 lg:px-32">
          <div>
            <div className="border-l-4 h-64 p-5"></div>
          </div>
          <div>
            <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-semibold p-4">
              Professional Online Counseling Support
            </h1>
            <p className="text-white text-lg sm:text-xl p-4 font-poppins">
              Connect with licensed therapists and counselors from the comfort
              of your home. Get the support you need, when you need it.
            </p>
          </div>
        </div>
      </nav>

      <div className="max-w-screen-xl mx-auto p-6">
        {/* Professional Counselor Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6 text-black p-20">
            Our Professional Counselor
          </h1>
          <div className="flex flex-col items-center bg-gradient-to-r from-[#007D6E] to-[#5EB47C] rounded-xl w-full max-w-md mx-auto p-6">
            <img
              src="/src/assets/book seassion.png"
              alt="Dr. Micheal Chen"
              className="w-28 h-32 rounded-full mb-6"
            />
            <h2 className="text-2xl font-semibold text-white">
              Dr. Altaf Khan
            </h2>
            <p className="text-lg text-white mb-6">Professional Counselor</p>
            <Button
              onClick={handleclick}
              className="bg-[#EC744A] text-white py-3 px-6 rounded-full"
            >
              Book Session
            </Button>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="mb-16">
          <h1 className="text-2xl font-semibold text-center mb-8">
            How it Works
          </h1>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex flex-col items-center   p-6 max-w-xs sm:max-w-sm lg:max-w-xs">
              <img
                src="/src/assets/contact.png"
                alt="Create Account"
                className="w-16 h-16 mb-4"
              />
              <h2 className="text-lg font-semibold mb-2">Create Account</h2>
              <p className="text-sm text-center text-gray-600 font-poppins">
                Schedule an appointment at your preferred time with our easy
                booking system.
              </p>
            </div>
            <div
              className="flex flex-col items-center  p-6 max-w-xs sm:max-w-sm lg:max-w-xs"
              onClick={handleclick}
            >
              <img
                src="/src/assets/works2.png"
                alt="Book Session"
                className="w-16 h-16 mb-4"
              />
              <h2 className="text-lg font-semibold mb-2">Book Session</h2>
              <p className="text-sm text-center text-gray-600 font-poppins">
                Schedule an appointment at your preferred time with our easy
                booking system.
              </p>
            </div>
            <div className="flex flex-col items-center  p-6 max-w-xs sm:max-w-sm lg:max-w-xs">
              <img
                src="/src/assets/video call.png"
                alt="Start Session"
                className="w-16 h-16 mb-4"
              />
              <h2 className="text-lg font-semibold mb-2">Start Session</h2>
              <p className="text-sm text-center text-gray-600 font-poppins">
                Start your session at the scheduled time and enjoy a seamless
                experience.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-8 p-8 sm:p-16 lg:p-20">
          {/* Video Call */}
          <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-lg w-full sm:max-w-xs lg:w-1/3">
            <img
              src="src/assets/video call.png"
              alt="Video Call"
              className="w-16 h-16 mb-4"
            />
            <h1 className="text-xl font-semibold mb-2">Video Call</h1>
            <p className="text-sm text-center text-gray-600 mb-4 font-poppins">
              Face-to-face online sessions with your Counselor. Voice-only
              sessions for more privacy.
            </p>
            <Button className="bg-[#EC744A] text-white py-3 px-6 sm:py-3 sm:px-8 md:py-4 md:px-10 text-sm sm:text-base md:text-lg rounded-full w-full sm:w-auto">
              Choose Video Call
            </Button>
          </div>

          {/* Phone Call */}
          <div className="flex flex-col items-center bg-gradient-to-r from-[#007D6E] to-[#5EB47C] p-6 rounded-xl shadow-lg w-full sm:max-w-xs lg:w-1/3 relative">
            <img
              src="src/assets/Clip path group.png"
              alt="Phone Call"
              className="w-16 h-16 mb-4"
            />
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
            <img
              src="src/assets/online.png"
              alt="Chat Support"
              className="w-16 h-16 mb-4"
            />
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

      <Ready />
    </div>
  );
};

export default Session;
