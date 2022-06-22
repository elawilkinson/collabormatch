import React from "react";
import "./index.css";

export default function ProfileCard() {
  return (
    <div className="card">
    <div className="image-container">
      <img src="https://upload.wikimedia.org/wikipedia/en/8/8c/Cocktail_1988.jpg" alt="SoC character" />
    </div>
      <h3>Collyn</h3>
      <p className="project-interest">Project interest: Sports</p>
      <p className="project-type">Project Type: To-do list</p>
      <p className="strength">Strength: Frontend</p>
      <p className="availability">Availability: Weekday evenings</p>
      <button>Collabor8</button>
    </div>
  );
}
