import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn } from "../utils/motion";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const AboutSection = () => {
  const personalInfo = [
    { label: "Name", value: "Hari Hara Budra" },
    { label: "Date of birth", value: "December 6, 2003" },
    { label: "Location", value: "Coimbatore, Tamil Nadu, India" },
    { label: "E-mail", value: "hariharabudra@gmail.com" },
    { label: "Phone Number", value: "+91 7397 509 844" },
  ];

  return (
    <section className="relative w-full h-screen mx-auto flex flex-row justify-center items-center px-20 py-20">
      <div
        className={`absolute top-20 bottom-20 w-[85%] flex flex-row justify-between gap-20 items-start  px-10 py-10`}
      >
        {/* Left Section */}
        <div className="w-full h-full flex flex-row bg-black">
          <motion.div
            variants={fadeIn("center", "", 0.5, 1)}
            initial="hidden"
            animate="show"
            className={`${styles.robotoMedium} text-white text-[10px] w-[50%] h-full  p-10`}
          >
            <div className="bg-gray-900 w-full h-full"></div>
          </motion.div>

          {/* Right Section */}
          <motion.div
            variants={fadeIn("right", "", 0.5, 1)}
            initial="hidden"
            animate="show"
            className={`${styles.robotoMedium} text-white text-[10px] w-[50%] h-full `}
          >
            <div className="bg-black w-full h-full px-5 pb-12 flex flex-col justify-between">
              <div className="relative  h-[150px]">
                <motion.h1
                  variants={fadeIn("center", "", 0.5, 1)}
                  initial="hidden"
                  animate="show"
                  className={`${styles.heroHeadText} absolute top-4 text-[150px] text-gray-800 opacity-[30%]`}
                >
                  About
                </motion.h1>
                <motion.p
                  variants={fadeIn("left", "easeOut", 0.5, 1)}
                  initial="hidden"
                  animate="show"
                  className={`${styles.robotoBold} relative top-9 text-[40px] `}
                >
                  About{" "}
                  <motion.span
                    variants={fadeIn("center", "", 0.5, 1)}
                    initial="hidden"
                    animate="show"
                    className={`${styles.robotoBold} text-cyan-400 text-[40px] `}
                  >
                    me
                  </motion.span>
                  !
                </motion.p>
                <motion.p
                    variants={fadeIn("center", "", 0.5, 1)}
                    initial="hidden"
                    animate="show"
                    className={` relative top-14 text-[15px] text-gray-400 leading-[18px] opacity-[30%]`}
                  >
                    A passionate full-stack developer and creative designer with expertise in frontend, mobile apps, backend systems, database management, machine learning, and a deep love for UI/UX and graphic design.
                  </motion.p>

              </div>

              {/* Personal Info Section */}
              <motion.div variants={fadeIn("up", "easeIn", 0.75, 1)}
                    initial="hidden"
                    animate="show"
                    className="">
                <ul>
                  {personalInfo.map((info, index) => (
                    <li key={index} className="flex ">
                      <div className="w-[25%] h-[30px] "><span className={`font-roboto font-medium text-[16px] leading-[0px]`}>{info.label}:</span></div>
                      <div className="ml-2 w-[50%] h-[30px] "><span className={` font-roboto font-light text-[16px] leading-[0px]`}>{info.value}</span></div>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Download CV Button */}
              <motion.div variants={fadeIn("right", "easeIn", 0.75, 1)}
                    initial="hidden"
                    animate="show"
                    className="mt-4 flex flex-col">
                <DownloadCVButton />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
