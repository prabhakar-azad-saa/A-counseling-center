import React, { useState, useEffect } from "react";
import Hero from "./Hero";
import Button from "./Button";

const slides = [
  {
    image: "src/assets/Frame.png",
    heading: "Your Journey to Emotional Well-Being",
    description: "Discover the path to a balanced and joyful life."
  },
  {
    image: "src/assets/not connecting.png",
    heading: "Signs your mental health might need attention",
    description: "Take the first step towards personal growth."
  },
  {
    image: "src/assets/Untitled design (6) 1.png",
    heading: "Persistent sadness or low mood",
    description: "Learn the art of mindfulness and relaxation."
  },
  {
    image: "src/assets/Screenshot (293) 1.png",
    heading: "Significant changes in appetite or weight",
    description: "Understand your body and mind's signals."
  },
  {
    image: "src/assets/Untitled design (7) 1.png",
    heading: "Withdrawal from social activities and relationships",
    description: "Reconnect and embrace self-care."
  },
  {
    image: "src/assets/coffee.png",
    heading: "Difficulty concentrating or making decisions",
    description: "Reconnect and embrace self-care."
  }
];

const Animation = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const [animationFinished, setAnimationFinished] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        nextSlide();
        setFade(false);
      }, 1000);
    }, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const handleSkip = () => {
    setAnimationFinished(true); // End the animation when skip is clicked
  };

  useEffect(() => {
    if (currentIndex === slides.length - 1) {
      setTimeout(() => {
        setAnimationFinished(true);
      }, 1000);
    }
  }, [currentIndex]);

  return (
    <div>
      {!animationFinished && (
        <div className="relative w-full bg-[#FCF8F4] p-5 max-w-full overflow-hidden">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 sm:space-x-4 md:space-x-8 pb-12 relative">
            <div
              className={`carousel-text flex flex-col items-center text-center px-6 py-4 md:px-12 md:py-8 w-full md:w-1/2 rounded-lg transition-opacity duration-1000 transform ${
                fade ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
              }`}
            >
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {slides[currentIndex].heading}
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 font-poppins">
                {slides[currentIndex].description}
              </p>
            </div>

            <div
              className={`carousel-item w-full md:w-1/3 flex justify-center items-center transition-opacity duration-1000 transform ${
                fade ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
              }`}
            >
              <img
                src={slides[currentIndex].image}
                alt="carousel"
                className="w-full h-auto object-contain rounded-lg shadow-none"
                style={{ maxWidth: "400px", maxHeight: "400px" }}
              />
            </div>
          </div>

          <div className="absolute bottom-8 right-7 md:bottom-4 md:right-8">
            <Button onClick={handleSkip}>Skip</Button>
          </div>

          <button
            onClick={prevSlide}
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
