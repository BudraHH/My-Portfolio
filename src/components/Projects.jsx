import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn } from "../utils/motion";
import backend from "../assets/backend.png";

const projectData = [
  {
    name: "Dropper",
    tech: "MERN Stack (MongoDB, Express.js, React.js, Node.js)",
    description: [
      "Developed a secure e-commerce platform with React.js and Redux for state management, ensuring scalability and security of user data.",
      "Designed backend services with Node.js, integrating secure payment gateways and applying data validation for safe transactions.",
      "Took ownership of user interface enhancements, continuously refining the platform based on user feedback to improve overall UX.",
    ],
  },
  {
    name: "Counselin",
    tech: "Flutter, Django (Python), PostgreSQL",
    description: [
      "Created Counselin, an AI-powered learning platform, using Flutter for the mobile interface and Django for backend development, focusing on secure data handling and user privacy.",
      "Integrated deep learning models to deliver personalized learning experiences and used PostgreSQL for optimized data security and efficient storage, enhancing both system performance and data integrity.",
    ],
  },
  {
    name: "Pal.CD Chatbot",
    tech: "Flutter, Django (Python), NLP (Python)",
    description: [
      "Developed the Pal.CD secure chatbot, leveraging NLP to enhance real-time engagement and privacy-respecting user interactions.",
      "Integrated NLP models to streamline customer support, enabling real-time inquiries and providing instant information on cloud services.",
    ],
  },
];

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const [cardVisible, setCardVisible] = useState(
    Array(projectData.length).fill(false)
  );

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

  useEffect(() => {
    const cardObservers = projectData.map((_, index) => {
      const cardRef = document.getElementById(`project-card-${index}`);
      const cardObserver = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setCardVisible((prev) => {
              const updated = [...prev];
              updated[index] = true; // Set card as visible
              return updated;
            });
            cardObserver.disconnect(); // Stop observing after visibility is set
          }
        },
        { threshold: 0.5 }
      );

      if (cardRef) {
        cardObserver.observe(cardRef);
      }

      return cardObserver;
    });

    return () => {
      cardObservers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative w-full mx-auto flex flex-col justify-center items-center py-10"
    >
      <div className="w-[90vw] flex flex-col justify-start items-center gap-10">
        {/* Title Section */}
        <div className="w-full flex flex-col justify-center items-center mb-5">
          <div className="relative w-[50%] h-[150px] flex justify-center items-center">
            {isVisible && (
              <>
                <motion.h1
                  variants={fadeIn("center", "easeOut", 0, 0.25)}
                  initial="hidden"
                  animate="show"
                  className={`${styles.heroHeadText} absolute top-11 text-[150px] text-gray-800 opacity-[30%]`}
                >
                  Projects
                </motion.h1>
                <motion.p
                  variants={fadeIn("left", "easeOut", 0.5, 0.5)}
                  initial="hidden"
                  animate="show"
                  className={`${styles.robotoBold} relative top-0 text-[50px]`}
                >
                  My{" "}
                  <motion.span
                    variants={fadeIn("center", "easeOut", 1, 1)}
                    initial="hidden"
                    animate="show"
                    className={`${styles.robotoBold} text-cyan-400 text-[50px]`}
                  >
                    Projects
                  </motion.span>
                </motion.p>
              </>
            )}
          </div>
          {isVisible && (
            <motion.p
              variants={fadeIn("up", "easeOut", 1, 1)}
              initial="hidden"
              animate="show"
              className={`${styles.robotoExtraLight} relative top-2 text-[10px]`}
            >
              Hover to know more...
            </motion.p>
          )}
        </div>

        {/* Projects Section */}
        <div className="w-full flex flex-wrap justify-center items-start  p-5">
          {projectData.map((project, index) => (
            <motion.div
              key={index}
              id={`project-card-${index}`}
              variants={fadeIn("up", "spring", index * 1, 0)} // Animation stagger based on index
              initial="hidden"
              animate={cardVisible[index] && isVisible ? "show" : "hidden"} // Trigger animation only when visible
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`border border-cyan-400 rounded-lg shadow-md w-[45%] h-[250px] flex flex-row items-start justify-center m-3 transform transition-transform duration-300 cursor-pointer ${
                hoveredIndex === index ? "scale-110" : ""
              }`}
            >
              <div className="flex-grow px-4 py-2 flex flex-col justify-start">
                <div className="h-[50px] mt-2">
                  <h3 className={`${styles.robotoBold} text-white text-[20px]`}>
                    {project.name}
                  </h3>
                </div>
                <div className="">
                  <p className="text-white text-[14px] ">
                    {project.description.map((line, lineIndex) => (
                      <span key={lineIndex} className="">
                        {line}
                        {lineIndex < project.description.length - 1 && <br />}
                        {<br />}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
