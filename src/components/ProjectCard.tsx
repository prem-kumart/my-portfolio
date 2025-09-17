import Link from "next/link";
import React from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "motion/react";
import { assets } from "@/assets/assets";
const ProjectCard = ({
  project,
}: {
  project: {
    id: number;
    title: string;
    description: string;
    bgImage: string;
    image: StaticImageData;
    tools: string[];
    github: string;
  };
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="aspect-square rounded-lg relative curosr-pointer group"
      style={{
        background: `url(${project.bgImage}) center/cover no-repeat`,
      }}
    >
      <Link href={`projects/${project.id}`}>
        <div
          className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between
            duration-500 group-hover:bottom-7"
        >
          <div>
            <h2 className="font-semibold text-sm">{project.title}</h2>
          </div>
          <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
            <Image src={assets.send_icon} alt="send icon" className="w-5" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
