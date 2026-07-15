import "./Skills.css";

function Skills() {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Git", "Php"];

  return (
    <section className="skills" id="skills">
      <h2>Skills</h2>
      <ul className="skills-list">
        {skills.map((skill, index) => (
          <li key={index} className="skill-item">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
