import React from "react";

const Footer = () => {
  return (
    <div className="bg-pink-800 mt-20">
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8 m-auto py-5">
        <div className="flex gap-3 justify-between items-center flex-wrap">
          <p className="cursor-pointer text-gray-50">Terms and Conditions</p>
          <p className="cursor-pointer text-gray-50"> Privacy Policy</p>
          <p className="cursor-pointer text-gray-50">Terms of Sale</p>
          <p className="cursor-pointer text-gray-50">Refund Policy</p>
          <p className="cursor-pointer text-gray-50">Contact</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
