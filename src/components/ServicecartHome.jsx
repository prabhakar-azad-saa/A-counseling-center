import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Individual22 from "../img/Individual22";
import Relationship from "../img/Relationship";
import Famil from "../img/Famil";
import Leaf from "../img/Leaf";
import Carrier from "../img/Carrier";
import Chat from "../img/Chat";

const therapyData = [
  {
    icon: <Individual22 style={{ width: '60px', height: '60px' }} />,
    title: "Individual Therapy",
    description: "Anxiety, Depression, Trauma, and more...",
    color: "from-blue-500 to-blue-300",
  },
  {
    icon: <Relationship style={{ width: '60px', height: '60px' }} />,
    title: "Relationship Therapy",
    description: "Marriage counseling, communication issues...",
    color: "from-pink-500 to-pink-300",
  },
  {
    icon: <Famil style={{ width: '60px', height: '60px' }} />,
    title: "Family Counseling",
    description: "Parenting, teen counseling, family conflicts...",
    color: "from-green-500 to-green-300",
  },
  {
    icon: <Leaf style={{ width: '60px', height: '60px' }} />,
    title: "Specialized Therapy",
    description: "CBT, Mindfulness, ADHD support...",
    color: "from-purple-500 to-purple-300",
  },
  {
    icon: <Carrier style={{ width: '60px', height: '60px' }} />,
    title: "Career Coaching",
    description: "Work-life balance, personal development...",
    color: "from-yellow-500 to-yellow-300",
  },
  {
    icon: <Chat style={{ width: '60px', height: '60px' }} />,
    title: "Online Sessions",
    description: "Virtual therapy from your home...",
    color: "from-teal-500 to-teal-300",
  },
];

const ServiceCartHome = () => {
  const navigate = useNavigate();

  const handleCardClick = () => navigate("/services");
  const handleButtonClick = (e) => {
    e.stopPropagation(); // prevent card click
    navigate("/booksession");
  };

  return (
    <div className="py-20 px-6 bg-gradient-to-b from-white via-gray-50 to-gray-100">
      <div className="text-center mb-16">
        <motion.h2
          className="text-4xl md:text-5xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Discover Our{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-blue-500">
            Services
          </span>
        </motion.h2>
        <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
          Tailored support for your unique journey
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {therapyData.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{
              rotateX: 5,
              rotateY: -5,
              scale: 1.03,
              transition: { type: "spring", stiffness: 200 },
            }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            onClick={handleCardClick}
            className={`
              cursor-pointer
              bg-white/30
              backdrop-blur-md
              border
              border-gray-200
              rounded-2xl
              p-6
              shadow-md
              transition-transform
              hover:shadow-xl
              group
              hover:border-transparent
              hover:bg-gradient-to-br
              hover:from-white
              hover:to-gray-50
            `}
          >
            <div
              className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-gradient-to-tr ${item.color} text-white shadow-lg`}
            >
              {item.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 text-center mb-2 group-hover:text-black">
              {item.title}
            </h3>
            <p className="text-sm text-gray-600 text-center">{item.description}</p>
            <div className="flex justify-center mt-4">
              <button
                onClick={handleButtonClick}
                className="bg-gradient-to-r from-blue-500 to-teal-500 text-white px-4 py-2 rounded-lg hover:opacity-90 transition duration-300 text-sm"
              >
                Book Now
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="text-center mt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <button
          onClick={handleCardClick}
          className="bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold px-8 py-3 rounded-full shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-1"
        >
          Explore All Services
        </button>
      </motion.div>
    </div>
  );
};

export default ServiceCartHome;
