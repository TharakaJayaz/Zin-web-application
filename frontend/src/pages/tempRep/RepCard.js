import React from 'react';
import classes from './RepCard.module.css';
import user from '../../assets/userImage.png';

const RepCard = (props) => {
  return (
    
    <div className={classes.repCard_main_div} >
      <div className={classes.repCard_second_div}>
        <img src ={user}  alt="user"  className ={classes.repCard_image} />
        <table className={classes.repCard_table}>
            <tr>
                <td  className={classes.repCard_table_left}>Full name</td>
                <td>P.A.Tharaka prbhath jayarathne</td>
            </tr>

            <tr>
                <td className={classes.repCard_table_left}>mobile</td>
                <td>0718736614</td>
            </tr>

            <tr>
                <td className={classes.repCard_table_left}>NIC</td>
                <td>992505729V</td>
            </tr>

            <tr>
                <td className={classes.repCard_table_left}>DOB</td>
                <td>1999-09-06</td>
            </tr>

            <tr>
                <td className={classes.repCard_table_left}>Address</td>
                <td>106/6,Bokotuwa Junction,Ethpitiya,Walasmulla</td>
            </tr>

            <tr>
                <td>Email</td>
                <td>tharakaprbhath300@gmail.com</td>
            </tr>
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
