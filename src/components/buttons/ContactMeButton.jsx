import React, { useEffect, useState } from "react";
import { HashLink as Link } from "react-router-hash-link"; // Import HashLink for smooth scrolling

const ContactMeButton = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 100); // Set scrolled state based on scroll position
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll); // Cleanup on unmount
  }, []);

  return (
    <Link smooth to="/#contact">
      <button
        className="text-cyan-400 border-2 border-cyan-400 rounded-lg py-1 px-2 my-2 flex items-center justify-center w-32 h-10 bg-transparent cursor-pointer transition-all duration-300 hover:text-black hover:bg-cyan-400 hover:drop-shadow-[0_0_10px_cyan] drop-shadow-[0_0_6px_cyan]"
      >
        <p className="font-roboto font-light text-base leading-[38px] ">
          Contact
        </p>
      </button>
    </Link>
  );
};

export default ContactMeButton;
