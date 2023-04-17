import React from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./Paginate.module.css";

const Paginate=(props)=>{


const pageNumber=[]


for(let i=1;i<=Math.ceil(props.ejercicios/props.excercisePerPage);i++){
    pageNumber.push(i)
}


return(
    <nav>
      <ul className={style.ul}>
        {!pageNumber.length<=0 && 
          <button onClick={()=>props.previousExcercises()} className={style.button}>🢀</button>
        }
        {pageNumber && pageNumber.map((number) => (

            <button onClick={()=>props.paginado(number)} className={props.currentPage===number ? style.b : style.button}>{number}</button>

        ))}
        {!pageNumber.length<=0 && 
          <button onClick={()=>props.nextExcercises(pageNumber.length)} className={style.button}>🢂</button>
        }
      </ul>

    </nav>
  );
  

}

export default Paginate;