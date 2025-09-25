
import "./footer.css";
import { FaXTwitter } from "react-icons/fa6"; // 👈 en lugar de FiTwitter
import { BsLinkedin, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">
        Ericks Jesús Espinoza
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
     
        <li>
          <a href="#contact">Contact Me</a>
        </li>
      </ul>
      <div className="footer_socials">
        <a href="https://www.instagram.com/erick_espinozza/">
          <BsInstagram />
        </a>
        <a href="https://www.linkedin.com/in/erick-espinoza-58b9b8231/">
          <BsLinkedin />
        </a>
        <a href="https://twitter.com/EspinozaEricks">
          <FaXTwitter />
        </a>
      </div>
      <div className="footer_copyright">
        <small>&copy; Ericks Jesus Espinoza</small>
      </div>
    </footer>
  );
};

export default Footer;
