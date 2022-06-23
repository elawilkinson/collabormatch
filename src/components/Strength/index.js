import React from 'react';

function StrengthField({ strength, setStrength }) {
  // const options = ['Backend', 'Frontend', 'FullStack', 'Testing'];
  function changeHandler(e) {
    setStrength(e.target.value);
    console.log(strength);
    // instead of printing their choice, we would write a function that adds their choice to our {}
  }

  return (
    <div>
      <label>Strength</label>
      <select value={strength} name="Strength" onChange={changeHandler}>
        <option value="null">(select from options below)</option>
        <option value="backend">Backend</option>
        <option value="frontend">Frontend</option>
        <option value="full-stack">Full stack</option>
        <option value="testing">Testing</option>
      </select>
      {/* <button
        onClick={(e) => {
          e.preventDefault();
          setStrength('');
        }}
      >
        reset
      </button> */}
    </div>
  );
}

export default StrengthField;
