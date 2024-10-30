import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn } from "../utils/motion";

const educationData = [
  {
    qualification: "Bachelor of Technology in",
    degree: "Artificial Intelligence & Data Science",
    institution: "Rathinam Technical Campus, Anna University",
    duration: "2021 - 2025",
    description:
      "Studied core concepts in AI, Machine Learning, Data Science, and Software Development. Gained hands-on experience in developing intelligent systems and data-driven applications.",
  },
  {
    degree: "High School",
    institution: "Vikas Vidyalaya Mat. Hr. Sec. School",
    duration: "2019 - 2021",
    description:
      "Studied Science with a focus on Mathematics, Physics, and Computer Science. Developed a foundation for pursuing higher education in AI and data-driven fields.",
  },
];

const Education = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [titleAnimationComplete, setTitleAnimationComplete] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // This function sets titleAnimationComplete to true after title animation is complete
  const handleTitleAnimationComplete = () => {
    setTitleAnimationComplete(true);
  };

  return (
    <section
      ref={sectionRef}
      id="education"
      className="relative w-full h-auto mx-auto flex flex-col justify-start items-center" // Changed h-[100vh] to h-auto
    >
      <div className="w-[90vw] mt-20 flex flex-col justify-start items-center">
        {/* Title Section */}
        <motion.div
          variants={fadeIn("center", "", 0.5, 1)}
          initial="hidden"
          animate={isVisible ? "show" : "hidden"}
          onAnimationComplete={handleTitleAnimationComplete} // Trigger after title animation
          className="w-full h-[20%] flex justify-center items-center"
        >
          <div className="relative w-[50%] h-[150px] flex justify-center items-center">
            <motion.h1
              variants={fadeIn("right", "easeOut", 0.5, 1)}
              initial="hidden"
              animate={isVisible ? "show" : "hidden"}
              className={`${styles.heroHeadText} absolute top-10 text-[150px] text-gray-800 opacity-[30%]`}
            >
              Education
            </motion.h1>
            <motion.p
              variants={fadeIn("left", "easeOut", 1, 0.5)}
              initial="hidden"
              animate={isVisible ? "show" : "hidden"}
              className={`${styles.robotoBold} relative text-[50px]`}
            >
              Edu
              <motion.span
                variants={fadeIn("up", "easeOut", 1.5, 1)}
                initial="hidden"
                animate={isVisible ? "show" : "hidden"}
                className={`${styles.robotoBold} text-cyan-400 drop-shadow-[0_0_2px_cyan] hover:drop-shadow-[0_0_3px_cyan]`}
              >
                cation
              </motion.span>
            </motion.p>
          </div>
        </motion.div>

        {/* Education Data Section */}
        {titleAnimationComplete && ( // Render the education section only after title animation is complete
          <div className="w-full h-auto flex flex-col justify-start items-center gap-10">
            {educationData.map((edu, index) => (
              <motion.div
              key={index}
              variants={fadeIn("up", "spring", 0.5 + index * 0.5, 0.5)} // Adjusted timing for card animation
              initial="hidden"
              animate={isVisible ? "show" : "hidden"}
              className="w-[80%] max-w-[75%] border-[2px] hover:bg-gray-950 border-cyan-400 p-6 rounded-lg shadow-md mt-5 flex flex-col justify-center  hover:drop-shadow-[0_0_2px_cyan]"
            >
              <motion.h3
                variants={fadeIn("left", "easeOut", 0.5, 0.5)} // Child animation delay
                initial="hidden"
                animate={isVisible ? "show" : "hidden"}
                className={`${styles.robotoLight} text-[12px] text-gray-300`}
              >
                {edu.qualification ? edu.qualification : ""}
              </motion.h3>
            
              <motion.h3
                variants={fadeIn("up", "easeOut", 1, 0.5)} // Child animation delay
                initial="hidden"
                animate={isVisible ? "show" : "hidden"}
                className={`${styles.robotoBold} text-[25px]`}
              >
                {edu.degree}
              </motion.h3>
            
              <motion.div
                variants={fadeIn("up", "spring", 1.5, 0.5)} // Child animation delay
                initial="hidden"
                animate={isVisible ? "show" : "hidden"}
                className="w-full flex flex-row justify-between "
              >
                <p className={`${styles.robotoMedium} text-[15px] text-cyan-400 leading-[15px]`}>{edu.institution}</p>
                <motion.p
                  variants={fadeIn("up", "easeOut", 2, 0.5)} // Child animation delay
                  initial="hidden"
                  animate={isVisible ? "show" : "hidden"}
                  className={`${styles.robotoLight} text-[15px] text-cyan-200`}
                >
                  {edu.duration}
                </motion.p>
              </motion.div>
            
              <motion.p
                variants={fadeIn("up", "easeOut", 2.5, 0.5)} // Child animation delay
                initial="hidden"
                animate={isVisible ? "show" : "hidden"}
                className={`${styles.robotoLight} text-[13px] text-gray-200`}
              >
                {edu.description}
              </motion.p>
            </motion.div>
            
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Education;
