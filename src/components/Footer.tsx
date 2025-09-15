import React from "react";
import Image from "next/image";
import Link from "next/link";
import { assets } from "@/assets/assets";
import { ThemeContext } from "@/app/page";

const Footer = () => {
  const { isDarkMode, setIsDarkMode } = React.useContext(ThemeContext);
  return (
    <div className="mt-20">
      <div className="text-center">
        <div className="w-max flex items-center gap-2 mx-auto">
          <Image
            src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
            alt="email"
            className="w-6"
          />
          prem.tala95@gmail.com
        </div>
      </div>

      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>&copy; 2025 </p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <Link target="_blank" href="">
              Github
            </Link>
          </li>
          <li>
            <Link target="_blank" href="">
              LinkedIn
            </Link>
          </li>
          <li>
            <Link target="_blank" href="">
              Twitter
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
