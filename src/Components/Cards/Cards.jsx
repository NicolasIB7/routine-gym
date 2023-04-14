import React from 'react'
import style from "./Cards.module.css"
function Cards(props) {


  


  return (
    <div className={style.container}>
        <h3>{props.name}</h3>
        <img src={props.gifUrl} alt="ejercicio" />
        <p>Body part: {props.bodyPart}</p>
        <p>Equipment: {props.equipment}</p>
    </div>
  )
}

export default Cards