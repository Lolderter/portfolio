import "./Hero.css";
import profileImage from "../assets/image.png";

function Hero({ name, profession, text }) {
  return (
    <div className="hero">
      <img src={profileImage} alt="Profile" className="hero-image" />
      <h1>{name}</h1>
      <h3>{profession}</h3>
      <p>{text}</p>
    </div>
  );
}

export default Hero;
