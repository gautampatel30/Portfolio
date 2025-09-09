import React from "react";

const ExperienceCard = ({ title, subTitle, des }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="text-sm text-gray-700">{subTitle}</p>
      <ul className="mt-2 space-y-2 list-disc list-inside">
        {des.map((desc, index) => (
          <li key={index} className="text-gray-600">
            {desc.map((textItem, textIndex) => (
              <span
                key={textIndex}
                className={textItem.bold ? "font-bold" : ""}
              >
                {textItem.text}
              </span>
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceCard;
