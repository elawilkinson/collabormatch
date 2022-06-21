import React from "react";

function ProjectNameField () {
    return(
        <div>
            <label>Project names</label>
            <select name="projectname">
                <option value="1">Planes</option>
                <option value="2">Manchester4EVA</option>
                <option value="3">SeagullsAreLame</option>
            </select>
            
        </div>
    )

}

export default ProjectNameField