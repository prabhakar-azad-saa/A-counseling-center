import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import frameImage from '../img/Frame83.png';

const Ready = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/booksession');
  };

  return (
    <div
      className="relative w-full bg-cover bg-center "
      style={{ backgroundImage: `url(${frameImage})` }}
    >
      <div className="absolute inset-0  bg-gradient-to-t from-teal-900/70 via-blue-900/50 to-transparent"></div>

      <div className="relative flex flex-col items-center justify-center text-center py-24 px-6 sm:px-10 z-10">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white text-3xl sm:text-4xl  font-bold tracking-tight"
        >
          Ready to Start Your Journey?
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-white text-base sm:text-lg  max-w-2xl mt-4 font-light font-poppins"
        >
          Book your consultation today and take the first step toward a healthier, happier mind.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(255,255,255,0.4)' }}
          whileTap={{ scale: 0.95 }}
          onClick={handleClick}
          className="mt-8 px-8 py-3 text-lg rounded-full bg-[#EC744A] text-white font-semibold shadow-lg hover:bg-teal-400 transition duration-300"
        >
          Schedule Consultation
        </motion.button>
      </div>
    </div>
  );
};

export default Ready;
