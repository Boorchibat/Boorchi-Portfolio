import React from "react";
import { Facebook } from "./contacts/facebook";
import { Email } from "./contacts/Email";
import { Github } from "./contacts/github";
import { Instagram } from "./contacts/Instagram";
import { LinkedIn } from "./contacts/LinkedIn";

export const Footer = () => {
  return (
    <div className="w-full border-t border-gray-700 text-white flex flex-col items-center justify-center gap-y-4 py-6">
      <div className="flex flex-col md:flex-row w-full items-center justify-evenly gap-y-4 md:gap-y-0">
        <h1 className="text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
          Built with precision, skill and class.
        </h1>
        <div className="flex justify-center items-center gap-x-5">
          <Facebook />
          <Email />
          <Github />
          <Instagram />
          <LinkedIn />
        </div>
      </div>
      <h1 className="text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
        © 2023 Boorchi Batzorigt. All rights reserved.
      </h1>
    </div>
  );
};