import React from "react";

function ProjectTypeField () {
    return(
        <div>
            <label>Project type</label>
            <select name="projecttype">
                <option value="hello">Blog</option>
                <option value="hello">To-do List</option>
                <option value="hello">Survey</option>
            </select>
        </div>
    )

}

export default ProjectTypeField