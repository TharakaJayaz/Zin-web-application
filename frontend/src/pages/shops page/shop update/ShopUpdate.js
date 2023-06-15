import React, { useState } from "react";
import classes from "./ShopUpdate..module.css";
import backgroundLogo from "../../../assets/Background vector group.png";
import logo from "../../../assets/zr red.png";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import swal from "sweetalert";
import axios from "axios";

const ShopUpdate = () => {
  const navigation = useNavigate();

  const currentDetails = useSelector((state)=>state.shopUpdate);

  const [currntDetailsForInputs, setCurrntDetailsForInputs] = useState({
 
   
    SID:currentDetails.id,
    shop_name: currentDetails.shopName,
    Fname: currentDetails.ownerName.split(" ")[0],
    Lname: currentDetails.ownerName.split(" ")[1],
    NIC: currentDetails.nic,
    phoneNo: currentDetails.mobile,
    email: currentDetails.email,
    location:currentDetails.location,
    address:currentDetails.address,
    Rcode: currentDetails.Rcode


  });
  const id = currentDetails.id;

  const [shopNamevalue,setshopNameValue]  = useState(currentDetails.shopName);
  const [idvalue,setidValue]  = useState(currentDetails.id);
  const [ownerNamevalue,setownerNameValue]  = useState(currentDetails.ownerName);
  const [nicvalue,setnicValue]  = useState(currentDetails.nic);
  const [mobilevalue,setmobileValue]  = useState(currentDetails.mobile);
  const [emailvalue,setemailValue]  = useState(currentDetails.email);
  const [dobvalue,setdobValue]  = useState(currentDetails.location);
  const [addressvalue,setaddressValue]  = useState(currentDetails.address);
  const [sexvalue,setsexValue]  = useState(currentDetails.Rcode);

  const shopNameInputHandler = (event) => {
    setshopNameValue(event.target.value);
    
  };

  const ownerNameInputHandler = (event) => {
    setownerNameValue(event.target.value);
    
  };

  const nicInputHandler = (event) => {
    setnicValue(event.target.value);
    
  };

  const sexInputHandler = (event) => {
    setsexValue(event.target.value);
    
  };

  const mobileInputHandler = (event) => {
    setmobileValue(event.target.value);
    
  };

  const dobInputHandler = (event) => {
    setdobValue(event.target.value);
    
  };

  const addressInputHandler = (event) => {
    setaddressValue(event.target.value);
    
  };


  const emailInputHandler = (event) => {
    setemailValue(event.target.value);
    
  };



  const logoHandler = () => {
    navigation("/admin/shops/shop_srch");
  };


  const [confirmLogic,setConfirmLogic] = useState(false);

  const yesBtnHandler = async()  =>{
    try{
      await axios.put("http://localhost:8800/shopconfirm/" +currntDetailsForInputs.SID,currntDetailsForInputs)

      // create onchange and set it to PUT
     
     
  }
  catch(err){
   console.log(err);
  }
 

  swal("Updated!", "You updated the shop details", "success");
             
          setConfirmLogic(false);
          navigation("/admin/shops/shop_srch");
  }

  
  const noBtnHandler = ()  =>{
        setConfirmLogic(false);
  }


  const updateHandler = (event) => {
    event.preventDefault();
    // console.log("swal val",swal("values updated"))
    // console.log("update clicked");
    setCurrntDetailsForInputs({
         
    SID:idvalue,
    shop_name: shopNamevalue,
    Fname: ownerNamevalue.split(" ")[0],
    Lname: ownerNamevalue.split(" ")[1],
    NIC: nicvalue,
    phoneNo: mobilevalue,
    email: emailvalue,
    location:dobvalue,
    address:addressvalue,
    Rcode: sexvalue
    });
    console.log("value after update",currntDetailsForInputs);
    setConfirmLogic(true);
    
  };

  return (
    <div className={classes.main_div}>
      <div className={classes.main_div_sub_div1}>

      { confirmLogic &&(<div className={classes.err_div}>
        <div className={classes.err_div_msg}>
          <section className={classes.err_div_msg_sec1}>Do You Want To Confirm Update shop ? </section>
          <section className={classes.err_div_msg_sec2}>
            <button className={classes.bt1} onClick={yesBtnHandler} >Yes</button>
            <button className={classes.bt2} onClick={noBtnHandler} >No</button>
          </section>
        </div>
      </div>)}
        <div className={classes.wrapper_div}>
          <section className={classes.sub_sec1}>
            <img src={logo} alt="logo" onClick={logoHandler} />
          </section>
          <section className={classes.sub_sec2}>Update Shop:{idvalue}</section>
          <section className={classes.sub_sec3}>
            <form>
              <table>
                <tbody>
                  <tr>
                    <td className={classes.td_left}>Shop Name</td>
                    <td className={classes.td_right}>
                      <input
                        type="text"
                        onChange={shopNameInputHandler}
                        className={classes.form_inputs}
                        value={shopNamevalue}
                      />
                    </td>
                  </tr>

                  <tr>
                    <td className={classes.td_left}>Owner Name</td>
                    <td className={classes.td_right}>
                      <input
                        type="text"
                        onChange={ownerNameInputHandler}
                        className={classes.form_inputs}
                        value={ownerNamevalue}
                      />
                    </td>
                  </tr>

                  <tr>
                    <td className={classes.td_left}>NIC</td>
                    <td className={classes.td_right}>
                      <input
                        type="text"
                        onChange={nicInputHandler}
                        className={classes.form_inputs}
                        value={nicvalue}
                      />
                    </td>
                  </tr>

                  <tr>
                    <td className={classes.td_left}>Rcode</td>
                    <td className={classes.td_right}>
                      <input
                        type="text"
                        onChange={sexInputHandler}
                        className={classes.form_inputs}
                        value={sexvalue}
                      />
                    </td>
                  </tr>

                  <tr>
                    <td className={classes.td_left}>Mobile</td>
                    <td className={classes.td_right}>
                      <input
                        type="text"
                        onChange={mobileInputHandler}
                        className={classes.form_inputs}
                        value={mobilevalue}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className={classes.td_left}>Location</td>
                    <td className={classes.td_right}>
                      <input
                        type="text"
                        onChange={dobInputHandler}
                        className={classes.form_inputs}
                        value={dobvalue}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className={classes.td_left}>Address</td>
                    <td className={classes.td_right}>
                      <input
                        type="text"
                        onChange={addressInputHandler}
                        className={classes.form_inputs}
                        value={addressvalue}
                      />
                    </td>
                  </tr>

                  <tr>
                    <td className={classes.td_left}>Email</td>
                    <td className={classes.td_right}>
                      <input
                        type="text"
                        onChange={emailInputHandler}
                        className={classes.form_inputs}
                        value={emailvalue}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
              <section className={classes.sub_sec4}>
            <button onClick={updateHandler}>Update</button>
          </section>
            </form>
          </section>
          {/* <section className={classes.sub_sec4}>
            <button onClick={updateHandler}>Update</button>
          </section> */}
        </div>
        <img
          src={backgroundLogo}
          alt="background"
          className={classes.background_img}
        />
      </div>
      <img className={classes.background_img} src={backgroundLogo} alt="logo" />
    </div>
  );
};

export default ShopUpdate;
