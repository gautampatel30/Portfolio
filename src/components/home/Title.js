import React from "react";
import { useInView } from "react-intersection-observer";
import "../../index.css";

const Title = ({ title, subTitle, icon }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  return (
    <div ref={ref} className={`fade-in ${inView ? 'show' : ''} flex items-center space-x-2 md:space-x-4 mb-6`}>
      {icon && <div className="flex-shrink-0">{icon}</div>}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{title}</h2>
      {subTitle && <span className="text-lg md:text-xl font-semibold text-designColor">{subTitle}</span>}
    </div>
  );
};

export default Title;
