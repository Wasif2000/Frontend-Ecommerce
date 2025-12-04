"use client";

import Image from "next/image";

// ✅ Correct image imports
import tshirt from "../Assets/tshirt-img.png";
import menshirt from "../Assets/menshirt.png";
import women from "../Assets/women-clothes-img.png";
import jewellery1 from "../Assets/neklesh-img.png";
import jewellery2 from "../Assets/jhumka-img.png";
import jewellery3 from "../Assets/kangan-img.png";
import electronic1 from "../Assets/mobile-img.png";
import electronic2 from "../Assets/laptop-img.png";
import electronic3 from "../Assets/computer-img.png";

// --------------------
// All Product Page
// --------------------
export default function AllProduct() {
  // ✅ Static product data
  const products = [
    { title: "T-Shirt", price: 49.99, image: tshirt },
    { title: "Men's Shirt", price: 79.99, image: menshirt },
    { title: "Women's Dress", price: 99.99, image: women },
    { title: "Necklace", price: 129.99, image: jewellery1 },
    { title: "Jhumka", price: 149.99, image: jewellery2 },
    { title: "Kangan", price: 119.99, image: jewellery3 },
    { title: "Smartphone", price: 699.99, image: electronic1 },
    { title: "Laptop", price: 999.99, image: electronic2 },
    { title: "Desktop", price: 799.99, image: electronic3 },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100 p-10 flex flex-col items-center">
      {/* Heading */}
      <h1 className="text-5xl font-extrabold text-gray-800 mb-16 tracking-wide drop-shadow-sm text-center">
        🛍️ All Products
      </h1>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 max-w-7xl w-full">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white/90 backdrop-blur-md border border-gray-200 shadow-xl rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
          >
            {/* Product Image */}
            <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-gray-50 to-pink-50 flex items-center justify-center">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-contain hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>

            {/* Product Info */}
            <div className="p-6 text-center">
              <h2 className="text-2xl font-bold text-gray-800">{product.title}</h2>
              <p className="text-xl text-gray-600 mt-2 font-medium">${product.price}</p>
            </div>

            {/* Button */}
            <div className="flex justify-center pb-6">
              <button className="bg-gradient-to-r from-pink-500 to-yellow-400 text-white font-semibold px-6 py-2.5 rounded-full shadow-md hover:shadow-lg hover:from-pink-600 hover:to-yellow-500 transition-all duration-300">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
