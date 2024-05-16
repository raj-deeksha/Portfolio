/* eslint-disable no-unused-vars */
import react from "react";
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Skills from "./components/Skills/Skills";
import Work from "./components/Work/Work";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
function App() {
  return <div>
    <Navbar />
    <Intro />
    <Skills />
    <Work />
    <Contact />
    <Footer/>
  </div>;
}

export default App;
