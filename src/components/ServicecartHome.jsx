// import React from "react";
// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";
// import Individual22 from "../img/Individual22";
// import Relationship from "../img/Relationship";
// import Famil from "../img/Famil";
// import Leaf from "../img/Leaf";
// import Carrier from "../img/Carrier";
// import Chat from "../img/Chat";

// const therapyData = [
//   {
//     icon: <Individual22 style={{ width: '60px', height: '60px' }} />,
//     title: "Individual Therapy",
//     description: "Anxiety, Depression, Trauma, and more...",
//     color: "from-blue-500 to-blue-400",
//     slug: "individual",
//     cta: "Book Now"
//   },
//   {
//     icon: <Relationship style={{ width: '60px', height: '60px' }} />,
//     title: "Relationship Therapy",
//     description: "Marriage counseling, communication issues...",
//     color: "from-pink-500 to-pink-400",
//     slug: "relationship",
//     cta: "Book Now"
//   },
//   {
//     icon: <Famil style={{ width: '60px', height: '60px' }} />,
//     title: "Family Counseling",
//     description: "Parenting, teen counseling, family conflicts...",
//     color: "from-green-500 to-green-400",
//     slug: "family",
//     cta: "Book Now"
//   },
//   {
//     icon: <Leaf style={{ width: '60px', height: '60px' }} />,
//     title: "Specialized Therapy",
//     description: "CBT, Mindfulness, ADHD support...",
//     color: "from-purple-500 to-purple-400",
//     slug: "specialized",
//     cta: "Book Now"
//   },
//   {
//     icon: <Carrier style={{ width: '60px', height: '60px' }} />,
//     title: "Career Coaching",
//     description: "Work-life balance, personal development...",
//     color: "from-amber-500 to-amber-400",
//     slug: "career",
//     cta: "Book Now"
//   },
//   {
//     icon: <Chat style={{ width: '60px', height: '60px' }} />,
//     title: "Online Sessions",
//     description: "Virtual therapy from your home...",
//     color: "from-teal-500 to-teal-400",
//     slug: "online",
//     cta: "Book Now"
//   },
// ];

// const ServiceCartHome = () => {
//   const navigate = useNavigate();

//   const handleCardClick = (slug) => navigate("/services", { state: { slug } });
  
//   const handleButtonClick = (e, slug) => {
//     e.stopPropagation();
//     navigate("/booksession", { state: { service: slug } });
//   };

//   // Animation variants
//   const container = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1
//       }
//     }
//   };

//   const item = {
//     hidden: { opacity: 0, y: 20 },
//     show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
//   };

//   return (
//     <div className="py-16 px-4 sm:px-6 lg:py-20 lg:px-8 bg-[#FCF8F4]">
//       <div className="text-center mb-12 lg:mb-16">
//         <motion.h2
//           className="text-3xl sm:text-4xl lg:text-5xl font-bold"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           Discover Our{" "}
//           <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-blue-500">
//             Healing Services
//           </span>
//         </motion.h2>
//         <motion.p
//           className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.3, duration: 0.6 }}
//         >
//           Personalized care for your mental wellness journey
//         </motion.p>
//       </div>

//       <motion.div
//         className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto"
//         variants={container}
//         initial="hidden"
//         animate="show"
//       >
//         {therapyData.map((itemData, index) => (
//           <motion.div
//             key={index}
//             variants={item}
//             whileHover={{
//               y: -5,
//               scale: 1.02,
//               transition: { type: "spring", stiffness: 300 }
//             }}
//             whileTap={{ scale: 0.98 }}
//             onClick={() => handleCardClick(itemData.slug)}
//             className={`cursor-pointer bg-white rounded-xl p-6 shadow-sm transition-all hover:shadow-md border border-gray-100 hover:border-transparent group`}
//             aria-label={`Learn more about ${itemData.title}`}
//           >
//             <div
//               className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5 bg-gradient-to-br ${itemData.color} text-white shadow-md group-hover:shadow-lg transition-shadow`}
//             >
//               {itemData.icon}
//             </div>
//             <h3 className="text-xl font-semibold text-gray-800 text-center mb-2 group-hover:text-gray-900 transition-colors">
//               {itemData.title}
//             </h3>
//             <p className="text-gray-600 text-center text-sm lg:text-base mb-4">
//               {itemData.description}
//             </p>
//             <div className="flex justify-center mt-5">
//               <motion.button
//                 onClick={(e) => handleButtonClick(e, itemData.slug)}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className={`bg-gradient-to-r ${itemData.color} text-white px-5 py-2 rounded-lg hover:opacity-90 transition-opacity text-sm font-medium shadow-sm`}
//                 aria-label={`Book ${itemData.title} session`}
//               >
//                 {itemData.cta}
//               </motion.button>
//             </div>
//           </motion.div>
//         ))}
//       </motion.div>

