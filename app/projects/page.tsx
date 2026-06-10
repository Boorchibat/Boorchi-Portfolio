import { Button } from "@/components/ui/button";
import { ProjectCard } from "../components/Project-card/PorjCard";

const sampleProjects = [
  {
    title: "AI SaaS Dashboard",
    shortDescription: "Analytics dashboard powered by AI insights",
    description:
      "A full-stack SaaS dashboard that uses AI to generate insights from user data, track metrics, and visualize performance in real time.",
    image: "https://res.cloudinary.com/dys01jxgq/image/upload/v1775793514/fmn34wvkzen3omhqbf9h.jpg",
    link: "https://your-demo-link.com",
    sourceCode: "https://github.com/yourname/ai-dashboard",
    tags: ["Next.js", "MongoDB", "OpenAI", "Tailwind"],
    Type: "Full stack",
  },
  {
    title: "E-Commerce Platform",
    shortDescription: "Modern full-stack online store",
    description:
      "A scalable e-commerce platform with product listings, cart functionality, Stripe payments, and admin dashboard.",
    image: "https://res.cloudinary.com/dys01jxgq/image/upload/v1775793514/fmn34wvkzen3omhqbf9h.jpg",
    link: "https://your-store-demo.com",
    sourceCode: "https://github.com/yourname/ecommerce-app",
    tags: ["React", "Node.js", "Express", "Stripe"],
    Type: "Front end",
  },
  {
    title: "Real-Time Chat App",
    shortDescription: "Instant messaging with WebSockets",
    description:
      "A real-time chat application supporting private rooms, typing indicators, and live messaging using Socket.io.",
    image: "https://res.cloudinary.com/dys01jxgq/image/upload/v1775793514/fmn34wvkzen3omhqbf9h.jpg",
    link: "https://your-chat-demo.com",
    sourceCode: "https://github.com/yourname/chat-app",
    tags: ["Socket.io", "Express", "React", "Node.js"],
    Type: "Full stack",
  },
  {
    title: "Real-Time Chat App",
    shortDescription: "Instant messaging with WebSockets",
    description:
      "A real-time chat application supporting private rooms, typing indicators, and live messaging using Socket.io.",
    image: "https://res.cloudinary.com/dys01jxgq/image/upload/v1775793514/fmn34wvkzen3omhqbf9h.jpg",
    link: "https://your-chat-demo.com",
    sourceCode: "https://github.com/yourname/chat-app",
    tags: ["Socket.io", "Express", "React", "Node.js"],
    Type: "HTML/CSS",
  },
];

const filterButtons = ["All", "Full stack", "Frontend", "HTML/CSS", "Javascript", "AI"];

const page = () => {
  return (
    <div className="flex flex-col h-auto mb-[50px]">
      <div className="flex flex-col">
        <h1 className="mt-[20px] bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent text-[25px]">
          Portfolio
        </h1>
        <h1 className="mt-[10px] text-3xl md:text-[34px] text-white font-bold">
          My Projects
        </h1>
        <h1 className="text-base md:text-[20px] text-gray-400 w-full max-w-[900px]">
          A curated collection of my recent work, demonstrating my skills and
          expertise in full-stack web development. Starting from my first
          projects to my latest developments.
        </h1>

        <div className="flex gap-x-3 mt-[20px] overflow-x-auto pb-2 scrollbar-none">
          {filterButtons.map((label) => (
            <Button
              key={label}
              className="border border-gray-500 bg-transparent text-gray-300 hover:bg-gradient-to-r from-blue-500 to-purple-500 hover:text-white shrink-0"
            >
              {label}
            </Button>
          ))}
        </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  justify-items-center gap-8 mt-[50px]">
  {sampleProjects.map((project, index) => (
    <ProjectCard key={index} project={project} />
  ))}
</div>
      </div>
    </div>
  );
};

export default page;