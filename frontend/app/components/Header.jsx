"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaShoppingCart } from "react-icons/fa";

export default function Header() {
  const pathname = usePathname();
  const [category, setCategory] = useState("All Category");
  const [language, setLanguage] = useState("English");
  const [search, setSearch] = useState("");

  const navItems = [
    { href: "/", label: "Best Sellers" },
    { href: "/electronics", label: "Gift Ideas" },
    { href: "/jewellary", label: "New Releases" },
    { href: "/mens", label: "Today's Deals" },
    { href: "/service", label: "Customer Service" },
  ];

  const handleSearch = () => {
    if (!search) return alert("Please type something to search!");
    alert(`Searching "${search}" in "${category}" category`);
  };

  return (
    <header className="w-full z-50 relative">
      {/* Top Bar */}
      <div className="flex flex-wrap md:flex-nowrap items-center justify-between bg-yellow-700 px-6 md:px-10 py-4">
        {/* Left: Menu + Category */}
        <div className="flex items-center space-x-4">
          <FaBars className="text-2xl text-white cursor-pointer" />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="bg-transparent px-3 py-2 rounded cursor-pointer"
          >
            <option className="text-black">All Category</option>
            <option className="text-black">Men</option>
            <option className="text-black">Women</option>
            <option className="text-black">Kids</option>
          </select>
        </div>

        {/* Logo */}
        <h1 className="text-2xl md:text-4xl font-bold text-white text-center">
          Eflyer
        </h1>

        {/* Search */}
        <div className="flex flex-1 max-w-xl mx-4 md:mx-6">
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-grow px-4 py-2 rounded-l border focus:outline-none focus:ring-2 focus:ring-yellow-300"
          />
          <button
            onClick={handleSearch}
            className="bg-yellow-600 px-4 py-2 rounded-r text-white font-semibold hover:bg-yellow-700 transition"
          >
            🔍
          </button>
        </div>

        {/* Right: Language + Cart */}
        <div className="flex items-center space-x-3 md:space-x-4 text-white font-semibold">
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="bg-white text-black px-3 py-2 rounded cursor-pointer"
          >
            <option>English</option>
            <option>Urdu</option>
          </select>
          <div className="flex items-center space-x-1 cursor-pointer hover:text-yellow-300 transition">
            <FaShoppingCart />
            <span>CART</span>
          </div>
        </div>
      </div>

      {/* Navigation Menu + Curve */}
      <div className="relative bg-yellow-700">
        <nav className="flex justify-center space-x-8 font-semibold text-white py-2 z-10 relative">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={
                pathname === item.href
                  ? "text-yellow-300"
                  : "hover:text-yellow-300"
              }
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* SVG Curve */}
        <svg
          className="absolute bottom-0 left-0 w-full h-6"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#facc15"
            d="M0,64 C480,160 960,-32 1440,64 L1440,320 L0,320 Z"
          ></path>
        </svg>
      </div>
    </header>
  );
}
