import Image from "next/image";
import React from "react";

const Socialz = [
  {
    name: "GitHub",
    desc: "Check out my projects and code on GitHub",
    icon: "/github.svg",
    href: "https://github.com/Boorchibat",
  },
  {
    name: "LinkedIn",
    desc: "Connect with me on LinkedIn",
    icon: "/linkedin.svg",
    href: "https://www.linkedin.com/in/boorchi-batzorigt-ab1194274/",
  },
  {
    name: "Instagram",
    desc: "Follow me on Instagram for updates and insights",
    icon: "/insta.svg",
    href: "https://www.instagram.com/boorchi_batz/",
  },
  {
    name: "Facebook",
    desc: "Like my Facebook page for updates and insights",
    icon: "/facebook.svg",
    href: "https://www.facebook.com/boorchi.batzorigt",
  },
  {
    name: "Email",
    desc: "Send me an email for inquiries or collaborations",
    icon: "/email.svg",
    href: "mailto:boorchibat@gmail.com",
  },
];

export const Socials = () => {
  return (
    <div className="bg-gradient-to-r from-purple-800 to-blue-800 p-5 rounded-md flex flex-col">
      <h1>Find me on</h1>
      {Socialz.map((item) => (
        <a key={item.name} href={item.href} target="_blank" rel="noopener noreferrer">
          <div className="mt-[10px] gap-x-3 w-full flex items-center rounded-md border border-black p-3 hover:bg-white/10 transition-colors">
            <Image src={item.icon} alt={item.name} width={24} height={24} />
            <div className="flex flex-col">
              <h1 className="text-[15px]">{item.name}</h1>
              <p className="text-[12px] text-gray-300">{item.desc}</p>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};