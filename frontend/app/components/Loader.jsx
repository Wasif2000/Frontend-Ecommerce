"use client";

import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="flex items-center justify-center h-60 bg-gray-50">
      <motion.div
        className="w-28 h-28 rounded-full border-[15px] border-orange-500 border-t-black"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
      />
    </div>
  );
}
