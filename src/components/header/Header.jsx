import React from "react";
import "./header.css";
import CTA from "./CTA";

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h3>Hello I'm</h3>
        <h1>
          <a className="ancor" href="#">
            Ericks Jesús Espinoza
          </a>
        </h1>
        <h3 className="text-light">
          Full Stack Web Developer & Accountant
        </h3>

        <CTA />

        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
