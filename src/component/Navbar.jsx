import React, { useState } from "react";
import { FaXmark } from "react-icons/fa6";
import { FaBars } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="fixed w-full z-50 bg-dark-100/90 backdrop-blur-sm py-4 px-8 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        <div>
          <Link to="/" className="text-3xl font-bold text-white">
            Siddiqui
            <span className="text-purple">Sarfaraz</span>
            <div className="w-4 h-4 bg-purple rounded-full"></div>
          </Link>
        </div>

        <div className="hidden md:flex space-x-10">
          <Link
            to="/"
            className="relative text-white/80 transition duration-300 hover:text-purple group"
          >
            <span>Home</span>
            <span
              className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300
            group-hover:w-full"
            ></span>
          </Link>

          <Link
            to="/about"
            className="relative text-white/80 transition duration-300 hover:text-purple group"
          >
            <span>About</span>
            <span
              className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300
            group-hover:w-full"
            ></span>
          </Link>

          <Link
            to="/skills"
            className="relative text-white/80 transition duration-300 hover:text-purple group"
          >
            <span>Skills</span>
            <span
              className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300
            group-hover:w-full"
            ></span>
          </Link>

          <Link
            to="/project"
            className="relative text-white/80 transition duration-300 hover:text-purple group"
          >
            <span>Projects</span>
            <span
              className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300
            group-hover:w-full"
            ></span>
          </Link>

          <Link
            to="/contacts"
            className="relative text-white/80 transition duration-300 hover:text-purple group"
          >
            <span>Contact</span>
            <span
              className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300
            group-hover:w-full"
            ></span>
          </Link>
          
        </div>

        {/* <a
              href="#experience"
              className="relative text-white/80 transition duration-300 hover:text-purple group"
            >
              <span>Experience</span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300
              group-hover:w-full"></span>
            </a> */}
        {/* mobile button  */}
        <div className="md:hidden">
          {showMenu ? (
            <FaXmark
              onClick={() => setShowMenu(!showMenu)}
              className="text-2xl cursor-pointer"
            />
          ) : (
            <FaBars
              onClick={() => setShowMenu(!showMenu)}
              className="text-2xl cursor-pointer"
            />
          )}
        </div>
      </div>

      {/* mobile menus */}

      {
        showMenu && (
          <div className="md:hidden mt-4 bg-dark-300 h-screen rounded-lg p-4 flex flex-col space-y-4 text-center justify-center">
            <Link onClick={() => setShowMenu(!showMenu)}
            to="/"
            className="relative text-white/80 transition duration-300 hover:text-purple group"
          >
            <span>Home</span>
            
          </Link>

          <Link onClick={() => setShowMenu(!showMenu)}
            to="/about"
            className="relative text-white/80 transition duration-300 hover:text-purple group"
          >
            <span>About</span>
           
          </Link>

          <Link onClick={() => setShowMenu(!showMenu)}
            to="/skills"
            className="relative text-white/80 transition duration-300 hover:text-purple group"
          >
            <span>Skills</span>
            
          </Link>

          <Link onClick={() => setShowMenu(!showMenu)}
            to="/project"
            className="relative text-white/80 transition duration-300 hover:text-purple group"
          >
            <span>Projects</span>
            
          </Link>

          <Link onClick={() => setShowMenu(!showMenu)}
            to="/contact"
            className="relative text-white/80 transition duration-300 hover:text-purple group"
          >
            <span>Contact</span>
           
          </Link>
          </div>
        )
      }
    </nav>
  );
}

export default Navbar;
