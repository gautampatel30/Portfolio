import React from "react";
import { useInView } from "react-intersection-observer";
import "../../index.css";
import TestimonialCard from "./TestimonialCard"; // Assuming you have a separate card component

// Import local images
import HrushikeshImage from "../../assets/Hrushikesh.jpeg";
import AkashImage from "../../assets/Akash.jpeg";
import ParthImage from "../../assets/Parth.jpeg";
import VirajImage from "../../assets/Viraj.jpeg";

const testimonialsData = [
  {
    name: "Akash Shah",
    position: "Sr FullStack Software Developer",
    testimony: "Gautam's expertise in cloud computing and DevOps is outstanding. His ability to deliver high-quality work consistently is truly remarkable.",
    image: AkashImage,
  },
  {
    name: "Parth Nayak",
    position: "Advisory Application Developer",
    testimony: "Gautam has an incredible attention to detail and problem-solving skills. Working with him has been a fantastic experience.",
    image: ParthImage,
  },
  {
    name: "Hrushikesh Shah",
    position: "Solutions Architect II",
    testimony: "Gautam's deep knowledge of AWS and cloud architecture has significantly benefited our projects. He's a valuable team member.",
    image: HrushikeshImage,
  },
  {
    name: "Viraj Gandhi",
    position: "Test Lead/ Senior/ Intermediate QA",
    testimony: "Gautam's proficiency in CI/CD pipelines and container orchestration has greatly enhanced our deployment processes. He's an exceptional colleague.",
    image: VirajImage,
  },
];

const Testimonials = () => {
  const [testimonialsRef, testimonialsInView] = useInView({ triggerOnce: false, threshold: 0.1 });

  return (
    <div ref={testimonialsRef} className={`fade-in ${testimonialsInView ? 'show' : ''} p-6 bg-gray-100 rounded-2xl shadow-lg`}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonialsData.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
