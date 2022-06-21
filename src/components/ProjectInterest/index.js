import React from "react";

function ProjectInterestField({ projInt, setProjInt}) {
  function changeHandler(e) {
    setProjInt(e.target.value)
    // instead of printing their choice, we would write a function that adds their choice to our {}
  }
  return (
    <div>
      <label>Project Interest</label>
      <select name="projectInterest" onChange={changeHandler}>
        <option value="Sports">Sports</option>
        <option value="Games">Games</option>
        <option value="Photography">Photography</option>
        <option value="Fashion">Fashion</option>
      </select>
    </div>
  );
}

export default ProjectInterestField;
