import React from 'react';
import DroidAffiliations from './DroidAffiliations.jsx';
import DroidEquipment from './DroidEquipment.jsx';

function Droid(props) {
  return !props.droid ? null : (
    <div className='droid-info-container'>
      <img src={props.droid.image} />
      <div className='droid-basic-info'>
        (Negative numbers indicate years Before the Battle of Yavin)
        <div>{props.droid.species}</div>
        <div><u>Name:</u> {props.droid.name}</div>
        <div>{props.droid.homeWorld ?
          <div><u>Homeworld:</u> {props.droid.homeWorld}</div> : null}
        </div>
        <div><u>Height:</u> {props.droid.height}</div>
        {props.droid.manufacturer ?
        <div><u>Manufactored by:</u> {props.droid.manufacturer}</div> : null}
        <div><u>Model:</u> {props.droid.model}</div>
        <div><u>Class:</u> {props.droid.class}</div>
        <div><u>Sensor color:</u> {props.droid.sensorColor}</div>
        <div><u>Plating color:</u> {props.droid.platingColor}</div>
        <div>{props.droid.dateCreated ?
          <div>Created by {props.droid.creator} in {props.droid.dateCreated}</div> : null}
        </div>
        <div>{props.droid.dateDestroyed ?
          <div>Destroyed in {props.droid.dateDestroyed} in {props.droid.destroyedLocation}</div> : null}
        </div>
        <div className='droid-equipment'>{props.droid.equipment ? !Array.isArray(props.droid.equipment) ?
          <div><u>Equipment:</u> {props.droid.equipment}</div> :
          <div><u>Equipment:</u> {props.droid.equipment.map((equipment, index) => (
            <DroidEquipment
              equipment={equipment}
              key={index}
            />
          ))}
          </div> : null}
        </div>
        <div className='droid-affiliations'><u>Affiliations:</u> {props.droid.affiliations.map((affiliation, index) => (
          <DroidAffiliations
            affiliation={affiliation}
            key={index}
          />
          ))}
        </div>
        <div className='wiki-link'>For more info, visit <a href={props.droid.wiki}>this wiki link</a></div>
      </div>
    </div>
  )
}

export default Droid;