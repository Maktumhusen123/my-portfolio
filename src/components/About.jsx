import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="bg-white py-16 px-6 text-center" id="about">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-gray-800 mb-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>

      <motion.p
        className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        I'm a working professional with hands-on experience in{" "}
        <span className="font-semibold text-blue-600">
          Application Performance Monitoring (APM)
        </span>{" "}
        using tools like{" "}
        <span className="font-semibold text-blue-600">AppDynamics</span>. I also
        run a{" "}
        <a
          href="https://www.youtube.com/@LearnwithMaktum"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-blue-600 underline hover:text-blue-800"
        >
          YouTube channel
        </a>{" "}
        focused on academic content (1st to 10th std), which saw great growth
        during the pandemic.
        <br />
        <br />
        Currently, I'm expanding my skills in modern web development and
        exploring exciting technologies like{" "}
        <span className="text-blue-600 font-semibold">AI/ML</span>. I'm
        passionate about continuous learning and creating content that educates
        and inspires. Let's build something awesome together!
      </motion.p>

      {/* Resume Section */}
      <motion.div
        className="max-w-xl mx-auto text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <hr className="my-6 border-gray-300" />
        <a
          href="https://drive.google.com/file/d/1ZGFXe92uGHAjXxJJ5P92uNwZkdq6wph4/view?usp=drive_link"
          download
          className="inline-block bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition"
        >
          📄 Download Resume
        </a>
      </motion.div>
    </section>
  );
};

export default About;
