import React from "react";

const FunFactCard = ({ icon, des }) => {
  return (
    <div className="flex items-center p-4 bg-white text-primary rounded-lg shadow-md">
      <div className="mr-4">{icon}</div>
      <p className="text-gray-700">{des}</p>
    </div>
  );
};

export default FunFactCard;
