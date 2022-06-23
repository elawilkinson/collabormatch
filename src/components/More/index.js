import React, { useState } from 'react';
import ProfileCard from '../ProfileCard';
import Suggestions from '../Suggestions';

function More() {
  const [tryd, setTryd] = useState('');
  const [show, setShow] = useState({ visibility: 'hidden' });

  function randomNum(min, max) {
    var n = [];
    for (let i = 0; i < 3; i++) {
      n.push(Math.floor(Math.random() * max) + min);
    }
    return n;
  }
  const getCountTimeout = () => {
    setTimeout(() => {
      setShow({ visibility: 'visible' });
    }, 1500);
  };
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
      <button
        onClick={() => {
          OtherProfiles();
          getCountTimeout();
        }}
      >
        Click For More Suggestions
      </button>
      {tryd && <ProfileCard info={tryd} />}
      <Suggestions show={show}></Suggestions>
    </div>
  );
}

export default More;
