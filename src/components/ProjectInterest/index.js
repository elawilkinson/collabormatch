import React from 'react';

// For future iterations: instead of having hard-coded project titles, we would write a function that POSTs their input directly to our dropdown. 

function ProjectInterestField({ projInt, setProjInt }) {
  function changeHandler(e) {
    setProjInt(e.target.value);    
  }
  return (
    <div>
      <label>Project Interest</label>
      <select value={projInt} name="projectInterest" onChange={changeHandler}>
        <option value="null">(select from options below)</option>
        <option value="Sports">Sports</option>
        <option value="Games">Games</option>
        <option value="Photography">Photography</option>
        <option value="Fashion">Fashion</option>
      </select>
    </div>
  );
}

export default ProjectInterestField;
