import React from 'react';

function Suggestions() {
  return (
    <div className="suggestions-box">
      <h3 id="suggestions-intro">
        Can't find a project you're interested in? Suggest one below!
      </h3>
      <form>
        <div className="suggestions-input">
          <label value="name">Your name</label>
          <input type="text"></input>
        </div>
        <div className="suggestions-input">
          <label value="email">Your email</label>
          <input type="text"></input>
        </div>
        <div className="suggestions-input">
          <label value="project_interest">Project Interest</label>
          <input type="text"></input>
        </div>
        <div className="suggestions-input">
          <label value="name">Project Type</label>
          <input type="text"></input>
        </div>
        <div className="suggestions-input">
          <label value="name">Availablity</label>
          <input type="text"></input>
        </div>
        <div className="suggestions-input">
          <label value="name">Strength</label>
          <input type="text"></input>
        </div>
      </form>
      <button className="suggestions-button">Send suggestion</button>
    </div>
  );
}

export default Suggestions;
