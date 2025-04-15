import React from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Sophia Lee",
    title: "Product Manager",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    quote:
      "Working with A+ Counseling was a game-changer. I found clarity, direction, and peace in my life again.",
    rating: 5,
  },
  {
    name: "Ethan Walker",
    title: "Software Engineer",
    image: "https://randomuser.me/api/portraits/men/64.jpg",
    quote:
      "The sessions are well-structured, personalized, and truly impactful. Highly recommended!",
    rating: 5,
  },
  {
    name: "Amelia Diaz",
    title: "University Student",
    image: "https://randomuser.me/api/portraits/women/21.jpg",
    quote:
      "This team understands mental health deeply. Their empathy and support changed my life.",
    rating: 5,
  },
];

const TestimonialCard = ({ testimonial, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, duration: 0.6, type: "spring" }}
      className="bg-white/20 backdrop-blur-xl border border-white/30 bg-gradient-to-tr from-[#0f2027] via-[#203a43] to-[#2c5364] rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out w-full max-w-md mx-auto flex flex-col items-center text-center"
    >
      <img
        src={testimonial.image}
        alt={testimonial.name}
        className="w-20 h-20 rounded-full border-4 border-white shadow-md mb-4 object-cover"
      />
      <h3 className="text-xl font-semibold text-white">{testimonial.name}</h3>
      <p className="text-sm text-white/80">{testimonial.title}</p>
      <div className="flex justify-center mt-2 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <FaStar key={i} className="text-yellow-400 mx-0.5" />
        ))}
      </div>
      <p className="text-white text-sm leading-relaxed italic">
        "{testimonial.quote}"
      </p>
    </motion.div>
  );
};

const TestimonialSection = () => {
  return (
    <section className="bg-[#FCF8F4]  py-20 px-6">
      <h2 className="text-4xl md:text-5xl font-bold text-black text-center mb-16">
        What Our Clients Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto ">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            testimonial={testimonial}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;



// import React from "react";
// import { motion } from "framer-motion";
// import { FaAward, FaUserShield, FaHandshake } from "react-icons/fa";

// const testimonials = [
//   {
//     name: "Aarav Sharma",
//     comment:
//       "The counseling sessions have truly changed my perspective. Thank you for the guidance!",
//     role: "Student",
//   },
//   {
//     name: "Meera Patel",
//     comment:
//       "I felt heard and safe during every session. Highly professional and empathetic support.",
//     role: "Working Professional",
//   },
// ];

// const achievements = [
//   {
//     title: "Certified Mental Health Specialist",
//     icon: <FaUserShield size={40} />,
//   },
//   {
//     title: "Affiliated with National Psychology Council",
//     icon: <FaHandshake size={40} />,
//   },
//   {
//     title: "Best Counseling Service 2024",
//     icon: <FaAward size={40} />,
//   },
// ];

// const TrustAndAssurance = () => {
//   return (
//     <section className="bg-[#fdf6f0] py-16 px-6 md:px-12">
//       {/* Section Header */}
//       <motion.h2
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="text-4xl font-bold text-center text-[#333]"
//       >
//         Why Trust Us?
//       </motion.h2>

//       {/* Testimonials */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
//         {testimonials.map((t, i) => (
//           <motion.div
//             key={i}
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: i * 0.2 }}
//             className="bg-white shadow-xl rounded-2xl p-6 border-l-4 border-[#EC744A]"
//           >
//             <p className="text-gray-700 italic mb-3">"{t.comment}"</p>
//             <div className="font-semibold text-[#EC744A]">{t.name}</div>
//             <div className="text-sm text-gray-500">{t.role}</div>
//           </motion.div>
//         ))}
//       </div>

//       {/* Certifications & Awards */}
//       <div className="mt-16 text-center">
//         <h3 className="text-2xl font-semibold text-[#333] mb-6">
//           Our Credentials
//         </h3>
//         <div className="flex flex-wrap justify-center gap-8">
//           {achievements.map((item, i) => (
//             <motion.div
//               key={i}
//               whileHover={{ scale: 1.1 }}
//               className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg w-60"
//             >
//               <div className="text-[#EC744A] mb-3">{item.icon}</div>
//               <div className="font-semibold text-[#333]">{item.title}</div>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* Privacy & Confidentiality */}
//       <div className="mt-16 text-center max-w-3xl mx-auto bg-white rounded-xl p-6 shadow-md">
//         <h3 className="text-xl font-bold text-[#333] mb-4">Your Privacy Matters</h3>
//         <p className="text-gray-600">
//           We uphold strict confidentiality with all personal information and session details.
//           Our practice adheres to the highest ethical standards to ensure your privacy is protected
//           at all times.
//         </p>
//       </div>
//     </section>
//   );
// };

// export default TrustAndAssurance;
