import './App.css';
import React, {useState, useEffect} from "react";

import Dropdown from '../Form';

function App() {
  console.log("working!!!")
  return (
    <div className="App">
     {/* NB navbar - logo, profile icon, hamburger icon -could go here if time */}
      <div className="intro">
        <h1>collabor8</h1>
        <h2>"intro sentence about who we are"</h2>
       </div>
      <div className="user-input">
         <p>Search below for your perfect collaborm8</p>
          <Dropdown />
      </div>
    </div>
  );
}

export default App;
