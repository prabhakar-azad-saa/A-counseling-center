// // import React from "react";
// // import Colors from "./Colors";

// // const Features = ({ heading, title, description, features }) => {
// //   return (
    
// //     <div className="bg-[#FCF8F4] py-5 px-4 sm:px-6 lg:px-8 ">
// //       <div className="max-w-6xl mx-auto">
// //         {/* Header Section */}
// //         <div className="text-center mb-16">
// //           <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
// //             {title}
// //           </h1>
// //           <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto">
// //             {description}
// //           </p>
// //         </div>

// //         {/* Features Section */}
// //         <div className="relative flex flex-col md:flex-row justify-center items-center md:gap-0 mt-20">
// //           {features.map((feature, index) => {
// //             // Middle card (index 1) gets special styling
// //             const isMiddleCard = index === 1;

// //             return (
             
// //               <div
// //                 key={index}
// //                 className={`
// //     ${
// //       isMiddleCard
// //         ? "bg-gradient-to-br from-emerald-400 to-teal-600 rounded-3xl shadow-xl p-12 md:p-16 flex flex-col items-center text-center w-full md:w-[45%] md:z-20 md:mt-[-30px] transition-all hover:shadow-2xl min-h-[420px] md:min-h-[480px]"
// //         : "bg-white rounded-3xl shadow-lg p-8 md:p-12 flex flex-col items-center text-center border border-gray-100 transition-all hover:shadow-xl w-full md:w-[35%] md:mt-[10px] md:mb-[60px] z-10 min-h-[280px] md:min-h-[320px]"
// //     }
// //     ${index === 0 ? "md:mr-[-15px]" : ""}
// //     ${index === 2 ? "md:ml-[-15px]" : ""}
// //   `}
// //               >
// //                 <div
// //                   className={`${
// //                     isMiddleCard ? "mb-8 h-28 w-28" : "mb-6 h-20 w-20"
// //                   } flex items-center justify-center`}
// //                 >
// //                   <img
// //                     src={feature.imgSrc}
// //                     alt={feature.altText}
// //                     className="max-h-full max-w-full"
// //                   />
// //                 </div>
// //                 <h2
// //                   className={`${
// //                     isMiddleCard
// //                       ? "text-3xl font-bold text-white mb-5"
// //                       : "text-2xl font-bold text-gray-900 mb-4"
// //                   }`}
// //                 >
// //                   {feature.heading}
// //                 </h2>
// //                 <p
// //                   className={`${
// //                     isMiddleCard
// //                       ? "text-white text-lg"
// //                       : "text-gray-600 text-base"
// //                   }`}
// //                 >
// //                   {feature.description}
// //                 </p>
// //               </div>
// //             );
// //           })}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Features;




// import React, { useEffect } from "react";
// import { motion, useAnimation } from "framer-motion";
// import { useInView } from "react-intersection-observer";

// const Features = ({ heading, title, description, features }) => {
//   const controls = useAnimation();
//   const [ref, inView] = useInView({
//     threshold: 0.1,
//     triggerOnce: false
//   });

//   useEffect(() => {
//     if (inView) {
//       controls.start("visible");
//     } else {
//       controls.start("hidden");
//     }
//   }, [controls, inView]);

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//         delayChildren: 0.3
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut"
//       }
//     }
//   };

//   const middleCardVariants = {
//     hidden: { y: 40, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.8,
//         ease: [0.16, 1, 0.3, 1]
//       }
//     }
//   };

//   const pulseAnimation = {
//     scale: [1, 1.02, 1],
//     transition: {
//       duration: 4,
//       repeat: Infinity,
//       ease: "easeInOut"
//     }
//   };

//   return (
//     <div 
//       className="bg-[#FCF8F4] py-36 px-4 sm:px-6 lg:px-8 overflow-hidden"
//       style={{
//         backgroundImage: "radial-gradient(circle at 10% 20%, rgba(236, 253, 245, 0.5) 0%, rgba(240, 250, 255, 0.5) 90%)"
//       }}
//     >
//       <div className="max-w-6xl mx-auto">
//         {/* Header Section */}
//         <motion.div 
//           className="text-center mb-16"
//           initial={{ opacity: 0, y: 20 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.8 }}
//         >
//           <motion.h1 
//             className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
//             whileHover={{ scale: 1.02 }}
//           >
//             {title}
//           </motion.h1>
//           <motion.p 
//             className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto"
//             animate={pulseAnimation}
//           >
//             {description}
//           </motion.p>
//         </motion.div>

//         {/* Features Section */}
//         <motion.div 
//           ref={ref}
//           className="relative flex flex-col md:flex-row justify-center items-center md:gap-0 mt-20"
//           variants={containerVariants}
//           initial="hidden"
//           animate={controls}
//         >
//           {features.map((feature, index) => {
//             const isMiddleCard = index === 1;

