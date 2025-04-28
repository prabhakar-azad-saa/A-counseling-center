// import React from "react";
// import { motion } from "framer-motion";
// import { FaStar } from "react-icons/fa";

// const testimonials = [
//   {
//     name: "Rajesh Sharma",
//     title: "IT Consultant",
//     image: "https://randomuser.me/api/portraits/men/75.jpg",
//     quote:
//       "A+ Counseling helped me gain clarity and strength during a difficult time. Truly life-changing experience.",
//     rating: 5,
//   },
//   {
//     name: "Neha Verma",
//     title: "Marketing Executive",
//     image: "https://randomuser.me/api/portraits/women/52.jpg",
//     quote:
//       "The sessions were impactful and tailored to my needs. I felt heard, understood, and empowered.",
//     rating: 5,
//   },
//   {
//     name: "Ankit Patel",
//     title: "College Student",
//     image: "https://randomuser.me/api/portraits/men/33.jpg",
//     quote:
//       "Great support and professional guidance. It changed the way I look at challenges in my life.",
//     rating: 5,
//   },
// ];

// const TestimonialCard = ({ testimonial, index }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ delay: index * 0.2, duration: 0.6, type: "spring" }}
//       viewport={{ once: true }}
//       className="bg-white/20 backdrop-blur-xl border border-white/30 bg-gradient-to-tr from-[#1c1c1c] via-[#2f2f2f] to-[#3d3d3d] rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out w-full max-w-md mx-auto flex flex-col items-center text-center"
//     >
//       <img
//         src={testimonial.image}
//         alt={testimonial.name}
//         className="w-20 h-20 rounded-full border-4 border-white shadow-md mb-4 object-cover"
//       />
//       <h3 className="text-xl font-semibold text-white">{testimonial.name}</h3>
//       <p className="text-sm text-white/80">{testimonial.title}</p>
//       <div className="flex justify-center mt-2 mb-4">
//         {[...Array(testimonial.rating)].map((_, i) => (
//           <FaStar key={i} className="text-yellow-400 mx-0.5" />
//         ))}
//       </div>
//       <p className="text-white text-sm leading-relaxed italic">
//         "{testimonial.quote}"
//       </p>
//     </motion.div>
//   );
// };

// const TestimonialSection = () => {
//   return (
//     <section className="bg-[#FCF8F4] py-20 px-6">
//       <h2 className="text-4xl md:text-5xl font-bold text-black text-center mb-16">
//         What Our Clients Say
//       </h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
//         {testimonials.map((testimonial, index) => (
//           <TestimonialCard
//             key={index}
//             testimonial={testimonial}
//             index={index}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default TestimonialSection;



import React from "react";
import { motion } from "framer-motion";
import { FaAward, FaUserShield, FaHandshake } from "react-icons/fa";

const testimonials = [
  {
    name: "Jane Smith",
    comment:
      "The counseling sessions have truly changed my perspective. Thank you for the guidance!",
    role: "Student",
  },
  {
    name: "john doe",
    comment:
      "I felt heard and safe during every session. Highly professional and empathetic support.",
    role: "Working Professional",
  },
];

const achievements = [
  {
    title: "Certified Mental Health Specialist",
    icon: <FaUserShield size={36} />,
  },
  // {
  //   title: "Affiliated with National Psychology Council",
  //   icon: <FaHandshake size={36} />,
  // },
  // {
  //   title: "Best Counseling Service 2024",
  //   icon: <FaAward size={36} />,
  // },
];

const TrustAndAssurance = () => {
  return (
    <section className="bg-gradient-to-b from-[#fdf6f0] to-[#fff] max-w-[1800px] mx-auto py-20 px-6 md:px-12">
      {/* Header */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl  font-bold text-center text-[#333]"
      >
        Trust. Care. Assurance.
      </motion.h2>

      {/* Testimonials */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once: true }}
            className="bg-white border-l-8 border-[#EC744A] shadow-xl rounded-xl p-6 hover:shadow-2xl transition-shadow duration-300"
          >
            <p className="text-gray-800 text-base italic leading-relaxed mb-4">
              “{t.comment}”
            </p>
            <div className="font-bold text-[#EC744A] text-lg">{t.name}</div>
            <div className="text-sm text-gray-500">{t.role}</div>
          </motion.div>
        ))}
      </div>

      {/* Achievements / Certifications */}
      <div className="mt-20 text-center">
        <h3 className="text-2xl font-semibold text-[#333] mb-8">
          Recognized & Trusted
        </h3>
        <div className="flex flex-wrap justify-center gap-8">
          {achievements.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center gap-3 p-8  bg-white rounded-xl shadow-md border border-gray-200 w-64 transition-all"
            >
              <div className="text-[#EC744A] bg-orange-100 p-3 rounded-full shadow">
                {item.icon}
              </div>
              <div className="font-medium text-gray-800 text-center">
                {item.title}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Privacy Note */}
      <div className="mt-20 bg-white rounded-2xl max-w-3xl mx-auto p-8 shadow-xl border-l-4 border-[#EC744A] text-center">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-[#333] mb-4"
        >
          Your Privacy Matters
        </motion.h3>
        <p className="text-gray-600 leading-relaxed text-md">
          We uphold strict confidentiality regarding all personal information and counseling sessions. 
          Your trust is our highest priority, and our practices comply with ethical and legal standards.
        </p>
      </div>
    </section>
  );
};

export default TrustAndAssurance;
