import React from "react";

const Footer = () => {
  return (
    <div className="bg-pink-800 mt-20">
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8 m-auto py-10">
        <div className="flex gap-3 justify-between items-center flex-wrap">
          <a
            href="https://monomousumi.com"
            className="cursor-pointer text-gray-50"
            target="_blank"
            rel="noreferrer"
          >
            Monomousumi
          </a>
          <a
            href="https://monomousumi.com"
            className="cursor-pointer text-gray-50"
            target="_blank"
            rel="noreferrer"
          >
            GuideLines
          </a>
          <a
            href="https://monomousumi.com/disclaimer"
            className="cursor-pointer text-gray-50"
            target="_blank"
            rel="noreferrer"
          >
            Privacy Policy
          </a>
          <a
            href="https://monomousumi.com/team"
            className="cursor-pointer text-gray-50"
            target="_blank"
            rel="noreferrer"
          >
            Terms of Sale
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
