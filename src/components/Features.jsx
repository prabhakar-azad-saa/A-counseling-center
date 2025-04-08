import React from "react";
import Colors from "./Colors";

const Features = ({ heading, title, description, features }) => {
  return (
    
    <div className="bg-[#FCF8F4] py-36 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto">
            {description}
          </p>
        </div>

        {/* Features Section */}
        <div className="relative flex flex-col md:flex-row justify-center items-center md:gap-0 mt-20">
          {features.map((feature, index) => {
            // Middle card (index 1) gets special styling
            const isMiddleCard = index === 1;

            return (
             
              <div
                key={index}
                className={`
    ${
      isMiddleCard
        ? "bg-gradient-to-br from-emerald-400 to-teal-600 rounded-3xl shadow-xl p-12 md:p-16 flex flex-col items-center text-center w-full md:w-[45%] md:z-20 md:mt-[-30px] transition-all hover:shadow-2xl min-h-[420px] md:min-h-[480px]"
        : "bg-white rounded-3xl shadow-lg p-8 md:p-12 flex flex-col items-center text-center border border-gray-100 transition-all hover:shadow-xl w-full md:w-[35%] md:mt-[10px] md:mb-[60px] z-10 min-h-[280px] md:min-h-[320px]"
    }
    ${index === 0 ? "md:mr-[-15px]" : ""}
    ${index === 2 ? "md:ml-[-15px]" : ""}
  `}
              >
                <div
                  className={`${
                    isMiddleCard ? "mb-8 h-28 w-28" : "mb-6 h-20 w-20"
                  } flex items-center justify-center`}
                >
                  <img
                    src={feature.imgSrc}
                    alt={feature.altText}
                    className="max-h-full max-w-full"
                  />
                </div>
                <h2
                  className={`${
                    isMiddleCard
                      ? "text-3xl font-bold text-white mb-5"
                      : "text-2xl font-bold text-gray-900 mb-4"
                  }`}
                >
                  {feature.heading}
                </h2>
                <p
                  className={`${
                    isMiddleCard
                      ? "text-white text-lg"
                      : "text-gray-600 text-base"
                  }`}
                >
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Features;
