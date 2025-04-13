

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

import FrameImage from "../img/FrameImage";
import FrameImage1 from "../img/FrameImage1";
import FrameImage2 from "../img/FrameImage2";
import FrameImage3 from "../img/FrameImage3";
import FrameImage4 from "../img/FrameImage4";
import FrameImage5 from "../img/FrameImage5";
import FrameImage6 from "../img/FrameImage6";

import Call from "../img/Call";
import Massage from "../img/Massage";

const slides = [
  {
    title: "Your Journey to Emotional Well-Being",
    description:
      "Begin your path to mental wellness with our experienced and compassionate counselors. We're here to support your growth and healing.",
    image: <FrameImage className="w-full ml-20 max-w-md h-auto" />,
  },
  {
    title: "Signs your mental health might need attention",
    description:
      "Your mental health matters. Pay attention to emotional distress and seek support when needed.",
    image: <FrameImage1 className="w-full ml-20 max-w-md h-auto" />,
  },
  {
    title: "Persistent sadness or low mood",
    description:
      "Feeling consistently down? It's okay to ask for help. We're here to support your journey to wellness.",
    image: <FrameImage2 className="w-full ml-20 max-w-md h-auto" />,
  },
  {
    title: "Significant changes in appetite or weight",
    description:
      "Changes in eating habits may reflect deeper emotional concerns. Let's explore this together.",
    image: <FrameImage3 className="w-full ml-20 max-w-md h-auto" />,
  },
  {
    title: "Withdrawal from social activities and relationships",
    description:
      "Isolating from loved ones? You're not alone. Let's reconnect.",
    image: <FrameImage4 className="w-full ml-20 max-w-md h-auto" />,
  },
  {
    title: "Difficulty concentrating or making decisions",
    description:
      "Struggling with focus? Our tools can help you find mental clarity.",
    image: <FrameImage5 className="w-full ml-20 max-w-md h-auto" />,
  },
];

