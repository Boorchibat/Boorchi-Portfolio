"use client";

import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { useUser } from "@/app/context/UserContext";
import { signIn } from "@/lib/auth/SignIn";
import axios from "axios";
import { useRouter } from "next/navigation";


export const LogInForm = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { setUser, setToken } = useUser();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await signIn({
        email: form.email,
        password: form.password,
      });

      setUser(res.user);
      setToken(res.token);

      localStorage.setItem("user", JSON.stringify(res.user));
      localStorage.setItem("token", res.token);

      router.push("/");
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message || err.message || "Signup failed");
      } else {
        setError("Signup failed");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full mb-[50px] max-w-md mx-auto p-6 md:p-8 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 shadow-xl">
      <h1 className="text-3xl font-bold text-center text-white mb-8">Log In</h1>

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

        {error && <p className="text-red-200">{error}</p>}

        <Button
          onClick={handleSubmit}
          disabled={loading}
          className="w-full mt-4 py-6 rounded-xl bg-black/20 hover:bg-black/30 text-white font-semibold"
        >
          {loading ? "Logging in..." : "Log In"}
        </Button>
      </div>
    </div>
  );
};
