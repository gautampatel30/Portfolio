import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import "../../index.css";

// Function to apply the random letter effect
const randomLetterEffect = (text, setText) => {
  const theLetters = "abcdefghijklmnopqrstuvwxyz#%&^+=-";
  const speed = 15; // ms per frame
  const increment = 2; // frames per step, must be >2

  let clen = text.length;
  let si = 0;
  let stri = 0;
  let block = "";
  let fixed = "";

  (function rustle(i) {
    setTimeout(function () {
      if (--i) rustle(i);
      nextFrame(i);
      si = si + 1;
    }, speed);
  })(clen * increment + 1);

  function nextFrame(pos) {
    for (let i = 0; i < clen - stri; i++) {
      const num = Math.floor(theLetters.length * Math.random());
      const letter = theLetters.charAt(num);
      block = block + letter;
    }
    if (si === increment - 1) {
      stri++;
    }
    if (si === increment) {
      fixed = fixed + text.charAt(stri - 1);
      si = 0;
    }
    setText(fixed + block);
    block = "";
  }
};

const CertificationCard = ({ badge, title, subTitle, link }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [buttonText, setButtonText] = useState("View Certificate");

  const handleMouseEnter = () => {
    randomLetterEffect("View Certificate", setButtonText);
  };

  useEffect(() => {
    if (inView) {
      randomLetterEffect("View Certificate", setButtonText);
    }
  }, [inView]);

  return (
    <div
      ref={ref}
      className={`flex flex-col p-4 bg-white rounded-2xl shadow-md border border-gray-200 transition-transform duration-700 ease-out transform ${
        inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      <div className="flex flex-col flex-grow mb-4">
        <h4 className="text-lg font-semibold text-gray-900">{title}</h4>
        {subTitle && <p className="text-sm text-gray-600">{subTitle}</p>}
        <span className="text-sm text-gray-500 block mt-1">{badge}</span>
      </div>
      {link && (
        <div className="mt-auto">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="py-2 px-4 bg-gray-200 bg-opacity-50 text-gray-800 font-semibold border border-gray-400 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center"
            onMouseEnter={handleMouseEnter}
          >
            {buttonText}
          </a>
        </div>
      )}
    </div>
  );
};

export default CertificationCard;
