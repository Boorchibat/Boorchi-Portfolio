"use client";

import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { Formik, Form } from "formik";
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useUser } from "@/app/context/UserContext";
import { uploadToCloudinary } from "@/lib/cloudinary/uploadtoCloundinary";
import { updateProject } from "@/lib/projects/UpdateProj";

type Props = {
  open: boolean;
  handleClose: () => void;
  project: Project;
};

const style = {
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "95%",
  maxWidth: 700,
  bgcolor: "white",
  boxShadow: 24,
  p: 4,
  borderRadius: "12px",
  maxHeight: "90vh",
  overflowY: "auto",
};

const inputClass =
  "w-full border border-black text-black rounded-md p-3 bg-white";

export const UpdateModal = ({ open, handleClose, project }: Props) => {
  const { user, token } = useUser();

  const [successOpen, setSuccessOpen] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);

  if (!user || user.role !== "Admin") {
    return null;
  }

  return (
    <>
      {/* MAIN UPDATE MODAL */}
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <h1 className="text-3xl font-bold text-center mb-6 text-black">
            Update Project
          </h1>

          <Formik
            enableReinitialize
            initialValues={{
              title: project.title || "",
              shortDescription: project.shortDescription || "",
              description: project.description || "",
              link: project.link || "",
              sourceCode: project.sourceCode || "",
              tags: project.tags?.join(", ") || "",
              Type: project.Type || "",
            }}
            onSubmit={async (values, { setSubmitting }) => {
              try {
                let imageUrl = project.image;

                if (imageFile) {
                  const uploaded = await uploadToCloudinary(imageFile);
                  imageUrl = uploaded.secure_url;
                }

                await updateProject(
                  {
                    title: values.title,
                    shortDescription: values.shortDescription,
                    description: values.description,
                    image: imageUrl,
                    link: values.link,
                    sourceCode: values.sourceCode,
                    tags: values.tags
                      .split(",")
                      .map((tag) => tag.trim())
                      .filter(Boolean),
                    Type: values.Type,
                  },
                  project._id || "",
                  token || ""
                );

                handleClose();

                // small delay for smooth UX
                setTimeout(() => {
                  setSuccessOpen(true);
                }, 150);
              } catch (err) {
                console.error(err);
              } finally {
                setSubmitting(false);
              }
            }}
          >
            {({ values, handleChange, isSubmitting }) => (
              <Form className="flex flex-col gap-5">
                <div>
                  <p className="font-semibold mb-1 text-black">Project Title</p>
                  <input
                    name="title"
                    className={inputClass}
                    value={values.title}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <p className="font-semibold mb-1 text-black">
                    Short Description
                  </p>
                  <input
                    name="shortDescription"
                    className={inputClass}
                    value={values.shortDescription}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <p className="font-semibold mb-1 text-black">
                    Full Description
                  </p>
                  <textarea
                    name="description"
                    value={values.description}
                    onChange={handleChange}
                    rows={6}
                    className="w-full border rounded-md p-3 text-black"
                  />
                </div>

                <div>
                  <p className="font-semibold mb-2 text-black">
                    Project Image
                  </p>

                  <label className="cursor-pointer block">
                    <div className="relative w-full h-64 border rounded-xl overflow-hidden">
                      <Image
                        src={
                          imageFile
                            ? URL.createObjectURL(imageFile)
                            : project.image
                        }
                        alt="Project"
                        fill
                        className="object-cover"
                      />
                    </div>

                    <input
                      type="file"
                      className="hidden"
                      accept="image/*"
                      onChange={(e) =>
                        setImageFile(e.target.files?.[0] || null)
                      }
                    />
                  </label>
                </div>

                <div>
                  <p className="font-semibold mb-1 text-black">Live URL</p>
                  <input
                    name="link"
                    value={values.link}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>

                <div>
                  <p className="font-semibold mb-1 text-black">
                    Source Code URL
                  </p>
                  <input
                    name="sourceCode"
                    value={values.sourceCode}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>

                <div>
                  <p className="font-semibold mb-1 text-black">Tags</p>
                  <input
                    name="tags"
                    value={values.tags}
                    onChange={handleChange}
                    placeholder="React, Next.js, MongoDB"
                    className={inputClass}
                  />
                </div>

                <div>
                  <p className="font-semibold mb-1 text-black">
                    Project Type
                  </p>

                  <select
                    name="Type"
                    value={values.Type}
                    onChange={handleChange}
                    className="w-full border rounded-md p-3 text-black"
                  >
                    <option value="">Select Type</option>
                    <option value="Full stack">Full Stack</option>
                    <option value="Front end">Front End</option>
                    <option value="HTML/CSS">HTML/CSS</option>
                    <option value="Javascript">Javascript</option>
                    <option value="AI">AI</option>
                  </select>
                </div>

                <div className="flex gap-3">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleClose}
                    className="flex-1 text-black"
                  >
                    Cancel
                  </Button>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1"
                  >
                    {isSubmitting ? "Updating..." : "Update Project"}
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </Box>
      </Modal>

      {/* SUCCESS MODAL */}
      <Modal open={successOpen} onClose={() => setSuccessOpen(false)}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 320,
            bgcolor: "white",
            boxShadow: 24,
            p: 4,
            borderRadius: "12px",
            textAlign: "center",
          }}
        >
          <h2 className="text-xl font-bold text-green-600">
            Success 🎉
          </h2>

          <p className="mt-2 text-black">
            Project updated successfully!
          </p>

          <Button
            className="mt-4 w-full"
            onClick={() => setSuccessOpen(false)}
          >
            OK
          </Button>
        </Box>
      </Modal>
    </>
  );
};