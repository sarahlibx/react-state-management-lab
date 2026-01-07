// src/App.jsx
import { useState } from 'react';
import './App.css';

const App = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [zombieFighters, setZombieFighters] = useState([
  {
    id: 1,
    name: 'Survivor',
    price: 12,
    strength: 6,
    agility: 4,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png',
  },
  {
    id: 2,
    name: 'Scavenger',
    price: 10,
    strength: 5,
    agility: 5,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png',
  },
  {
    id: 3,
    name: 'Shadow',
    price: 18,
    strength: 7,
    agility: 8,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png',
  },
  {
    id: 4,
    name: 'Tracker',
    price: 14,
    strength: 7,
    agility: 6,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png',
  },
  {
    id: 5,
    name: 'Sharpshooter',
    price: 20,
    strength: 6,
    agility: 8,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png',
  },
  {
    id: 6,
    name: 'Medic',
    price: 15,
    strength: 5,
    agility: 7,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png',
  },
  {
    id: 7,
    name: 'Engineer',
    price: 16,
    strength: 6,
    agility: 5,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png',
  },
  {
    id: 8,
    name: 'Brawler',
    price: 11,
    strength: 8,
    agility: 3,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png',
  },
  {
    id: 9,
    name: 'Infiltrator',
    price: 17,
    strength: 5,
    agility: 9,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png',
  },
  {
    id: 10,
    name: 'Leader',
    price: 22,
    strength: 7,
    agility: 6,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png',
  },
])

  const handleAddFighter = (fighter) => {
    // conditional rendering re: money available 
    if (money < fighter.price) {
      console.log('Not enough money!');
      return;
    }
    // add character to team
    // update fighters object state via new array
    setTeam(prevTeam => [...prevTeam, fighter])
    // remove character from fighters via id
    setZombieFighters(prevFighters => 
      prevFighters.filter(zombie => zombie.id !== fighter.id)
    )
    // subtract price from available money
    setMoney(prevMoney => prevMoney - fighter.price)
  }

  const totalStrength = (team || []).reduce((acc, currentFighter) => {
    return acc + currentFighter.strength;
  }, 0);

  const totalAgility = (team || []).reduce((acc, currentFighter) => {
    return acc + currentFighter.agility;
  }, 0);

  const handleRemoveFighter = (member) => {
    // remove fighter from team via id
    setTeam(prevTeam => prevTeam.filter(fighter => fighter.id !== member.id)) 
    // update fighters object state via new array
    setZombieFighters(prevFighters => [...prevFighters, member])
    // add price back to available money
    setMoney(prevMoney => prevMoney + member.price)
  }

  return (
    <>
    <h1>Zombie Fighters</h1>
    <ul>
      {zombieFighters.map((fighter) => (
        <li key={fighter.id}>
          <img className='fighter-card' src={fighter.img}/>
          <h2>Name: {fighter.name}</h2>
          <p>Price: {fighter.price}</p>
          <p>Strength: {fighter.strength}</p>
          <p>Agility: {fighter.agility}</p>
          <button onClick={() => handleAddFighter(fighter)}>Add to Team</button>
      </li>
      ))}
    </ul>
    <h3>Money Left: ${money}</h3>
    <div>
    <h3>Your Team</h3>
    <ul>
      {team.map(member => (
         <li key={member.id}>
          <img className='fighter-card' src={member.img}/>
          <h2>Name: {member.name}</h2>
          <p>Price: {member.price}</p>
          <p>Strength: {member.strength}</p>
          <p>Agility: {member.agility}</p>
          <button onClick={() => handleRemoveFighter(member)}>Delete from Team</button>
        </li>
      ))}
      </ul>
      <div>
      {team.length === 0 ? (<p>Pick some team members!</p>) : (<p>You have {team.length} on your team.</p>)}
      </div>
      <div>
      {team.length === 0 ? (<p>No team members = no team strength!</p>) : (<p>Your team has {totalStrength} total strength.</p>)}
      </div>
      <div>
      {team.length === 0 ? (<p>No team members = no team agility!</p>) : (<p>Your team has {totalAgility} total agility.</p>)}
      </div>
    </div>
    </>
  );
}

export default App;
