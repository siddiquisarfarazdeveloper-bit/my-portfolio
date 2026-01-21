import React from "react";
import { motion } from "framer-motion";


/* ===== SKILLS DATA ===== */
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaCloud,
  FaTools,
  FaMobileAlt,
} from "react-icons/fa";

const skillsData = [
  {
    icon: FaReact,
    title: "Frontend Development",
    description:
      "Building responsive and interactive user interfaces with modern frameworks.",
    tags: ["React", "Vue.js", "Angular", "TypeScript"],
  },
  {
    icon: FaNodeJs,
    title: "Backend Development",
    description:
      "Creating robust server-side applications and RESTful APIs.",
    tags: ["Node.js", "Express", "Django", "Laravel"],
  },
  {
    icon: FaDatabase,
    title: "Database Management",
    description:
      "Designing and optimizing databases for performance and scalability.",
    tags: ["MongoDB", "PostgreSQL", "MySQL", "Firebase"],
  },
  {
    icon: FaMobileAlt,
    title: "Mobile Development",
    description:
      "Building cross-platform mobile applications with modern tools.",
    tags: ["React Native", "Flutter"],
  },
  {
    icon: FaCloud,
    title: "Cloud & DevOps",
    description:
      "Deploying and managing applications in cloud environments.",
    tags: ["AWS", "Docker", "CI/CD"],
  },
  {
    icon: FaTools,
    title: "Tools & Technologies",
    description:
      "Essential tools and technologies used in my development workflow.",
    tags: ["Git", "GitHub", "VS Code", "Postman"],
  },
];

/* ===== COMPONENT ===== */
function Skills() {
  return (
    <motion.div
      id="skills"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="py-20 bg-dark-100"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4 text-white">
          My <span className="text-purple">Skills</span>
        </h2>

        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
          Technologies I work with to bring ideas to life
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="bg-dark-300 rounded-2xl p-6 hover:-translate-y-2 transition duration-300 cursor-pointer"
            >
              <div className="flex items-center mb-4">
                <skill.icon className="w-12 h-12 text-purple mr-6" />
                <h3 className="text-xl font-semibold text-white">
                  {skill.title}
                </h3>
              </div>

              <p className="text-gray-400 mb-4">
                {skill.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {skill.tags.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-dark-400 rounded-full text-sm text-gray-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Skills;
