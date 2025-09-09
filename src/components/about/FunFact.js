import React from "react";
import { useInView } from "react-intersection-observer";
import { FaMedal, FaAward, FaTrophy } from "react-icons/fa";
import FunFactCard from "./FunFactCard"; // Ensure the correct path to FunFactCard
import "../../index.css"; // Ensure to import the CSS file for animations

const FunFact = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <section
      ref={ref}
      className={`p-6 bg-gray-100 rounded-2xl shadow-lg transition-opacity duration-1000 ${
        inView ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <FunFactCard icon={<FaMedal className="text-designColor text-4xl" />} des="AWS Certified developer" />
        <FunFactCard icon={<FaAward className="text-designColor text-4xl" />} des="Humber Industry Project Winner" />
        <FunFactCard icon={<FaTrophy className="text-designColor text-4xl" />} des="20+ Finished Projects" />
      </div>
    </section>
  );
};

export default FunFact;
