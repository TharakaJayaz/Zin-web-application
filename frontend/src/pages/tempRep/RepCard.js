import React, { useEffect, useState } from "react";
import classes from "./RepCard.module.css";
import user from "../../assets/userImage.png";
import axios from "axios";

const RepCard = (props) => {
  const [datas, setData] = useState({
    date: " ",
    password: " ",
    email: " ",
    RID: " ",
    full_name: " ",
    phone: " ",
    NIC: " ",
    address: " ",
  });

  useEffect(()=>{
    setData({
      date:props.rdate,
      password:props.password,
      email:props.email,
      RID:props.rid,
      full_name:props.name,
      phone:props.mobile,
      NIC:props.nic,
      address:props.address,
    });
  },[])

  // const[dataLogic,setDataLogic] = useState('false');
  const handleDelete = async (id) => {
    try {
      await axios.delete("http://localhost:8800/reps/" + props.rid);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  const handleAccept = async (id) => {
    // setData({
    //   date:props.date,
    //   password:props.password,
    //   email:props.email,
    //   RID:props.rid,
    //   full_name:props.full_name,
    //   phone:props.mobile,
    //   NIC:props.nic,
    //   address:props.address,
    // });
    try {
      await axios.post("http://localhost:8800/reps", datas);
      //  window.location.reload()
      console.log("writing data", datas);
      console.log("add to sales rep table");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className={classes.repCard_main_div}>
      <div className={classes.repCard_second_div}>
        <img src={user} alt="user" className={classes.repCard_image} />
        <table className={classes.repCard_table}>
          <tbody>
            <tr>
              <td className={classes.repCard_table_left}>Full name</td>
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
        <button
          className={classes.repCard_Button_accepts}
          onClick={() => handleAccept(props.rid)}
        >
          Accept
        </button>
        <button
          className={classes.repCard_Button_cancel}
          onClick={() => handleDelete(props.rid)}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default RepCard;
