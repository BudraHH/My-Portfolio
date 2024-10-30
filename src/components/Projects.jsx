import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn } from "../utils/motion";
import backend from "../assets/backend.png";

const projectData = [
  {
    image: backend,
    name: "Counselin",
    description:
      "Studied core concepts in AI, Machine Learning, Data Science, and Software Development. Gained hands-on experience in developing intelligent systems and data-driven applications.",
  },
  {
    image: backend,
    name: "Counselin",
    description:
      "Studied core concepts in AI, Machine Learning, Data Science, and Software Development. Gained hands-on experience in developing intelligent systems and data-driven applications.",
  },
  {
    image: backend,
    name: "Counselin",
    description:
      "Studied core concepts in AI, Machine Learning, Data Science, and Software Development. Gained hands-on experience in developing intelligent systems and data-driven applications.",
  },
  {
    image: backend,
    name: "Counselin",
    description:
      "Studied core concepts in AI, Machine Learning, Data Science, and Software Development. Gained hands-on experience in developing intelligent systems and data-driven applications.",
  },
  {
    image: backend,
    name: "Counselin",
    description:
      "Studied core concepts in AI, Machine Learning, Data Science, and Software Development. Gained hands-on experience in developing intelligent systems and data-driven applications.",
  },
  {
    image: backend,
    name: "Counselin",
    description:
      "Studied core concepts in AI, Machine Learning, Data Science, and Software Development. Gained hands-on experience in developing intelligent systems and data-driven applications.",
  },
];

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const [cardVisible, setCardVisible] = useState(Array(projectData.length).fill(false));

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
      const cardObserver = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setCardVisible((prev) => {
            const updated = [...prev];
            updated[index] = true; // Set card as visible
            return updated;
          });
          cardObserver.disconnect(); // Stop observing after visibility is set
        }
      }, { threshold: 0.5 });

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
        <div className="w-full flex flex-wrap justify-center items-start bg-white p-5">
          {projectData.map((project, index) => (
            <motion.div
              key={index}
              id={`project-card-${index}`}
              variants={fadeIn("up", "spring", index * 1, 0)} // Animation stagger based on index
              initial="hidden"
              animate={cardVisible[index] && isVisible ? "show" : "hidden"} // Trigger animation only when visible
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`border border-cyan-400 p-5 rounded-lg shadow-md w-[45%] h-[200px] flex flex-row items-center justify-between m-3 transform transition-transform duration-300 ${
                hoveredIndex === index ? "scale-110" : ""
              }`}
            >
              <div className="flex-shrink-0">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-[100px] h-[100px] object-cover rounded-lg"
                />
              </div>
              <div className="flex-grow bg-purple-500 px-4 py-2 flex flex-col justify-between">
                <h3 className="text-white text-[20px] font-bold">
                  {project.name}
                </h3>
                <p className="text-gray-300 text-[14px]">
                  {hoveredIndex === index
                    ? project.description
                    : "Hover to see description"}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
