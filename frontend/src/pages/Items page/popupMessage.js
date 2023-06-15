import React from 'react';
import classes from './popupMessage.module.css';
import { IoCheckmarkDoneCircleOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

const PopupMessage = ({ onClose }) => {
  const navigation = useNavigate();

  const buttonHandler = event => {
    navigation('/');
  };

  return (
    <div className={classes.background}>
      <div className={classes.popup}>
        <div className={classes.popupContent}>
          <IoCheckmarkDoneCircleOutline className={classes.iconStyle} />
          <p className={classes.err_p}>Added successfully</p>
          <button onClick={buttonHandler}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default PopupMessage;

