import React from "react";

const skills = [
  { name: "Next.js", percent: 95, color: "bg-purple-500" },
  { name: "React JS", percent: 90, color: "bg-green-400" },
  { name: "HTML/CSS", percent: 95, color: "bg-yellow-400" },
  { name: "Typescript", percent: 90, color: "bg-blue-400" },
  { name: "Rest API", percent: 85, color: "bg-orange-400" },
  { name: "GitHub", percent: 80, color: "bg-cyan-400" },
  { name: "MongoDB", percent: 85, color: "bg-pink-400" },
];

export const Skills = () => {
  return (
    <div>
      <h1 className="text-[20px] mb-4">Skills</h1>
      {skills.map((skill) => (
        <div key={skill.name} className="mb-7">
          <div className="flex justify-between text-sm text-gray-300 mb-1">
            <span>{skill.name}</span>
            <span>{skill.percent}%</span>
          </div>
          <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden">
            <div
              className={`h-full ${skill.color} rounded-full`}
              style={{ width: `${skill.percent}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};