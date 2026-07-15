import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [showContact, setShowContact] = useState(true);

  const projects = [
    {
      title: "E-shop",
      description: "Online Shopping Website",
      image: "/src/assets/shop.png",
    },
    {
      title: "Portfolio",
      description: "Personal Website",
      image: "/src/assets/portfolio.png",
    },
    {
      title: "React native Page",
      description: "React  native Page",
      image: "/src/assets/native.png",
    },
  ];

  return (
    <div id="top">
      <Navbar />

      <div className="intro-section">
        <Hero name="Nam Tymur" profession="Student" text="I love react" />
        <About
          name="Nam Tymur"
          age="18"
          city="Zwierzyniec, Poland"
          school="Technikum im. Jana Zamoyskiego"
        />
      </div>

      <Skills />
      <Projects projects={projects} />

      <div className="contact-toggle-wrapper">
        <button
          className="toggle-contact-btn"
          onClick={() => setShowContact(!showContact)}
        >
          {showContact ? "Hide Contact" : "Show Contact"}
        </button>
      </div>
      {showContact && <Contact />}

      <Footer />
    </div>
  );
}

export default App;
