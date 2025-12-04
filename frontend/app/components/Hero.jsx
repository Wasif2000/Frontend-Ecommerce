"use client";

import Image from "next/image";
import heroImg from "../Assets/banner-bg (1).png";

export default function Hero() {
  return (
    <section className="relative w-full h-screen">
      {/* Background */}
      <Image
        src={heroImg}
        alt="Hero Banner"
        fill
        className="object-cover object-center -z-10"
        priority
      />
      <div className="absolute inset-0 bg-black/40 -z-10"></div>

      {/* Hero Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 md:px-10 z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 drop-shadow-lg">
          GET START <br /> YOUR FAVORITE SHOPPING
        </h1>
        <button className="bg-yellow-500 hover:bg-yellow-600 px-8 py-3 rounded font-semibold text-black shadow-lg transition transform hover:scale-105">
          BUY NOW
        </button>
      </div>
    </section>
  );
}
