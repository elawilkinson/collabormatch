import React from "react";

function ProjectInterestField({ userInput, setUserInput }) {
  function changeHandler(e) {
    console.log(e.target.value);
    // instead of printing their choice, we would write a function that adds their choice to our {}
  }
  return (
    <div>
      <label>Project Interest</label>
      <select name="projectInterest" onChange={changeHandler}>
        <option value="1">Sports</option>
        <option value="2">Games</option>
        <option value="3">Photography</option>
        <option value="4">Fashion</option>
      </select>
    </div>
  );
}

export default ProjectInterestField;
