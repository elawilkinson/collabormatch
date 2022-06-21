import React from "react";

function StrengthField( { strength, setStrength } ) {
  function changeHandler(e) {
    setStrength(e.target.value)
    // instead of printing their choice, we would write a function that adds their choice to our {}
  }

  return (
    <div>
      <label>Strength</label>
      <select name="Strength" onChange={changeHandler}>
        <option value="backend">Backend</option>
        <option value="frontend">Frontend</option>
        <option value="full-stack">Full stack</option>
        <option value="testing">Testing</option>
      </select>
    </div>
  );
}

export default StrengthField;
