"use client";
import React from "react";
import { projectsData } from "@/assets/assets";
import ProjectCard from "@/components/ProjectCard";
import Navbar from "@/components/Navbar";

const Page = () => {
  return (
    <div className="flex flex-col gap-2">
      <Navbar />
      <div className="flex flex-col">
        <h1 className="font-semibold mt-40 p-10 text-4xl">Projects</h1>
        <div className="grid grid-cols-(--auto) my-2 gap-5 dark:text-black px-10">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
