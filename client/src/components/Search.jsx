import React from 'react';

function Search(props) {
  return (
    <div className='searchResults'>
      {props.characters.map((character) => (
        <div
          className='searchResult'
          href='#'
          role='link'
          onClick={() => props.setCurrentCharacter(character)}
          onKeyPress={() => props.setCurrentCharacter(character)}
        >
          {character.name}
        </div>
      ))}
    </div>
  );
}

export default Search