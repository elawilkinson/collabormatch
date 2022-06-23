import React, { useState } from 'react';

function Suggestions({ show }) {
  const [bruh, setBruh] = useState(false);

  const initialContact = {
    name: '',
    project_interest: '',
    project_type: '',
    strength: '',
    availability: '',
  };
  const [contact, setContact] = useState(initialContact);
  // const [show, setShow] = useState({ visibility: 'hidden' });

  const handleChangeFor = (propertyName) => (event) => {
    setContact((contact) => ({
      ...contact,
      [propertyName]: event.target.value,
    }));
    console.log(contact.name);
  };

  async function sendInput(contact) {
    try {
      const data = await fetch('http://localhost:5000/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: contact.name,
          project_interest: contact.project_interest,
          project_type: contact.project_type,
          strength: contact.strength,
          availability: contact.availability,
          img: '',
        }),
      });
      console.log(data);
    } catch (error) {
      console.error(error.message);
    }
  }
  return (
    <div className="suggestions-box" style={show}>
      <h2 id="suggestions-intro">
        Can't find a project you're interested in? Suggest one below!
      </h2>
      <form>
        <div className="suggestions-left">
          <div className="suggestions-input">
            <label value="name">Your name</label>
            <input
              value={contact.name}
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
              value={contact.project_interest}
              onChange={handleChangeFor('project_interest')}
              type="text"
            ></input>
          </div>
        </div>
        <div className="suggestions-right">
          <div className="suggestions-input">
            <label value="name">Project Type</label>
            <input
              value={contact.project_type}
              onChange={handleChangeFor('project_type')}
              type="text"
            ></input>
          </div>
          <div className="suggestions-input">
            <label value="name">Availablity</label>
            <input
              value={contact.availability}
              onChange={handleChangeFor('availability')}
              type="text"
            ></input>
          </div>
          <div className="suggestions-input">
            <label value="name">Strength</label>
            <input
              value={contact.strength}
              onChange={handleChangeFor('strength')}
              type="text"
            ></input>
          </div>
        </div>
      </form>
      <button
        className="suggestions-button"
        onClick={() => {
          sendInput(contact);
          setBruh(true);
        }}
      >
        Send suggestion
      </button>
      <div>
        {bruh ? (
          <h2> Thank you for submitting your amazing idea! Lets Collaborm8!</h2>
        ) : null}
      </div>
    </div>
  );
}

export default Suggestions;
