import React from "react";
import { useInView } from "react-intersection-observer";
import "../../index.css";

const ServicesCard = ({ icons, title, subTitle }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`p-4 bg-white text-primary rounded-lg shadow-md transition-transform duration-700 ease-out transform ${
        inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      <div className="flex items-center mb-4">
        <div className="mr-4">{icons}</div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p>{subTitle}</p>
    </div>
  );
};

export default ServicesCard;
