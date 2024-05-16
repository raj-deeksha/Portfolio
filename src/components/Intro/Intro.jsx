/* eslint-disable react/no-unescaped-entities */
import './Intro.css';
import bg from '../../assets/mypicremovebg.png';
import btnImg from '../../assets/hireme.png';
import { Link } from 'react-scroll';


function Intro() {
    return (
        <section id='intro'>
            <div className="introContent">
                <span className='hello'>Hello,</span>
                <span className="introText">I'm <span className='introName'>Deeksha</span><br />Website Designer</span>
                <p className='introPara'>I am a skilled web designer with experience in creating<br/> visually appealing and user friendly websites.</p>
                <Link><button className="btn"><img src={btnImg } alt="Hire Me" className='btnImg'/>Hire Me</button></Link>
            </div>

            <img src={bg} alt="Profile" className="bg" />
        </section>
    )
}
export default Intro;