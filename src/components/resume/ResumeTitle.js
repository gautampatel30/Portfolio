import React from "react";
import { useInView } from "react-intersection-observer";
import "../../index.css";

const ResumeTitle = ({ title, icon }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  return (
    <div ref={ref} className={`flex items-center space-x-2 fade-in ${inView ? 'show' : ''}`}>
      <div className="text-designColor text-2xl">
        {icon}
      </div>
      <h2 className="text-primary text-2xl font-semibold">
        {title}
      </h2>
    </div>
  );
};

export default ResumeTitle;
