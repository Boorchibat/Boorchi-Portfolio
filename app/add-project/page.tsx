"use client";

import { Button } from "@/components/ui/button";
import { uploadToCloudinary } from "@/lib/cloudinary/uploadtoCloundinary";
import Image from "next/image";
import { useState } from "react";
import { Formik, Form, Field } from "formik";
import { useUser } from "@/app/context/UserContext";
import { Post } from "@/lib/projects/CreateProj";
import CircularProgress from "@mui/material/CircularProgress";

type ProjectFormValues = {
  title: string;
  shortDescription: string;
  description: string;
  link: string;
  sourceCode: string;
  tags: string;
  type: string;
};

const Page = () => {
  const { user, token } = useUser();

  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <CircularProgress />
      </div>
    );
  }

  if (!token) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <h1 className="text-2xl text-red-500 font-bold">Access Denied</h1>
      </div>
    );
  }
  if (!user || user.role !== "Admin") {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <h1 className="text-2xl text-red-500 font-bold">Access Denied</h1>
      </div>
    );
  }

  const initialValues: ProjectFormValues = {
    title: "",
    shortDescription: "",
    description: "",
    link: "",
    sourceCode: "",
    tags: "",
    type: "",
  };

  const handleSubmit = async (values: ProjectFormValues) => {
    try {
      setLoading(true);

      if (!image) {
        alert("Please select an image");
        return;
      }

      const uploadedImage = await uploadToCloudinary(image);

      const payload = {
        title: values.title,
        shortDescription: values.shortDescription,
        description: values.description,
        image: uploadedImage.secure_url,
        link: values.link,
        sourceCode: values.sourceCode,
        tags: values.tags
          .split(",")
          .map((t) => t.trim())
          .filter(Boolean),
        Type: values.type,
      };

      console.log("Payload:", payload);

      await Post(payload, token);

      alert("Project uploaded successfully!");
    } catch (err) {
      console.error(err);
      alert("Failed to upload project");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mt-[40px] mb-[40px] mx-auto p-6 md:p-8 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 shadow-xl">
      <h1 className="text-3xl font-bold text-center text-white mb-8">
        Add Project
      </h1>

      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {() => (
          <Form className="space-y-5">
            {/* Title */}
            <Field
              name="title"
              placeholder="Enter project title"
              className="w-full p-3 rounded-lg bg-white text-black"
            />

            {/* Short description */}
            <Field
              name="shortDescription"
              placeholder="Brief summary"
              className="w-full p-3 rounded-lg bg-white text-black"
            />

            {/* Description */}
            <Field
              as="textarea"
              name="description"
              rows={5}
              placeholder="Detailed project description"
              className="w-full p-3 rounded-lg bg-white text-black"
            />

            {/* IMAGE UPLOAD (still manual, not Formik) */}
            <div>
        
              <input
                type="file"
                accept="image/*"
             
                placeholder=""
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    setImage(file);
                    setPreview(URL.createObjectURL(file));
                  }
                }}
                className="w-full p-3 bg-white rounded-lg text-black"
              />

              {preview && (
                <Image
                  src={preview}
                  alt="Preview"
                  width={800}
                  height={400}
                  className="mt-4 w-full rounded-xl object-cover"
                />
              )}
            </div>

            {/* Link */}
            <Field
              name="link"
              type="url"
              placeholder="Live project URL"
              className="w-full p-3 rounded-lg bg-white text-black"
            />

            {/* Source code */}
            <Field
              name="sourceCode"
              type="url"
              placeholder="GitHub URL"
              className="w-full p-3 rounded-lg bg-white text-black"
            />

            {/* Tags */}
            <Field
              name="tags"
              placeholder="React, Next.js, MongoDB"
              className="w-full p-3 rounded-lg bg-white text-black"
            />

            {/* Type */}
            <Field
              as="select"
              name="type"
              className="w-full p-3 rounded-lg bg-white text-black"
            >
              <option value="">Select type</option>
              <option value="Full stack">Full Stack</option>
              <option value="Front end">Front End</option>
              <option value="HTML/CSS">HTML/CSS</option>
              <option value="Javascript">Javascript</option>
              <option value="AI">AI</option>
            </Field>

            {/* Submit */}
            <Button
              type="submit"
              disabled={loading}
              className="w-full py-6 bg-black/20 text-white font-semibold"
            >
              {loading ? "Uploading..." : "Add Project"}
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Page;
