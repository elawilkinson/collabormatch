import "./App.css";
import React, {useState} from "react";

import Dropdown from "../Form";

function App() {
  console.log("working!!!");

  // This is where we would store our user's choices
  // useState --> a way of tracking change
  //const userInput = {};

  const [userInput, setUserInput] = useState({})
  console.log(userInput)
  return (
    <div className="App">
      {/* NB navbar - logo, profile icon, hamburger icon -could go here if time */}
      <div className="intro">
        <h1>collabor8</h1>
        <h2>Welcome to Collaborm8! </h2>
        <p>
          Collaborm8 is a collaborative platform built on a world of
          possibility. The possibility of forming professional connections that
          could lead to expanding your portfolio and widening your coding
          experience.
        </p>
        <p>
          Collaborm8 is simple and fun- click the 'YAAS'™ feature to collaborate
          with someone, and if they wish to collaborate too, it's a
          CollaborMatch™ !{" "}
        </p>
      </div>
      <div className="user-input">
        <p>Search below for your perfect collaborm8</p>
        <Dropdown user={userInput} setUserInput={setUserInput}/>
      </div>
    </div>
  );
}

export default App;
