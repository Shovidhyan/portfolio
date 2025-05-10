import React from 'react';
import { motion } from 'framer-motion';
import { content } from "../content";

const AboutBubble = () => {
  const { hero } = content as any;

  return (
    <motion.div 
      className="speech-bubble bg-white p-6 rounded-lg shadow-md max-w-md"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <p className="text-gray-700 leading-relaxed">
        In full-stack and AI development, I craft smart, real-world solutions — from real-time apps to intelligent systems — built to make an impact.
      </p>
      <motion.a
        href="#contact"
        className="btn btn-primary mt-4 inline-block"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Hire Me
      </motion.a>
    </motion.div>
  );
};

export default AboutBubble;