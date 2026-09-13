"use client";

import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { sendContactEmail } from "@/lib/contact/sendEmail";

const ContactSchema = Yup.object({
  name: Yup.string().trim().required("Name is required"),
  email: Yup.string()
    .trim()
    .email("Enter a valid email")
    .required("Email is required"),
  subject: Yup.string().trim().required("Subject is required"),
  message: Yup.string()
    .trim()
    .min(10, "Message must be at least 10 characters")
    .required("Message is required"),
});

export const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: ContactSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      setSubmitError(null);
      try {
        await sendContactEmail(values);
        setSubmitted(true);
        resetForm();
        setTimeout(() => {
          setSubmitted(false);
        }, 3000);
      } catch (err) {
        setSubmitError(
          err instanceof Error ? err.message : "Something went wrong",
        );
      } finally {
        setSubmitting(false);
      }
    },
  });

  const fieldError = (field: keyof typeof formik.values) =>
    formik.touched[field] && formik.errors[field] ? (
      <span className="text-red-300 text-sm mt-1">{formik.errors[field]}</span>
    ) : null;

  if (submitted) {
    return (
      <div className="bg-gradient-to-r from-purple-800 to-blue-800 p-6 rounded-md flex flex-col items-center justify-center gap-3 text-white min-h-64">
        <CheckCircle2 className="text-green-400" size={48} />
        <p className="text-lg font-medium">Submitted!</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="bg-gradient-to-r from-purple-800 to-blue-800 p-6 rounded-md"
    >
      <div className="flex flex-col sm:flex-row w-full gap-4">
        <div className="flex flex-col w-full">
          <h1>Name*</h1>
          <input
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="p-2 rounded-md w-full border-2 border-gray-500"
          />
          {fieldError("name")}
        </div>
        <div className="flex flex-col w-full">
          <h1>Email*</h1>
          <input
            name="email"
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="p-2 rounded-md w-full border-2 border-gray-500"
          />
          {fieldError("email")}
        </div>
      </div>

      <div className="w-full flex flex-col mt-5">
        <h1>Subject*</h1>
        <input
          name="subject"
          value={formik.values.subject}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="p-2 rounded-md w-full border-2 border-gray-500"
        />
        {fieldError("subject")}
      </div>

      <div className="w-full flex flex-col mt-5">
        <h1>Message*</h1>
        <textarea
          name="message"
          value={formik.values.message}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="p-2 rounded-md w-full border-2 border-gray-500 min-h-32"
        />
        {fieldError("message")}
      </div>

      {submitError && <p className="text-red-300 mt-3">{submitError}</p>}

      <Button type="submit" className="mt-5" disabled={formik.isSubmitting}>
        {formik.isSubmitting ? "Sending..." : "Send"}
      </Button>
    </form>
  );
};
