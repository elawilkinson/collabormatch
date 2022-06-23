import React, { useState } from 'react';
import ProfileCard from '../components/ProfileCard';

function More() {
  const [tryd, setTryd] = useState('');

  function randomNum(min, max) {
    var n = [];
    for (let i = 0; i < 3; i++) {
      n.push(Math.floor(Math.random() * max) + min);
    }
    return n;
  }

  async function OtherProfiles() {
    try {
      const data = await fetch('http://localhost:5000/projects');
      const response = await data.json();
      // make if statment = if x = any of the userinput result return smt else do the normal map (line 21)
      const random = randomNum(0, response.length);
      const tess = random.map((x) => response[x]);
      setTryd(tess);
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <div>
      <button onClick={OtherProfiles}>Click For More Suggestions</button>
      {tryd && <ProfileCard info={tryd} />}
    </div>
  );
}

export default More;
