import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>The Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        <div className="experience_front">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className="experience_detail">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>Flutter</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_detail">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_detail">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_detail">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>Kotlin</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_detail">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>Dart</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_detail">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>VueJs</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience_back">
          <h3>Backend Development</h3>
          <div className="experience_content">
            <article className="experience_detail">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>Node.js</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_detail">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>Express</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_detail">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_detail">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>Firebase</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            <article className="experience_detail">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>Postgres</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_detail">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>Nest Js</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
