import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I offer</h5>
      <h2>Services</h2>
      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>Frontend Development</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>Responsive Web Design</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>SPA (single page applications)</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Great UX/UI Design</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Manage Of Backend From The Frontend</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Development of Streaming of Music</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Development of Streaming</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service_head">
            <h3>Backend Development</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>Optimal Backend Performance</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Connections with SQL and noSQL Databases</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Managing of Payment</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Authorization and Security</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Emails Sending</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Deployments</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
