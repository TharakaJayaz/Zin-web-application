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

  const shopNameInputHandler = (event) => {
    setCurrntDetailsForInputs({ id: event.target.value });
  };

  const ownerNameInputHandler = (event) => {
    setCurrntDetailsForInputs({ ownerName: event.target.value });
  };

  const nicInputHandler = (event) => {
    setCurrntDetailsForInputs({ nic: event.target.value });
  };

  const sexInputHandler = (event) => {
    setCurrntDetailsForInputs({ sex: event.target.value });
  };

  const mobileInputHandler = (event) => {
    setCurrntDetailsForInputs({ mobile: event.target.value });
  };

  const dobInputHandler = (event) => {
    setCurrntDetailsForInputs({ dob: event.target.value });
  };

  const addressInputHandler = (event) => {
    setCurrntDetailsForInputs({ address: event.target.value });
  };


  const emailInputHandler = (event) => {
    setCurrntDetailsForInputs({ email: event.target.value });
  };



  const logoHandler = () => {
    navigation("/");
  };

  const updateHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className={classes.main_div}>
      <div className={classes.main_div_sub_div1}>
        <div className={classes.wrapper_div}>
          <section className={classes.sub_sec1}>
            <img src={logo} alt="logo" onClick={logoHandler} />
          </section>
          <section className={classes.sub_sec2}>Update Shop:{id}</section>
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
                        value={currntDetailsForInputs.shopName}
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
                        value={currntDetailsForInputs.ownerName}
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
                        value={currntDetailsForInputs.nic}
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
                        value={currntDetailsForInputs.sex}
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
                        value={currntDetailsForInputs.mobile}
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
                        value={currntDetailsForInputs.dob}
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
                        value={currntDetailsForInputs.address}
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
                        value={currntDetailsForInputs.email}
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
