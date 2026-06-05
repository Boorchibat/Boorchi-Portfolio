import { Connect } from "./components/homepageComponents/Connect";
import { Skills } from "./components/homepageComponents/Skills";
import { Top } from "./components/homepageComponents/Top";
import { FadingSeparator } from "@/components/ui/FadingSeperator";

const page = () => {
  return (
    <div className=" flex flex-col justify-center items-center h-auto">
      <Top />

    <FadingSeparator className="w-full max-w-[80%] h-[2px] bg-gradient-to-r from-transparent via-gray-500 to-transparent my-6" />

      <Skills />
     <FadingSeparator className="w-full max-w-[80%] h-[2px] bg-gradient-to-r from-transparent via-gray-500 to-transparent my-6" />
      <Connect />
    </div>
  );
};

export default page;
