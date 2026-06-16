import { Button } from "@/components/ui/button";
import React from "react";

export const SignUpForm = () => {
  return (
    <div className="w-full mb-[50px] max-w-md mx-auto p-6 md:p-8 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 shadow-xl">
      <h1 className="text-3xl font-bold text-center text-white mb-8">
        Sign up
      </h1>

      <div className="space-y-5">
        <div>
          <label htmlFor="email" className="block text-white font-medium mb-2">
            Email:
          </label>

          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            className="w-full p-3 rounded-lg border border-white/20 bg-white text-black outline-none focus:ring-2 focus:ring-white"
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-white font-medium mb-2"
          >
            Password:
          </label>

          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            className="w-full p-3 rounded-lg border border-white/20 bg-white text-black outline-none focus:ring-2 focus:ring-white"
          />
        </div>
        <div>
          <label htmlFor="name" className="block text-white font-medium mb-2">
            Name:
          </label>

          <input
            id="name"
            type="text"
            placeholder="Enter your name"
            className="w-full p-3 rounded-lg border border-white/20 bg-white text-black outline-none focus:ring-2 focus:ring-white"
          />
        </div>
        <div>
          <label
            htmlFor="Username"
            className="block text-white font-medium mb-2"
          >
            Username:
          </label>

          <input
            id="Username"
            type="text"
            placeholder="Enter your username"
            className="w-full p-3 rounded-lg border border-white/20 bg-white text-black outline-none focus:ring-2 focus:ring-white"
          />
        </div>

        <div>
          <label htmlFor="Number" className="block text-white font-medium mb-2">
            Phone Number:
          </label>

          <input
            id="Number"
            type="text"
            placeholder="Enter your phone number"
            className="w-full p-3 rounded-lg border border-white/20 bg-white text-black outline-none focus:ring-2 focus:ring-white"
          />
        </div>

        <Button className="w-full mt-4 py-6 rounded-xl bg-black/20 hover:bg-black/30 transition-all duration-300 text-white font-semibold">
          Sign Up
        </Button>
      </div>
    </div>
  );
};
