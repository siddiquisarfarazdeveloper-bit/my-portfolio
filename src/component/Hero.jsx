import React from "react";
import { motion } from "framer-motion";
import Sarfaraz from "../assets/sarfaraz.jpeg"


function Hero() {
  return (
    <motion.div
      id="home"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="min-h-screen flex items-center justify-center pt-20 pb-16 
      bg-gradient-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a]"
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">

        {/* LEFT */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-5 text-white">
            Hi, I'm <span className="text-purple">Siddiqui Sarfaraz</span>
          </h1>

          <h2 className="text-2xl md:text-4xl font-semibold mb-5 typewriter">
            Full Stack Developer
          </h2>

          <p className="text-lg text-gray-300 mb-8">
            I am learning to create modern web applications using React, Node.js, and MongoDB.
          </p>

          <div className="flex space-x-5">
            <a className="px-6 py-3 bg-purple rounded-lg font-medium hover:bg-purple-700 transition duration-300">View Work</a>
            <a className="px-6 py-3 border border-purple rounded-lg font-medium hover:bg-purple/20 transition duration-purple-300">Contact Me</a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple to-pink opacity-70"></div>

            <motion.img
              animate={{y:[0 , -20, 0]}}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "loop",
                ease:"easeInOut"
              }}
              className="relative rounded-full w-full h-full object-cover object-top z-10 animate-float"
              src={Sarfaraz}
              alt="Profile" 
         />
          </div>
        </div>
        
      </div>
    </motion.div>
  );
}

export default Hero;
