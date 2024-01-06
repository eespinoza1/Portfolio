import React from "react";
import "./header.css";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header_container">
    
        <h3> Hello I'm</h3>
        <div>
          <h1>
            <a className="ancor" href="#">
              Ericks Jesús Espinoza
            </a>
          </h1>
        </div>
        <h3 className="text-light">Full Stack Web Developer & Accountant </h3>
        {/* <div>
        <img className="mei" src={MEI} alt="me" />
        </div> */}
        <CTA />
        <HeaderSocials />
        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