//       <motion.div
//         className="text-center mt-14 lg:mt-16"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.8, delay: 0.6 }}
//       >
//         <motion.button
//           onClick={() => navigate("/services")}
//           whileHover={{ scale: 1.03, y: -2 }}
//           whileTap={{ scale: 0.98 }}
//           className="bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold px-8 py-3 rounded-full shadow-md hover:shadow-lg transition-all"
//           aria-label="Explore all therapy services"
//         >
//           View All Treatment Options
//         </motion.button>
//       </motion.div>
//     </div>
//   );
// };

// export default ServiceCartHome;



import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Individual22 from "../img/Individual22";
import Relationship from "../img/Relationship";
import Famil from "../img/Famil";
import Leaf from "../img/Leaf";
import Carrier from "../img/Carrier";
import Chat from "../img/Chat";
import { FaUser, FaHeart, FaUsers, FaLeaf, FaBriefcase, FaComments } from "react-icons/fa";

const therapyData = [
  {
    icon: <FaUser size={40} />,
    title: "Individual Therapy",
    description: "Anxiety, Depression, Trauma, and more...",
    color: "from-blue-500 to-blue-300",
    slug: "individual",
  },
  {
    icon: <FaHeart size={40} />,
    title: "Relationship Therapy",
    description: "Marriage counseling, communication issues...",
    color: "from-pink-500 to-pink-300",
    slug: "relationship",
  },
  {
    icon: <FaUsers size={40} />,
    title: "Family Counseling",
    description: "Parenting, teen counseling, family conflicts...",
    color: "from-green-500 to-green-300",
    slug: "family",
  },
  {
    icon: <FaLeaf size={40} />,
    title: "Specialized Therapy",
    description: "CBT, Mindfulness, ADHD support...",
    color: "from-purple-500 to-purple-300",
    slug: "specialized",
  },
  {
    icon: <FaBriefcase size={40} />,
    title: "Career Coaching",
    description: "Work-life balance, personal development...",
    color: "from-yellow-500 to-yellow-300",
    slug: "career",
  },
  {
    icon: <FaComments size={40} />,
    title: "Online Sessions",
    description: "Virtual therapy from your home...",
    color: "from-teal-500 to-teal-300",
    slug: "online",
  },
];

const ServiceCartHome = () => {
  const navigate = useNavigate();

  const handleCardClick = (slug) => navigate("/services", { state: { slug } });
  const handleButtonClick = (e, slug) => {
    e.stopPropagation();
    navigate("/booksession");
  };

  return (
    <div className="py-20 px-6 bg-[#FCF8F4]">
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
            onClick={() => handleCardClick(item.slug)}
            className={`cursor-pointer bg-white/30 backdrop-blur-md border border-gray-200 rounded-2xl p-6 shadow-md transition-transform hover:shadow-xl group hover:border-transparent hover:bg-gradient-to-br hover:from-white hover:to-gray-50`}
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
                onClick={(e) => handleButtonClick(e, item.slug)}
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
          onClick={() => navigate("/services")}
          className="bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold px-8 py-3 rounded-full shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-1"
        >
          Explore All Services
        </button>
      </motion.div>
    </div>
  );
};

export default ServiceCartHome;
