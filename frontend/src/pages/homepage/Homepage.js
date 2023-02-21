import React from "react";
import backgroundLogo from "../../assets/Background vector group.png";
import logo from "../../assets/ZR.png";
import classes from "./homepage.module.css";
import {AiOutlineArrowRight} from 'react-icons/ai';

const Homepage = () => {
  return (
    <div className={classes.home_main_div}>
      <nav className={classes.navbar}>
        <img src={logo} alt="zr" className={classes.nav_logo} />
        <button className={classes.nav_btn}>LOGIN</button>
      </nav>
      <div className={classes.home_body}>
        <p>
          Sales Representatives <br></br> for Zincat
        </p>
        <button className={classes.body_btn}>GET STARTED <AiOutlineArrowRight   className={classes.body_btn_icon} /> </button>
      </div>
      <img   className={classes.background_img} src ={backgroundLogo}  alt = 'logo' />
    </div>
  );
};

export default Homepage;
