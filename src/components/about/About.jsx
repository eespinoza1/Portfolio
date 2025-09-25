import React from "react";
import "./about.css";
import ME from "../../assets/fotocv2.jpg";
import { FaAward } from "react-icons/fa";
import { VscBriefcase } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        {/* Imagen */}
        <div className="about__me">
          <div className="about__me-img">
            <img src={ME} alt="Profile of developer" />
          </div>
        </div>

        {/* Contenido */}
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>5+ Years Working</small>
            </article>

            <article className="about__card">
              <VscBriefcase className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>

          <p>
            Who am I? 🕵🏼‍♂️ <br />
            <br />
            👨🏼‍💻 I am a Full Stack Web/Mobile Developer specialized in building
            scalable and efficient applications.
            <br />
            <br />
            Why me? 🤔 <br />
            <br />
            ⚡ With me you will get not only strong technical skills, but also
            proactivity, problem-solving mindset, and adaptability to any
            challenge.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let’s Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
