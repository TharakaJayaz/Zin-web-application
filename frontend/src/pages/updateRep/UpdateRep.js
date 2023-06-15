import React, { Fragment, useRef, useState } from "react";
import classes from "./Update.module.css";
import background from "../../assets/Background vector group.png";
import logo from "../../assets/zr red.png";
import "../../functions.js";
import { useNavigate } from "react-router-dom";
import { MdErrorOutline } from "react-icons/md";
import {
  emailValidationFunction,
  emptyValidation,
  mobileValidationFunction,
  nicValidationFunction,
} from "../../functions/Validations";
import UpdateSuccess from "./UpdateSucces/UpdateSuccess";

import { useSelector } from "react-redux";
import axios from "axios";
import swal from 'sweetalert';

const UpdateRep = () => {

  

  const currentDetails = useSelector((state)=>state.repUpdate)

  console.log("currnt details",currentDetails);

  const navigation = useNavigate();
  // input values
  const [nameInput,setNameInput] = useState(currentDetails.name);
  const [mobileInput,setMobileInput] = useState(currentDetails.mobile);
  const [emailInput,setEmailInput] = useState(currentDetails.email);
  const [nicInput,setNicInput] = useState(currentDetails.nic);
  const [addressInput,setAddressInput] = useState(currentDetails.address);

  const [totalLogic, setTotalLogic] = useState(true);

  // err message

  const [errMessage, setErrMessage] = useState("");

  // validation states
  const [errStatus, SetErrStatus] = useState(true);
  const [errlogic, setErrLogic] = useState(false);

  // validation logics

  // navigation functions

  const imageClickHandler = () => {
    navigation("/admin/temp_reps");
  };

 const nameHandler =(event)  =>{
  setNameInput(event.target.value);

  if(emptyValidation(event.target.value)){
    setnameErr(true);
    setDisplayErrMsg("Name Field must not empty");
  }else{
    setnameErr(false)
  }
 }

 const mobileHandler =(event)  =>{
   setMobileInput(event.target.value);

   if (!mobileValidationFunction(event.target.value)) {
    setErrMessage("invalid mobile");
    setErrLogic(true);
    setmobilrErr(true);
    setDisplayErrMsg("invalid mobile");
  }else{
    setmobilrErr(false);
  }

 }
 
 const emailHandler =(event)  =>{
    setEmailInput(event.target.value);


    if (!emailValidationFunction(event.target.value)) {
      setErrMessage("invalid email");
      setErrLogic(true);
      setemailErr(true);
      setDisplayErrMsg("invalid email");
    }else{
      setemailErr(false);
    }
 }
 
 const nicHandler =(event)  =>{
         setNicInput(event.target.value);
         if (!nicValidationFunction(event.target.value)) {
          setErrMessage("invalid nic");
          setErrLogic(true);
          setnicErr(true);
          setDisplayErrMsg("Invalid NIC");
        }else{
          setnicErr(false);
        }
 }
 
 const addressHandler =(event)  =>{
      setAddressInput(event.target.value);


      if(emptyValidation (event.target.value)){
        setaddressErr(true);
        setDisplayErrMsg("Address Field must not empty");
   }else{
     setaddressErr(false);
   }

 }

 const [nicErr,setnicErr] = useState(false);
 const [nameErr,setnameErr] = useState(false);
 const [mobileErr,setmobilrErr] = useState(false);
 const [addressErr,setaddressErr] = useState(false);
 const [emailErr,setemailErr] = useState(false);

 const [displayErrMsg,setDisplayErrMsg] = useState("");



  const submitHandler = (event) => {
    event.preventDefault();
    const nameValue = nameInput;
    const mobileValue = mobileInput;
    const emailValue = emailInput;
    const nicValue = nicInput;
    const addressValue = addressInput;
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

   
  

  


    if (
      mobileValidationFunction(mobileInput) &&
      emailValidationFunction(emailInput) &&
      nicValidationFunction(nicInput)
    ) {
      setErrMessage("");
      setErrLogic(false);
    }

 
 

    // if (!(errlogic || errStatus)) {
    //   setTotalLogic(false);
    // }
    console.log("display err",displayErrMsg);
  };






  const buttonHandler = async ()  =>{
    //  console.log({
    //   namerr:nameErr,
    //   emailErr:emailErr,
    //   nicErr:nicErr,
    //   addressErr:addressErr,
    //   mobileErr:mobileErr
    //  })
 


     if(!nameErr && !emailErr && !nicErr && !addressErr && !mobileErr  ){
      // setErrMessage(" ");



      try{
        await axios.put("http://localhost:8800/reps_update/" +currentDetails.id,{
          nic:nicInput,
          name:nameInput,
          email:emailInput,
          mobile:mobileInput,
          address:addressInput
  
        })
        // create onchange and set it to PUT
        swal("Updated!", "You updated the rep details", "success");
        navigation("/admin/temp_reps");
    }
    catch(err){
     console.log(err);
    }




    }else{
      console.log("enerd else part of btn handler");
      return
    }
  

     if (!(errlogic || errStatus)) {
      setTotalLogic(false);
    }
    // console.log('total logic',totalLogic);
    // console.log('err logic',errlogic);
    // console.log('err status',errStatus);

   


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
        
            <h1 className={classes.h1__updateRep}>Update Rep</h1>
            <div className={classes.sub_div__updateRep}>
              <span>Name </span>
              <input type="text" onChange={nameHandler}  value={nameInput} />
            </div>
            <div className={classes.sub_div__updateRep}>
              <span>Mobile </span>
              <input type="text"    onChange={mobileHandler}  value={mobileInput} />
            </div>
            <div className={classes.sub_div__updateRep}>
              <span>Email </span>
              <input type="text"   onChange={emailHandler}  value={emailInput}/>
            </div>
            <div className={classes.sub_div__updateRep}>
              <span>NIC</span>
              <input type="text"   onChange={nicHandler} value={nicInput} />
            </div>
            <div className={classes.sub_div__updateRep}>
              <span>Address </span>
              <input type="text"   onChange={addressHandler}  value={addressInput}/>
            </div>
            {/* {errStatus && <p className={classes.err_p}>All Fields shuld be filled*</p>} */}
            <section className={classes.err_sec}> 
            
            
               {mobileErr && ( <span>Invalid mobile</span>)}
               { emailErr && ( <span>Invalid Email</span>) }
               { nicErr && ( <span>Invalid NIC</span>) }
               { nameErr && ( <span>Invalid Name</span>) }
               { addressErr && ( <span>Invalid Address</span>) }
            
            </section>
            <button onClick={buttonHandler}>Update</button>
          </div>

          <img
            src={background}
            alt="backgound vector"
            className={classes.backImg__updateRep}
          />
        </form>)
      }
      {/* {!totalLogic&&(<UpdateSuccess />   )} */}
    </>
  );
};

export default UpdateRep;
