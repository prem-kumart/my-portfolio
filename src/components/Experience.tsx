import React from "react";
import { motion } from "motion/react";

const Experience = () => {
  // Example experience data
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "BK Solutions",
      year: "2023 - Present",
      description: "Building modern web applications with React and Next.js.",
    },
    {
      title: "Java Developer",
      company: "RK Software",
      year: "2019 - 2022",
      description:
        "Assisted in full stack development and learned agile workflows.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="experience"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center text-5xl font-ovo"
      >
        Professional Experience
      </motion.h2>
      <div className="relative border-l-4 border-black dark:border-white p-8 ">
        {experiences.map((exp, idx) => (
          <div key={idx} className="mb-12 relative">
            <span className="absolute -left-5 top-8 w-4 h-4 bg-black dark:bg-white rounded-full border-2 border-white"></span>
            <div className="bg-white dark:bg-[#11001f] p-6 rounded-lg">
              <h3 className="text-xl font-semibold">{exp.title}</h3>
              <p className="text-sm text-gray-500">
                {exp.company} &bull; {exp.year}
              </p>
              <p className="mt-2 text-gray-700 dark:text-gray-300">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Experience;
