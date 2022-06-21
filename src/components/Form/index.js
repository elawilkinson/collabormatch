import React, {useState} from "react";


import ProjectInterestField from "../ProjectInterest";
import ProjectTypeField from "../ProjectType";
import StrengthField from "../Strength";
import AvailabilityField from "../Availability";

function Dropdown ( {userInput, setUserInput}) {
    const [avail, setAvail] = useState("");
    const [strength, setStrength] = useState("");
    const [projInt, setProjInt] = useState("");
    const [projType, setProjType] = useState("");

    function handleClick (e) {
        e.preventDefault()
        // how connect to backend?
        console.log("click that handle");
        setUserInput([projInt, projType, avail, strength]);
        // setUserInput([{
        //     "project_interest": projInt,
        //     "project_type": projType,
        //     "availability": avail,
        //     "strength": strength
        // }])
        // send our complete object to the backend 
        // return a suggestion
    }

    console.log(avail)
    console.log(strength)
    console.log(projInt)
    console.log(projType)
    return(
        <div>
            <form>
            <ProjectInterestField projInt={projInt} setProjInt={setProjInt}/>
            <ProjectTypeField  projType={projType} setProjType={setProjType} />
            <StrengthField strength={strength} setStrength={setStrength}  />
            <AvailabilityField avail={avail} setAvail={setAvail} />
            <button onClick={handleClick}>Get suggestions</button>         
            </form>
        </div>
    )

}

export default Dropdown