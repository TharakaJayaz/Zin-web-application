
import React, { useState, useEffect, useRef } from "react";

import classes from './popupMessage.module.css';
import { IoCheckmarkDoneCircleOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const PopupMessageForDelete = ({ onClose, data }) => {
  const [showPopup, setShowPopup] = useState(true);
  const navigation = useNavigate();

  const reloadPage = () => {
    window.location.reload();
  };
  
  const buttonHandler = async (event) => {
    const itemData = {
      id: data,
    };

    try {
      const response = await axios.post('http://localhost:8800/deleteItem', itemData);
      if (response.data === 'successfull') {
        window.location.reload();
      }
    } catch (err) {
      console.log(err);  
    }
  };
  useEffect(() => {
  }, []);
  return (
    
        <div className="popup" style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div
            className="popup-content"
            style={{
              padding: '20px',
              backgroundColor: '#fff',
              width: '300px',
              borderRadius: '5px',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <p style={{ textAlign: 'center' }}>Are you sure you want to delete this item?</p>
            <div style={{ display: 'flex' }}>
              <button
                className="cancleBtn"
                style={{
                  marginTop: '20px',
                  backgroundColor: '#55efc4',
                  border: 'none',
                  padding: '6px',
                  marginRight: '20px',
                  color: '#fff',
                  fontWeight: 700,
                  letterSpacing: '1px',
                  borderRadius: '3px',
                }}
                onClick={reloadPage}
              >
                No
              </button>
              <button
                className="cancleBtn"
                style={{
                  marginTop: '20px',
                  backgroundColor: '#ff7675',
                  border: 'none',
                  padding: '6px',
                  color: '#fff',
                  fontWeight: 700,
                  letterSpacing: '1px',
                  borderRadius: '3px',
                }}
                onClick={buttonHandler}
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      
    
  );
};

export default PopupMessageForDelete;
