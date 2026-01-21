import React from "react";
import { motion } from "framer-motion";
import sarfaraz from "../assets/sarfaraz.jpeg";
import { FaCode, FaLaptopCode, FaUserGraduate, FaReact } from "react-icons/fa";

const aboutInfo = [
  {
    icon: FaCode,
    title: "Web Development",
    description: "I build responsive websites using HTML, CSS, and JavaScript."
  },
  {
    icon: FaReact,
    title: "React",
    description: "Learning React to build modern frontend applications."
  },
  {
    icon: FaLaptopCode,
    title: "Full Stack",
    description: "Exploring backend with Node.js and MongoDB."
  },
  {
    icon: FaUserGraduate,
    title: "Learning",
    description: "Continuously improving my development skills."
  }
];


function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      id="about"
      className="py-20 bg-dark-200"
    >
      <div className="container mx-0 px-6">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-4">
          About
          <span className="text-purple">Me</span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Get to know more about my background and passion
        </p>

        {/* image + my journey */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* image */}
          <div className="md:w-1/2 rounded-2xl overflow-hidden">
            <motion.img
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.2 }}
              className="w-full h-full object-cover"
              src={sarfaraz}
              alt="Profile"
            />
          </div>

          {/* text content */}

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="md:w-1/2"
          >
            <div className="rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
              <p className="text-gray-300 mb-6">
                I am a fresher web developer with a strong interest in building
                modern and responsive web applications. I am learning and
                working with HTML, CSS, JavaScript, React, Next.js, and Tailwind
                CSS to create clean and user-friendly interfaces. 
              </p>
              <p className="text-gray-300 mb-12">
                I am a fresher web developer who enjoys learning and building
                things on the web. I focus on creating simple, clean, and
                responsive user interfaces using modern web technologies.
                 I like exploring new tools, watching development
                tutorials, and improving my problem-solving skills.
              </p>

              {/* cards */}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {
                aboutInfo.map((data , index) => (
                    <div key={index} className="bg-dark-300 rounded-2xl p-6
                    transition-transform duration-300 hover:translate-y-2 cursor-pointer">
                        <div className="text-purple text-4xl mb-4">
                             <data.icon/>
                        </div>

                        <h3 className="text-xl font-semibold mb-3">{data.title}</h3>
                        <p className="text-gray-400">{data.description}</p>
                    </div>
                ))
              } 
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
