import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const Footer = () => {
  return (
    <motion.footer
      variants={fadeIn("up", "easeOut", 3.75, 1)}
      initial="hidden"
      animate="show"
      className="bg-black text-white py-6 "
    >
      <div className="container mx-auto flex flex-col items-center">
        <p className="font-medium text-sm mb-2">
          © 2024 Hari Hara <span className="font-semibold text-cyan-400">Budra</span>. All rights reserved.
        </p>
        <p className="text-sm">
          Building innovative solutions, one line at a time.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
