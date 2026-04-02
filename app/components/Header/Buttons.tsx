"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export const Buttons = () => {
  const [active, setActive] = useState("Home");

  const buttons = ["Home", "Projects", "About", "Contact"];

  return (
    <div className="flex items-center gap-x-5 relative">
      {buttons.map((btn) => (
        <Button
          key={btn}
          onClick={() => setActive(btn)}
          className={`
            relative h-[40px] overflow-hidden px-4
            transition-all duration-300
            text-white
          `}
        >
       
         <span
  className={`
    absolute inset-0 rounded transition-all duration-300
    bg-gradient-to-r from-purple-500 to-blue-500
    ${active === btn ? "w-full" : "w-0"}
  `}
></span>

          <span
            className={`
              relative z-10 transition-colors duration-300
              ${active === btn ? "text-white" : "hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500"}
            `}
          >
            {btn}
          </span>
        </Button>
      ))}
    </div>
  );
};