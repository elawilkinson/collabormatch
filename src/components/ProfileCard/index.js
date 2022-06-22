import React from "react";
import "./index.css";

export default function ProfileCard() {
  return (
    <div className="card">
      <img src="soccharacteredit.JPG" alt="SoC character" />
      <h3>Rebecca Tuffnell</h3>
      <p className="project-interest">Project interest: Sports</p>
      <p className="project-type">Project Type: To-do list</p>
      <p className="strength">Strength: Frontend</p>
      <p className="availability">Availability: Weekday evenings</p>
      <button>Collabor8</button>
    </div>
  );
}
