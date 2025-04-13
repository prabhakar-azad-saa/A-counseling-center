import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Marquee from "react-fast-marquee";
import Individual22 from "../img/Individual22";
import Relationship from "../img/Relationship";
import Famil from "../img/Famil";
import Leaf from "../img/Leaf";
import Carrier from "../img/Carrier";
import Chat from "../img/Chat";

const therapyData = [
  {
    component: <Individual22 style={{ width: '80px', height: '80px' }} />,
    title: "Individual Therapy",
    description: "Anxiety, Depression, Trauma, and more...",
    color: "from-blue-500 to-blue-600",
    iconColor: "text-blue-400",
  },
  {
    component: <Relationship style={{ width: '80px', height: '80px' }} />,
    title: "Relationship Therapy",
    description: "Marriage counseling, communication issues...",
    color: "from-pink-500 to-pink-600",
    iconColor: "text-pink-400",
  },
  {
    component: <Famil style={{ width: '80px', height: '80px' }} />,
    title: "Family Counseling",
    description: "Parenting, teen counseling, family conflicts...",
    color: "from-green-500 to-green-600",
    iconColor: "text-green-400",
  },
  {
    component: <Leaf style={{ width: '80px', height: '80px' }} />,
    title: "Specialized Therapy",
    description: "CBT, Mindfulness, ADHD support...",
    color: "from-purple-500 to-purple-600",
    iconColor: "text-purple-400",
  },
  {
    component: <Carrier style={{ width: '80px', height: '80px' }} />,
    title: "Career Coaching",
    description: "Work-life balance, personal development...",
    color: "from-amber-500 to-amber-600",
    iconColor: "text-amber-400",
  },
  {
    component: <Chat style={{ width: '80px', height: '80px' }} />,
    title: "Online Sessions",
    description: "Virtual therapy from your home...",
    color: "from-teal-500 to-teal-600",
    iconColor: "text-teal-400",
  },
];

const ServicecartHome = () => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate("/services"); 
  };

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-full mx-auto">
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">Therapies</span>
      </motion.h2>

      <Marquee gradient={false} speed={50} pauseOnHover={true} className="space-x-6">
        {therapyData.map((therapy, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            onClick={handleCardClick}
            className={`cursor-pointer min-w-[300px] min-h-56 mx-4 rounded-3xl bg-gradient-to-r from-blue-500 to-teal-400 p-6 shadow-2xl overflow-hidden`}
          >
            <div className="w-20 h-20 mx-auto mb-4">
              {therapy.component}
            </div>
            <h3 className="text-lg font-bold text-black text-center mb-2">
              {therapy.title}
            </h3>
            <p className="text-sm text-black text-center">{therapy.description}</p>
          </motion.div>
        ))}
      </Marquee>
    </div>
  );
};

export default ServicecartHome;
