import React from 'react';
import { motion } from "framer-motion";
import { styles } from "../styles";
import { staggerContainer } from "../utils/motion"; // Ensure staggerContainer returns a valid animation object

const StarWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()} // Ensure this returns a valid object
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }} // Correct viewport handling
        className={`px-10 max-w-full h-[80vh] mx-auto my-10 relative z-0 top-0`}
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>

        <Component />
      </motion.section>
    );
  };

export default StarWrapper;
