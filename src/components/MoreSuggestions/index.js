import React, { useState } from 'react';
import ProfileCard from '../ProfileCard';
import NewProjectSuggestion from '../NewProjectSuggestion'

function MoreSuggestions() {
  const [userInformationCard, setUserInformationCard] = useState('');
  const [displayInputFields, setDisplayInputFields] = useState({ visibility: 'hidden' });

  function randomNum(min, max) {
    var n = [];
    for (let i = 0; i < 3; i++) {
      n.push(Math.floor(Math.random() * max) + min);
    }
    return n;
  }
  const getCountTimeout = () => {
    setTimeout(() => {
      setDisplayInputFields({ visibility: 'visible' });
    }, 1500);
  };
  async function OtherProfiles() {
    try {
      const data = await fetch('http://localhost:5000/projects');
      const response = await data.json();
      // make if statment = if x = any of the userinput result return smt else do the normal map (line 21)
      const random = randomNum(0, response.length);
      const randomUserData = random.map((x) => response[x]);
      setUserInformationCard(randomUserData);
    } catch (error) {
      console.error(error.message);
    }
  }
  return (
    <div>
      <button
        onClick={() => {
          OtherProfiles();
          getCountTimeout();
        }}
      >
        Click For More Suggestions
      </button>
      <div className="profile-cards">{userInformationCard && <ProfileCard info={userInformationCard} />}</div>
      <NewProjectSuggestion displayInputFields={displayInputFields}></NewProjectSuggestion>
    </div>
  );
}

export default MoreSuggestions;
