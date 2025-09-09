import React from "react";
import { useInView } from "react-intersection-observer";
import "../../index.css";

// Import the GitHub and Figma logo images
import githubLogo from "../../assets/github.png";
import figmaLogo from "../../assets/figma.png"; // Replace with the correct path to your Figma logo

const ProjectsCard = ({ title, description, githubUrl, architectUrl, frontEnd, backEnd, cloudDevOps }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`p-6 bg-white text-primary rounded-2xl shadow-lg hover:shadow-xl transition-transform duration-700 ease-out transform ${
        inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      } flex flex-col justify-between h-full`}
    >
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-sm mb-2">{description}</p>
        <ul className="text-sm mb-4 list-disc pl-5">
          <li>
            <strong>Front End:</strong> {frontEnd.join(", ")}
          </li>
          <li>
            <strong>Back End:</strong> {backEnd.join(", ")}
          </li>
          <li>
            <strong>Cloud & DevOps:</strong> {cloudDevOps.join(", ")}
          </li>
        </ul>
      </div>
      <div className="mt-4 flex flex-col sm:flex-row sm:items-start sm:space-x-2 sm:justify-start">
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block py-2 px-4 bg-gray-200 bg-opacity-50 text-gray-800 font-semibold border border-gray-400 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center"
          >
            <img src={githubLogo} alt="GitHub Logo" className="w-6 h-6" />
          </a>
        )}
        {architectUrl && (
          <a
            href={architectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block py-2 px-4 bg-gray-200 bg-opacity-50 text-gray-800 font-semibold border border-gray-400 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center"
          >
            <img src={figmaLogo} alt="Figma Logo" className="w-6 h-6" />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectsCard;
