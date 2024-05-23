import "./contact.css";
import { useRef } from "react";
// import Accenture from "../../assets/Accenturelogo.png";
// import Highradius from "../../assets/highradius.webp";

import FacebookIcon from "../../assets/facebook-icon.png";
// import TwitterIcon from "../../assets/twitter.png";
import YoutubeIcon from "../../assets/youtube.png";
import InstagramIcon from "../../assets/instagram.png";
import emailjs from "@emailjs/browser";
import { Link } from "react-scroll";

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    console.log("button clicked");

    emailjs
      .sendForm("service_lznpsbc", "template_3mzmbzi", form.current, {
        publicKey: "rZuhO8XnzksSGm4t5",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          e.target.reset();
          alert("Email Sent!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <section id="contactPage">
      <div id="clients">
        <h1 className="contactPageTitle">My Experience</h1>
        <p className="clientDesc">
          <strong>Software Engineer</strong>
          <p>Accenture(7 Nov 2022-Present)</p>I worked in enhancement of
          features and functionalities of a specialized CRM system for insurance
          services. Understanding the business requirement.
          <br />
          <br />
          <strong>Projects</strong>
          <br />
          <strong>Speciality CRM (Client: Cigna)</strong>{" "}
          <em>(March 2023 - Jan 2024)</em>
          <br />
          Contributed to the development of a healthcare CRM application.
          Enhanced and implemented new features and functionalities according to
          business requirements. Worked on data transform, data page, paragraph,
          when, and property rule types using PEGA technologies. Implemented
          section rules for UI enhancements based on business requirements.
          <br />
          <br />
          <strong>Chat Application</strong>
          <br />
          Developed a user-friendly chat application using React.js and
          Firebase. Implemented Material UI for enhanced user interface and
          state management.
        </p>

        {/* <div className="clientImgs">
          <img src={Accenture} alt="Client" className="clientImg" />
          <img src={Highradius} alt="Client" className="clientImg" />
        </div> */}
        <div id="contact">
          <h1 className="contactPageTitle">Contact Me</h1>
          <span className="contactDesc">
            Please fill out the form below to discuss any work oppurtunities.
          </span>
          <form className="contactForm" ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              className="name"
              placeholder="Your Name"
              name="your_name"
            />
            <input
              type="text"
              className="email"
              placeholder="Your Email"
              name="your_email"
            />
            <textarea
              name="message"
              rows="5"
              className="msg"
              placeholder="Your Message"
            ></textarea>
            <button type="submit" value="send" className="submitBtn">
              Submit
            </button>
            <div className="links">
              <a href="https://www.facebook.com/deeksha.raj.5817300">
                <img src={FacebookIcon} alt="Facebook" className="link" />
              </a>
              <a href="https://www.youtube.com/channel/UCWChCl3QpNWK4gRo8OEAPbA">
                <img src={YoutubeIcon} alt="Youtube" className="link" />
              </a>
              <a href="https://www.instagram.com/rajdeeksha99/">
                <img src={InstagramIcon} alt="Instagram" className="link" />
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
export default Contact;
