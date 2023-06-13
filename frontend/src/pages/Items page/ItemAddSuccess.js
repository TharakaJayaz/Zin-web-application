import React from 'react';
import classes from './ItemAddSuccessModule.css'
import {IoCheckmarkDoneCircleOutline} from 'react-icons/io5'
import { useNavigate } from 'react-router-dom';
const ItemAddSuccess = (props) => {
    const navigation = useNavigate();

    const buttonHandler = event =>{
        navigation("/");
    }
  return (
    <div className={classes.main}>
    <div className={`${classes.main_div_register} ${props.style}`}>
      
      <IoCheckmarkDoneCircleOutline  className={classes.iconStyle}/>
      <p className={classes.resitration_para}>ITEM ADD SUCCESS</p>
      <button onClick={buttonHandler}>Close</button>
    </div>
    </div>
  )
}

export default ItemAddSuccess