import React from "react";
import { motion } from "framer-motion";
import {
  FaDribbble,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      id="contacts"
      className="py-20 bg-dark-100"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">
          Get In
          <span className="text-purple">Touch</span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Let's talk!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* contact Form */}
          <div>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  className="w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none"
                  type="text"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  className="w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none"
                  type="email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">
                  Your Message
                </label>
                <textarea
                  className="w-full h-40 bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none"
                  type="message"
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-purple rounded-lg font-medium
                hover:bg-purple-700 transition duration-300 cursor-pointer"
              >
                Send
              </button>
            </form>
          </div>

          <div>
            {/* Contact Information */}
            <div className="flex py-9">
              <div className="space-y-8 ">
                <div className="flex items-start">
                  <div className="text-purple text-2xl mr-4">
                    <FaMapMarkerAlt />
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold mb-2">Location</h3>
                    <p className="text-gray-400">Navi Mumbai Taloja Phase 1</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-purple text-2xl mr-4">
                    <FaEnvelope />
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold mb-2">Email</h3>
                    <p className="text-gray-400">
                      Siddiquisarfaraz844@gmail.com
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-purple text-2xl mr-4">
                    <FaPhone />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">Phone</h3>
                    <p className="text-gray-400">+91 9819650692</p>
                  </div>
                </div>

                <div className="pt-4">
                  <h3 className="text-lg font-semibold mb-4">Follow Me</h3>
                  <div className="flex space-x-4">
                    <a
                      href="https://github.com/khankavi088-ai"
                      className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center
                  text-purple hover:bg-purple hover:text-white transition duration-300"
                    >
                      <FaGithub />
                    </a>

                    <a
                      href="https://www.linkedin.com/in/sarfaraz-siddiqui-2b36a1345/"
                      className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center
                  text-blue hover:bg-blue hover:text-white transition duration-300"
                    >
                      <FaLinkedin />
                    </a>

                    {/* <a
                      href="/"
                      className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center
                  text-blue hover:bg-blue hover:text-white transition duration-300"
                    >
                      <FaTwitter />
                    </a> */}

                    {/* <a
                      href="/"
                      className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center
                  text-pink hover:bg-pink hover:text-white transition duration-300"
                    >
                      <FaDribbble />
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6 mt-20 max-w-5xl">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1885.342192812108!2d73.09016043829064!3d19.077609380427845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ea0bc5ffabd9%3A0x8c640b190c476fbf!2sTaloja%20Phase%201%2C%20Taloja%20Panchanand%2C%20Taloja%2C%20Navi%20Mumbai%2C%20Maharashtra%20410208!5e0!3m2!1sen!2sin!4v1770095951041!5m2!1sen!2sin"
          width="100%"
          height="600"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Company Location Map"
          className="rounded-lg shadow-md"
        ></iframe>
      </div>
    </motion.div>
  );
}

export default Contact;
