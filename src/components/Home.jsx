import { useState } from "react";


import Hero from "./Hero";
import Features from "./Features";
import AboutSection from "./Aboutsection";
import Ready from "./Ready";

import Blogsection from "./Blogsection";
import Animation from "./Animation";

function Home() {
  const sectionData = {
    title: "Why Choose Mindful Path Counseling",
    description:
      "We believe that mental wellness is the foundation of a fulfilling life. Our approach combines expertise with compassion to help you thrive.",
    features: [
      {
        imgSrc: "/src/assets/Expert.png",
        altText: "Expert",
        heading: "Expert Counselors",
        description:
          "Certified professionals with years of experience.",
      },
      {
        imgSrc: "/src/assets/second feature.png",
        altText: "Personalized Approach",
        heading: "Personalized Approach",
        description:
          "Tailored therapy plans for your unique needs.",
      },
      {
        imgSrc: "/src/assets/014-pendulum.png",
        altText: "Safe & Confidential",
        heading: "Safe & Confidential",
        description:
          "A non-judgmental space for open conversation.",
      },
    ],
  };
  const handleClick = () => {};
  return (
    <>
   
    <Animation/>
     {/* <Hero/> */}
     
     
     
      <div className="box h-[100px] bg-gradient-to-l from-[#007d6e] to-[#5eb47c] px-[162px] py-[30px] relative sm:h-[120px] sm:px-[120px] sm:py-[20px] md:h-[100px] md:px-[80px] md:py-[15px] xs:h-[80px] xs:px-[30px] xs:py-[10px]">
        
      </div>
      <Features
        title={sectionData.title}
        description={sectionData.description}
        features={sectionData.features}
      />
      <AboutSection/>
      <Blogsection/>
      <Ready/>
     
    </>
  );
}

export default Home;
