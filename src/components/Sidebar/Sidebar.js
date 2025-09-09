import React from "react";
import { FaUser } from "react-icons/fa";
import { IoIosPaper } from "react-icons/io";
import { AiFillGithub } from "react-icons/ai";
import "./Sidebar.css";

const Sidebar = ({ setAbout, setResume, setProjects, about, resume, projects }) => {
  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scroll effect
    });
  };

  return (
    <div className="sidebar-container">
      <div
        className={`sidebar-icon ${about ? "active" : ""}`}
        onClick={() => {
          setAbout(true);
          setResume(false);
          setProjects(false);
          scrollToTop(); // Scroll to top when About is clicked
        }}
      >
        <FaUser className="icon" />
        <span className="text">About</span>
      </div>
      <div
        className={`sidebar-icon ${resume ? "active" : ""}`}
        onClick={() => {
          setAbout(false);
          setResume(true);
          setProjects(false);
          scrollToTop(); // Scroll to top when Resume is clicked
        }}
      >
        <IoIosPaper className="icon" />
        <span className="text">Resume</span>
      </div>
      <div
        className={`sidebar-icon ${projects ? "active" : ""}`}
        onClick={() => {
          setAbout(false);
          setResume(false);
          setProjects(true);
          scrollToTop(); // Scroll to top when Projects is clicked
        }}
      >
        <AiFillGithub className="icon" />
        <span className="text">Projects</span>
      </div>
    </div>
  );
};

export default Sidebar;

