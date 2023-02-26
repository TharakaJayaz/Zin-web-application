import React from "react";
import logo from "../../assets/ZR.png";
import classes from "./NavbarAdmin.module.css";
const NavbarAdmin = (props) => {
  return (
    <div>
      <div className={`${classes.nav_main_div} ${props.className} `}>
        <img src={logo} alt="zr logo" className={classes.logo} />
        <div className={classes.headElements}>
          <ul>
            <li>Items</li>
            <li>Reps</li>
            <li>Reports</li>
            <li>Shop</li>
          </ul>
        </div>
        <div className={classes.navSearch}>
          <input type="text" className={classes.navSearch_input} placeholder = "search"/>
          <button className={`${classes.navSearch__button} ${props.buttonstyle}`}>Search</button>
        </div>
        <button className={classes.nav_main_div_logOut_button}>Logout</button>
       
      </div>
    </div>
  );
};

export default NavbarAdmin;
