import React, { useState, useEffect, useRef } from "react";

const Section = ({ id, children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true); // Trigger visibility when section comes into view
          }
        });
      },
      { threshold: 0.3 } // Adjust as necessary
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
    <section ref={sectionRef} id={id} className="w-full min-h-[100vh]">
      {children(isVisible)} {/* Pass visibility state to children */}
    </section>
  );
};

export default Section;
