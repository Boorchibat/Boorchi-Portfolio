import React from "react";
import { Facebook } from "./contacts/facebook";
import { Email } from "./contacts/Email";
import { Github } from "./contacts/github";
import { Instagram } from "./contacts/Instagram";
import { LinkedIn } from "./contacts/LinkedIn";

export const Footer = () => {
  return (
    <div className="w-full border-t border-gray-700 h-[150PX] text-white flex flex-col items-center justify-center gap-x-5">
      <div className="flex w-full items-center justify-evenly">
        <div>
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">Built with precision, skill and class. </h1>
        </div>
        <div className="flex justify-center items-center gap-x-5">
          <Facebook />
          <Email />
          <Github />
          <Instagram />
          <LinkedIn />
        </div>
      </div>
      <h1 className="mt-[20px] text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">© 2023 Boorchi Batzorigt. All rights reserved.</h1>
    </div>
  );
};