const Animation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isCarouselActive, setIsCarouselActive] = useState(true);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/booksession");
  };

  useEffect(() => {
    if (currentSlide < slides.length) {
      const timer = setTimeout(() => {
        setCurrentSlide((prev) => prev + 1);
      }, 4000);
      return () => clearTimeout(timer);
    } else {
      setIsCarouselActive(false);
    }
  }, [currentSlide]);

  return (
    //     <div className="w-full max-w-8xl mx-auto  py-10 px-4 sm:px-6 lg:px-8 relative z-10">
    //       <div className="grid mt-8 max-w-8xl mx-auto grid-cols-1 lg:grid-cols-2 items-center gap-48 min-h-[500px]">
    //         {/* Text Content */}
    //         <div className="flex flex-col justify-center pl-20  text-center lg:text-left min-h-[400px]">
    //           <AnimatePresence mode="wait">
    //             <motion.h2
    //               key={currentSlide}
    //               initial={{ opacity: 0, y: -20 }}
    //               animate={{ opacity: 1, y: 0 }}
    //               exit={{ opacity: 0, y: 20 }}
    //               transition={{ duration: 0.6, type: "spring" }}
    //               className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800"
    //             >
    //               {isCarouselActive
    //                 ? slides[currentSlide]?.title
    //                 : "Get in Touch for Emotional Well-Being"}
    //             </motion.h2>
    //           </AnimatePresence>

    //           <AnimatePresence mode="wait">
    //             <motion.p
    //               key={`${currentSlide}-desc`}
    //               initial={{ opacity: 0, y: -10 }}
    //               animate={{ opacity: 1, y: 0 }}
    //               exit={{ opacity: 0, y: 10 }}
    //               transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
    //               className="text-base sm:text-lg py-5 text-gray-600"
    //             >
    //               {isCarouselActive
    //                 ? slides[currentSlide]?.description
    //                 : "Begin your path to mental wellness with our experienced and compassionate counselors. We're here to support your growth and healing."}
    //             </motion.p>
    //           </AnimatePresence>

    //           {/* Button and Contact Info */}
    //           {!isCarouselActive && (
    //             <>
    //               <motion.button
    //                 initial={{ opacity: 0, scale: 0.9 }}
    //                 animate={{ opacity: 1, scale: 1 }}
    //                 transition={{ duration: 0.5, delay: 0.3 }}
    //                 className="bg-[#E8774D] text-white text-lg font-semibold py-3 px-8 rounded-full shadow-md hover:bg-[#d86b42] transition duration-300 self-center lg:self-start"
    //                 onClick={handleClick}
    //               >
    //                 Start Your Journey Today
    //               </motion.button>

    //               <motion.div
    //                 initial={{ opacity: 0, y: 10 }}
    //                 animate={{ opacity: 1, y: 0 }}
    //                 transition={{ duration: 0.6, delay: 0.4 }}
    //                 className="flex flex-col sm:flex-row sm:items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6 mt-6 items-center "
    //               >
    //                 <div className="flex items-center space-x-3">
    //                   <Call className="w-6 h-6 text-[#E8774D]" />
    //                   <p className="text-sm sm:text-md text-gray-700 font-semibold whitespace-nowrap">
    //                   +91 9685714245
    //                   </p>
    //                 </div>
    //                 <div className="flex items-center space-x-2">
    //                   <Massage className="w-6 h-6 text-[#E8774D]" />
    //                   <p className="text-sm sm:text-md text-gray-700 font-semibold">
    //                   altaf@apluscounselling.com
    //                   </p>
    //                 </div>
    //               </motion.div>
    //             </>
    //           )}
    //         </div>

    //         {/* Image Section */}
    //         <div className="flex justify-center lg:justify-end  relative overflow-hidden max-w-full">
    //           <AnimatePresence mode="wait">
    //             <motion.div
    //               key={`${currentSlide}-image`}
    //               initial={{ opacity: 0, scale: 0.9 }}
    //               animate={{ opacity: 1, scale: 1 }}
    //               exit={{ opacity: 0, scale: 1.1 }}
    //               transition={{ duration: 0.8, type: "spring" }}
    //               className="w-full flex justify-center items-center"
    //             >
    //               <div className="w-full max-w-2xl h-auto">
    //                 {isCarouselActive ? slides[currentSlide]?.image : <FrameImage6 className="w-full h-auto" />}
    //               </div>
    //             </motion.div>
    //           </AnimatePresence>
    //         </div>
    //       </div>
    //     </div>
    //   );
    // };

    // export default Animation;

    <div className="w-full  max-w-[1800px] mx-auto py-10 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-12 gap-x-10 items-center min-h-[400px]">
        {/* Text Section */}
        <div className="flex flex-col justify-center items-center lg:items-start px-4 sm:px-8">
          <AnimatePresence mode="wait">
            <motion.h2
              key={currentSlide}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.6, type: "spring" }}
              className="text-2xl sm:text-3xl md:text-4xl pb-5 lg:text-5xl font-bold bg-gradient-to-r from-[#E8774D] to-[#ffac5f] text-transparent bg-clip-text tracking-tight drop-shadow-lg "
            >
              {isCarouselActive
                ? slides[currentSlide]?.title
                : "Get in Touch for Emotional Well-Being"}
            </motion.h2>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.p
              key={`${currentSlide}-desc`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
              className="text-base sm:text-lg  text-gray-600 max-w-xl font-poppins"
            >
              {isCarouselActive
                ? slides[currentSlide]?.description
                : "Begin your path to mental wellness with our experienced and compassionate counselors. We're here to support your growth and healing."}
            </motion.p>
          </AnimatePresence>

          {!isCarouselActive && (
            <>
              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-[#E8774D] text-white text-base sm:text-lg font-semibold py-3 px-6 sm:px-8 rounded-full shadow-md hover:bg-[#d86b42] transition duration-300 mt-4"
                onClick={handleClick}
              >
                Start Your Journey Today
              </motion.button>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row sm:items-center justify-center lg:justify-start gap-4 sm:gap-8 mt-6"
              >
                <div className="flex items-center gap-2">
                  <Call className="w-5 h-5 text-[#E8774D]" />
                  <p className="text-sm sm:text-base text-gray-700 font-semibold whitespace-nowrap">
                    +91 9685714245
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Massage className="w-5 h-5 text-[#E8774D]" />
                  <p className="text-sm sm:text-base text-gray-700 font-semibold">
                    info@apluscounselling.com
                  </p>
                </div>
              </motion.div>
            </>
          )}
        </div>

        {/* Image Section */}
        <div className="flex justify-center lg:justify-end px-4 sm:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${currentSlide}-image`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="w-full flex justify-center items-center"
            >
              <div className="w-full max-w-[500px] sm:max-w-[600px]">
                {isCarouselActive ? (
                  slides[currentSlide]?.image
                ) : (
                  <FrameImage6 className="w-full h-auto" />
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Animation;
