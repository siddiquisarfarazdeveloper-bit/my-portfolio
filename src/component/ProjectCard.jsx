import React from "react";

function ProjectCard({ title, description, image, tech }) {
  return (
    <div className="bg-dark-300 rounded-2xl overflow-hidden hover:-translate-y-2 transition duration-300 cursor-pointer">

      <img 
        src={image} 
        alt={title} 
        className="w-full h-60 object-cover transition-transform duration-300 hover:scale-105" 
      />

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-400 mb-3">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((item, index) => (
            <span key={index} className="text-sm bg-gray-700 px-2 py-1 rounded">
              {item}
            </span>
          ))}
        </div>

        {/* ✅ GAP FIXED HERE */}
        <div className="flex gap-2 mt-4">
          <a href="#" className="flex-1 text-center px-4 py-2 bg-purple rounded-lg font-medium hover:bg-purple-700 transition duration-300">
            View Demo
          </a>

          <a href="#" className="flex-1 text-center px-4 py-2 border border-purple font-medium rounded-lg hover:bg-purple/20 transition duration-300">
            Code
          </a>
        </div>
      </div>

    </div>
  );
}

export default ProjectCard;
