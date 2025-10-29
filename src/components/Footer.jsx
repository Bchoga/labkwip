import React from "react";

const Footer = () => {
  return (
    <div
      className="optimumWidth min-h-80 bg-green-700 text-white text-center font-light flex flex-col justify-center items-center px-4"
      id="footer"
    >
      <div id="about">
        <p>
          We are a Supplier of all your Electronic Lab Equipment and more. What
          makes us different is our Unparalleled Customer Service, Commitment to
          Excellence and Love for Quality.
        </p>
      </div>
      <div id="contactDetals" className="mt-3">
        <p className="font-semibold">
          Call Us On: +263777110056 | +263719110057
        </p>
      </div>
      <div id="copyright" className="mt-3">
        <p>LABKWIP©2025 Website Created By fullStack-engineers.inc</p>
      </div>
    </div>
  );
};

export default Footer;
