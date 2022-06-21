import React from "react";

function StrengthField() {
  return (
    <div>
      <label>Strength</label>
      <select name="Strength">
        <option value="1">Backend</option>
        <option value="2">Frontend</option>
        <option value="3">Full stack</option>
        <option value="4">Testing</option>
      </select>
    </div>
  );
}

export default StrengthField;
