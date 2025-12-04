"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

// --------------------
// Single Card Component
// --------------------
const Card = ({ title, price, image, category }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="relative bg-white/90 backdrop-blur-md border border-gray-200 shadow-xl rounded-3xl overflow-hidden w-80 md:w-96 hover:shadow-2xl transition-all duration-300"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-100/40 to-yellow-100/40 opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

      {/* Product Image */}
      <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-gray-50 to-pink-50 flex items-center justify-center">
        <img src={image} alt={title} className="object-contain w-full h-full" />
      </div>

      {/* Product Info */}
      <div className="p-6 text-center relative z-10">
        <h2 className="text-2xl font-bold text-gray-800 tracking-wide">
          {title}
        </h2>
        <p className="text-xl text-gray-600 mt-2 font-medium">${price}</p>
      </div>

      {/* Footer Section */}
      <div className="flex justify-between items-center px-6 py-4 border-t border-gray-100 bg-gradient-to-r from-gray-50 to-gray-100 relative z-10">
        {/* Buy Button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-pink-500 to-yellow-400 text-white font-semibold px-6 py-2.5 rounded-full shadow-md hover:shadow-lg hover:from-pink-600 hover:to-yellow-500 transition-all duration-300"
        >
          Buy Now
        </motion.button>

        {/* See More Link */}
        {category && (
          <Link href={`/${category}`}>
            <span className="text-pink-600 font-medium text-lg cursor-pointer hover:underline hover:text-pink-700 transition">
              See More →
            </span>
          </Link>
        )}
      </div>
    </motion.div>
  );
};

// --------------------
// Clothing Section Component
// --------------------
export default function Clothing() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  async function fetchProducts() {
    try {
      const res = await fetch("http://localhost:5000/api/products"); // fetch all products
      const data = await res.json();

      // Filter only clothing
      const clothingProducts = data.filter((product) => product.category === "clothing");
      setCards(clothingProducts);
    } catch (err) {
      console.error("Failed to fetch products:", err);
    } finally {
      setLoading(false);
    }
  }
  fetchProducts();
}, []);

  if (loading)
    return (
      <p className="text-center mt-20 text-gray-800">Loading products...</p>
    );

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100 flex flex-col justify-center items-center px-6 md:px-10 py-20">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-extrabold text-gray-800 mb-16 tracking-wide drop-shadow-sm text-center"
      >
        👗 Clothing Collection 👕
      </motion.h1>

      {/* Cards Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 w-full max-w-7xl"
      >
        {cards.map((card) => (
          <Card
            key={card._id}
            title={card.title}
            price={card.price}
            image={card.image}
            category={card.category} // backend should provide category field
          />
        ))}
      </motion.div>
    </section>
  );
}
