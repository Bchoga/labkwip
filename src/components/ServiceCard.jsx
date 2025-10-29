import React from "react";

const ServiceCard = ({ iconPath, name, description }) => {
  return (
    <div className="rounded-md w-64 min-h-72 bg-white shadow-lg shadow-neutral-300 flex flex-col items-center mt-8 px-2 py-4 hover:scale-110 transition-all duration-500">
      <div id="icon" className="w-16 h-16 bg-green-100 rounded-full p-3 mt-3">
        <img src={iconPath} alt="" />
      </div>
      <h3 className="text-neutral-700 font-semibold">{name}</h3>
      <p className="text-neutral-600 font-light text-center mt-5">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;
