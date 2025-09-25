import React, { useState } from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBookAlt } from "react-icons/bi";
import { MdOutlineWorkOutline } from "react-icons/md";
import { BiMessageDetail } from "react-icons/bi";
const Nav = () => {
  const [activeNav, serActiveNav] = useState("#");

  return (
    <nav>
      <a
        href="#"
        onClick={() => serActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => serActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => serActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <BiBookAlt />
      </a>
      <a
        href="#portfolio"
        onClick={() => serActiveNav("#portfolio")}
        className={activeNav === "#portfolio" ? "active" : ""}
      >
        <MdOutlineWorkOutline />
      </a>
      <a
        href="#contact"
        onClick={() => serActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <BiMessageDetail />
      </a>
    </nav>
  );
};

export default Nav;
