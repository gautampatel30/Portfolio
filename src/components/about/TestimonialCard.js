import React from "react";
import { useInView } from "react-intersection-observer";
import "../../index.css";

const TestimonialCard = ({ name, position, testimony, image }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`p-4 bg-white rounded-2xl shadow-md border border-gray-200 transition-transform duration-700 ease-out transform ${
        inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      <div className="flex items-center mb-4">
        <div className="flex-shrink-0 mr-4">
          <img src={image} alt={`${name} profile`} className="w-10 h-10 rounded-full" />
        </div>
        <div>
          <h4 className="text-xl font-semibold text-black">{name}</h4>
          <p className="text-sm text-gray-500">{position}</p>
        </div>
      </div>
      <p className="text-primary text-lg italic">"{testimony}"</p>
    </div>
  );
};

export default TestimonialCard;
