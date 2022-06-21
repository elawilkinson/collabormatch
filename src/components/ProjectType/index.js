import React from "react";

function ProjectTypeField ( { projType, setProjType}) {
    function changeHandler(e) {
        setProjType(e.target.value)
        // instead of printing their choice, we would write a function that adds their choice to our {}
      }
      return (
        <div>
            <label>Project type</label>
            <select name="projecttype" onChange={changeHandler}>
                <option value="null">(select from options below)</option>
                <option value="blog">Blog</option>
                <option value="todolist">To-do List</option>
                <option value="goddamnsurvey">Survey</option>
            </select>
        </div>
    )

}

export default ProjectTypeField