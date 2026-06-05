import Image from "next/image";
import React from "react";

export const Location = () => {
  return (
    <div className="bg-gradient-to-r from-purple-800 to-blue-800 p-5 rounded-md">
      <div className="flex">
        <Image src={"/Location.svg"} alt="Location" width={24} height={24} />
        <div className="ml-2 flex flex-col">
          <p className="text-white text-[20px] font-semibold">Anywhere</p>
          <p className="w-[300px] text-gray-300">I work remote and in person so DM me</p>
        </div>
      </div>
    </div>
  );
};
