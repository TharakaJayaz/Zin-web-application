import React from 'react';
import classes from './popupMessage.module.css'
import {IoCheckmarkDoneCircleOutline} from 'react-icons/io5'
import { useNavigate } from 'react-router-dom';
const PopupMessage = ({ onClose }) => {
    const navigation = useNavigate();
    const buttonHandler = event =>{
        navigation("/");
    }
  return (
    <div className="popup">
      <div className="popup-content">
        {/* <h3>Message</h3> */}
        <IoCheckmarkDoneCircleOutline  className={classes.iconStyle}/>
        <p>Added successfully</p>
        <button onClick={buttonHandler}>Close</button>
      </div>
    </div>
  );
};

export default PopupMessage;



