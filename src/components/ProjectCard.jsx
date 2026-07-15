import { useState } from "react";
import "./ProjectCard.css";

function ProjectCard({ title, description, image }) {
  const [likes, setLikes] = useState(0);

  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-image" />
      <h3 className="project-title">{title}</h3>
      <p className="project-description">{description}</p>
      <button className="like-button" onClick={() => setLikes(likes + 1)}>
        ❤️ {likes}
      </button>
    </div>
  );
}

export default ProjectCard;
