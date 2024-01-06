import React from "react";
import "./portfolio.css";

import IMG1 from "../../assets/project4.jpg";
import IMG2 from "../../assets/project2.jpg";
import IMG3 from "../../assets/project5.jpg";

import { BsGithub } from "react-icons/bs";
import { RiPagesLine } from "react-icons/ri";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        <article className="portfolio_item">
          <div className="portfolio_item-img">
            <img src={IMG1} alt="img1" />
          </div>
          <div className="noimg">

            <h3>H Music-App Music</h3>

            <div className="portfolio_item-cta">
              <a
                href="https://github.com/juanxp1/henryMusic"
                className="btn"
                target="_blank"
              >
                <BsGithub className="icons-port" /> GitHub
              </a>
              <a
                href="https://henrymusic.tech/"
                className="btn btn-primary"
                target="_blank"
              >
                <RiPagesLine className="icons-port" /> Live Demo
              </a>
            </div>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-img">
            <img src={IMG2} alt="img2" />
          </div>
          <div className="noimg">
            <h3>Portal Contratista Col-CRM</h3>
            <div className="portfolio_item-cta">
              <a
                href="https://github.com/eespinoza1/PruebaAlexander"
                className="btn"
                target="_blank"
              >
                <BsGithub className="icons-port" /> GitHub
              </a>
              <a

                href="https://portalciudadano.idrd.gov.co/"

                className="btn btn-primary"
                target="_blank"
              >
                <RiPagesLine className="icons-port" /> Live Demo
              </a>
            </div>
          </div>
        </article>
        <article className="portfolio_item">
         <div className="portfolio_item-img">
            <img src={IMG3} alt="img3" />
          </div> 
          
           <div className="noimg">
            <h3>Alana Store-Ecommerce</h3>
            <div className="portfolio_item-cta">
              <a
                href="http://alanastore.shop/"
                className="btn"
                target="_blank"
              >
                <BsGithub className="icons-port" /> GitHub
              </a>
              <a
                href="https://github.com/eespinoza1/AlanaStore"
                className="btn btn-primary"
                target="_blank"
              >
                <RiPagesLine className="icons-port" /> Live Demo
              </a>
            </div>
          </div> 
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
