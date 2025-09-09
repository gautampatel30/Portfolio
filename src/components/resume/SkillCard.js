import React from "react";
import { useInView } from "react-intersection-observer";
import "../../index.css";

const SkillCard = ({ category, details }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`bg-white p-2 rounded-lg shadow-md transition-opacity duration-500 ease-in-out ${
        inView ? "opacity-100" : "opacity-0"
      }`}
    >
      <strong className="text-primary">{category}: </strong>
      <p className="text-primary inline">{details}</p>
    </div>
  );
};

export default SkillCard;
