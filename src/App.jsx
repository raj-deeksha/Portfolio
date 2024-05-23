/* eslint-disable no-unused-vars */
import react from "react";
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Skills from "./components/Skills/Skills";

import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div>
      <Navbar />
      <Intro />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
