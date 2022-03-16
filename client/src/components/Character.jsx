import React from 'react';
import CharacterAffiliations from './CharacterAffiliations.jsx';
import Masters from './Masters.jsx';
import Apprentices from './Apprentices.jsx';
import FormerAffiliations from './FormerAffiliations.jsx';

function Character(props) {
  return !props.character ? null : (
  <div>
    <img src={props.character.image} />
    <div>Name: {props.character.name}</div>
    <div>Species: {props.character.species}</div>
    <div>{props.character.born ?
      <div>Born in {props.character.born} on the planet {props.character.homeworld}</div> : null}
    </div>
    <div>{props.character.died !== 0 ?
      <div>Died in {props.character.died} ABY, on the planet {props.character.diedLocation}</div> : null}
    </div>
    <div>Height: {props.character.height} meters tall</div>
    <div>Hair color: {props.character.hairColor}</div>
    <div>Eye color: {props.character.eyeColor}</div>
    <div>{props.character.cybernetics ? <div>Cybernetics: {props.character.cybernetics}</div> : null}</div>
    <div>Affiliations: {props.character.affiliations.map((affiliation, index) => (
      <CharacterAffiliations
        affiliation={affiliation}
        key={index}
      />
      ))}
    </div>
    <div>{props.character.formerAffiliations.length !== 0 ?
      <div>Former affiliations: {props.character.formerAffiliations.map((formerAffiliation, index) => (
        <FormerAffiliations
          formerAffiliation={formerAffiliation}
          key={index}
        />
      ))}
      </div> : null}
    </div>
    <div>{props.character.masters ?
      <div>Masters: {props.character.masters.map((master, index) => (
        <Masters
          master={master}
          key={index}
        />
      ))}
      </div> : null}
    </div>
    <div>{props.character.apprentices ?
      <div>Apprentices: {props.character.apprentices.map((apprentice, index) => (
        <Apprentices
          apprentice={apprentice}
          key={index}
        />
      ))}
      </div> : null}
    </div>
    <div>For more info, visit <a href={props.character.wiki}>this wiki link</a></div>
  </div>
  )
}

export default Character;