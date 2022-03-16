import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Character from './Character.jsx';
import Droid from './Droid.jsx';
import Search from './Search.jsx';
import './style.css';

function App() {
  const [characters, setCharacters] = useState(null);
  const [currentCharacter, setCurrentCharacter] = useState(null);

  useEffect(() => {
    axios({
      method: 'GET',
      url: 'https://rawcdn.githack.com/akabab/starwars-api/0.2.1/api/all.json'
    }).then(res => {
      setCharacters(res.data)
    })
  }, [])




  return characters && (
    <div>
      <Search
        characters={characters}
        currentCharacter={currentCharacter}
        setCurrentCharacter={setCurrentCharacter}
      />
      <Character character={currentCharacter}/>
    </div>
  )
}


export default App