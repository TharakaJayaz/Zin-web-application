import React, { useEffect, useState } from "react";
import classes from "./RepSearchCard.module.css";
import user from "../../../assets/userImage.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { repUpdateAction } from "../../../store";
import swal from "sweetalert";

const RepSearchCard = (props) => {

  const [deleteLogic,setDeleteLogic] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //   const [datas, setData] = useState({
  //     date: " ",
  //     password: " ",
  //     email: " ",
  //     RID: " ",
  //     full_name: " ",
  //     phone: " ",
  //     NIC: " ",
  //     address: " ",
  //   });

  //   useEffect(()=>{
  //     setData({
  //       date:props.rdate,
  //       password:props.password,
  //       email:props.email,
  //       RID:props.rid,
  //       full_name:props.name,
  //       phone:props.mobile,
  //       NIC:props.nic,
  //       address:props.address,
  //     });
  //   },[])

  // const[dataLogic,setDataLogic] = useState('false');
  //   const handleDelete = async (id) => {
  //     try {
  //       await axios.delete("http://localhost:8800/reps/" + props.rid);
  //       window.location.reload();
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };

  //   const handleAccept = async (id) => {
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

  const handleUpdate = () => {
    console.log("update btn clicked");
    dispatch(repUpdateAction.add({name:props.name,
      nic:props.nic,
      mobile:props.mobile,
      email:props.email,
      address:props.address,
      id:props.id

    }));

    navigate("/admin/repUpdate");
  };

  const handleDelete = async () =>{
    setDeleteLogic(true);
        console.log("RID",props.id)
  

    // 

  }

  const yesBtnHandler = async ()  =>{
      try {
      await axios.delete("http://localhost:8800/reps_confirm/" + props.id);
      setDeleteLogic(false);
      window.location.reload();
      
    } catch (err) {
      console.log(err);
    }



  }

  const noBtnHandler = ()  =>{
        setDeleteLogic(false);
  }

  // hello
  //     try {
  //       await axios.post("http://localhost:8800/reps", datas);
  //       //  window.location.reload()
  //       console.log("writing data", datas);
  //       console.log("add to sales rep table");
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };

  
  return (
    // <div className={classes.repCard_main_div}>
    //   <div className={classes.repCard_second_div}>
    //     <img src={user} alt="user" className={classes.repCard_image} />
    //     <table className={classes.repCard_table}>
    //       <tbody>
    //         <tr>
    //           <td className={classes.repCard_table_left}>Full name</td>
    //           <td>{props.name}</td>
    //         </tr>

    //         <tr>
    //           <td className={classes.repCard_table_left}>mobile</td>
    //           <td>{props.mobile}</td>
    //         </tr>

    //         <tr>
    //           <td className={classes.repCard_table_left}>NIC</td>
    //           <td>{props.nic}</td>
    //         </tr>

    //         <tr>
    //           <td className={classes.repCard_table_left}>Reg Date</td>
    //           <td>{props.rdate}</td>
    //         </tr>

    //         <tr>
    //           <td className={classes.repCard_table_left}>Address</td>
    //           <td>{props.address}</td>
    //         </tr>

    //         <tr>
    //           <td>Email</td>
    //           <td>{props.email}</td>
    //         </tr>
    //       </tbody>
    //     </table>
    //   </div>
    //   <div className={classes.repCard_button_div}>

    //     <button
    //       className={classes.repCard_Button_accepts}
    //       onClick={handleUpdate}

    //     >

    //      Update
    //     </button>

    //     <button
    //       className={classes.repCard_Button_cancel}
    //     //   onClick={() => handleDelete(props.rid)}
    //     >
    //       Delete
    //     </button>
    //   </div>
    // </div>
    <div className={classes.repCard_main_div}>
      <div className={classes.repCard_second_div}>
      { deleteLogic &&(<div className={classes.err_div}>
        <div className={classes.err_div_msg}>
          <section className={classes.err_div_msg_sec1}>Do You Want To Remove This Rep details ? </section>
          <section className={classes.err_div_msg_sec2}>
            <button className={classes.bt1} onClick={yesBtnHandler} >Yes</button>
            <button className={classes.bt2} onClick={noBtnHandler} >No</button>
          </section>
        </div>
      </div>)}
        <img src={user} alt="user" className={classes.repCard_image} />
        <table className={classes.repCard_table}>
          <tbody>
            <tr className={classes.table_tr}>
              <td>
                Full name
                <br></br>
                <p>{props.name}</p>
              </td>

              <td>
                Mobile
                <br></br>
                <p>{props.mobile}</p>
              </td>
            </tr>

            <tr className={classes.table_tr}>
              <td>
                NIC
                <br></br>
                <p>{props.nic}</p>
              </td>

              <td>
                Register date
                <br></br>
                <p>{props.rdate}</p>
              </td>
            </tr>

            <tr className={classes.table_tr}>
              <td>
                DOB
                <br></br>
                <p>{props.bdate}</p>
              </td>

              <td>
                Sex
                <br></br>
                <p>{props.gender}</p>
              </td>
            </tr>

            <tr className={classes.table_tr}>
              <td>
                Email
                <br></br>
                <p>{props.email}</p>
              </td>

              <td>
                Address
                <br></br>
                <p>{props.address}</p>
              </td>
            </tr>
            {/* <tr>
              <td>
                <button
                  className={classes.repCard_Button_accepts}
                  onClick={handleUpdate}
                >
                  Update
                </button>
              </td>
              <td>
                <button className={classes.repCard_Button_cancel}>
                  Delete
                </button>
              </td>
            </tr> */}
          </tbody>
        </table>

        <div className={classes.btn_div}>
          {" "}
          
            <button
              className={classes.repCard_Button_accepts}
              onClick={handleUpdate}
            >
              Update
            </button>
          
          
            <button    onClick={handleDelete}  className={classes.repCard_Button_cancel}>Delete</button>
          
        </div>
      </div>
    </div>
  );
};

export default RepSearchCard;
