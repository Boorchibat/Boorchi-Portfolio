import Image from "next/image";

export const Skills = () => {
  const Skills = [
    {
      name: "React",
      Image: "/React.svg",
      description: "React Framework",
      ID: 1,
    },
    {
      name: "TypeScript",
      Image: "/TS.svg",
      description: "TypeScript",
      ID: 2,
    },
    {
      name: "Node.js",
      Image: "/Node.svg",
      description: "Backend",
      ID: 3,
    },
    {
      name: "MongoDB",
      Image: "/MongoDB.svg",
      description: "Database",
      ID: 4,
    },
    {
      name: "NextJS",
      Image: "/NextJS.svg",
      description: "Frontend Framework",
      ID: 5,
    },
    {
      name: "Tailwind/CSS",
      Image: "/Tailwind.svg",
      description: "Styling Library",
      ID: 6,
    },
    {
      name: "HTML",
      Image: "/HTML.svg",
      description: "Markup Language",
      ID: 7,
    },
  ];
  return (
    <div className="mt-[150px] mb-[200px] flex flex-col justify-center items-center">
      <h1 className="text-blue-500">TECH STACK</h1>
      <h1 className="text-white text-[40px] font-bold">
        Technical skills I work with:
      </h1>
      <div className="flex flex-wrap p-3 justify-center items-center gap-10 mt-[50px]">
        {Skills.map((skill) => (
          <div
            key={skill.ID}
            className="flex flex-col items-center text-center 
  bg-gray-900/60 backdrop-blur-md
  border border-gray-700
  rounded-2xl p-6 w-[220px]
  transition duration-300 transform 
  hover:scale-110 hover:-translate-y-1 hover:shadow-xl"
          >
            <Image src={skill.Image} alt={skill.name} width={50} height={50} />

            <h2 className="text-white text-lg font-semibold mt-4">
              {skill.name}
            </h2>

            <p className="text-gray-400 text-sm mt-2">{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
