import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaYoutube,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";

const socialLinks = [
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/maktumhusen/",
    color: "text-blue-700 hover:text-blue-900",
  },
  {
    icon: FaGithub,
    href: "https://github.com/Maktumhusen123",
    color: "text-gray-800 hover:text-black",
  },
  {
    icon: FaYoutube,
    href: "https://www.youtube.com/@LearnwithMaktum",
    color: "text-red-600 hover:text-red-700",
  },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/maktumhusen619/",
    color: "text-pink-500 hover:text-pink-600",
  },
  {
    icon: FaFacebook,
    href: "https://www.facebook.com/maktum.paras",
    color: "text-blue-800 hover:text-blue-900",
  },
];

const Contact = () => {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_e1ixai8",
        "template_qa99nx8",
        form.current,
        "kCkl6bEfdRbRTI-MR"
      )
      .then(
        () => {
          setStatusMessage("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setStatusMessage("❌ Failed to send message. Try again later.");
        }
      );
  };

  useEffect(() => {
    if (statusMessage) {
      const timer = setTimeout(() => setStatusMessage(""), 5000);
      return () => clearTimeout(timer);
    }
  }, [statusMessage]);

  return (
    <motion.section
      className="bg-white pt-16 pb-8 px-6"
      id="contact"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
        Contact Me
      </h2>

      <motion.div
        className="max-w-xl mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.15 }}
      >
        <motion.p
          className="text-gray-700 mb-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Got a question, project idea, or just want to say hi? Reach out to me
          on any of the platforms below!
        </motion.p>

        <div className="flex justify-center gap-6 mb-8 text-2xl">
          {socialLinks.map(({ icon: Icon, href, color }, i) => (
            <motion.a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${color} transition-transform`}
              whileHover={{ scale: 1.2 }}
            >
              <Icon />
            </motion.a>
          ))}
        </div>

        <motion.form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col gap-4 text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="border border-gray-300 px-4 py-2 rounded-md"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="border border-gray-300 px-4 py-2 rounded-md"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            className="border border-gray-300 px-4 py-2 rounded-md"
            required
          />
          <input
            type="hidden"
            name="time"
            value={new Date().toLocaleString()}
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Send
          </motion.button>
        </motion.form>

        {statusMessage && (
          <motion.p
            className="mt-4 text-green-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {statusMessage}
          </motion.p>
        )}
      </motion.div>
    </motion.section>
  );
};

export default Contact;
