"use client";

import { Button } from "@/components/ui/button";
import { signUp } from "@/lib/auth/SignUp";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export const SignUpForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    username: "",
    number: "",
  });
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      setError(null);
      setSuccess(null);

      const res = await signUp({
        name: form.name,
        email: form.email,
        password: form.password,
        username: form.username,
        number: form.number,
        profileImage: "",
      });

      setSuccess("Account created successfully!");
      router.push("/");
      console.log("Signup success:", res);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(
          err.response?.data?.message ||
            err.message ||
            "Signup failed"
        );
      } else {
        setError("Signup failed");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full mb-[50px] max-w-md mx-auto p-6 md:p-8 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 shadow-xl">
      <h1 className="text-3xl font-bold text-center text-white mb-8">
        Sign up
      </h1>

      <div className="space-y-5">
        <input
          id="email"
          type="email"
          placeholder="Enter your email"
          onChange={handleChange}
          className="w-full p-3 rounded-lg bg-white text-black"
        />

        <input
          id="password"
          type="password"
          placeholder="Enter your password"
          onChange={handleChange}
          className="w-full p-3 rounded-lg bg-white text-black"
        />

        <input
          id="name"
          type="text"
          placeholder="Enter your name"
          onChange={handleChange}
          className="w-full p-3 rounded-lg bg-white text-black"
        />

        <input
          id="username"
          type="text"
          placeholder="Enter your username"
          onChange={handleChange}
          className="w-full p-3 rounded-lg bg-white text-black"
        />

        <input
          id="number"
          type="text"
          placeholder="Enter your phone number"
          onChange={handleChange}
          className="w-full p-3 rounded-lg bg-white text-black"
        />

        {error && <p className="text-red-200">{error}</p>}
        {success && <p className="text-green-200">{success}</p>}

        <Button
          onClick={handleSubmit}
          disabled={loading}
          className="w-full mt-4 py-6 rounded-xl bg-black/20 hover:bg-black/30 text-white font-semibold"
        >
          {loading ? "Signing up..." : "Sign Up"}
        </Button>
      </div>
    </div>
  );
};