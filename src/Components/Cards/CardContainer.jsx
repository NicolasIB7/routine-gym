import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import style from "./CardsContainer.module.css"
import SearchBar from "../SearchBar/SearchBar";

function CardContainer(props) {
    const [searchInput, setSearchInput] = useState('');
    const [ejercicios, setEjercicios]=useState([])



    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '58562bcbd1msh04a6fbb54dbf2e7p10e2b7jsne0b1a322b349',
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
    };

    useEffect(()=>{
        fetch('https://exercisedb.p.rapidapi.com/exercises', options)
        .then(response => response.json())
        .then(response => setEjercicios(response)) //)
        .catch(err => console.error(err));

    },[])






    const handleChange = (e) => {
        setSearchInput(e.target.value);
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        const options = {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': '58562bcbd1msh04a6fbb54dbf2e7p10e2b7jsne0b1a322b349',
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
          },
        };
    
        fetch(`https://exercisedb.p.rapidapi.com/exercises/name/${searchInput}`, options)
          .then((response) => response.json())
          .then((response) => setEjercicios(response))
          .catch((err) => console.error(err));
      };















  return (
    <div>
    <SearchBar handleChange={handleChange} searchInput={searchInput} handleSubmit={handleSubmit} />
 
    <div className={style.container}>
        {ejercicios.map((response)=>{
                return( <Cards
                    name={response.name}
                    bodyPart={response.bodyPart}
                    gifUrl={response.gifUrl}
                    equipment={response.equipment}
                    target={response.target}
                    />
                )

            })}
    </div>
    </div>
  )
}

export default CardContainer