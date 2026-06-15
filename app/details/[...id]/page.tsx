"use client";

import { Button } from "@/components/ui/button";
import { getProject } from "@/lib/projects/GetProj";
import { LoaderCircleIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
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

  console.log(data);

  if (!data) {
    return (
      <div className="flex justify-center items-center h-[50vh]">
        <LoaderCircleIcon className="animate-spin text-gray-500" size={48} />
      </div>
    );
  }

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 mb-12">
      <div className="max-w-5xl mx-auto">
        <Link href={data.link} target="_blank" className="block">
          <div className="relative w-full aspect-video mt-6 md:mt-10 overflow-hidden rounded-xl">
            <Image
              src={data.image}
              alt={data.title}
              fill
              className="object-cover"
              priority
            />

            <div className="absolute bottom-4 left-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-3 py-1 rounded-full">
              {data.Type}
            </div>
          </div>
        </Link>

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
              <p className="text-sm text-white">
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
          <div className="mt-6 md:mt-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-evenly">
              <Link href={data.link} target="_blank">
                <Button className="p-8 bg-gradient-to-r from-purple-500 to-blue-500 flex items-center gap-2 text-[20px] transition-all duration-300 hover:scale-110">
                  Live App
                  <Image
                    src="/topright.svg"
                    alt="Top Right"
                    width={20}
                    height={20}
                  />
                </Button>
              </Link>

              <Link href={data.sourceCode} target="_blank">
                <Button className="p-8 bg-gradient-to-r from-blue-500 to-purple-500 flex items-center gap-2 text-[20px] transition-all duration-300 hover:scale-110">
                  Source Code
                  <Image
                    src="/github.svg"
                    alt="GitHub"
                    width={20}
                    height={20}
                  />
                </Button>
              </Link>
            </div>
          </div>

          <p className="mt-6 text-gray-300 text-base sm:text-lg leading-7">
            {data.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Details;
