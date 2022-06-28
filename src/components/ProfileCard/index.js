import React from 'react';

function ProfileCard({ info }) {
  return info.map((x) => (
    <div className="container">
      <div className="card">
        <img src={x.img} alt="SoC character" />
        <h3>{x.name}</h3>
        <p className="project-interest">
          Project interest: {x.project_interest}
        </p>
        <p className="project-type">Project Type: {x.project_type}</p>
        <p className="strength">Strength: {x.strength}</p>
        <p className="availability">Availability: {x.availability}</p>
        <button>Collabor8</button>
      </div>
    </div>
  ));
}

export default ProfileCard;
