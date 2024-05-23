import './Skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';
function Skills() {
    return (
      <section id="skills">
        <span className="skillTitle">What I Know</span>
        <span className="skillDesc">
          I am a skilled and passionate web developer with expertise in frontend
          development. My skills include:
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React.js</li>
            <li>Responsive web design</li>
            <li>Pega</li>
            <li>Version control systems (e.g., Git)</li>
          </ul>
        </span><br/>
        I have hands-on experience in creating engaging and dynamic user
        interfaces using modern frontend technologies.
        {/* <div className="skillBars">
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
              <p>
                This demo test can be charged while making the production ready
                website.
              </p>
            </div>
          </div>
          <div className="skillBar">
            <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
            <div className="skillBarText">
              <h2>App Design</h2>
              <p>You can write text related to mobile app development.</p>
            </div>
          </div>
        </div> */}
      </section>
    );
}
export default Skills;