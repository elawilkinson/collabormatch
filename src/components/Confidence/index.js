import React from "react";

function ConfidenceField () {
    return(
        <div>
            <label>Confidence</label>
            <select name="confidence">
                <option value="1">Beginner</option>
                <option value="2">Intermediate</option>
                <option value="3">Advanced</option>
            </select>
        </div>
    )

}

export default ConfidenceField