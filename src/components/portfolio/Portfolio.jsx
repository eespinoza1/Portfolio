import React from "react";
import "./portfolio.css";

import IMG1 from "../../assets/project1.jpeg";
import IMG2 from "../../assets/project2.jpg";
import IMG3 from "../../assets/project3.png";
import IMG4 from "../../assets/project4.jpg";
import IMG5 from "../../assets/project5.jpg";
import IMG6 from "../../assets/project6.png";

import { BsGithub } from "react-icons/bs";
import { RiPagesLine } from "react-icons/ri";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "PaPola App y PaPanas",
    github: "https://github.com/eespinoza1/PaPola",
    demo: "https://drive.google.com/drive/folders/1pAdLjt6I9pMqsqmvqy-OyX7CylhgcBi8?usp=drive_link",
  },
  {
    id: 2,
    image: IMG2,
    title: "Portal Contratista Col-CRM",
    github: "https://github.com/eespinoza1/PruebaAlexander",
    demo: "https://portalciudadano.idrd.gov.co/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Inka Adventure Tours",
    github: "https://github.com/eespinoza1/AlanaStore",
    demo: "https://inkadventours.com/es",
  },
  {
    id: 4,
    image: IMG4,
    title: "Proyecto HMusic",
    github: "https://github.com/usuario/startup-landing",
    demo: "https://music.papolaapp.com/",
  },
  {
    id: 5,
    image: IMG5,
    title: "Alana Store",
    github: "https://github.com/usuario/dashboard-analytics",
    demo: "",
  },
  {
    id: 6,
    image: IMG6,
    title: "Sense Music Group",
    github: "https://github.com/usuario/app-tareas",
    demo: "https://sensemusicgroup.com/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {data.map(({ id, image, title, github, demo }) => (
          <article key={id} className="portfolio_item">
            <div className="portfolio_item-img">
              <img src={image} alt={title} />
            </div>
            <div className="noimg">
              <h3>{title}</h3>
              <div className="portfolio_item-cta">
                <a href={github} className="btn" target="_blank" rel="noreferrer">
                  <BsGithub className="icons-port" /> GitHub
                </a>
                <a href={demo} className="btn btn-primary" target="_blank" rel="noreferrer">
                  <RiPagesLine className="icons-port" /> Live Demo
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
