import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn } from "../utils/motion";
import yourImage1 from "../assets/portfolio_bg.png";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true); // Trigger animations when section becomes visible
          }
        });
      },
      { threshold: 0.3 } // Adjust threshold as per your need
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

  const personalInfo = [
    { label: "Name", value: "Hari Hara Budra" },
    { label: "Date of birth", value: "December 6, 2003" },
    { label: "Location", value: "Coimbatore, Tamil Nadu, India" },
    { label: "E-mail", value: "hariharabudra@gmail.com" },
    { label: "Phone Number", value: "+91 7397 509 844" },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative w-full h-[100vh] mx-auto flex flex-row justify-center items-center"
    >
      <div className="w-[90vw] h-[90vh] flex flex-row">
        {/* Left Content */}
        <div className="w-[50%] h-full flex flex-col">
          <motion.div
            variants={fadeIn("center", "", 0.5, 1)}
            initial="hidden"
            animate={isVisible ? "show" : "hidden"}
            className={`w-[100%] h-[10%] p-10 mt-10 mb-5 flex flex-col justify-center items-start`}
          >
            <motion.h1
              variants={fadeIn("right", "", 0.5, 1)}
              initial="hidden"
              animate={isVisible ? "show" : "hidden"}
              className={`${styles.heroHeadText} absolute top-0 text-[150px] text-gray-800 opacity-[30%]`}
            >
              About
            </motion.h1>
            <motion.p
              variants={fadeIn("left", "easeIn", 1, 1)}
              initial="hidden"
              animate={isVisible ? "show" : "hidden"}
              className={`${styles.robotoBold} relative top-0 text-[40px]`}
            >
              About{" "}
              <motion.span
                variants={fadeIn("down", "easeIn", 1.75, 1)}
                initial="hidden"
                animate={isVisible ? "show" : "hidden"}
                className={`${styles.robotoBold} text-cyan-400 text-[40px] drop-shadow-[0_0_2px_cyan] hover:drop-shadow-[0_0_3px_cyan]`}
              >
                me
              </motion.span>
              <motion.span
                variants={fadeIn("up", "", 2, 1)}
                initial="hidden"
                animate={isVisible ? "show" : "hidden"}
                className={`${styles.robotoBold}`}
              >
                !
              </motion.span>
            </motion.p>
          </motion.div>

          {/* Description */}
          <div
            className={`w-[100%] px-10 my-5 flex flex-col justify-center items-start`}
          >
            <motion.p
              variants={fadeIn("up", "", 3, 2)}
              initial="hidden"
              animate={isVisible ? "show" : "hidden"}
              className={`${styles.robotoLight}  mb-5`}
            >
              My journey into the world of programming began with{" "}
              <span className={`${styles.robotoMedium}`}>C++</span>, a language
              that opened the door to endless possibilities. I soon discovered{" "}
              <span className={`${styles.robotoMedium}`}>Python</span>, which
              felt like an artist's brush, enabling me to create intricate
              solutions.
            </motion.p>
            <motion.p
              variants={fadeIn("up", "", 4, 2)}
              initial="hidden"
              animate={isVisible ? "show" : "hidden"}
              className={`${styles.robotoLight}  mb-5`}
            >
              During my school days, I explored{" "}
              <span className={`${styles.robotoMedium}`}>Graphic design</span>,
              which sparked my interest in{" "}
              <span className={`${styles.robotoMedium}`}>UI/UX design</span>.
              This passion led me to mobile app development, where I learned to
              create applications that fit in the palm of a hand. Along the way,
              I developed skills in both{" "}
              <span className={`${styles.robotoMedium}`}>Front-end</span> and{" "}
              <span className={`${styles.robotoMedium}`}>back-end</span>{" "}
              development, building robust applications from the ground up.
            </motion.p>
            <motion.p
              variants={fadeIn("up", "", 5, 2)}
              initial="hidden"
              animate={isVisible ? "show" : "hidden"}
              className={`${styles.robotoLight} mb-5`}
            >
              My thirst for knowledge took me into{" "}
              <span className={`${styles.robotoMedium}`}>
                Database Management Systems
              </span>
              , where I grasped the foundations of data management. This
              exploration paved the way for my dive into{" "}
              <span className={`${styles.robotoMedium}`}>machine learning</span>{" "}
              and{" "}
              <span className={`${styles.robotoMedium}`}>deep learning</span>,
              allowing me to harness data to create intelligent systems.
            </motion.p>
            <motion.p
              variants={fadeIn("up", "", 6, 2)}
              initial="hidden"
              animate={isVisible ? "show" : "hidden"}
              className={`${styles.robotoLight} mb-5`}
            >
              Today, I proudly identify as a{" "}
              <span className={`${styles.robotoMedium}`}>
                Versatile developer
              </span>{" "}
              with a focus on AI and User Experience, equipped with a unique
              blend of skills and experiences that empower me to bring ideas to
              life, one line of code at a time.
            </motion.p>
          </div>
        </div>

        {/* Right image div */}
        <motion.div
          variants={fadeIn("center", "", 0.5, 1)}
          initial="hidden"
          animate={isVisible ? "show" : "hidden"}
          className={`w-[50%] h-full flex flex-col justify-center items-center`}
        >
          {/* Uncomment if you want to display the image */}
          {/* <img src={yourImage1} alt="profile image" className="object-cover" /> */}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
