import React from "react";
import { useInView } from "react-intersection-observer";
import "../../index.css";

const ResumeCard = ({ badge, title, subTitle, des, link }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-transform duration-700 ease-out transform ${
        inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      <header className="flex flex-col sm:flex-row justify-between sm:items-center mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <span className="text-sm text-gray-500 block sm:inline mt-1">{badge}</span>
          <p className="text-sm text-gray-600 mt-1">{subTitle}</p>
        </div>
      </header>
      <ul className="list-disc pl-5 text-gray-700">
        {des.map((point, index) => (
          <li key={index} className="mb-1">
            {Array.isArray(point) ? (
              point.map((part, idx) =>
                part.bold ? (
                  <strong key={idx} className="font-bold">{part.text}</strong>
                ) : (
                  <span key={idx}>{part.text}</span>
                )
              )
            ) : (
              point
            )}
          </li>
        ))}
      </ul>
      {link && (
        <footer className="mt-4">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block py-1 px-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded-md shadow-md hover:from-indigo-600 hover:to-indigo-400 transition duration-300 ease-in-out"
          >
            View Certificate
          </a>
        </footer>
      )}
    </div>
  );
};

export default ResumeCard;
