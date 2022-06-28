import React, { useState } from 'react';

function NewProjectSuggestion({ displayInputFields }) {
  const [submitMessage, setSubmitMessage] = useState(false);

  const blankProject = {
    name: '',
    project_interest: '',
    project_type: '',
    strength: '',
    availability: '',
  };
  const [newProjectSubmission, setNewProjectSubmission] = useState(blankProject);


  const handleChangeFor = (propertyName) => (event) => {
    setNewProjectSubmission((newProjectSubmission) => ({
      ...newProjectSubmission,
      [propertyName]: event.target.value,
    }));
    console.log(newProjectSubmission.name);
  };

  async function sendInput(newProjectSubmission) {
    try {
      const data = await fetch('http://localhost:5000/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: newProjectSubmission.name,
          project_interest: newProjectSubmission.project_interest,
          project_type: newProjectSubmission.project_type,
          strength: newProjectSubmission.strength,
          availability: newProjectSubmission.availability,
          img: '',
        }),
      });
      console.log(data);
    } catch (error) {
      console.error(error.message);
    }
  }
  return (
    <div className="suggestions-box" style={displayInputFields}>
      <h2 id="suggestions-intro">
        Can't find a project you're interested in? Suggest one below!
      </h2>
      <form>
        <div className="suggestions-left">
          <div className="suggestions-input">
            <label value="name">Your name</label>
            <input
              value={newProjectSubmission.name}
              onChange={handleChangeFor('name')}
              type="text"
            ></input>
          </div>
          <div className="suggestions-input">
            <label value="email">Your email</label>
            <input type="text"></input>
          </div>
          <div className="suggestions-input">
            <label value="project_interest">Project Interest</label>
            <input
              value={newProjectSubmission.project_interest}
              onChange={handleChangeFor('project_interest')}
              type="text"
            ></input>
          </div>
        </div>
        <div className="suggestions-right">
          <div className="suggestions-input">
            <label value="name">Project Type</label>
            <input
              value={newProjectSubmission.project_type}
              onChange={handleChangeFor('project_type')}
              type="text"
            ></input>
          </div>
          <div className="suggestions-input">
            <label value="name">Availablity</label>
            <input
              value={newProjectSubmission.availability}
              onChange={handleChangeFor('availability')}
              type="text"
            ></input>
          </div>
          <div className="suggestions-input">
            <label value="name">Strength</label>
            <input
              value={newProjectSubmission.strength}
              onChange={handleChangeFor('strength')}
              type="text"
            ></input>
          </div>
        </div>
      </form>
      <button
        className="suggestions-button"
        onClick={() => {
          sendInput(newProjectSubmission);
          setSubmitMessage(true);
        }}
      >
        Send suggestion
      </button>
      <div>
        {submitMessage ? (
          <h2> Thank you for submitting your amazing idea! Lets Collaborm8!</h2>
        ) : null}
      </div>
    </div>
  );
}

export default NewProjectSuggestion;
