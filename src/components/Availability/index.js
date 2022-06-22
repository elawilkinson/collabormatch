import React from 'react';

function AvailabilityField({ avail, setAvail }) {
  function changeHandler(e) {
    setAvail(e.target.value);
  }

  return (
    <div>
      <label>Availability</label>
      <select name="availability" onChange={changeHandler}>
        <option value="null">(select from options below)</option>
        <option value="Weekends">Weekends</option>
        <option value="Evenings">Evenings</option>
        <option value="Anytime">Flexible</option>
      </select>
    </div>
  );
}

export default AvailabilityField;
