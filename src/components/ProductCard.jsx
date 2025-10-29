import React from "react";

const ProductCard = ({ imagePath, name, description, quoteLink }) => {
  return (
    <div className="w-72 min-h-80 bg-white shadow-lg shadow-neutral-300 rounded-md mt-8 flex flex-col items-center pb-4">
      <div id="top" className="w-ful h-2/3 object-cover overflow-hidden">
        <img src={imagePath} alt="" className="w-full" />
      </div>
      <div id="bottom" className="w-ful h-1/3 px-3 pb-5">
        <h3 className="text-neutral-700 font-semibold mt-2.5 text-center">
          {name}
        </h3>
        <p className="text-neutral-600 font-light text-center mt-5">
          {description}
        </p>
      </div>
      <a
        href={quoteLink}
        className="text-neutral-700 border border-green-600 rounded-2xl py-1 px-3 bg-white hover:bg-green-600 hover:text-white transition-all duration-300 mt-4"
      >
        Get Quote
      </a>
    </div>
  );
};

export default ProductCard;
