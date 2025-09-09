// src/components/Certification.js
import React from "react";
import { useInView } from "react-intersection-observer";
import CertificationCard from "./CertificationCard";
import "../../index.css"; // Ensure you have your CSS for animations

const certificationData = [
  {
    badge: "Jul 2023",
    title: "AWS Solutions Architect Associate",
    subTitle: "",
    link: "https://www.credly.com/badges/3de2e431-92ed-48d5-885e-afc5bf7f7ab0"
  },
  {
    badge: "Nov 2020",
    title: "GCP Platform Business Professional Accreditation",
    subTitle: "",
    link: "https://skillshop.exceedlms.com/profiles/27603df6b82b4e6ab5cff01d6142a522"
  },
  {
    badge: "Nov, 2020",
    title: "IBM Cloud Essentials",
    subTitle: "",
    link: "https://www.credly.com/badges/316de506-2791-4c5a-a55a-446e4c2d2c5a"
  }
];

const Certification = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 space-y-4 ${inView ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {certificationData.map((item, index) => (
          <CertificationCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Certification;
