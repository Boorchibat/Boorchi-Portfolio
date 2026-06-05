"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const Buttons = () => {
  const [active, setActive] = useState("Home");

  const buttons = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div className="flex items-center gap-x-5 relative">
      {buttons.map((btn) => (
        <Link key={btn.name} href={btn.href.toLowerCase()}>
          <Button
            onClick={() => setActive(btn.name)}
            className="relative h-[40px] overflow-hidden px-4 transition-all duration-300 text-white"
          >
            <span
              className={`
                absolute inset-0 rounded transition-all duration-300
                bg-gradient-to-r from-purple-500 to-blue-500
                ${active === btn.name ? "w-full" : "w-0"}
              `}
            />

            <span
              className={`
                relative z-10 transition-colors duration-300
                ${
                  active === btn.name
                    ? "text-white"
                    : "hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500"
                }
              `}
            >
              {btn.name}
            </span>
          </Button>
        </Link>
      ))}
    </div>
  );
};