import React, { useEffect, useState } from "react";
import { HashLink as Link } from "react-router-hash-link"; // Import HashLink for smooth scrolling
import { motion } from "framer-motion";

const DownloadCVButton = () => {
  return (
    <motion.button
      className="border-2 border-cyan-400 rounded-lg py-1 px-2 flex items-center justify-center w-32 h-10 bg-transparent cursor-pointer overflow-hidden transition duration-300 hover:bg-cyan-400"
      whileHover={{ scale: 1.025 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <p className="font-roboto font-light text-base leading-[38px] text-cyan-400 transition duration-300 hover:text-black">
        Download CV
      </p>
    </motion.button>
  );
};

export default DownloadCVButton;
