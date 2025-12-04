"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function LoginPage() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [loading, setLoading] = useState(false);

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      console.log(form);
      
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!data.success) {
        alert(data.message || "Invalid username or password");
        setLoading(false);
        return;
      }

      // Save JWT token
      localStorage.setItem("token", data.token);

      // Redirect to admin dashboard
      window.location.href = "/admin";

    } catch (error) {
      console.error("Login error:", error);
      alert("Login failed!");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md bg-white/90 backdrop-blur-xl shadow-2xl rounded-3xl p-10"
      >
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Admin Login
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Enter your credentials to access the dashboard
        </p>

        <form className="space-y-6" onSubmit={handleSubmit}>

          {/* Username */}
          <div className="relative">
            <input
              type="text"
              name="username"
              value={form.username}
              onChange={onChange}
              className="peer w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300 outline-none transition bg-white/50"
              required
            />
            <label className="absolute left-4 top-3 text-gray-500 transition-all peer-focus:top-[-10px] peer-focus:text-xs peer-focus:text-indigo-600 peer-valid:top-[-10px] peer-valid:text-xs peer-valid:text-indigo-600 bg-white px-1">
              Username
            </label>
          </div>

          {/* Password */}
          <div className="relative">
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={onChange}
              className="peer w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300 outline-none transition bg-white/50"
              required
            />
            <label className="absolute left-4 top-3 text-gray-500 transition-all peer-focus:top-[-10px] peer-focus:text-xs peer-focus:text-indigo-600 peer-valid:top-[-10px] peer-valid:text-xs peer-valid:text-indigo-600 bg-white px-1">
              Password
            </label>
          </div>

          {/* Submit Button */}
          <button
            disabled={loading}
            className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold shadow-md transition disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

        </form>
      </motion.div>
    </div>
  );
}
