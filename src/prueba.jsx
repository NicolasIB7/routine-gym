import React, { useEffect, useState } from "react";


const Prueba=()=>{


    // const [ejercicios, setEjercicios]=useState([])

    // const options = {
    //     method: 'GET',
    //     headers: {
    //         'X-RapidAPI-Key': '58562bcbd1msh04a6fbb54dbf2e7p10e2b7jsne0b1a322b349',
    //         'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    //     }
    // };

    // useEffect(()=>{
    //     fetch('https://exercisedb.p.rapidapi.com/exercises', options)
    //     .then(response => response.json())
    //     .then(response => setEjercicios(response)) //)
    //     .catch(err => console.error(err));

    // },[])
    // console.log(ejercicios)
   

    return(
        <div>
            {/* {ejercicios.map((response)=>{
                return(
                    <div>
                <p>Name:{response.name}</p>
                <p>Body part: {response.bodyPart}</p>
                <img src={response.gifUrl} alt="" />
                <p>equipment: {response.equipment}</p>
                <p>Target: {response.target}</p>
                </div>
                )

            })}
          ) */}


          <p>hola</p>
        </div>

    )
}

export default Prueba;



