import React from 'react';
import classes from './NavbarStock.module.css';
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/ZR.png";


const NavbarStok = (props) => {

  const navigation = useNavigate();

  const imageClickHandler = ()  =>{
    navigation("/");
  }
  return (
    <div>
      <div className={`${classes.nav_main_div} ${props.className} `}>
        <img src={logo}  onClick = {imageClickHandler} alt="zr logo" className={classes.logo} />
        <div className={classes.headElements}>
          <ul>

            <NavLink   to = '/stock_keeper/item_list' className={classes.nav_style}><li>Item List</li></NavLink>
            <NavLink  to = '/stock_keeper/stock' className={classes.nav_style}><li>Stock List</li></NavLink>
            {/* <NavLink to = "/admin/reports"  className={classes.nav_style}><li>Reports</li></NavLink>
            <NavLink to = "/admin/shops" className={classes.nav_style}><li>Shop</li></NavLink> */}
          </ul>
        </div>
        <div className={classes.navSearch}>
          {props.children}
          {/* <input type="text" className={classes.navSearch_input} placeholder = "search"/>
          <button className={`${classes.navSearch__button} ${props.buttonstyle}`}>Search</button> */}
        </div>
        <button className={classes.nav_main_div_logOut_button}>Logout</button>
       
      </div>
    </div>
  );
}

export default NavbarStok
