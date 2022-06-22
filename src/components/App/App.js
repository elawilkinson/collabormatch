import './App.css';
import React, { useState } from 'react';

import Dropdown from "../Form";
import Suggestions from "../Suggestions";
import ProfileCard from '../ProfileCard';


function App() {
  const [userInput, setUserInput] = useState({
    project_interest: '',
    project_type: '',
    strength: '',
    availability: '',
  });

  const [test, setTest] = useState('');

  //   async function sendInput(userInput){
  //     try{
  //         const body = {userInput}
  //         const data = await fetch('http://localhost:5000/projects',{
  //             method: 'POST',
  //             headers: {"Content-Type": "application/json"},
  //             body: JSON.stringify({name: "", project_interest: userInput[0], project_type: userInput[1], strength: userInput[2], availability: userInput[3], img: "" })
  //         })
  //         console.log(data)
  //     }
  //     catch (error){
  //         console.error(error.message)
  //     }
  // }
  async function infoMatch(userInput) {
    try {
      const data = await fetch(
        `http://localhost:5000/projects?name=${userInput.project_type}&aval=${userInput.availability}`
      );
      const response = await data.json();
      console.table(response);
      setTest(response);
      if (
        response[0].availability === userInput.availability &&
        response[0].project_type === userInput.project_type
      ) {
        console.log('PERFECT MATCH');
      }
    } catch (error) {
      console.error(error.message);
    }
  }

  async function getProjects() {
    try {
      const data = await fetch('http://localhost:5000/projects');
      const response = await data.json();
      console.log(response);
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <div className="App">
      {/* NB navbar - logo, profile icon, hamburger icon -could go here if time */}
      <div className="intro">
        <h1>Welcome to <span className="collaborm8">Collaborm8</span>! </h1>
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
        <Dropdown
          userInput={userInput}
          setUserInput={setUserInput}
          getProjects={getProjects}
          infoMatch={infoMatch}
        />
      </div>
      <div className="profile-cards">
        {test && <ProfileCard info={test} />}
        {/* <ProfileCard />
        <ProfileCard /> */}
     <Suggestions />
      </div>
    </div>
  );
}

export default App;
