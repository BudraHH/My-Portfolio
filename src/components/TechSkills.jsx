import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn } from "../utils/motion";

const techSkillsData = [
  {
    title: "Programming languages",
    description: "Python, C++, Java",
  },
  {
    title: "Front-end dev",
    description: "HTML, CSS, JavaScript, React.js",
  },
  {
    title: "Mobile app-dev",
    description: "Flutter, Dart",
  },
  {
    title: "Back-end dev",
    description: "Django, Flask, Node.js",
  },
  {
    title: "Database Engines",
    description: "PostgreSQL, MongoDB",
  },
  {
    title: "Design Tools",
    description: "Figma, Adobe XD, Photoshop",
  },
];

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const TechSkills = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.5 }
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

  return (
    <section
      id="techSkills"
      ref={sectionRef}
      className="relative w-full mx-auto flex flex-col justify-center items-center"
    >
      <div className="w-[90vw] flex-grow flex-col justify-center items-start gap-10">
        {/* Title Section */}
        <div className="w-full flex flex-col justify-center items-center mb-5">
          <div className="relative w-[50%] h-[150px] flex justify-center items-center">
            {isVisible && (
              <>
                <motion.h1
                  variants={fadeIn("right", "easeOut", 0.5, 0.25)}
                  initial="hidden"
                  animate="show"
                  className={`${styles.heroHeadText} absolute top-10 text-[150px] text-gray-800 opacity-[30%]`}
                >
                  Tech Skills
                </motion.h1>
                <motion.p
                  variants={fadeIn("left", "easeOut", 0.5, 1)}
                  initial="hidden"
                  animate="show"
                  className={`${styles.robotoBold} relative top-5 text-[50px]`}
                >
                  Tech
                  <motion.span
                    variants={fadeIn("down", "easeOut", 1.5, 1)}
                    initial="hidden"
                    animate="show"
                    className={`${styles.robotoBold} text-cyan-400 drop-shadow-[0_0_2px_cyan] hover:drop-shadow-[0_0_3px_cyan]`}
                  >
                    Skills
                  </motion.span>
                </motion.p>
              </>
            )}
          </div>
          {isVisible && (
            <motion.p
              variants={fadeIn("up", "easeOut", 2.5, 1)}
              initial="hidden"
              animate="show"
              className={`${styles.robotoExtraLight} relative top-10 text-[10px]`}
            >
              Hover to know more...
            </motion.p>
          )}
        </div>

        {/* Skills Section */}
        <motion.div  
          variants={container}  // Use container animation
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}  // Toggle animation based on visibility
          className="w-full p-5 flex flex-wrap justify-center bg-black"
        >
          {isVisible &&
            techSkillsData.map((skill, index) => (
              <motion.div
                key={index}
                variants={item}  // Use item animation
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`border-[1px] border-cyan-400 p-5 rounded-lg shadow-md w-[30%] h-[200px] m-3 flex flex-col justify-center items-center transition-transform duration-300 transform ${
                  hoveredIndex === index ? "scale-110" : ""
                }`}
              >
                {hoveredIndex === index ? (
                  <p
                    className={`${styles.robotoBold} text-white text-[20px] leading-[25px]`}
                  >
                    {skill.description}
                  </p>
                ) : (
                  <h3
                    className={`${styles.robotoBold} text-white text-[20px] leading-[15px]`}
                  >
                    {skill.title}
                  </h3>
                )}
              </motion.div>
            ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechSkills;
