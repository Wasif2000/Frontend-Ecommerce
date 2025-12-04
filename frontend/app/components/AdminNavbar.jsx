// components/AdminNavbar.jsx
"use client";

import { useState } from "react";
import { FiBell, FiSearch, FiUser } from "react-icons/fi";

export default function AdminNavbar() {
  const [query, setQuery] = useState("");

  return (
    <header className="flex items-center justify-between p-4 border-b bg-white shadow-sm sticky top-0 z-10">
      {/* Search Bar */}
      <div className="flex items-center gap-3">
        <div className="relative">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products, orders..."
            className="pl-3 pr-10 py-2 border border-gray-300 rounded-md w-72 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <FiSearch className="absolute right-3 top-2.5 text-gray-500 text-lg" />
        </div>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-6">
        {/* Notifications */}
        <button className="relative text-gray-600 hover:text-gray-800 transition-colors">
          <FiBell className="text-xl" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center shadow-md">
            3
          </span>
        </button>

        {/* User info */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 text-lg shadow-sm">
            <FiUser />
          </div>
          <div>
            <div className="text-sm font-semibold text-gray-800">Admin</div>
            <div className="text-xs text-gray-500">admin@store.com</div>
          </div>
        </div>
      </div>
    </header>
  );
}
