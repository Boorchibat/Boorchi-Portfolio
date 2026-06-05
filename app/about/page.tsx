import React from "react";
import { Skills } from "../components/aboutComponents/Skills";
import { TimeLine } from "../components/aboutComponents/TimeLine";

type DataType = {
  date: string;
  title: string;
  description: string;
};

const Data: DataType[] = [
  {
    date: "2023 - 2024",
    title: "Learning code for the first time at Pinecone academy",
    description: "I spent the summer of my freshman year of high school learning how to code at pinecone academy where I learned how to code basic HTML, CSS and Javascript. This is where I started to make some of my small projects for fun after my classes.",
  },
  {
    date: "2024 - 2025",
    title: "Entering the HOP program and learning full stack development",
    description:
      "After the summer I spent at Pinecone summer academy, I was interested in learning more about coding and wanted to go mroe advanced. This is where I was introduced to ReactJS, NextJS, nodeJS, mongoDB and more tools on full stack developing over the course of my sophmore school year.",
  },
   {
    date: "Summer 2025",
    title: "Interning as a full stack developer at Pinecone",
    description: "After finishing my time in the HOP program, I applied and was offered a spot to intern at pinecone over the summer and worked in a team of 6 other interns to create a real estate website. Addtioanlly, I worked in person in Mongolia as a assitant teacher for Pinecone academy and taught 30 students how to code HTML, CSS and Javascript.",
  },
   {
    date: "2025-2026",
    title: "Independent Full Stack Developer in Junior year of high school",
    description: "After finishing my internship at pinecone, I focused on school for most of the year and made occasional projects, such as a Lost and found website I made for my school FBLA competition. I also started to plan and design future projects that I am planning to work on in Mongolia.",
  },
];

const page = () => {
  return (
    <div className="mr-[150px] ml-[150px] flex flex-col h-auto">
      <h1 className="text-purple-400 mt-[20px]">About me</h1>
      <h1 className="text-[50px] w-[600px] font-bold">
        The developer behind the code
      </h1>
      <h1 className="text-[20px] w-[900px] text-gray-400">
        Im a 17-year-old full-stack developer, who has ACTUAL professional
        experience and can help you create whatever you imagine.
      </h1>
      <div className="w-full flex justify-between mt-[30px]">
        <div className="w-[40%] bg-gray-800 rounded-md border-1 border-gray-500 p-8">
          <h1 className="text-[20px]">Who I am</h1>
          <p>wassup</p>
        </div>
        <div className="w-[40%]">
          <Skills />
        </div>
      </div>
      <div className="mt-[100px] flex justify-center items-center flex-col">
        <h1 className="text-[20px] text-purple-500 font-bold">Journey</h1>
        <h1 className="text-[30px]">My Experience</h1>
        <div className="flex flex-col ">
          {Data.map((item, index) => (
            <TimeLine
              key={index}
              date={item.date}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
