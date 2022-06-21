import React, { useState } from "react";

import ProjectInterestField from "../ProjectInterest";
import ProjectTypeField from "../ProjectType";
import StrengthField from "../Strength";
import AvailabilityField from "../Availability";

function Dropdown({ userInput, setUserInput }) {
  const [avail, setAvail] = useState("");
  const [strength, setStrength] = useState("");
  const [projInt, setProjInt] = useState("");
  const [projType, setProjType] = useState("");

  function handleClick(e) {
    e.preventDefault();
    // how connect to backend?
    // change visual of what people see - how do we revert back to 'null' value once we've hit the button?
    console.log("click that handle");
    setUserInput([projInt, projType, avail, strength]);
    setAvail("");
    setStrength("");
    setProjType("");
    setProjInt("");
  }

  console.log(avail);
  console.log(strength);
  console.log(projInt);
  console.log(projType);
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
      <button onClick={handleClick}>
          Get suggestions
        </button>
    </div>
    </>
  );
}

export default Dropdown;
