import React from "react";


import ProjectNameField from "../ProjectName";
import ProjectTypeField from "../ProjectType";
import ConfidenceField from "../Confidence";
import AvailabilityField from "../Availability";

function Dropdown () {
    return(
        <div>
            <form>
            <ProjectNameField />
            <ProjectTypeField />
            <ConfidenceField />
            <AvailabilityField />
            <button>Get suggestions</button>         
            </form>
        </div>
    )

}

export default Dropdown