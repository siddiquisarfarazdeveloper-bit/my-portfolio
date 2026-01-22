import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import Fitness from '../assets/fitness.png'; // imported image
import Portfolio from '../assets/portfolio1.png'
import Ecommerce from '../assets/eco.png'
import { FaArrowRight } from "react-icons/fa";


function Project() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false }}
      id="project"
      className="py-20 bg-dark-200"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">
          My <span className="text-purple">Project</span>
        </h2>

        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          A selection of my recent work
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

          <ProjectCard
            title="Ecommerce Website"
            description="A full-stack ecommerce website featuring product listings, shopping cart, secure user authentication, and payment gateway integration. Built with a modern UI, 
            fast performance, and scalable backend."
            image={Ecommerce}
            tech={["React", "Tailwind", "Node"]}
          />

          <ProjectCard
            title="Portfolio Website"
            description="A modern and fully responsive personal portfolio website showcasing my skills, projects, experience, and achievements with a clean UI,
             smooth animations, and optimized performance."
            image={Portfolio}
            tech={["React", "Tailwind"]}
          />

          {/* ✅ Fitness Image FIX */}
          <ProjectCard
            title="Fitness Tracker"
            description="A mobile fitness tracking app that helps users monitor workouts, track health metrics, set fitness goals, and analyze
             progress with real-time data and performance insights."
            image={Fitness} 
            tech={["React Native", "MySQL", "GraphQL"]}
          />
        </div>

        <div className="text-center mt-12">
          <a href="#" className="inline-flex items-center px-6 py-3 border border-purple rounded-lg
          font-medium hover:bg-purple/20 transition duration-300">
            <span>View More Project</span>
            <FaArrowRight className="ml-2"/>
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default Project;
