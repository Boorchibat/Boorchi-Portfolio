"use client";
import { Button } from "@/components/ui/button";
import { getProjects } from "@/lib/projects/GetProjs";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AdminProject } from "./components/AdminProject";
import { useUser } from "../context/UserContext";
import CircularProgress from "@mui/material/CircularProgress";

const Page = () => {
  const [data, setData] = useState<Project[]>([]);
  const { user, loading } = useUser();


  useEffect(() => {
    const fetchProjects = async () => {
      const projects = await getProjects<Project[]>();
      setData(projects);
    };

    fetchProjects();
  }, []);

    if(loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
       <CircularProgress />
      </div>
    );
  }

  if (user?.role !== "Admin") {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <h1 className="text-2xl text-red-500 font-bold">Access Denied</h1>
      </div>
    );
  }
  return (
    <div className="w-full flex flex-col mt-[40px] mb-[40px] ml-[65px]">
      <div className="w-[full] flex justify-between items-center">
        <div className="flex gap-x-5">
          <h1 className="text-2xl text-purple-500 font-bold">Projects</h1>
          <h1 className="text-2xl text-purple-500 font-bold">{data.length}</h1>
        </div>
        <Link href="/add-project">
          <Button className="bg-purple-500 hover:bg-purple-600 text-white p-5 mr-15">
            Add Project
          </Button>
        </Link>
      </div>
      <div className="w-full h-auto mt-[20px] flex flex-col gap-y-5">
        {data.map((project) => (
          <AdminProject key={project._id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Page;
