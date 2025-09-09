import React from "react";
import { FiMail } from "react-icons/fi";
import { MdPhone } from "react-icons/md";
import { useInView } from "react-intersection-observer";
import "../../index.css";

const ContactModal = ({ isVisible, onClose }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false, // Allow animation to trigger every time the component comes into view
  });

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
      <div
        ref={ref}
        className={`fade-in ${inView ? 'show' : ''} bg-white bg-opacity-90 backdrop-blur-lg rounded-lg p-6 relative z-10 max-w-md w-full`}
      >
        <button
          className="absolute top-2 right-2 text-black font-bold text-lg"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-xl font-semibold mb-4 text-gray-900">Contact Me</h2>
        <div className="flex items-center gap-4 mb-2">
          <MdPhone className="text-designColor text-2xl" />
          <span className="text-gray-800">+1 416-669-0206</span>
        </div>
        <div className="flex items-center gap-4">
          <FiMail className="text-designColor text-2xl" />
          <a
            href="mailto:patelgautam762@gmail.com"
            className="text-gray-800 hover:underline"
          >
            patelgautam762@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
