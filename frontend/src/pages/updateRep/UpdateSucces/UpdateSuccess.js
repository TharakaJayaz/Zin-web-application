import React from 'react';
import classes from './UpdateSucces.module.css';
import {IoCheckmarkDoneCircleOutline} from 'react-icons/io5'
import { useNavigate } from 'react-router-dom';

const UpdateSuccess = (props) => {

   
        const navigation = useNavigate();
    
        const buttonHandler = event =>{
            navigation("/admin/temp_reps");
        }
  return (
    <div className={classes.main}>
    <div className={`${classes.main_div_register} ${props.style}`}>
      
      <IoCheckmarkDoneCircleOutline  className={classes.iconStyle}/>
      <p className={classes.resitration_para}>SUCCESSFULLY UPDATED</p>
      <button onClick={buttonHandler}>Close</button>
    </div>
    </div>
  )
}

export default UpdateSuccess
