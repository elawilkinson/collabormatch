import React from "react";


import ProjectInterestField from "../ProjectInterest";
import ProjectTypeField from "../ProjectType";
import StrengthField from "../Strength";
import AvailabilityField from "../Availability";

function Dropdown () {
    function handleClick (e) {
        e.preventDefault()
        // how connect to backend?
        console.log("click that handle")
    }
    return(
        <div>
            <form>
            <ProjectInterestField />
            <ProjectTypeField />
            <StrengthField />
            <AvailabilityField />
            <button onClick={handleClick}>Get suggestions</button>         
            </form>
        </div>
    )

}

export default Dropdown