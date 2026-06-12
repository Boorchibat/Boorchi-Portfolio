import { Button } from "@/components/ui/button";

export const Connect = () => {
  return (
    <div className="mt-[200px] mb-[200px] w-[70%] mx-auto flex flex-col justify-center items-center">
      <h1 className="text-[40px] text-white font-bold text-center">
        Dont rely on AI, let me help you create something Amazing
      </h1>
      <h1 className="text-[18px] text-gray-300 font-normal text-center mt-4">
        Have a website in mind? Id love to hear about it.
      </h1>
      <a href="/contact">
        <Button className="bg-gradient-to-r from-blue-500 to-green-500 mt-[40px] text-[20px] p-10 rounded-xl transform transition duration-300 hover:scale-110 hover:bg-gradient-to-r hover:from-blue-600 hover:to-green-600 text-white">
          Contact Me
        </Button>
      </a>
    </div>
  );
};
