import React from 'react';
import classes from './ResitrationSuccess.module.css'
import {IoCheckmarkDoneCircleOutline} from 'react-icons/io5'
import { useNavigate } from 'react-router-dom';
const ResitrationSuccess = (props) => {
    const navigation = useNavigate();

    const buttonHandler = event =>{
        navigation("/");
    }
  return (
    <div className={classes.main}>
    <div className={`${classes.main_div_register} ${props.style}`}>
      
      <IoCheckmarkDoneCircleOutline  className={classes.iconStyle}/>
      <p className={classes.resitration_para}>REGISTRATION SUCCESS</p>
      <button onClick={buttonHandler}>Close</button>
    </div>
    </div>
  )
}

export default ResitrationSuccess