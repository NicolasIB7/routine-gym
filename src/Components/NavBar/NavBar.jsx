import React from 'react';
import { Link } from 'react-router-dom';
import style from "./NavBar.module.css";

function NavBar() {
  return (
    <div className={style.container}>
      <div>
      <Link to="/">
        Home
      </Link>
      <Link to="/favorites">
        Favorites
      </Link>
      <Link to="/about">
        About
      </Link>
      </div>

    </div>
  )
}

export default NavBar