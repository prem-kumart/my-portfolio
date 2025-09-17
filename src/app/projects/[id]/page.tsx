import Navbar from "@/components/Navbar";
import React from "react";
import { use } from "react";
import { assets, projectsData } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";

const ProjectPage = ({ params }: { params: Promise<{ id: number }> }) => {
  const { id } = use(params);
  const projectDetails = projectsData.find(
    (project) => Number(project.id) == id
  );
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="w-full max-w-7xl  mx-auto flex flex-col md:flex-row items-center justify-center gap-12 p-4 mt-40">
        <Image
          src={projectDetails?.image ?? "./placeholder.png"}
          alt="project image"
          sizes="(max-width: 200px) 100vw, (max-width: 400px) 50vw, 33vw"
          className="w-xl rounded-3xl"
        />
        <div className="self-start flex flex-col gap-8">
          <div>
            <h2 className="font-semibold">{projectDetails?.title}</h2>
            <p className="tracking-tight">{projectDetails?.description}</p>
          </div>
          <div>
            <h3 className="font-semibold">Tool Used</h3>
            <div className="flex flex-row gap-2 flex-wrap">
              {projectDetails?.tools?.map((tool, id) => {
                return (
                  <div key={id} className="tracking-tight">
                    {id < projectDetails.tools.length - 1 ? tool + "," : tool}
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <Link
              href={projectDetails?.github ?? ""}
              className="w-48 px-3 py-3 border border-white rounded-full bg-black text-white flex items-center justify-center gap-2 dark:bg-transparent hover:bg-white/80 hover:text-black hover:border-black"
            >
              GitHub Link
              <Image
                src={assets.right_arrow_white}
                alt="right arrow"
                className="w-4"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
