import React from "react";
import { ContactForm } from "../components/contact-components/ContactForm";
import { Socials } from "../components/contact-components/Socials";
import { Location } from "../components/contact-components/Location";

const page = () => {
  return (
    <div className="flex flex-col h-auto mt-[30px] mb-[50px]">
      <div className="ml-[150px] mr-[150px]">
        <h1 className="text-blue-500">Contact</h1>
        <h1 className="text-[50px] font-bold font-bold">Get me in the loop</h1>
        <h1 className="text-[18px] mt-[15px] text-gray-400 w-[600px]">
          Im just one click away, your already here might as well send a DM.
        </h1>
        <div className="flex mt-[50px] w-full gap-x-5">
          <div className="w-[60%]">
            <ContactForm />
          </div>
          <div className="w-[35%] flex flex-col">
            <Location />
            <Socials />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
