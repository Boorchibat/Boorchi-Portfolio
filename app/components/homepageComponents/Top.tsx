import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Top = () => {
  return (
    <div className="w-full mb-[120px] md:ml-[135px] flex-col md:flex-row flex justify-center items-center gap-x-10 pt-[30px]">
      <div className="w-full md:w-[50%] flex flex-col">
        <Button className="w-[200px] rounded-2xl border-2 border-blue-500 bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
          Available for hire
        </Button>
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 mt-[50px]">
          Boorchi Batzorigt
        </h1>
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 mt-[10px]">
          Full Stack Developer
        </h2>
        <p className="text-md text-gray-300 mt-[10px]">
          Experienced and certified high school web developer in Nextjs,
          reactjs, typescript, HTML, CSS, Javascript.
        </p>
        <div className="flex flex-col gap-x-5 md:flex-row items-center mt-[80px]">
          <a href="/projects">

            <Button className="bg-gradient-to-r mt-[10px] from-purple-500 to-blue-500 transform transition duration-300 hover:scale-110  text-white p-7 text-[20px] rounded-xl">
              Check out my work
            </Button>
          </a>
          <a href="/contact">
            <Button className="bg-gray-800 mt-[10px] text-white transform transition duration-300 hover:scale-110 p-7 text-[20px] rounded-xl">
              Contact me
            </Button>
          </a>
        </div>
        <div className="flex gap-x-5 mt-[100px]">
          <div className="flex flex-col">
            <h1 className="text-[40px] text-white">2+</h1>
            <p className="text-gray-400 text-sm">Years of Experience</p>
          </div>
          <div className="flex flex-col">
            <h1 className="text-[40px] text-white">10+</h1>
            <p className="text-gray-400 text-sm">Projects Built</p>
          </div>
          <div className="flex flex-col">
            <h1 className="text-[40px] text-white">100%</h1>
            <p className="text-gray-400 text-sm">Client Satisfaction</p>
          </div>
        </div>
      </div>

      <div className="hidden md:flex w-[50%] justify-center items-center">
        <Image
          className="rounded-lg overflow-hidden"
          src="/me.jpeg"
          alt="Profile"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};
