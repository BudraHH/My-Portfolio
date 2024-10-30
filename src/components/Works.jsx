import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn } from "../utils/motion";

const Works = () => {
  return (
    <section
      id="education"
      className="relative w-full h-screen mx-auto flex flex-col justify-center items-center bg-purple-300"
    >
      <div className="absolute w-[82vw] h-[90vh] flex flex-col justify-center items-start gap-10 bg-purple-800 ">
        <div className="w-full h-[20%] bg-gray-400 flex justify-center items-center">
          <div className="relative w-[50%] h-[150px] bg-slate-300 flex justify-center items-center">
            <motion.h1
              variants={fadeIn("center", "easeOut", 0.5, 1)}
              initial="hidden"
              animate="show"
              className={`${styles.heroHeadText} absolute top-10 text-[150px] text-gray-800 opacity-[30%]`}
            >
              Education
            </motion.h1>
            <motion.p
              variants={fadeIn("left", "easeOut", 0.5, 1)}
              initial="hidden"
              animate="show"
              className={`${styles.robotoBold} relative top-0 text-[40px]`}
            >
              Edu
              <motion.span
                variants={fadeIn("center", "easeOut", 0.5, 1)}
                initial="hidden"
                animate="show"
                className={`${styles.robotoBold} text-cyan-400 text-[40px]`}
              >
                cation
              </motion.span>
            </motion.p>
          </div>
        </div>

        <div className="w-full h-auto flex flex-row justify-center items-center bg-black ">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", "spring", 0.5 * index, 1)}
              initial="hidden"
              animate="show"
              className=" bg-purple-500 p-6 rounded-lg shadow-md w-[80%] h-full m-5"
            >
              <h3 className={`}text-white text-[15px] leading-[5px]`} >
                {edu.qualification ? edu.qualification : ""}
              </h3>

              <h3 className="text-white text-[27px] font-bold">{edu.degree}</h3>
              <div className="w-full flex flex-row justify-between text-[16px] bg-black">
                <p className="text-cyan-400 ">{edu.institution}</p>
                <p className="text-gray-200 ">{edu.duration}</p>
              </div>
              <p className="text-gray-300 text-[14px]">{edu.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Works
