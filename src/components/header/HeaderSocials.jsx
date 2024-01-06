import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a href="https://www.linkedin.com/in/ericks-espinoza-g%C3%B3mez-58b9b8231/" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/eespinoza1" target="_blank">
        <BsGithub />
      </a>
      <a href="https://www.instagram.com/erick_espinozza/" target="_blank">
        <BsInstagram />
      </a>
    </div>
  );
};

export default HeaderSocials;
