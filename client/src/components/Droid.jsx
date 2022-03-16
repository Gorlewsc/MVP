import React from 'react';

function Droid(props) {
  return !props.droid ? null : (
    <div>
      <img src={props.droid.image} />
      <div>{props.droid.name}</div>
      <div>{props.droid.species}</div>
      <div>{props.droid.dateCreated ?
        <div>Created by {props.droid.creator} in {props.droid.dateCreated}</div> : null}
      </div>
      <div>{props.droid.dateDestroyed ?
        <div>Destroyed in {props.droid.dateDestroyed} in {props.droid.destroyedLocation}</div> : null}
      </div>
      <div>{props.droid.homeWorld}</div>
      <div>{props.droid.height}</div>
      <div>{props.droid.manufacturer}</div>
      <div>{props.droid.model}</div>
      <div>{props.droid.class}</div>
      <div>{props.droid.sensorColor}</div>
      <div>{props.droid.platingColor}</div>
      <div>{props.droid.equipment}</div>
      <div>{props.droid.affilitions[0]}</div>
    </div>
  )
}

export default Droid;