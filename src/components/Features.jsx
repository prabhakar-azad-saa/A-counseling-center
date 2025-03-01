import React from "react";
import Colors from "./Colors";

const Features = ({ heading, title, description, features }) => {
  return (
    // <div>
    //   <div className="text-center py-20 bg-[#FCF8F4]">
    //     <h3 className="text-2xl text-gray-700 mb-4">{heading}</h3>
    //     <h1 className="text-5xl font-bold text-black mb-5">{title}</h1>
    //     <p className="text-xl text-black mb-16 leading-7">{description}</p>

    //     {/* Container for feature cards */}
    //     <div className="flex flex-wrap justify-center items-center gap-96  pb-12 relative">
    //     {features.map((feature, index) => (
    //      <div
    //      className={`flex flex-col items-center justify-center text-center p-6 sm:p-8 md:p-10 rounded-xl bg-white text-black shadow-lg transition-transform duration-300 ease-in-out
    //        ${index === Math.floor(features.length / 2)
    //          ? `absolute bg-gradient-to-r from-[${Colors.primary}] to-[${Colors.secondary}] bg-green-600 w-[500px] h-[600px] sm:w-[250px] sm:h-[350px] md:w-[300px]  md:h-[400px] lg:w-[450px] lg:h-[550px] xl:w-[550px] xl:h-[650px] z-30 top-1/2 transform -translate-y-1/2`
    //          : 'bg-white w-80 h-auto sm:w-[250px] sm:h-[350px] md:w-[300px] md:h-[400px] lg:w-[350px] lg:h-[450px] xl:w-[450px] xl:h-[550px] border border-black z-0'
    //        }`}
    //      key={index}
    //      style={{
    //        position: index === Math.floor(features.length / 2) ? 'absolute' : 'relative',
    //        left: index === Math.floor(features.length / 2) ? '' : 'auto',
    //        transform: index === Math.floor(features.length / 2) ? '' : 'none',
    //      }}
    //    >
    //      <img className="w-24 h-24 mb-8" src={feature.imgSrc} alt={feature.altText} />
    //      <h2 className="text-2xl font-semibold mb-4">{feature.heading}</h2>
    //      <p className="text-base leading-7 font-poppins">{feature.description}</p>
    //    </div>

    //       ))}
    //     </div>
    //   </div>
    // </div>
    <div className="bg-gradient-to-b from-white to-gray-50 py-48 px-4 sm:px-6 lg:px-8">
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
              // <div
              //   key={index}
              //   className={`
              //     ${
              //       isMiddleCard
              //         ? "bg-gradient-to-br from-emerald-400 to-teal-600 rounded-3xl shadow-xl p-10 md:p-12 flex flex-col items-center text-center w-full md:w-[40%] md:z-20 md:mt-[-20px] transition-all hover:shadow-2xl"
              //         : "bg-white rounded-3xl shadow-lg p-6 md:p-8 flex flex-col items-center text-center border border-gray-100 transition-all hover:shadow-xl w-full md:w-[30%] md:mt-[20px] z-10"
              //     }
              //     ${index === 0 ? "md:mr-[-20px]" : ""}
              //     ${index === 2 ? "md:ml-[-20px]" : ""}
              //   `}
              // >
              //   <div
              //     className={`${
              //       isMiddleCard ? "mb-6 h-24 w-24" : "mb-4 h-16 w-16"
              //     } flex items-center justify-center`}
              //   >
              //     <img
              //       src={feature.imgSrc}
              //       alt={feature.altText}
              //       className="max-h-full max-w-full"
              //     />
              //   </div>
              //   <h2
              //     className={`${
              //       isMiddleCard
              //         ? "text-2xl font-bold text-white mb-4"
              //         : "text-xl font-bold text-gray-900 mb-3"
              //     }`}
              //   >
              //     {feature.heading}
              //   </h2>
              //   <p
              //     className={`${
              //       isMiddleCard
              //         ? "text-white text-base"
              //         : "text-gray-600 text-sm"
              //     }`}
              //   >
              //     {feature.description}
              //   </p>
              // </div>

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
