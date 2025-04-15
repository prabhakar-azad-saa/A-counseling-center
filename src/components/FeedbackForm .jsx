import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { FiCheckCircle } from "react-icons/fi";

const FeedbackForm = () => {
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(null);
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setRating(0);
      setComment("");
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-[#FFF7E8] flex items-center justify-center px-4 py-10">
      <AnimatePresence>
        {!submitted ? (
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-xl p-8 rounded-3xl backdrop-blur-lg bg-white/70 border border-[#f5e6cd] shadow-[0_8px_40px_rgba(0,0,0,0.1)] space-y-6 relative"
          >
            <motion.h2
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-3xl font-extrabold text-center text-gray-800"
            >
              We'd Love Your Feedback 💬
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <p className="mb-3 text-gray-700 font-medium">Rate your experience</p>
              <div className="flex justify-center space-x-3">
                {[...Array(5)].map((_, i) => {
                  const current = i + 1;
                  return (
                    <motion.button
                      key={i}
                      type="button"
                      whileHover={{ scale: 1.3, rotate: -5 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setRating(current)}
                      onMouseEnter={() => setHovered(current)}
                      onMouseLeave={() => setHovered(null)}
                      className="focus:outline-none"
                    >
                      <FaStar
                        className={`text-3xl transition ${
                          current <= (hovered || rating)
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <label className="block mb-2 text-lg font-semibold text-gray-700">
                Your Comments
              </label>
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                rows="4"
                placeholder="Tell us what you liked or what we could improve..."
                className="w-full p-4 rounded-xl border border-[#f3e2c8] bg-white/60 text-gray-800 placeholder-gray-500 shadow-inner focus:outline-none focus:ring-2 focus:ring-[#EC744A] transition duration-300 resize-none"
              />
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="w-full bg-[#EC744A] text-white py-3 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition duration-300"
            >
              Submit Feedback
            </motion.button>
          </motion.form>
        ) : (
          <motion.div
            className="flex flex-col items-center justify-center p-10 rounded-3xl bg-white/80 shadow-2xl text-center max-w-md"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FiCheckCircle className="text-green-500 text-6xl mb-4" />
            <h3 className="text-2xl font-bold text-gray-800">Thank you!</h3>
            <p className="text-gray-600">We appreciate your feedback 💖</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FeedbackForm;
