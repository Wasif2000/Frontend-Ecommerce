"use client";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Cards from "./components/Cards";
import Electronics from "./components/Electronics";
import Jewellary from "./components/Jewellary";
import Loader from "./components/Loader";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Cards />
      <Electronics />
      <Jewellary />
      <Loader />
      <Footer/>
    </div>
  );  
}
