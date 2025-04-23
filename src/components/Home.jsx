import { useState } from "react";

import Features from "./Features";
import AboutSection from "./Aboutsection";
import Ready from "./Ready";

import Blogsection from "./Blogsection";
import Animation from "./Animation";
import Expert from "../img/Expert.png";
import Personalized from "../img/Personalized.png";
import safe from "../img/safe.png";
import ServicecartHome from "./ServicecartHome";
import { useNavigate } from "react-router-dom";
import TestimonialSection from "./TestimonialSection";
import Hero from "./Hero";

function Home() {

  const navigate = useNavigate();

const handleClick = (pagehome) => {
  navigate("/" + pagehome);
};

const sectionData = {
  title: "Why Choose Mindful Path Counseling",
  description:
    "We believe that mental wellness is the foundation of a fulfilling life. Our approach combines expertise with compassion to help you thrive.",
  features: [
    {
      imgSrc: Expert,
      altText: "Expert",
      heading: "Expert Counselors",
      description: "Certified professionals with years of experience.",
      onClick: () => handleClick("about"),
    },
    {
      imgSrc: Personalized,
      altText: "Personalized Approach",
      heading: "Personalized Approach",
      description: "Tailored therapy plans for your unique needs.",
      onClick: () => handleClick("booksession"),
    },
    {
      imgSrc: safe,
      altText: "Safe & Confidential",
      heading: "Safe & Confidential",
      description: "A non-judgmental space for open conversation.",
      // onClick: () => handleClick("contact"), // Optional: Add a page route if needed
    },
  ],
};

  return (
    <>
      <div className="mt-32 md:mt-20 ">
        {/* <Animation /> */}
      </div>
      <Hero />

      {/* <div  
  style={{ background: "linear-gradient(90deg, #007D6E, #5EB47C)" }}
  className="w-full h-[80px] sm:h-[100px] md:h-[110px] lg:h-[120px] px-4 sm:px-8 md:px-16 lg:px-32  flex items-center overflow-hidden"
>
  <div className="animate-marquee whitespace-nowrap text-white text-sm sm:text-base md:text-lg font-medium">
    Your mental well-being is important. Take time for yourself. Talk to someone. You are not alone. Let's prioritize emotional health every day. 🌿
  </div>
</div> */}


<ServicecartHome/>


      <Features
        title={sectionData.title}
        description={sectionData.description}
        features={sectionData.features}
      />
      <AboutSection />
      <Blogsection />
      <TestimonialSection />
      <Ready />
    </>
  );
}

export default Home;
