import React, { useState } from 'react';

import ProjectInterestField from '../ProjectInterest';
import ProjectTypeField from '../ProjectType';
import StrengthField from '../Strength';
import AvailabilityField from '../Availability';

function Dropdown({ userInput, setUserInput }) {
  const [avail, setAvail] = useState('');
  const [strength, setStrength] = useState('');
  const [projInt, setProjInt] = useState('');
  const [projType, setProjType] = useState('');

  async function test(userInput) {
    try {
      const data = await fetch(
        `http://localhost:5000/projects?name=${userInput.project_type}&aval=${userInput.availability}`
      );
      const response = await data.json();
      console.table(response);
      if (
        response[0].availability === userInput.availability &&
        response[0].project_type === userInput.project_type
      ) {
        console.log('PERFECT MATCH');
        // console.table([
        //   {
        //     type: userInput.project_type,
        //     availability: userInput.availability,
        //   },
        // ]);
      }
    } catch (error) {
      console.error(error.message);
    }
  }

  function handleClick(e) {
    e.preventDefault();
    // how connect to backend?
    // change visual of what people see - how do we revert back to 'null' value once we've hit the button?
    setUserInput({
      project_interest: projInt,
      project_type: projType,
      strength: strength,
      availability: avail,
    });
    setAvail('');
    setStrength('');
    setProjType('');
    setProjInt('');
  }
  // useEffect(() => {
  //   handleClick();
  // }, []);

  // console.log(userInput);
  // console.log(avail);
  // console.log(strength);
  // console.log(projInt);
  // console.log(projType);
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
            test(userInput);
          }}
        >
          Get suggestions
        </button>
      </div>
    </>
  );
}

export default Dropdown;
