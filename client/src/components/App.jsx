import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Character from './Character.jsx';
import Droid from './Droid.jsx';
import Search from './Search.jsx';
import './style.css';

function App() {
  const [characters, setCharacters] = useState(null);
  const [currentCharacter, setCurrentCharacter] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    axios({
      method: 'GET',
      url: '/characters'
    }).then(res => {
      setCharacters(res.data)
    })
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm('');
  }

  const searchCharacters = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  }

  const showSearchFunction = () => {
    setShowSearch(true);
  }

  const hideSearch = () => {
    setShowSearch(false);
  }

  let searchResults = characters;
  if (searchTerm && searchTerm.length) {
    searchResults = searchResults.filter((character) => character.name.toLowerCase()
      .includes(searchTerm.toLowerCase()));
  }


  return characters && (
    <>
      <div className='header'>
      <form>
        <label>
            Enter character name:
            <input className='searchBar' type="text" value={searchTerm} onChange={searchCharacters} onFocus={showSearchFunction} onBlur={() => setTimeout(hideSearch, 400)}/>
            <button className="searchButton" onClick={handleSubmit}>Search</button>
        </label>
      </form>
        {showSearch && <Search characters={searchResults} setCurrentCharacter={setCurrentCharacter}/>}
      </div>
        {currentCharacter && currentCharacter.species !== 'droid' ?
          <Character character={currentCharacter}/>
        :
          <Droid droid={currentCharacter}/>}
    </>
  )
}


export default App