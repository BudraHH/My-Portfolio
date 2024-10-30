import React, { useState, useEffect } from "react";

const Typewriter = ({ text, speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  return (
    <div className="flex items-center">
      <span className="text-2xl font-mono">{displayedText}</span>
      <span className="ml-1 w-[1px] h-[24px] bg-black animate-blink"></span>
    </div>
  );
};

export default Typewriter;
