import React from "react";

const Footer = () => {
  return (
    <div className="bg-pink-800 mt-20">
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8 m-auto py-10">
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
          <div className="grid gap-4">
            <p className="text-xl text-gray-50 border-b-gray-50 border-b-2">
              Social Links
            </p>
            <a
              href="facebook.com/Monomousumi"
              className="cursor-pointer text-gray-50"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
            <a
              href="https://monomousumi.com/team"
              className="cursor-pointer text-gray-50"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://twitter.com/monomousumi_mk"
              className="cursor-pointer text-gray-50"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://www.youtube.com/channel/UCBztOuTpBK2ONIBLlNo0Nkw"
              className="cursor-pointer text-gray-50"
              target="_blank"
              rel="noreferrer"
            >
              Youtube
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