//             return (
//               <motion.div
//                 key={index}
//                 onClick={feature.onClick}
//                 className={`
//                   ${
//                     isMiddleCard
//                       ? "bg-gradient-to-br from-emerald-400 to-teal-600 rounded-3xl shadow-xl p-12 md:p-16 flex flex-col items-center text-center w-full md:w-[45%] md:z-20 md:mt-[-30px] transition-all hover:shadow-2xl min-h-[420px] md:min-h-[480px]"
//                       : "bg-white rounded-3xl shadow-lg p-8 md:p-12 flex flex-col items-center text-center border border-gray-100 transition-all hover:shadow-xl w-full md:w-[35%] md:mt-[10px] md:mb-[60px] z-10 min-h-[280px] md:min-h-[320px]"
//                   }
//                   ${index === 0 ? "md:mr-[-15px]" : ""}
//                   ${index === 2 ? "md:ml-[-15px]" : ""}
//                 `}
//                 variants={isMiddleCard ? middleCardVariants : itemVariants}
//                 whileHover={{ 
//                   scale: isMiddleCard ? 1.02 : 1.01,
//                   transition: { duration: 0.3 }
//                 }}
//                 whileTap={{ scale: 0.98 }}
//               >
//                 <motion.div
//                   className={`${
//                     isMiddleCard ? "mb-8 h-28 w-28" : "mb-6 h-20 w-20"
//                   } flex items-center justify-center`}
//                   whileHover={{ 
//                     rotate: 5,
//                     scale: 1.1,
//                     transition: { type: "spring", stiffness: 300 }
//                   }}
//                 >
//                   <img
//                     src={feature.imgSrc}
//                     alt={feature.altText}
//                     className="max-h-full max-w-full"
//                   />
//                 </motion.div>
//                 <motion.h2
//                   className={`${
//                     isMiddleCard
//                       ? "text-3xl font-bold text-white mb-5"
//                       : "text-2xl font-bold text-gray-900 mb-4"
//                   }`}
//                   whileHover={{ 
//                     color: isMiddleCard ? "#f0fdf4" : "#047857",
//                     transition: { duration: 0.3 }
//                   }}
//                 >
//                   {feature.heading}
//                 </motion.h2>
//                 <motion.p
//                   className={`${
//                     isMiddleCard
//                       ? "text-white text-lg"
//                       : "text-gray-600 text-base"
//                   }`}
//                   animate={isMiddleCard ? pulseAnimation : {}}
//                 >
//                   {feature.description}
//                 </motion.p>
                
//                 {/* Floating decorative elements for middle card */}
//                 {isMiddleCard && (
//                   <>
//                     <motion.div 
//                       className="absolute top-4 left-4 w-3 h-3 rounded-full bg-white opacity-30"
//                       animate={{
//                         y: [0, -10, 0],
//                         opacity: [0.3, 0.6, 0.3]
//                       }}
//                       transition={{
//                         duration: 4,
//                         repeat: Infinity,
//                         ease: "easeInOut"
//                       }}
//                     />
//                     <motion.div 
//                       className="absolute bottom-6 right-6 w-4 h-4 rounded-full bg-white opacity-40"
//                       animate={{
//                         y: [0, 8, 0],
//                         opacity: [0.4, 0.7, 0.4]
//                       }}
//                       transition={{
//                         duration: 5,
//                         repeat: Infinity,
//                         ease: "easeInOut",
//                         delay: 1
//                       }}
//                     />
//                   </>
//                 )}
//               </motion.div>
//             );
//           })}
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Features;

import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: 'fas fa-brain',
    title: 'Brain Health',
    points: [
      'Cognitive Behavioral Therapy',
      'Neuroplasticity Exercises',
      'Memory Enhancement',
      'Brain-Gut Connection',
    ],
    image:
      'https://readdy.ai/api/search-image?query=Advanced%203D%20visualization%20of%20brain%20during%20meditation%20showing%20alpha%20wave%20patterns%20and%20mindfulness%20states%2C%20professional%20neuroscience%20illustration%20with%20calming%20blue%20tones%2C%20cutting%20edge%20medical%20imaging%20on%20pure%20white%20background&width=400&height=300&seq=67893&orientation=landscape',
    color: 'from-blue-400 to-blue-600',
  },
  {
    icon: 'fas fa-microscope',
    title: 'Neuroscience Insights',
    points: [
      'Latest Brain Research',
      'Mental Health Studies',
      'Neurological Assessments',
      'Brain-Based Therapies',
    ],
    image:
      'https://readdy.ai/api/search-image?query=High%20resolution%20medical%20scan%20of%20brain%20activity%20showing%20detailed%20EEG%20wave%20patterns%20and%20neurological%20readings%2C%20professional%20healthcare%20visualization%20with%20advanced%20diagnostic%20imaging%2C%20modern%20scientific%20aesthetic%20on%20pristine%20white%20background&width=400&height=300&seq=67892&orientation=landscape',
    color: 'from-purple-400 to-purple-600',
  },
  {
    icon: 'fas fa-dna',
    title: 'Mental Wellness',
    points: [
      'Mindfulness Practices',
      'Emotional Intelligence',
      'Stress Resilience',
      'Mental Fitness Programs',
    ],
    image:
      'https://readdy.ai/api/search-image?query=Professional%203D%20rendering%20of%20human%20brain%20neural%20networks%20with%20detailed%20synaptic%20connections%2C%20blue%20and%20white%20color%20scheme%2C%20clean%20medical%20visualization%20style%20with%20anatomically%20accurate%20structures%20on%20pure%20white%20background%2C%20high%20end%20scientific%20illustration&width=400&height=300&seq=67891&orientation=landscape',
    color: 'from-green-400 to-green-600',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.8,
      ease: 'easeOut',
    },
  }),
};

const Features = () => {
  return (
    <div className="bg-[#FCF8F4] py-20 px-4 sm:px-6 md:px-12 lg:px-24">
      <div className="text-center max-w-3xl mx-auto mb-16 px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800"
        >
          Neuro-Inspired Wellness
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-gray-600 mt-4 text-base sm:text-lg"
        >
          Unlock the power of the brain and mind—backed by science, designed for serenity.
        </motion.p>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {features.map((item, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 flex flex-col"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 sm:h-56 md:h-48 lg:h-56 object-cover rounded-t-3xl"
            />
            <div className="p-6 flex flex-col justify-between flex-grow">
              <div className="text-3xl text-blue-700 mb-4">
                <i className={item.icon}></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {item.title}
              </h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                {item.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Features;
