import React from "react";

const Footer = () => {
  return (
    <div className="bg-pink-800 mt-20">
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8 m-auto py-5">
        <div className="flex gap-4 justify-between items-center flex-wrap">
          <a
            href="https://monomousumi.com"
            className="cursor-pointer text-gray-50"
            target="_blank"
            rel="noreferrer"
          >
            Monomousumi
          </a>
          <a
            href="https://monomousumi.com/quarterly-creative-writing-competition"
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
            href="https://alekhya.org"
            className="cursor-pointer text-gray-50"
            target="_blank"
            rel="noreferrer"
          >
            Books
          </a>
          <a
            href="https://weavermag.com"
            className="cursor-pointer text-gray-50"
            target="_blank"
            rel="noreferrer"
          >
            Magazine
          </a>
          <a
            href="https://monomousumi.com/media"
            className="cursor-pointer text-gray-50"
            target="_blank"
            rel="noreferrer"
          >
            Media
          </a>
          <div>
            <p className="text-xl text-gray-50 border-b-gray-50 border-b-2 mb-5">
              Social Links
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com/Monomousumi"
                className="cursor-pointer text-gray-50"
                target="_blank"
                rel="noreferrer"
              >
                <i className="text-2xl fa-brands fa-facebook"></i>
              </a>
              <a
                href="https://www.instagram.com/monomousumi_writer"
                className="cursor-pointer text-gray-50"
                target="_blank"
                rel="noreferrer"
              >
                <i className="text-2xl fa-brands fa-instagram"></i>
              </a>
              <a
                href="https://in.linkedin.com/company/monomousumi"
                className="cursor-pointer text-gray-50"
                target="_blank"
                rel="noreferrer"
              >
                <i className="text-2xl fa-brands fa-linkedin"></i>
              </a>
              <a
                href="https://www.youtube.com/channel/UCBztOuTpBK2ONIBLlNo0Nkw"
                className="cursor-pointer text-gray-50"
                target="_blank"
                rel="noreferrer"
              >
                <i className="text-2xl fa-brands fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
