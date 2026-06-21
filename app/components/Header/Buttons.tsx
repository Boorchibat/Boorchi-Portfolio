"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useUser } from "@/app/context/UserContext";

export const Buttons = () => {
  const [open, setOpen] = useState(false);
  const { user } = useUser();


  const buttons = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

 const authButton = user
  ? user.role === "Admin"
    ? { name: "Admin", href: "/admin" }
    : { name: `Hi, ${user.username}`, href: "/" }
  : { name: "Log in", href: "/log-in" };

  return (
    <>
      <nav className="max-sm:hidden flex items-center gap-5">
        {buttons.map((btn) => (
          <Button key={btn.name} asChild variant="ghost">
            <Link href={btn.href}>{btn.name}</Link>
          </Button>
        ))}

        <Button asChild variant="ghost">
          <Link href={authButton.href}>{authButton.name}</Link>
        </Button>
      </nav>

  
      <div className="hidden max-md:flex justify-end relative">
        <Button
          onClick={() => setOpen(!open)}
          className="bg-gradient-to-r from-purple-500 to-blue-500"
        >
          {open ? "✕" : "Menu"}
        </Button>

        {open && (
          <>
            <div
              className="fixed inset-0 z-40"
              onClick={() => setOpen(false)}
            />

            <div className="absolute right-0 top-full mt-2 w-48 rounded-lg border border-white/10 bg-[#111827] overflow-hidden z-50 shadow-xl">
              {buttons.map((btn) => (
                <Link
                  key={btn.name}
                  href={btn.href}
                  className="flex items-center w-full px-5 py-4 text-white text-base font-medium hover:bg-white/10 transition-colors border-b border-white/5 last:border-b-0"
                  onClick={() => setOpen(false)}
                >
                  {btn.name}
                </Link>
              ))}


              <Link
                href={authButton.href}
                className="flex items-center w-full px-5 py-4 text-white text-base font-medium hover:bg-white/10 transition-colors"
                onClick={() => setOpen(false)}
              >
                {authButton.name}
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  );
};