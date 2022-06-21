import React from "react";

function AvailabilityField () {
    return(
        <div>
            <label>Availability</label>
            <select name="availability">
                <option value="weekends">Weekends</option>
                <option value="evenings">Evenings</option>
                <option value="anytime">All the time!!!!!!!!!</option>
            </select>           
        </div>
    )

}

export default AvailabilityField