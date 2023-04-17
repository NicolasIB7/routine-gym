import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Paginate=(props)=>{


const pageNumber=[]


for(let i=1;i<=Math.ceil(props.ejercicios/props.excercisePerPage);i++){
    pageNumber.push(i)
}


return(
    <nav>
      <ul>
        {!pageNumber.length<=0 && 
          <button onClick={()=>props.previousExcercises()}>Anterior</button>
        }
        {pageNumber && pageNumber.map((number) => (

            <button onClick={()=>props.paginado(number)}>{number}</button>

        ))}
        {!pageNumber.length<=0 && 
          <button onClick={()=>props.nextExcercises(pageNumber.length)}>Siguiente</button>
        }
      </ul>

    </nav>
  );
  

}

export default Paginate;