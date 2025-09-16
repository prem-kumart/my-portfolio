"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { assets } from "@/assets/assets";
import { useTheme } from "next-themes";

const Navbar = () => {
  const { setTheme, theme } = useTheme();
  console.log(theme);
  const isDarkMode = theme == "dark" ? true : false;
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef<HTMLUListElement>(null);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const openMenu = () => {
    if (sideMenuRef.current)
      sideMenuRef.current.style.transform = "translateX(-16rem)";
  };

  const closeMenu = () => {
    if (sideMenuRef.current)
      sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, [isScroll]);

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
        <Image
          src={assets.header_bg_color}
          alt="background color"
          className="w-full"
        />
      </div>
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50  
            ${
              isScroll ? "bg-white/50 backdrop-blur-lg shadow-sm" : ""
            } dark:bg-darkTheme dark:shadow-white/20`}
      >
        <h1 className="font-bold text-2xl">Prem Kumar </h1>
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
            isScroll
              ? ""
              : "bg-white/50 shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"
          }`}
        >
          <li>
            <Link className="font-ovo" href="#top">
              Home
            </Link>
          </li>
          <li>
            <Link className="font-ovo" href="#about">
              About Me
            </Link>
          </li>
          {/* <li>
            <Link className="font-ovo" href="#services">
              Services
            </Link>
          </li> */}
          <li>
            <Link className="font-ovo" href="#projects">
              My Work
            </Link>
          </li>
          <li>
            <Link className="font-ovo" href="#contact">
              Contact Me
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <button
            onClick={() =>
              setTheme((prev) => (prev == "light" ? "dark" : "light"))
            }
          >
            {mounted && (
              <Image
                src={isDarkMode ? assets.sun_icon : assets.moon_icon}
                alt="dark mode icon"
                className="w-6"
              />
            )}
          </button>
          <Link
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-ovo dark:border-white/50 "
          >
            Contact
            {mounted && (
              <Image
                src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
                alt="arrow icon"
                className="w-3"
              />
            )}
          </Link>

          <button className="block md:hidden group" onClick={openMenu}>
            {mounted && (
              <Image
                src={isDarkMode ? assets.menu_white : assets.menu_black}
                alt="dark mode icon"
                className="w-6 group-hover:translate-x-2 duration-300"
              />
            )}
          </button>
        </div>

        {/* Mobile Menu  */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col
        gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-darkHover dark:text-white"
        >
          <div className="absolute top-6 right-6" onClick={closeMenu}>
            {mounted && (
              <Image
                src={isDarkMode ? assets.close_white : assets.close_black}
                alt="close icon"
                className="cursor-pointer w-5"
              />
            )}
          </div>
          <li>
            <Link className="font-ovo" href="#top" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link className="font-ovo" href="#about" onClick={closeMenu}>
              About Me
            </Link>
          </li>
          <li>
            <Link className="font-ovo" href="#services" onClick={closeMenu}>
              Services
            </Link>
          </li>
          <li>
            <Link className="font-ovo" href="#projects" onClick={closeMenu}>
              My Work
            </Link>
          </li>
          <li>
            <Link className="font-ovo" href="#contact" onClick={closeMenu}>
              Contact Me
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
