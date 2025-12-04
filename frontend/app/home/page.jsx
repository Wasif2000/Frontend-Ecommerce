"use client";

import Hero from "@/components/Hero";
import Cards from "@/components/Cards";
import Electronics from "@/components/Electronics";
import Jewellary from "@/components/Jewellary";
import Loader from "@/components/Loader";

export default function Page() {
  return (
    <div>
      <Hero />
      <Cards />
      <Electronics />
      <Jewellary />
      <Loader />
    </div>
  );
}
