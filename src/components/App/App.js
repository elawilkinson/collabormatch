import "./App.css";
import React, {useState} from "react";

import Dropdown from "../Form";
import Suggestions from "../Suggestions";

function App() {
  console.log("working!!!");

  // This is where we would store our user's choices
  // useState --> a way of tracking change
  //const userInput = {};

  const [userInput, setUserInput] = useState({
    project_interest: "",
    project_type: "",
    strength: "",
    availability: ""
  })
  console.log(`${userInput} from the App`)

  

async function test(userInput){
  try {
      const data = await fetch(`http://localhost:5000/projects?name=${userInput.project_type}`);
      const response = await data.json(); 
      if (response[0].availability === "Tuesday evenings" && response[0].project_type === userInput[1] ){
        console.log('PERFECT MATCH')
      }
  } catch (error) {
    console.error(error.message)
  }
}
test()

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

async function getProjects(){
    try{
      const data = await fetch('http://localhost:5000/projects');
      const response = await data.json(); 
      console.log(response)
      }      
  catch (error){
      console.error(error.message)
  }
}

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
        <Dropdown userInput={userInput} setUserInput={setUserInput} getProjects={getProjects}/>
        <Suggestions />
      </div>
    </div>
  );
}

export default App;
