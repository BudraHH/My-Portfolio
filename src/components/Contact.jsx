import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn } from "../utils/motion";
import SocialIcons from "./buttons/SocialIcons";
import { Footer } from "./";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative w-full h-[100vh] mx-auto flex flex-col justify-center items-center "
    >
      <div className="absolute w-[82vw] h-[80vh] flex flex-col justify-center items-center gap-10">
        <div className="w-full h-[20%] flex justify-center items-center">
          <div className="relative w-[50%] h-[150px] flex justify-center items-center">
            <motion.h1
              variants={fadeIn("right", "easeOut", 0.5, 1)}
              initial="hidden"
              animate={isVisible ? "show" : "hidden"}
              className={`${styles.heroHeadText} absolute top-10 text-[150px] text-gray-800 opacity-[30%]`}
            >
              Contact
            </motion.h1>
            <motion.p
              variants={fadeIn("left", "easeOut", 1, 1)}
              initial="hidden"
              animate={isVisible ? "show" : "hidden"}
              className={`${styles.robotoBold} relative top-0 text-[40px]`}
            >
              Contact{" "}
              <motion.span
                variants={fadeIn("up", "easeOut", 1.5, 0.5)}
                initial="hidden"
                animate={isVisible ? "show" : "hidden"}
                className={`${styles.robotoBold} text-cyan-400 text-[40px]`}
              >
                Me
              </motion.span>
              <motion.span
                variants={fadeIn("up", "easeOut", 2, 0.5)}
                initial="hidden"
                animate={isVisible ? "show" : "hidden"}
                className={`${styles.robotoBold}`}
              >
                !
              </motion.span>
            </motion.p>
          </div>
        </div>
        <motion.div
          initial="hidden"
          animate={isVisible ? "show" : "hidden"}
          variants={fadeIn("up", "easeOut", 1, 1)}
        >
          <SocialIcons />
        </motion.div>
        <motion.div
          initial="hidden"
          animate={isVisible ? "show" : "hidden"}
          variants={fadeIn("up", "easeOut", 1.2, 1)}
        >
          <Footer />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
