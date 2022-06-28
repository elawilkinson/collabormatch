import React, { useState } from 'react';

import ProjectInterestField from '../ProjectInterest';
import ProjectTypeField from '../ProjectType';
import StrengthField from '../Strength';
import AvailabilityField from '../Availability';
import ProfileCard from '../ProfileCard';

function GetSuggestions() {
  // const [userInput, setUserInput] = useState({});
  const [avail, setAvail] = useState('');
  const [strength, setStrength] = useState('');
  const [projInt, setProjInt] = useState('');
  const [projType, setProjType] = useState('');
  const [test, setTest] = useState('');
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  async function infoMatch(userInput) {
    console.log(userInput);
    try {
      const data = await fetch(
        `http://localhost:5000/projects?name=${userInput.project_type}&aval=${userInput.availability}`
      );
      const response = await data.json();
      setTest(response);
      // console.table(response);
      console.log(response.length);
      if (response.length === 0) {
        setShow2(!show2);
        console.log('SRY THERE ARE NO MATCHES');
      }
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
  function handleClick(e) {
    e.preventDefault();
    const x = {
      project_interest: projInt,
      project_type: projType,
      strength: strength,
      availability: avail,
    };
    // how connect to backend?
    // change visual of what people see - how do we revert back to 'null' value once we've hit the button?
    // setUserInput(x);
    setAvail('');
    setStrength('');
    setProjType('');
    setProjInt('');
    infoMatch(x);
  }
  return (
    <>
      <form className="dropdown-form">
        <div className="dropdown-left">
          <ProjectInterestField projInt={projInt} setProjInt={setProjInt} />
          <ProjectTypeField projType={projType} setProjType={setProjType} />
        </div>
        <div className="dropdown-right">
          <StrengthField strength={strength} setStrength={setStrength} />
          <AvailabilityField avail={avail} setAvail={setAvail} />
        </div>
      </form>
      <div className="dropdown-button">
        <button
          onClick={(e) => {
            handleClick(e);
            setShow(!show);
          }}
        >
          Get suggestions
        </button>
      </div>
      <div>{show ? <h1> These are your TOP MATCHES </h1> : null}</div>
      <div>
        {show2 ? <h2> SORRY, CURRENTLY, THERE ARE NO MATCHES </h2> : null}
      </div>
      {/* make a clear button to clear stuff?*/}
      <div className="profile-cards">{test && <ProfileCard info={test} />}</div>
    </>
  );
}

export default GetSuggestions;
