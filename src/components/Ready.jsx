import React from 'react';
import Button from './Button';
import frameImage from "../../src/assets/Frame83.png"

const Ready = () => {
  return (
    <div
  className="relative w-full"
  style={{ backgroundImage: `url(${frameImage})` }}
>
  
      {/* <img
        src="src/assets/Frame 83.png"
        alt="Background Image"
        className="w-full h-full object-cover"
      /> */}
     

      <div className=" flex flex-col  pt-20 pb-24 items-center  justify-center bg-black bg-opacity-50">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold p-4 text-center">
          Ready to Start Your Journey?
        </h1>
        <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-semibold p-4 text-center font-poppins">
          Book your consultation today and take the first step towards better mental health.
        </p>
        <Button className="mt-4 px-6 py-2 text-sm sm:text-base md:text-lg lg:text-xl">Schedule Consultation</Button>
      </div>
    </div>
  );
}

export default Ready;
