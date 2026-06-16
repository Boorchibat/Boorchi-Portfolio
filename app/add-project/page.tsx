"use client";

import { Button } from "@/components/ui/button";
import { uploadToCloudinary } from "@/lib/cloudinary/uploadtoCloundinary";
import Image from "next/image";
import { useState } from "react";

const Page = () => {
  const [title, setTitle] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [sourceCode, setSourceCode] = useState("");
  const [tags, setTags] = useState("");
  const [type, setType] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      setLoading(true);

      if (!image) {
        alert("Please select an image");
        return;
      }

      const uploadedImage = await uploadToCloudinary(image);

      const projectData = {
        title,
        shortDescription,
        description,
        image: uploadedImage.secure_url,
        link,
        sourceCode,
        tags: tags
          .split(",")
          .map((tag) => tag.trim())
          .filter(Boolean),
        Type: type,
      };

      console.log(projectData);

      // Example API call:
      // const token = localStorage.getItem("token");
      // await postProjects("/project", projectData, token!);

      alert("Project uploaded successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to upload project");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mt-[40px] mb-[40px] mx-auto p-6 md:p-8 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 shadow-xl mb-10">
      <h1 className="text-3xl font-bold text-center text-white mb-8">
        Add Project
      </h1>

      <div className="space-y-5">
        <div>
          <label className="block text-white font-medium mb-2">
            Project Title:
          </label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="Enter project title"
            className="w-full p-3 rounded-lg border border-white/20 bg-white text-black outline-none focus:ring-2 focus:ring-white"
          />
        </div>

        <div>
          <label className="block text-white font-medium mb-2">
            Short Description:
          </label>
          <input
            value={shortDescription}
            onChange={(e) => setShortDescription(e.target.value)}
            type="text"
            placeholder="Brief summary of the project"
            className="w-full p-3 rounded-lg border border-white/20 bg-white text-black outline-none focus:ring-2 focus:ring-white"
          />
        </div>

        <div>
          <label className="block text-white font-medium mb-2">
            Full Description:
          </label>
          <textarea
            rows={5}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Detailed project description"
            className="w-full p-3 rounded-lg border border-white/20 bg-white text-black outline-none focus:ring-2 focus:ring-white resize-none"
          />
        </div>

        <div>
          <label className="block text-white font-medium mb-2">
            Project Image:
          </label>

          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files?.[0];

              if (file) {
                setImage(file);
                setPreview(URL.createObjectURL(file));
              }
            }}
            className="w-full p-3 rounded-lg border border-white/20 bg-white text-black file:mr-4 file:rounded-lg file:border-0 file:bg-purple-600 file:px-4 file:py-2 file:text-white file:cursor-pointer hover:file:bg-purple-700"
          />

          {preview && (
            <div className="mt-4">
              <Image
                src={preview}
                alt="Preview"
                width={800}
                height={400}
                className="w-full max-h-[350px] object-cover rounded-xl"
              />
            </div>
          )}
        </div>

        <div>
          <label className="block text-white font-medium mb-2">
            Live Project URL:
          </label>
          <input
            value={link}
            onChange={(e) => setLink(e.target.value)}
            type="url"
            placeholder="https://your-project.com"
            className="w-full p-3 rounded-lg border border-white/20 bg-white text-black outline-none focus:ring-2 focus:ring-white"
          />
        </div>

        <div>
          <label className="block text-white font-medium mb-2">
            Source Code URL:
          </label>
          <input
            value={sourceCode}
            onChange={(e) => setSourceCode(e.target.value)}
            type="url"
            placeholder="https://github.com/username/repo"
            className="w-full p-3 rounded-lg border border-white/20 bg-white text-black outline-none focus:ring-2 focus:ring-white"
          />
        </div>

        <div>
          <label className="block text-white font-medium mb-2">
            Tags:
          </label>
          <input
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            type="text"
            placeholder="React, Next.js, MongoDB, Tailwind"
            className="w-full p-3 rounded-lg border border-white/20 bg-white text-black outline-none focus:ring-2 focus:ring-white"
          />
        </div>

        <div>
          <label className="block text-white font-medium mb-2">
            Project Type:
          </label>

          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full p-3 rounded-lg border border-white/20 bg-white text-black outline-none focus:ring-2 focus:ring-white"
          >
            <option value="">Select a type</option>
            <option value="Full stack">Full Stack</option>
            <option value="Front end">Front End</option>
            <option value="HTML/CSS">HTML/CSS</option>
            <option value="Javascript">Javascript</option>
            <option value="AI">AI</option>
          </select>
        </div>

        <Button
          onClick={handleSubmit}
          disabled={loading}
          className="w-full mt-4 py-6 rounded-xl bg-black/20 hover:bg-black/30 transition-all duration-300 text-white font-semibold hover:scale-[1.02]"
        >
          {loading ? "Uploading..." : "Add Project"}
        </Button>
      </div>
    </div>
  );
};

export default Page;
