import React, { useState, useEffect } from "react";
import Hero from "./Hero";

import animationFrame1 from "../img/animationFrame1.png";
import animationFrame2 from "../img/animationFrame2.png";
import animationFrame3 from "../img/animationFrame3.png";
import animationFrame4 from "../img/animationFrame4.png";
import animationFrame5 from "../img/animationFrame5.png";
import animationFrame6 from "../img/animationFrame6.png";

const slides = [
  { image: animationFrame1, heading: "Your Journey to Emotional Well-Being", description: "Discover the path to a balanced and joyful life." },
  { image: animationFrame2, heading: "Signs your mental health might need attention", description: "Take the first step towards personal growth." },
  { image: animationFrame3, heading: "Persistent sadness or low mood", description: "Learn the art of mindfulness and relaxation." },
  { image: animationFrame4, heading: "Significant changes in appetite or weight", description: "Understand your body and mind's signals." },
  { image: animationFrame5, heading: "Withdrawal from social activities and relationships", description: "Reconnect and embrace self-care." },
  { image: animationFrame6, heading: "Difficulty concentrating or making decisions", description: "Regain clarity and focus with the right guidance." },
];

const Animation = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationFinished, setAnimationFinished] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 4000); // 4 seconds interval

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  useEffect(() => {
    if (currentIndex === slides.length - 1) {
      setTimeout(() => {
        setAnimationFinished(true);
      }, 4000);
    }
  }, [currentIndex]);

  return (
    <div className="relative w-full bg-[#FCF8F4] p-5  max-w-[1500px] mx-auto overflow-hidden">
      {!animationFinished && (
        <div className="flex flex-wrap justify-center items-center space-y-8 md:space-y-0 pb-12 relative min-h-[450px] md:min-h-[650px]">
          
          {/* Text Content with Responsive Layout */}
          <div className="relative w-full md:w-1/2 text-center min-h-[200px] px-4">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute top-0 left-0 w-full transition-all duration-1000 ${
                  index === currentIndex ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  {slide.heading}
                </h1>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 font-poppins">
                  {slide.description}
                </p>
              </div>
            ))}
          </div>

          {/* Image Section with Adaptive Sizing */}
          <div className="relative w-full md:w-1/2 flex justify-center items-center min-h-[300px] sm:min-h-[400px] md:min-h-[500px]">
            {slides.map((slide, index) => (
              <img
                key={index}
                src={slide.image}
                alt="carousel"
                className={`absolute w-[90%] max-w-[350px] sm:max-w-[450px] md:max-w-[550px] lg:max-w-[650px] transition-opacity duration-1000 ${
                  index === currentIndex ? "opacity-100 scale-100" : "opacity-0 scale-90"
                }`}
              />
            ))}
          </div>
        </div>
      )}

      {/* Navigation Arrows - Now Positioned for Mobile & Desktop */}
      {!animationFinished && (
        <>
          <button
            onClick={() => setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1))}
            className="absolute top-[50%] left-2 sm:left-4 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 sm:p-3 opacity-50 hover:opacity-100 transition-opacity duration-300"
          >
            &#10094;
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-[50%] right-2 sm:right-4 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 sm:p-3 opacity-50 hover:opacity-100 transition-opacity duration-300"
          >
            &#10095;
          </button>
        </>
      )}

      {animationFinished && <Hero />}
    </div>
  );
};

export default Animation;
