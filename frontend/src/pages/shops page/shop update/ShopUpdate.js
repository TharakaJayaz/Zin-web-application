import React, { useState } from "react";
import classes from "./ShopUpdate..module.css";
import backgroundLogo from "../../../assets/Background vector group.png";
import logo from "../../../assets/zr red.png";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ShopUpdate = () => {
  const navigation = useNavigate();

  const currentDetails = useSelector((state)=>state.shopUpdate);

  const [currntDetailsForInputs, setCurrntDetailsForInputs] = useState({
 
   
    id:currentDetails.id,
    shopName: currentDetails.shopName,
    ownerName: currentDetails.ownerName,
    nic: currentDetails.nic,
    mobile: currentDetails.mobile,
    email: currentDetails.email,
    dob:currentDetails.dob,
    address:currentDetails.address,
    sex: currentDetails.sex


  });
  const id = currentDetails.id;

  const [shopNamevalue,setshopNameValue]  = useState(currentDetails.shopName);
  const [idvalue,setidValue]  = useState(currentDetails.id);
  const [ownerNamevalue,setownerNameValue]  = useState(currentDetails.ownerName);
  const [nicvalue,setnicValue]  = useState(currentDetails.nic);
  const [mobilevalue,setmobileValue]  = useState(currentDetails.mobile);
  const [emailvalue,setemailValue]  = useState(currentDetails.email);
  const [dobvalue,setdobValue]  = useState(currentDetails.dob);
  const [addressvalue,setaddressValue]  = useState(currentDetails.address);
  const [sexvalue,setsexValue]  = useState(currentDetails.sex);

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
    navigation("/");
  };

  const updateHandler = (event) => {
    event.preventDefault();
    console.log("update clicked");
    setCurrntDetailsForInputs({
         
    id:idvalue,
    shopName: shopNamevalue,
    ownerName: ownerNamevalue,
    nic: nicvalue,
    mobile: mobilevalue,
    email: emailvalue,
    dob:dobvalue,
    address:addressvalue,
    sex: sexvalue
    });
    console.log("value after update",currntDetailsForInputs);
    
  };

  return (
    <div className={classes.main_div}>
      <div className={classes.main_div_sub_div1}>
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
                    <td className={classes.td_left}>Sex</td>
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
                    <td className={classes.td_left}>DOB</td>
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
