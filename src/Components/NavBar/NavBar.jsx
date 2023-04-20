import React from "react";
import { Link, NavLink } from "react-router-dom";
import style from "./NavBar.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";

function NavBar() {
  return (
    <div >
      <div className={style.container}>
        <div className={style.containerLinks}>
        <Link to='/' className={style.links}>Home</Link>
        <Link to='/favorites' className={style.links}>Favorites</Link>
        <Link to='/about' className={style.links}>About</Link>
        </div>
        <div className={style.linksresponsive}>
        <PopupState
          variant='popover'
          popupId='demo-popup-menu'
          sx={{ backgroundColor: "black" }}>
          {(popupState) => (
            <React.Fragment>
              <Button
                {...bindTrigger(popupState)}
                sx={{ backgroundColor: "black" }}>
                <MenuIcon />
              </Button>
              <Menu {...bindMenu(popupState)}>
                <NavLink
                  to='/'
                  style={{ textDecoration: "none", color: "black" }}>
                  <MenuItem onClick={popupState.close}>Home</MenuItem>
                </NavLink>
                <NavLink
                  to='/favorites'
                  style={{ textDecoration: "none", color: "black" }}>
                  <MenuItem onClick={popupState.close}>Favorites</MenuItem>
                </NavLink>
                <NavLink
                  to='/about'
                  style={{ textDecoration: "none", color: "black" }}>
                  <MenuItem onClick={popupState.close}>About</MenuItem>
                </NavLink>
              </Menu>
            </React.Fragment>
          )}
        </PopupState>
      </div>
      </div>



      
    </div>
  );
}

export default NavBar;
