import React from "react";
import { FaGithubSquare, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1300px] mx-auto flex justify-between p-6 md:p-20 text-sm md:text-lg mt-12">
      <div className="space-y-4">
        <h3 className="text-2xl text-gray-700 dark:text-gray-300 font-semibold">M.Junior</h3>

        <div className="flex flex-row gap-6 text-gray-700 dark:text-gray-300 text-4xl">
          <a
            href="https://github.com/sm-junior0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithubSquare />
          </a>
          <a
            href="https://www.instagram.com/sm_juni01/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </div>
      </div>

      <p className="text-gray-800 dark:text-gray-300">@ 2025 Manene Junior</p>
    </div>
  );
};

export default Footer;
