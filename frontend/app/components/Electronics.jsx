"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import axios from "@/lib/axiosInstance";

const Card = ({ title, price, image, slug }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.06, y: -8 }}
      transition={{ type: "spring", stiffness: 250, damping: 20 }}
      className="relative bg-white/90 backdrop-blur-lg border border-gray-100 shadow-lg rounded-3xl overflow-hidden w-80 md:w-96 hover:shadow-3xl transform transition-all duration-300"
    >
      <div className="w-full h-64 bg-gray-50 flex items-center justify-center">
        <Image src={image} alt={title} width={300} height={250} className="object-contain" />
      </div>
      <div className="p-6 text-center">
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
        <p className="text-xl text-gray-600 mt-2 font-semibold">${price}</p>
      </div>
      <div className="flex justify-between items-center px-6 py-4 border-t border-gray-100">
        <button className="bg-blue-600 text-white px-6 py-2 rounded-full">Buy Now</button>
        <Link href={`/electronics/${slug}`}>
          <span className="text-indigo-600 font-medium cursor-pointer">See More →</span>
        </Link>
      </div>
    </motion.div>
  );
};

export default function Electronics() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("/api/products?category=electronics");
        setProducts(res.data);
      } catch (err) {
        console.error("Failed to fetch products:", err);
      }
    };
    fetchProducts();
  }, []);

  return (
    <section className="min-h-screen bg-gray-50 flex flex-col justify-center items-center px-6 md:px-10 py-20">
      <motion.h1 className="text-5xl font-extrabold text-gray-800 mb-16">
        ⚡ Electronics Collection ⚡
      </motion.h1>
      <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 w-full max-w-7xl">
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
