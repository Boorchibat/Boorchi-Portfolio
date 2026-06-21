"use client";

import { Button } from "@/components/ui/button";
import { getProjects } from "@/lib/projects/GetProjs";
import { useEffect, useState } from "react";
import { ProjectCard } from "../components/Project-card/PorjCard";
import CircularProgress from "@mui/material/CircularProgress";

const filterButtons = [
  "All",
  "Full stack",
  "Frontend",
  "HTML/CSS",
  "Javascript",
  "AI",
];

const Page = () => {
  const [data, setData] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);

        const projects = await getProjects<Project[]>();
        setData(projects);
      } catch (err) {
        console.error("Failed to fetch projects:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="flex flex-col h-auto mb-[50px]">
      <div className="flex flex-col">
        <h1 className="mt-[20px] bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent text-[25px]">
          Portfolio
        </h1>

        <h1 className="mt-[10px] text-3xl md:text-[34px] text-white font-bold">
          My Projects
        </h1>

        <h1 className="text-base md:text-[20px] text-gray-400 w-full max-w-[900px]">
          A curated collection of my recent work, demonstrating my skills and
          expertise in full-stack web development. Starting from my first
          projects to my latest developments.
        </h1>

        <div className="flex gap-x-3 mt-[20px] overflow-x-auto pb-2 scrollbar-none">
          {filterButtons.map((label) => (
            <Button
              key={label}
              className="border border-gray-500 bg-transparent text-gray-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white shrink-0"
            >
              {label}
            </Button>
          ))}
        </div>

        {loading ? (
          <div className="flex justify-center items-center mt-[80px]">
            <CircularProgress />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center gap-8 mt-[50px]">
            {data.map((project) => (
              <a key={project._id} href={`/details/${project._id}`}>
                <ProjectCard project={project} />
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;