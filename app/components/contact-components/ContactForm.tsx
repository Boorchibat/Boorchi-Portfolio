import { Button } from "@/components/ui/button";
import React from "react";

export const ContactForm = () => {
  return (
    <div className="bg-gradient-to-r from-purple-800 to-blue-800 p-6 rounded-md">
      <div className="flex w-full justify-between">
        <div className="flex flex-col">
          <h1>Name*</h1>
          <input
            type="text"
            className="p-2 rounded-md w-[300px] border-2 border-gray-500"
          />
        </div>
        <div className="flex flex-col">
          <h1>Email*</h1>
          <input
            type="email"
            className="p-2 rounded-md w-[300px] border-2 border-gray-500"
          />
        </div>
      </div>
      <div className="w-full flex flex-col mt-5">
        <h1>Subject*</h1>
        <input
          type="text"
          className="p-2 rounded-md w-full border-2 border-gray-500"
        />
      </div>
      <div className="w-full flex flex-col mt-5">
        <h1>Message*</h1>
        <textarea
          className="p-2 rounded-md w-full border-2 border-gray-500"
          rows={5}
        />
      </div>
      <Button className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-400 hover:to-blue-500 text-white px-4 py-2 rounded-md mt-5 p-8 w-full self-start">
        Send Message
      </Button>
    </div>
  );
};
