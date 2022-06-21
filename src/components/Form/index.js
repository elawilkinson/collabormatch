import React from "react";


import ProjectInterestField from "../ProjectInterest";
import ProjectTypeField from "../ProjectType";
import StrengthField from "../Strength";
import AvailabilityField from "../Availability";

function Dropdown ( {userInput, setUserInput}) {
    function handleClick (e) {
        e.preventDefault()
        // how connect to backend?
        console.log("click that handle")
        // send our complete object to the backend 
        // return a suggestion
    }
    return(
        <div>
            <form>
            <ProjectInterestField userInput={userInput} setUserInput={setUserInput} />
            <ProjectTypeField userInput={userInput} setUserInput={setUserInput} />
            <StrengthField userInput={userInput} setUserInput={setUserInput} />
            <AvailabilityField userInput={userInput} setUserInput={setUserInput} />
            <button onClick={handleClick}>Get suggestions</button>         
            </form>
        </div>
    )

}

export default Dropdown