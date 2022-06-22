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
                <option value="Blog">Blog</option>
                <option value="Todo-list">To-do List</option>
                <option value="Gallery">Gallery</option>
                <option value="Forum">Forum</option>
                <option value="Survey">Survey</option>
            </select>
        </div>
    )

}

export default ProjectTypeField