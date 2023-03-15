import React from 'react';
import classes from './Update.module.css';
import background from '../../assets/Background vector group.png';
import logo from '../../assets/zr red.png';

const UpdateRep = () => {
  return (
    <div className={classes.div_main__updateRep}>
     
     <div  className={classes.div_second__updateRep}>
        <img src = {logo} alt = "logo"  />
        <h1 className={classes.h1__updateRep}>Update Rep</h1>
        <div className={classes.sub_div__updateRep}>
            <span >Name </span>
            <input type = 'text'  />
        </div>
        <div className={classes.sub_div__updateRep}>
            <span >Mobile </span>
            <input type = 'text'  />
        </div>
        <div className={classes.sub_div__updateRep}>
            <span >Email </span>
            <input type = 'text'  />
        </div>
        <div className={classes.sub_div__updateRep}>
            <span >NIC</span>
            <input type = 'text'  />
        </div>
        <div className={classes.sub_div__updateRep}>
            <span >Address </span>
            <input type = 'text'  />
        </div>
        <button >Update</button>
     </div>
    
     <img src = {background}   alt = 'backgound vector' className={classes.backImg__updateRep} /> 
    </div>
  )
}

export default UpdateRep
