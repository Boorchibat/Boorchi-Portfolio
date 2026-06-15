"use client";

import { getProject } from "@/lib/projects/GetProj";
import Image from "next/image";
import { use, useEffect, useState } from "react";

type PageProps = {
  params: Promise<{ id: string }>;
};

const Details = ({ params }: PageProps) => {
  const { id } = use(params);
  const [data, setData] = useState<Project | null>(null);

  useEffect(() => {
    const fetchProject = async () => {
      const project = await getProject<Project>(id);
      setData(project);
    };

    fetchProject();
  }, [id]);

  if (!data) {
    return (
      <div className="flex justify-center items-center h-[50vh]">
        Loading...
      </div>
    );
  }

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 mb-12">
      <div className="max-w-5xl mx-auto">

        <div className="relative w-full aspect-video mt-6 md:mt-10 overflow-hidden rounded-xl">
          <Image
            src={data.image}
            alt={data.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="mt-6 md:mt-8">
   
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-2">
              {data.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-700/60 backdrop-blur-md text-white text-xs sm:text-sm px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {data.createdAt && (
              <p className="text-sm text-gray-400">
                {new Date(data.createdAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            )}
          </div>

          <h1 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            {data.title}
          </h1>

          <p className="mt-6 text-gray-300 text-base sm:text-lg leading-7">
            {data.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Details;