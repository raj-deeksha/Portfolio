/* eslint-disable react/no-unescaped-entities */
import "./Intro.css";
import bg from "../../assets/mypicremovebg.png";
import btnImg from "../../assets/hireme.png";
import { Link } from "react-scroll";

function Intro() {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Deeksha</span>
          <br />
          Software Developer
        </span>
        <span className="introPara">
          I am a passionate software developer with approximately 2 years of
          industry experience. I specialize in front-end development, <br />
          creating engaging and dynamic user interfaces. I am proficient in
          HTML, CSS, JavaScript, and React.js. Additionally, I have hands <br />
          on experience with Pega technology, which has broadened my
          understanding of enterprise application development. I am always{" "}
          <br />
          eager to learn and explore new technologies to improve my skills and
          contribute to exciting projects.
        </span>
        <Link>
          <button
            className="btn"
            onClick={() => {
              document
                .getElementById("contact")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            <img src={btnImg} alt="Hire Me" className="btnImg" />
            Hire Me
          </button>
        </Link>
      </div>

      {/* <img src={bg} alt="Profile" className="bg" /> */}
    </section>
  );
}
export default Intro;
