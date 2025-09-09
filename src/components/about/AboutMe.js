import React from "react";
import { useInView } from "react-intersection-observer";
import { FaMapMarkerAlt, FaBriefcase } from "react-icons/fa";
import handWaveLogo from "../../assets/emoji.png"; // Ensure the hand wave logo is in this path
import "../../index.css"; // Ensure to import the CSS file for animations

const AboutMe = () => {
  const [aboutMeRef, aboutMeInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <div
      ref={aboutMeRef}
      className={`transition-opacity duration-1000 ${
        aboutMeInView ? 'opacity-100' : 'opacity-0'
      } p-6 bg-gray-100 rounded-2xl shadow-lg`}
    >
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 text-gray-700 px-6 border-r-[1px] border-r-gray-200 flex items-center relative">
          <div className="py-6 relative z-10">
            <h2 className="font-semibold mb-4 text-gray-900 text-3xl flex items-center">
              <img
                src={handWaveLogo}
                alt="Hand Wave Logo"
                className="waving-hand mr-2"
              />
              Hello! I'm Gautam Patel
            </h2>
            <p className="text-base leading-6 text-gray-700">
              Full Stack Developer based in Toronto with expertise in building
              responsive web applications. Skilled in JavaScript, React, Node.js,
              Terraform, and cloud technologies. Strong background in DevOps
              practices, creating seamless user experiences and scalable back-end
              solutions.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
          <ul className="flex flex-col gap-4">
            <li className="flex items-center gap-4">
              <FaBriefcase className="text-designColor text-xl" />
              <div className="flex flex-col">
                <span className="font-semibold text-gray-900">
                  Eager to Contribute to a Growing Team
                </span>
              </div>
            </li>
            <li className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-designColor text-xl" />
              <div className="flex flex-col">
                <span className="font-semibold text-gray-900">
                  Toronto, Canada [open to relocate]
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
