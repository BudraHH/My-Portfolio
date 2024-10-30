import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Typed from "typed.js";
import { styles } from "../styles";
import { fadeIn } from "../utils/motion";
import ContactMeButton from "./buttons/ContactMeButton";
import yourImage1 from "../assets/portfolio_bg.png";

const Home = () => {
  const typedElement = useRef(null);
  const typedDescription = useRef(null);

  useEffect(() => {
    const optionsTitle = {
      strings: ["Web developer", "Frontend developer", "ML engineer"],
      typeSpeed: 150,
      backSpeed: 150,
      loop: true,
      backDelay: 1500,
    };

    const typedTitle = new Typed(typedElement.current, optionsTitle);

    const optionsDescription = {
      strings: [
        "A passionate full-stack developer and creative designer with expertise in frontend, mobile apps, backend systems, database management, machine learning, and a deep love for UI/UX and graphic design.",
        ],
      typeSpeed: 30,
      backSpeed: 30,
      loop: false,
      onComplete: (self) => {
        self.stop();  // Stops the backspacing after the last string is typed
      }
    };

    const typedDesc = new Typed(typedDescription.current, optionsDescription);

    // Cleanup
    return () => {
      typedTitle.destroy();
      typedDesc.destroy();
    };
  }, []);

  return (
    <section
      id="home"
      className="w-full h-[100vh] mx-auto flex flex-row justify-center items-center"
      style={{
        backgroundImage: `url(${yourImage1})`,
        backgroundSize: "contain",
        backgroundPosition: "right",
        backgroundRepeat: "no-repeat",
        height: "100vh", // Full viewport height
        width: "100%",
        position: "relative",
      }}
    >
      <div className="w-[90vw] h-[90vh] flex flex-row ">
        <motion.div
          variants={fadeIn("center", "", 0.5, 1)}
          initial="hidden"
          animate="show"
          className={`w-[50%] h-full p-10 mt-10 flex flex-col justify-center items-start `}
        >
          <motion.h1
            variants={fadeIn("right", "", 0.5, 1)}
            initial="hidden"
            animate="show"
            className={`${styles.robotoLight} text-white text-[18px] ml-[2px] mb-2`}
          >
            Hi{" "}
            <motion.span
              variants={fadeIn("up", "", 1.5, 1)}
              initial="hidden"
              animate="show"
            >
              there,{" "}
            </motion.span>
            <motion.span
              variants={fadeIn("up", "", 2, 1)}
              initial="hidden"
              animate="show"
              className={`text-cyan-400 `}
            >
              it's
            </motion.span>
          </motion.h1>

          <motion.h1
            variants={fadeIn("left", "", 2.5, 1)}
            initial="hidden"
            animate="show"
            className={`${styles.robotoBold} text-white text-[60px] leading-[50px] mb-2`}
          >
            Hari Hara{" "}
            <motion.span
              variants={fadeIn("up", "", 3.5, 1)}
              initial="hidden"
              animate="show"
              className={`${styles.robotoBold} text-cyan-400 drop-shadow-[0_0_2px_cyan] hover:drop-shadow-[0_0_3px_cyan]`}
            >
              Budra
            </motion.span>
          </motion.h1>

          <motion.p
            variants={fadeIn("left", "", 4, 1)}
            initial="hidden"
            animate="show"
            className={`${styles.robotoMedium} text-white text-[25px] ml-[2px]`}
          >
            I'm{" "}
            <motion.span
              variants={fadeIn("center", "easeIn", 4.5, 1)}
              initial="hidden"
              animate="show"
              className={`${styles.robotoMedium} text-white`}
            >
              a
            </motion.span>{" "}
            <motion.span
              variants={fadeIn("center", "easeIn", 5, 1)}
              initial="hidden"
              animate="show"
              className={`${styles.robotoBold} text-cyan-400`}
            >
              <span ref={typedElement}></span> {/* Typed.js animation for title */}
            </motion.span>
          </motion.p>

          {/* Add Typed.js for the description paragraph */}
          <motion.p
            variants={fadeIn("up", "easeIn", 5.5, 1)}
            initial="hidden"
            animate="show"
            className={`${styles.robotoLight} text-white text-[15px] ml-[2px]`}
          >
            <span ref={typedDescription}></span> {/* Typed.js animation for description */}
          </motion.p>

          <motion.div
            variants={fadeIn("up", "easeIn", 9.25, 1)}
            initial="hidden"
            animate="show"
            className={`${styles.robotoLight} text-white text-[15px] ml-[2px] my-1`}
          >
            <ContactMeButton />
          </motion.div>
        </motion.div>

        {/* Right image div */}
        <motion.div
          variants={fadeIn("center", "", 0.5, 1)}
          initial="hidden"
          animate="show"
          className={`w-[50%] h-full flex flex-col justify-center items-center `}
        >
          {/* <img src={yourImage1} alt="profile image" className="object-cover" /> */}
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
