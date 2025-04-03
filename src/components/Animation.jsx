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
  { image: animationFrame6, heading: "Difficulty concentrating or making decisions", description: "Reconnect and embrace self-care." },
];

const Animation = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationFinished, setAnimationFinished] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 4000); // 4 seconds interval for crossfade

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
    <div>
      {!animationFinished && (
        <div className="relative w-full bg-[#FCF8F4] p-5 max-w-full overflow-hidden">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 sm:space-x-4 md:space-x-8 pb-12 relative">
            
            {/* Text Content with Crossfade */}
            <div className="relative w-full md:w-1/2 text-center">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute w-full transition-opacity duration-1000 ${
                    index === currentIndex ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    {slide.heading}
                  </h1>
                  <p className="text-base sm:text-lg md:text-xl text-gray-700 font-poppins">
                    {slide.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Image with Crossfade */}
            <div className="relative w-full md:w-1/3 h-[650px] flex justify-center items-center">
              {slides.map((slide, index) => (
                <img
                  key={index}
                  src={slide.image}
                  alt="carousel"
                  className={`absolute max-w-[700px] max-h-[700px] transition-opacity duration-1000 ${
                    index === currentIndex ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1))}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 opacity-50 hover:opacity-100 transition-opacity duration-300"
          >
            &#10094;
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 opacity-50 hover:opacity-100 transition-opacity duration-300"
          >
            &#10095;
          </button>
        </div>
      )}

      {animationFinished && <Hero />}
    </div>
  );
};

export default Animation;
