import React from "react";
import { Link } from "react-router-dom";
import style from "./NavBar.module.css";

function NavBar() {
  return (
    <div >
      <div className={style.container}>
        <div className={style.containerLinks}>
        <Link to='/' className={style.links}>Home</Link>
        <Link to='/favorites' className={style.links}>Favorites</Link>
        <Link to='/about' className={style.links}>About</Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
