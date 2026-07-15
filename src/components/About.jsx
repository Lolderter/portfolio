import "./About.css";

function About({ name, age, city, school }) {
  return (
    <div className="about" id="top">
      <h1>{name}</h1>
      <h3>Age: {age}</h3>
      <p>City: {city}</p>
      <p>School: {school}</p>
    </div>
  );
}

export default About;
