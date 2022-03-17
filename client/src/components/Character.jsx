import React from 'react';
import CharacterAffiliations from './CharacterAffiliations.jsx';
import Masters from './Masters.jsx';
import Apprentices from './Apprentices.jsx';
import FormerAffiliations from './FormerAffiliations.jsx';

function Character(props) {
  return !props.character ? null : (
  <div className='character-info-container'>
    <img src={props.character.image} />
    <div className='character-basic-info'>
      (Negative numbers indicate years Before the Battle of Yavin)
      <br></br><br></br>
      <div><u>Species:</u> {props.character.species}</div>
      <div><u>Name:</u> {props.character.name}</div>
        <div><u>Height:</u> {props.character.height} meters tall</div>
        <div><u>Hair color:</u> {props.character.hairColor}</div>
        <div><u>Eye color:</u> {props.character.eyeColor}</div>
        <div>{props.character.cybernetics ? <div><u>Cybernetics:</u> {props.character.cybernetics}</div> : null}</div>
      <div>{props.character.born ?
        <div>Born in year {props.character.born} on the planet {props.character.homeworld}</div> : null}
      </div>
        <div>{props.character.died !== 0 ?
          <div>Died in year {props.character.died} on the planet {props.character.diedLocation}</div> : null}
        </div>
        <div>{props.character.formerAffiliations.length !== 0 ?
          <div className='character-former-affiliations'><u>Former affiliations:</u> {props.character.formerAffiliations.map((formerAffiliation, index) => (
            <FormerAffiliations
              formerAffiliation={formerAffiliation}
              key={index}
            />
          ))}
          </div> : null}
        </div>
        <div className='character-masters'>{props.character.masters ? !Array.isArray(props.character.masters) ?
          <div><u>Masters:</u> <Masters master={props.character.masters}/></div> :
          <div><u>Masters:</u> {props.character.masters.map((master, index) => (
            <Masters
              master={master}
              key={index}
            />
          ))}
          </div> : null}
        </div>
        <div className='character-apprentices'>{props.character.apprentices ? !Array.isArray(props.character.apprentices) ?
          <div><u>Apprentices:</u> <Apprentices apprentice={props.character.apprentices}/></div> :
          <div><u>Apprentices:</u> {props.character.apprentices.map((apprentice, index) => (
            <Apprentices
              apprentice={apprentice}
              key={index}
            />
          ))}
          </div> : null}
        </div>
        <div className='character-affiliations'><u>Affiliations:</u> {props.character.affiliations.map((affiliation, index) => (
          <CharacterAffiliations
            affiliation={affiliation}
            key={index}
          />
          ))}
        </div>
        <div className='wiki-link'>For more info, visit <a href={props.character.wiki} target="_blank" rel="noreferrer noopener">this wiki link</a></div>
      </div>
    </div>
  )
}

export default Character;