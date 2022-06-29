// importing styles
import './App.css';

// importing libraries
import React from 'react';

// importing our components 
  // originally, our Profile Card component was imported separately, but is now imported within this component to make the props/state journey shorter
import GetSuggestions from '../GetSuggestions';
import MoreSuggestions from '../MoreSuggestions'; 



function App() {

  return (
    <div className="App">
      {/* For future iterations: logo, profile icon, hamburger icon could go here */}
      <div className="intro">
        <h1>
          Welcome to Collaborm8!
        </h1>
        <p className="paragraph">
          Collaborm8 is a collaborative platform built on a world of possibility. The possibility of forming
          professional connections that could lead to expanding your portfolio and widening your coding experience.
        </p>
        <p className="paragraph2">
          Using Collaborm8 is simple and fun- click the 'COLLABORM8'™ feature to collaborate with someone, and if
          they wish to collaborate too, it's a CollaborMatch™!
        </p>
      </div>
      <p className="search-below">
        Search below for your perfect Collaborm8
      </p>
      <div className="user-input">
        <GetSuggestions />
        <MoreSuggestions />
      </div>
    </div>
  );
}

export default App;
