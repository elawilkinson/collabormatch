import "./App.css";
import React, {useState} from "react";

import Dropdown from "../Form";

function App() {
  console.log("working!!!");

  // This is where we would store our user's choices
  // useState --> a way of tracking change
  //const userInput = {};

  const [userInput, setUserInput] = useState([])
  console.log(`${userInput} from the App`)
  return (
    <div className="App">
      {/* NB navbar - logo, profile icon, hamburger icon -could go here if time */}
      <div className="intro">
        <h1>collabor8</h1>
        <h2>Welcome to <span className="collaborm8">Collaborm8</span>! </h2>
        <p className="paragraph">
          <span className="collaborm8">Collaborm8</span> is a collaborative platform built on a world of
          possibility. The possibility of forming professional connections that
          could lead to expanding your portfolio and widening your coding
          experience.
        </p>
        <p className="paragraph2">
          Using <span className="collaborm8">Collaborm8</span> is simple and fun- click the 'YAAS'™ feature to collaborate
          with someone, and if they wish to collaborate too, it's a <span className="collaborm8">CollaborMatch™</span> !{" "}
        </p>
      </div>
      <p className="search-below">Search below for your perfect <span className="collaborm8">Collaborm8</span></p>
      <div className="user-input">
        <Dropdown user={userInput} setUserInput={setUserInput}/>
      </div>
    </div>
  );
}

export default App;
