import "./contact.css";
import { useRef } from "react";
import Accenture from "../../assets/Accenturelogo.png";
import Highradius from "../../assets/highradius.webp";
import Microsoft from "../../assets/microsoft.png";
import Facebook from "../../assets/facebook.png";
import FacebookIcon from "../../assets/facebook-icon.png";
import TwitterIcon from "../../assets/twitter.png";
import YoutubeIcon from "../../assets/youtube.png";
import InstagramIcon from "../../assets/instagram.png";
import emailjs from "@emailjs/browser";

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
          I have had the oppurtunity to work with a diverse group of companies.
          Some of the notable companies I have worked with includes
        </p>
        <div className="clientImgs">
          <img src={Accenture} alt="Client" className="clientImg" />
          <img src={Highradius} alt="Client" className="clientImg" />
          <img src={Microsoft} alt="Client" className="clientImg" />
          <img src={Facebook} alt="Client" className="clientImg" />
        </div>
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
              <img src={FacebookIcon} alt="Facebook" className="link" />
              <img src={TwitterIcon} alt="twitter" className="link" />
              <img src={YoutubeIcon} alt="Youtube" className="link" />
              <img src={InstagramIcon} alt="Instagram" className="link" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
export default Contact;
