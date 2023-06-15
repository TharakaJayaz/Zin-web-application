import React from 'react';
import classess from './ItemAddSuccessModule.css'
import {IoCheckmarkDoneCircleOutline} from 'react-icons/io5'
import { useNavigate } from 'react-router-dom';
const ItemAddSuccess = (props) => {
    const navigation = useNavigate();

    const buttonHandler = event =>{
        navigation("/");
    }
  return (
    <div className={classess.main}>
    <div className={`${classess.main_div_register} ${props.style}`}>
      
      <IoCheckmarkDoneCircleOutline  className={classess.iconStyle}/>
      <p className={classess.resitration_para}>ITEM ADD SUCCESS</p>
      <button onClick={buttonHandler}>Close</button>
    </div>
    </div>
  )
}

export default ItemAddSuccess