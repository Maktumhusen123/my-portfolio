import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="flex items-center justify-center text-center min-h-[50vh] px-4 pt-20 bg-gradient-to-br from-blue-100 to-blue-300">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Hi, I'm <span className="text-blue-600">Maktumhusen</span>
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl text-gray-700 max-w-xl mx-auto mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          IT professional and educational YouTuber, always exploring new
          technologies and growing through continuous learning.
        </motion.p>

        <motion.a
          href="#contact"
          className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
        >
          Let’s Connect
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
