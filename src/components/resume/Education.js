import React from "react";
import { useInView } from "react-intersection-observer";
import ResumeCard from "./ResumeCard";
import "../../index.css";

// Data for Education section
const educationData = [
  {
    badge: "Jan 2023 - Aug 2023",
    title: "Postgrad. Cert. in Cloud Computing",
    subTitle: "Humber College, Toronto",
    des: [
      "DevOPS for Cloud Computing (CCGC 5504)",
      "Cloud Solution Architecture (CCGC 5500)",
      "Cloud Security (CCGC 5501)",
      "Automation (CCGC 5502)",
      "Big Data Analytics (CCGC 5503)",
      "Operating Systems (CCGC 5000)"
    ],
  },
  {
    badge: "Jan 2022 - Dec 2022",
    title: "Bachelor in Computer Science",
    subTitle: "Algoma University, Toronto",
    des: [
      "Database Programming (COSC 2307)",
      "Mobile Application Development I (COSC 3596)",
      "Applied Networks (COSC 3807)",
      "Data Structures II (COSC 2007)",
      "Artificial Intelligence (COSC 3117)",
      "Mobile Technology: Design and Use (ITEC 2706)",
      "Micro-controller Programming and Interfacing (COSC 4426)",
      "Software Engineering (COSC 3506)"
    ],
  }
];

const Education = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  return (
    <div
      ref={ref}
      className={`p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 space-y-4 fade-in ${
        inView ? "opacity-100" : "opacity-0"
      }`}
    >
      {educationData.map((item, index) => (
        <ResumeCard key={index} {...item} />
      ))}
    </div>
  );
};

export default Education;
