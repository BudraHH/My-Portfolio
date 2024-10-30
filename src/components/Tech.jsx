import React from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { technologies } from "../constants";

import { SectionWrapper } from "../hoc";

const TechCard = ({ title, icon, index }) => {
  return (
    <Tilt className="w-[150px] xs:w-[180px]"> {/* Adjusted card width */}
      <motion.div
        variants={fadeIn("right", "spring", 0.75 * index, 2)}
        className="w-full h-auto" 
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[15px] py-6 px-6 h-[100px] w-[100px] flex justify-evenly items-center flex-col" // Adjusted padding and height
        >
          <img src={icon} alt={title} className="w-12 h-12 object-contain" /> {/* Adjusted icon size */}
          <h3 className="text-white text-[16px] font-bold text-center"> {/* Adjusted text size */}
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};


const Tech = () => {
  return (
    <section className="p-0">
      <motion.div
        variants={textVariant}
        initial="hidden"
        animate="show"
        className="div"
      >
        <h2 className={styles.sectionHeadText}>Tech skills</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.5, 2)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        The skills I have honed throughout my academic journey!
      </motion.p>

      {/* <div className="mt-10 flex flex-wrap justify-between gap-10">
        {technologies.map((technology, index) => (
          <TechCard
            key={technology.title}
            index={index}
            title={technology.title}
            icon={technology.icon}
          />
        ))}
      </div> */}
    </section>
  );
};

export default SectionWrapper(Tech, "tech");
