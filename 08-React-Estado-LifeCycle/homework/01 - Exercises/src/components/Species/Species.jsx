import React from 'react'

export default function Species (props) {
  return (
    <div>
      <h2>Species</h2>
      
        {props.species.map(s => <button key ={s} onClick={props.handleSpecies} value={s}>{s}</button>)}
    <button onClick={props.handleAllSpecies}>All Animals</button>
    </div>
  )
}
