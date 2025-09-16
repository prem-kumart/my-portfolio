import Navbar from "@/components/Navbar";
import React from "react";
import { use } from "react";
import { projectsData } from "@/assets/assets";
import Image from "next/image";

const ProjectPage = ({ params }: { params: Promise<{ id: number }> }) => {
  const { id } = use(params);
  const projectDetails = projectsData.find(
    (project) => Number(project.id) == id
  );
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="w-full max-w-3xl  mx-auto flex flex-col md:flex-row items-center justify-center gap-12 p-4 mt-40">
        <Image
          src={projectDetails?.Image ?? "./placeholder.png"}
          alt="project image"
          sizes="(max-width: 200px) 100vw, (max-width: 400px) 50vw, 33vw"
          className="w-xl rounded-3xl"
        />
        <div className="self-start">
          <h2>{projectDetails?.title}</h2>
          <p>{projectDetails?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
