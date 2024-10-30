import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { About, Contact, Education, TechSkills, Home, Navbar, Footer, Projects } from "./components";
import Section from "./components/Section";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-black">
        <Navbar />

        <Section id="home">
          {(isVisible) => <Home isVisible={isVisible} />}
        </Section>

        <Section id="about">
          {(isVisible) => <About isVisible={isVisible} />}
        </Section>

        <Section id="techSkills mb-10">
          {(isVisible) => <TechSkills isVisible={isVisible} />}
        </Section>

        <Section id="education">
          {(isVisible) => <Education isVisible={isVisible} />}
        </Section>

        <Section id="projects">
          {(isVisible) => <Projects isVisible={isVisible} />}
        </Section>

        <Section id="contact">
          {(isVisible) => <Contact isVisible={isVisible} />}
        </Section>

        
      </div>
    </BrowserRouter>
  );
};

export default App;
