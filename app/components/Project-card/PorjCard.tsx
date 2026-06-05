import { Project } from "@/index";
import Image from "next/image";

export const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="group w-[360px] h-[340px] bg-transparent border flex flex-col border-gray-600 rounded-2xl overflow-hidden transition-all duration-300 hover:border-cyan-400 hover:shadow-cyan-500/20 hover:shadow-xl">
      <div className="relative h-[180px] w-full bg-blue-900/60 backdrop-blur-md border border-gray-700 rounded-t-2xl overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover rounded-t-2xl w-full h-full transition-transform duration-500 group-hover:scale-110"
        />

        <div className="absolute bottom-2 left-2 right-2 flex flex-wrap gap-2 z-10">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-gray-600/60 backdrop-blur-md text-white text-xs font-bold px-2 py-1 rounded-full"
            >
              <p>{tag}</p>
            </span>
          ))}
        </div>
      </div>

      <div className="h-[160px] w-full bg-blue-900/60 backdrop-blur-md border p-4 rounded-b-2xl border-gray-700 transition-colors duration-300 group-hover:bg-cyan-900/20 flex flex-col">
        <div className="flex items-center justify-between">
          <h1 className="text-white text-[20px] font-semibold transition-all duration-300 group-hover:text-cyan-400 group-hover:text-[24px]">
            {project.title}
          </h1>
          <span className="text-white text-2xl transition-all duration-300 group-hover:text-cyan-400 group-hover:scale-150 group-hover:translate-x-1 group-hover:-translate-y-1">
            ↗
          </span>
        </div>
        <p className="text-gray-400 text-sm mt-2 flex-1">{project.description.slice(0, 70)}...</p>
        <h1 className="text-cyan-400 font-bold mt-2">{project.Type}</h1>
      </div>
    </div>
  );
};
