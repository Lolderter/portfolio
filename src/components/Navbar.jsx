import "./Navbar.css";
import logo from "../assets/logo.svg";
import homeIcon from "../assets/home.png";
import aboutIcon from "../assets/about.png";
import skillsIcon from "../assets/skills.png";
import projectsIcon from "../assets/projects.png";
import contactIcon from "../assets/contact.png";

function Navbar() {
  return (
    <nav className="navbar">
      <a href="#top">
        <img src={logo} alt="Logo" className="navbar-logo" />
      </a>
      <ul className="navbar-links">
        <li>
          <a href="#top">
            Home
            <img src={homeIcon} alt="" className="nav-icon" />
          </a>
        </li>
        <li>
          <a href="#about">
            About
            <img src={aboutIcon} alt="" className="nav-icon" />
          </a>
        </li>
        <li>
          <a href="#skills">
            Skills
            <img src={skillsIcon} alt="" className="nav-icon" />
          </a>
        </li>
        <li>
          <a href="#projects">
            Projects
            <img src={projectsIcon} alt="" className="nav-icon" />
          </a>
        </li>
        <li>
          <a href="#contact">
            Contact
            <img src={contactIcon} alt="" className="nav-icon" />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
