import React, { useRef } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { ImWhatsapp } from "react-icons/im";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lhl48tv",
        "template_69g79ck",
        form.current,
        "wZrTajfNJ7Ve-wMLF"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className="contact_option-icon" />
            <h4>Email</h4>
            <h6>espinozaericks060@gmail.com</h6>
            <a href="mailto:espinozaericks060@gmail.com" target="_blank">
              Send a message
            </a>
          </article>

          <article className="contact_option">
            <ImWhatsapp className="contact_option-icon" />
            <h4>Whatsapp</h4>
            <h5>(+57) 320 8294033</h5>
            <a
              href="https://api.whatsapp.com/send/?phone=573208294033&text&type=phone_number&app_absent=0"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name..."
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email..."
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message..."
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
