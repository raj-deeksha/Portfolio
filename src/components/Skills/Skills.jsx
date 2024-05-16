import './Skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';
function Skills() {
    return (
      <section id="skills">
        <span className="skillTitle">What I do</span>
        <span className="skillDesc">
          I am a skilled and passionate web designer with experience in creating
          visually aspecting appealing and user-friendly websites.I have a
          strong understanding of design and a keen eye for detail.I am
          proficient in HTML,CSS and Javascript,as well as design software such
          as Adobe Photoshop and illustrator.
        </span>
        <div className="skillBars">
          <div className="skillBar">
            <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
            <div className="skillBarText">
              <h2>UI/UX design</h2>
              <p>This is a demo text,you can write your own content here.</p>
            </div>
          </div>
          <div className="skillBar">
            <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
            <div className="skillBarText">
              <h2>Website design</h2>
              <p>This demo test can be charged while making the production ready website.</p>
            </div>
          </div>
          <div className="skillBar">
            <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
            <div className="skillBarText">
              <h2>App Design</h2>
              <p>You can write text related to mobile app development.</p>
            </div>
          </div>
        </div>
      </section>
    );
}
export default Skills;