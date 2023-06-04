import React, { Fragment, useRef, useState } from "react";
import classes from "./Update.module.css";
import background from "../../assets/Background vector group.png";
import logo from "../../assets/zr red.png";
import "../../functions.js";
import { useNavigate } from "react-router-dom";
import { MdErrorOutline } from "react-icons/md";
import {
  emailValidationFunction,
  mobileValidationFunction,
  nicValidationFunction,
} from "../../functions/Validations";
import UpdateSuccess from "./UpdateSucces/UpdateSuccess";

const UpdateRep = () => {
  const navigation = useNavigate();
  // input values
  const nameInput = useRef();
  const mobileInput = useRef();
  const emailInput = useRef();
  const nicInput = useRef();
  const addressInput = useRef();

  const [totalLogic, setTotalLogic] = useState(true);

  // err message

  const [errMessage, setErrMessage] = useState("");

  // validation states
  const [errStatus, SetErrStatus] = useState(true);
  const [errlogic, setErrLogic] = useState(false);

  // validation logics

  // navigation functions

  const imageClickHandler = () => {
    navigation("/");
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const nameValue = nameInput.current.value;
    const mobileValue = mobileInput.current.value;
    const emailValue = emailInput.current.value;
    const nicValue = nicInput.current.value;
    const addressValue = addressInput.current.value;
    console.log(nameValue, mobileValue, emailValue, nicValue, addressValue);

    if (
      nameValue.trim() === "" ||
      mobileValue.trim() === "" ||
      emailValue.trim() === "" ||
      nicValue.trim() === "" ||
      addressValue.trim() === ""
    ) {
      SetErrStatus(true);
      console.log("one of each is empty");
    } else {
      SetErrStatus(false);
    }

    if (!mobileValidationFunction(mobileValue)) {
      setErrMessage("invalid mobile");
      setErrLogic(true);
    }
    if (!emailValidationFunction(emailValue)) {
      setErrMessage("invalid email");
      setErrLogic(true);
    }

    if (!nicValidationFunction(nicValue)) {
      setErrMessage("invalid nic");
      setErrLogic(true);
    }
    if (
      mobileValidationFunction(mobileValue) &&
      emailValidationFunction(emailValue) &&
      nicValidationFunction(nicValue)
    ) {
      setErrMessage("");
      setErrLogic(false);
    }

    // if (!(errlogic || errStatus)) {
    //   setTotalLogic(false);
    // }
  };


  const buttonHandler = ()  =>{
     if (!(errlogic || errStatus)) {
      setTotalLogic(false);
    }
    console.log('total logic',totalLogic);
  }
  return (
    <>
      {totalLogic &&
        (<form className={classes.form__updateRep} onSubmit={submitHandler}>
          <div className={classes.div_second__updateRep}>
            <img
              className={classes.zr_logo}
              src={logo}
              alt="logo"
              onClick={imageClickHandler}
            />
            {errlogic && (
              <div className={classes.err_div}>
                <p>
                  {" "}
                  <MdErrorOutline className={classes.err_icn} />
                  <span>{errMessage}</span>
                </p>
              </div>
            )}
            <h1 className={classes.h1__updateRep}>Update Rep</h1>
            <div className={classes.sub_div__updateRep}>
              <span>Name </span>
              <input type="text" ref={nameInput} />
            </div>
            <div className={classes.sub_div__updateRep}>
              <span>Mobile </span>
              <input type="text" ref={mobileInput} />
            </div>
            <div className={classes.sub_div__updateRep}>
              <span>Email </span>
              <input type="text" ref={emailInput} />
            </div>
            <div className={classes.sub_div__updateRep}>
              <span>NIC</span>
              <input type="text" ref={nicInput} />
            </div>
            <div className={classes.sub_div__updateRep}>
              <span>Address </span>
              <input type="text" ref={addressInput} />
            </div>
            {errStatus && <p className={classes.err_p}>All Fields shuld be filled*</p>}
            <button onClick={buttonHandler}>Update</button>
          </div>

          <img
            src={background}
            alt="backgound vector"
            className={classes.backImg__updateRep}
          />
        </form>)
      }
      {!totalLogic&&(<UpdateSuccess />   )}
    </>
  );
};

export default UpdateRep;
