"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import axios from "@/lib/axiosInstance";

const Card = ({ title, price, image, slug }) => (
  <motion.div
    whileHover={{ scale: 1.05, y: -5 }}
    transition={{ type: "spring", stiffness: 180, damping: 14 }}
    className="relative bg-white/90 backdrop-blur-lg shadow-lg border border-yellow-100 rounded-3xl overflow-hidden w-80 md:w-96 hover:shadow-2xl transition-all duration-300"
  >
    <div className="relative bg-gradient-to-b from-white to-amber-50 p-8 flex justify-center items-center">
      <Image src={image} alt={title} width={260} height={260} className="object-contain" />
    </div>
    <div className="p-6 text-center relative z-10">
      <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
      <p className="text-xl text-yellow-600 mt-2 font-medium">${price}</p>
    </div>
    <div className="flex justify-between items-center px-6 py-4 border-t border-gray-200 bg-gradient-to-r from-amber-50 to-yellow-100 relative z-10">
      <button className="bg-gradient-to-r from-yellow-400 to-amber-500 text-white font-semibold px-6 py-2 rounded-full shadow-md">Buy Now</button>
      <Link href={`/jewelry/${slug}`}>
        <span className="text-yellow-700 font-medium text-lg cursor-pointer hover:underline">See More →</span>
      </Link>
    </div>
  </motion.div>
);

export default function Jewellery() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("/api/products?category=jewelry");
        setProducts(res.data);
      } catch (err) {
        console.error("Failed to fetch products:", err);
      }
    };
    fetchProducts();
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-b from-white via-amber-50 to-yellow-100 flex flex-col justify-center items-center px-10 py-20">
      <motion.h1 className="text-5xl font-extrabold text-gray-800 mb-16 tracking-wide text-center">
        ✨ Exquisite Jewellery Collection ✨
      </motion.h1>
      <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 w-full max-w-7xl">
        {products.map((product) => (
          <Card
            key={product._id}
            title={product.name}
            price={product.price}
            image={product.image}
            slug={product._id}
          />
        ))}
      </motion.div>
    </section>
  );
}
