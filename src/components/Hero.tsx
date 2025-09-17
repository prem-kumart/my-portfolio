import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

const Hero = () => {
  const MotionLink = motion.create(Link);
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen  flex  flex-col items-center justify-center gap-4">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        className="mb-4"
      >
        <Image
          src={assets.profile_img}
          alt="Hero Image"
          className="rounded-full w-32 border-1 border-black dark:border-white bg-white/90"
        />
      </motion.div>
      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-xl md:text-2xl mb-3 font-ovo"
      >
        Hi! I&apos;m Prem Kumar
      </motion.h3>
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-3xl sm:text-6xl lg:text-[66px] font-ovo"
      >
        Full Stack Devleoper based in New York , USA
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="max-w-2xl mx-auto font-ovo"
      >
        I create modern and responsive web applications that help businesses
        achieve their goals.
      </motion.p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <MotionLink
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          href="#contact"
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent"
        >
          Contact Me
          <Image
            src={assets.right_arrow_white}
            alt="right arrow"
            className="w-4"
          />
        </MotionLink>
        <MotionLink
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          href="/premkumar.pdf"
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black"
        >
          My Resume
          <Image src={assets.download_icon} alt="right arrow" className="w-4" />
        </MotionLink>
      </div>
    </div>
  );
};

export default Hero;
