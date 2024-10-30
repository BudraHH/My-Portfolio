import React from "react";
import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaPhone,
  FaInstagram,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { styles } from "../../styles.js"; // Adjusted import path to styles.js

// Social Links Array
const socialLinks = [
  { icon: <FaPhone />, link: "tel:+917397509844", content: <>Contact <span className="text-cyan-400">Number</span></> },
  { icon: <FaEnvelope />, link: "mailto:hariharabudra@gmail.com", content: <>E-mail <span className="text-cyan-400">Address</span></> },
  { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/hari-hara-budra/", content: <>LinkedIn <span className="text-cyan-400">Profile</span></> },
  { icon: <FaGithub />, link: "https://github.com/BudraHH", content: <>GitHub <span className="text-cyan-400">Repo</span></> },
  { icon: <SiLeetcode />, link: "https://leetcode.com/u/Hari_Hara_Budra/", content: <>LeetCode <span className="text-cyan-400">Profile</span></> },
  { icon: <FaInstagram />, link: "https://www.instagram.com/budra_hh", content: <>Instagram <span className="text-cyan-400">Profile</span></> },
];

const SocialIconsComponent = () => {
  return (
    <div className="flex flex-row gap-6 mt-4 justify-center items-center">
      {socialLinks.map((social, index) => (
        <motion.a
          key={index}
          href={social.link}
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, y: 20 }} // Initial animation state
          animate={{ opacity: 1, y: 0 }} // Animate to visible state
          transition={{ delay: index * 0.3 + 2, duration: 0.5 }} 
        >
          <motion.div  whileHover={{ scale: 1.1 }}
          className="w-40 flex flex-col justify-between items-center">
            <div className="text-[25px] w-20 h-20 flex justify-center items-center rounded-full p-5 text-white bg-gray-900 border border-transparent  hover:text-cyan-400 transition-all duration-300">
              {social.icon}
            </div>
            <div className={`font-medium text-[15px] mt-3`}>
              {social.content} 
            </div>
          </motion.div>
        </motion.a>
      ))}
    </div>
  );
};

export default SocialIconsComponent;
