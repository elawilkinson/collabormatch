import React from "react";

function AvailabilityField ({avail, setAvail} ) {
    
        function changeHandler(e) {
        setAvail(e.target.value)
      }

    return(
        <div>
            <label>Availability</label>
            <select name="availability" onChange={changeHandler}>
                <option value="weekends">Weekends</option>
                <option value="evenings">Evenings</option>
                <option value="anytime">All the time!!!!!!!!!</option>
            </select>           
        </div>
    )

}

export default AvailabilityField