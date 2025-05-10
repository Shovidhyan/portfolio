import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

import project1 from "../assets/images/Projects/img1.png";
import project2 from "../assets/images/Projects/img2.png";
import project3 from "../assets/images/Projects/img3.png";
import person_image from "../assets/images/Projects/person.png"; // Updated person image

const projectsData = [
  {
    id: 1,
    title: 'Cloud Kitchen Website',
    image: project1,
    description: 'A modern, responsive website for a kitchen service business.',
    codeUrl: 'https://github.com/Shovidhyan/laxnas-kitchen.git',
    demoUrl: 'https://laxnas-kitchen-frontend-project.onrender.com/'
  },
  {
    id: 2,
    title: 'Indian Sign Language Translator',
    image: project2,
    description: 'An application that translates Indian Sign Language to text and vice versa.',
    codeUrl: "https://github.com/Shovidhyan/Text-to-Speech.git",
    demoUrl: "https://shovidhyan.github.io/Text-to-Speech/"
  },
  {
    id: 3,
    title: 'Task Master To-Do List',
    image: project3,
    description: 'A feature-rich to-do list application with reminders and categorization.',
    codeUrl: "https://github.com/Shovidhyan/Task-Master.git",
    demoUrl: "https://shovidhyan.github.io/Task-Master/"
  }
];

const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isInView, setIsInView] = useState(false);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === projectsData.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? projectsData.length - 1 : prev - 1));
  };

  const goToSlide = (index: React.SetStateAction<number>) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    if (isInView) {
      const timer = setInterval(() => {
        nextSlide();
      }, 6000);
      return () => clearInterval(timer);
    }
  }, [isInView, currentSlide]);

  return (
    <div className="container mx-auto px-6 md:px-8">
      <div className="flex flex-col lg:flex-row gap-12 items-start">
        {/* Person Image Section */}
        <motion.div 
          className="lg:w-1/3 relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="sticky top-32">
            <img 
              src={person_image}
              alt="Developer"
              className="w-full h-auto rounded-lg shadow-xl"
            />
            <div className="absolute bottom-4 left-4 bg-navy-900 text-white p-4 rounded-lg shadow-lg">
              <p className="text-lg font-semibold">MERN Stack Developer</p>
              <p className="text-sm opacity-80">Crafting Digital Solutions</p>
            </div>
          </div>
        </motion.div>

        {/* Projects Section */}
        <div className="lg:w-2/3">
          <h2 className="section-title">Projects</h2>
          <h3 className="section-subtitle">MY CREATION</h3>
          
          <motion.div 
            className="relative overflow-hidden bg-gray-100 rounded-xl p-8 md:p-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            onViewportEnter={() => setIsInView(true)}
            onViewportLeave={() => setIsInView(false)}
          >
            <div className="flex items-center justify-between flex-col md:flex-row gap-12 md:gap-8">
              <motion.div 
                className="relative md:w-1/2"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <img 
                  src={projectsData[currentSlide].image} 
                  alt={projectsData[currentSlide].title}
                  className="w-full h-auto max-h-[400px] object-contain rounded-xl shadow-lg"
                />
              </motion.div>
              
              <motion.div 
                className="md:w-1/2"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-3xl font-bold text-navy-900 mb-6">
                  {projectsData[currentSlide].title}
                </h3>
                <p className="text-gray-600 mb-8">
                  {projectsData[currentSlide].description}
                </p>
                <div className="flex gap-4">
                  <a href={projectsData[currentSlide].codeUrl} className="flex items-center gap-2 text-navy-900 hover:text-blue-600 transition-colors">
                    <Code className="w-5 h-5" />
                    <span>Code</span>
                  </a>
                  <a href={projectsData[currentSlide].demoUrl} className="flex items-center gap-2 text-navy-900 hover:text-blue-600 transition-colors">
                    <ExternalLink className="w-5 h-5" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </motion.div>
            </div>

            <div className="flex justify-center mt-8 gap-2">
              {projectsData.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-navy-900 scale-125' : 'bg-gray-300'
                  }`}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </div>

            <button
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-colors duration-300"
              onClick={prevSlide}
            >
              <ChevronLeft className="w-6 h-6 text-navy-900" />
            </button>
            <button
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-colors duration-300"
              onClick={nextSlide}
            >
              <ChevronRight className="w-6 h-6 text-navy-900" />
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
