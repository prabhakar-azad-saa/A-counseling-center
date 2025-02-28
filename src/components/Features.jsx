import React from 'react';
import Colors from './Colors';

const Features = ({ heading, title, description, features }) => {
  return (
    <div>
      <div className="text-center py-20 bg-[#FCF8F4]">
        <h3 className="text-2xl text-gray-700 mb-4">{heading}</h3>
        <h1 className="text-5xl font-bold text-black mb-5">{title}</h1>
        <p className="text-xl text-black mb-16 leading-7">{description}</p>

        {/* Container for feature cards */}
        <div className="flex flex-wrap justify-center items-center gap-96  pb-12 relative">
        {features.map((feature, index) => (
         <div
         className={`flex flex-col items-center justify-center text-center p-6 sm:p-8 md:p-10 rounded-xl bg-white text-black shadow-lg transition-transform duration-300 ease-in-out
           ${index === Math.floor(features.length / 2)
             ? `absolute bg-gradient-to-r from-[${Colors.primary}] to-[${Colors.secondary}] bg-green-600 w-[500px] h-[600px] sm:w-[250px] sm:h-[350px] md:w-[300px]  md:h-[400px] lg:w-[450px] lg:h-[550px] xl:w-[550px] xl:h-[650px] z-30 top-1/2 transform -translate-y-1/2`
             : 'bg-white w-80 h-auto sm:w-[250px] sm:h-[350px] md:w-[300px] md:h-[400px] lg:w-[350px] lg:h-[450px] xl:w-[450px] xl:h-[550px] border border-black z-0'
           }`}
         key={index}
         style={{
           position: index === Math.floor(features.length / 2) ? 'absolute' : 'relative',
           left: index === Math.floor(features.length / 2) ? '' : 'auto',
           transform: index === Math.floor(features.length / 2) ? '' : 'none',
         }}
       >
         <img className="w-24 h-24 mb-8" src={feature.imgSrc} alt={feature.altText} />
         <h2 className="text-2xl font-semibold mb-4">{feature.heading}</h2>
         <p className="text-base leading-7 font-poppins">{feature.description}</p>
       </div>
       
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;


