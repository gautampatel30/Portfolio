import React from "react";
import { FaPhone } from "react-icons/fa";
import { SiGmail, SiLinkedin } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-white via-gray-100 to-gray-200 text-gray-900 py-4 w-full">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center space-x-2 mb-4 md:mb-0">
          <span>Connect with me:</span>
          <div className="flex items-center space-x-4">
            <a
              href="https://www.linkedin.com/in/gautumpatel/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 hover:text-blue-700 duration-300"
            >
              <SiLinkedin size={24} style={{ color: "#0A66C2" }} />
            </a>
            <a
              href="mailto:patelgautam762@gmail.com"
              className="text-gray-900 hover:text-red-600 duration-300"
            >
              <SiGmail size={24} style={{ color: "#D44638" }} />
            </a>
            <a
              href="tel:+14166690206"
              className="text-gray-900 hover:text-green-600 duration-300"
            >
              <FaPhone size={24} style={{ color: "#25D366" }} />
            </a>
          </div>
        </div>
        <p className="text-sm text-center md:text-left">
          &copy; 2024 Gautam Patel. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
