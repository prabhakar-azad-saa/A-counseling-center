import { useState } from "react";

import Features from "./Features";
import AboutSection from "./Aboutsection";
import Ready from "./Ready";

import Blogsection from "./Blogsection";
import Animation from "./Animation";
import Expert from "../img/Expert.png";
import Personalized from "../img/Personalized.png";
import safe from "../img/safe.png";
import Blogshow from "./Blogshow";
import { useNavigate } from "react-router-dom";

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
      <div style={{ marginTop: "150px" }}>
        <Animation />
      </div>

      <div  style={{
    background: "linear-gradient(90deg, #007D6E, #5EB47C)",
  }} className="box h-[100px]  px-[162px] py-[30px] relative sm:h-[120px] sm:px-[120px] sm:py-[20px] md:h-[100px] md:px-[80px] md:py-[15px] xs:h-[80px] xs:px-[30px] xs:py-[10px] mx-auto overflow-hidden flex items-center">
  <div className="animate-marquee whitespace-nowrap text-white text-lg font-medium">
    Your mental well-being is important. Take time for yourself. Talk to someone. You are not alone. Let's prioritize emotional health every day. 🌿
  </div>
</div>

<Blogshow/>


      <Features
        title={sectionData.title}
        description={sectionData.description}
        features={sectionData.features}
      />
      <AboutSection />
      <Blogsection />
      <Ready />
    </>
  );
}

export default Home;
