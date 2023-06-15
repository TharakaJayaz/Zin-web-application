import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/ZR.png";
import classes from "./NavbarAdmin.module.css";
const NavbarAdmin = (props) => {

  const navigation = useNavigate();

  const imageClickHandler = ()  =>{
    navigation("/");
  }

  const logoutHandler = () =>{
    navigation("/signIn");
  }
  return (
    <div>
      <div className={`${classes.nav_main_div} ${props.className} `}>
        <img src={logo}  onClick = {imageClickHandler} alt="zr logo" className={classes.logo} />
        <div className={classes.headElements}>
          <ul>

            <NavLink   to = "/admin/items/update" className={classes.nav_style}><li>Items</li></NavLink>
            <NavLink  to =  "/admin/temp_reps" className={classes.nav_style}><li>Reps</li></NavLink>
            <NavLink to = "/admin/reports"  className={classes.nav_style}><li>Reports</li></NavLink>
            <NavLink to = "/admin/shops" className={classes.nav_style}><li>Shop</li></NavLink>
          </ul>
        </div>
        <div className={classes.navSearch}>
          {props.children}
          {/* <input type="text" className={classes.navSearch_input} placeholder = "search"/>
          <button className={`${classes.navSearch__button} ${props.buttonstyle}`}>Search</button> */}
        </div>
        <button  onClick={logoutHandler} className={classes.nav_main_div_logOut_button}>Logout</button>
       
      </div>
    </div>
  );
};

export default NavbarAdmin;
