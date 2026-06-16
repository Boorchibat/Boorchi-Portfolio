"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { LogInForm } from "./components/LogInForm";
import { SignUpForm } from "./components/SignUpForm";

const Page = () => {
  const [activeTab, setActiveTab] = useState<"login" | "signup">("login");

  return (
    <div className="w-full flex flex-col items-center px-4 py-8">

      <div className="w-full max-w-md bg-slate-800 p-1 rounded-full flex mb-8">
        <Button
          onClick={() => setActiveTab("login")}
          className={`flex-1 rounded-full py-6 transition-all duration-500 ease-in-out ${
            activeTab === "login"
              ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg scale-105"
              : "bg-transparent text-gray-300 hover:text-white"
          }`}
        >
          Log In
        </Button>

        <Button
          onClick={() => setActiveTab("signup")}
          className={`flex-1 rounded-full py-6 transition-all duration-500 ease-in-out ${
            activeTab === "signup"
              ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg scale-105"
              : "bg-transparent text-gray-300 hover:text-white"
          }`}
        >
          Sign Up
        </Button>
      </div>

      <div className="w-full max-w-md transition-all duration-500 ease-in-out">
        {activeTab === "login" ? (
          <LogInForm />
        ) : (
          <div className="animate-in fade-in duration-500">
           <SignUpForm />
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;