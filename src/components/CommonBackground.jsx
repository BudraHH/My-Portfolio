import React from 'react';
import yourImage1 from "../assets/portfolio_bg.png"; // Ensure the path is correct

const CommonBackground = ({ children }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${yourImage1})`,
        backgroundSize: 'contain',
        backgroundPosition: 'right',
        backgroundRepeat:'no-repeat',
        height: '100vh', // Full viewport height
        width: '100%',
        position: 'relative',
      }}
    >
      {children}
    </div>
  );
};

export default CommonBackground;
