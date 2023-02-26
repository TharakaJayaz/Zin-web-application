import React from 'react';
import classes from './RepCard.module.css';
import user from '../../assets/userImage.png';

const RepCard = (props) => {
  return (
    
    <div className={classes.repCard_main_div} >
      <div className={classes.repCard_second_div}>
        <img src ={user}  alt="user"  className ={classes.repCard_image} />
        <table className={classes.repCard_table}>
          <tbody>
            <tr>
                <td  className={classes.repCard_table_left}>Full name</td>
                <td>{props.name}</td>
            </tr>

            <tr>
                <td className={classes.repCard_table_left}>mobile</td>
                <td>{props.mobile}</td>
            </tr>

            <tr>
                <td className={classes.repCard_table_left}>NIC</td>
                <td>{props.nic}</td>
            </tr>

            <tr>
                <td className={classes.repCard_table_left}>Reg Date</td>
                <td>{props.rdate}</td>
            </tr>

            <tr>
                <td className={classes.repCard_table_left}>Address</td>
                <td>{props.address}</td>
            </tr>

            <tr>
                <td>Email</td>
                <td>{props.email}</td>
            </tr>
            </tbody>
        </table>
        
      </div>
      <div className={classes.repCard_button_div}>
        <button className={classes.repCard_Button_accepts}>Accept</button>
        <button className={classes.repCard_Button_cancel}>Cancel</button>
        </div>
    </div>
  )
}

export default RepCard
