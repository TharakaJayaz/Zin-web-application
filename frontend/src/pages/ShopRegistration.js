
import classes from "./ShopRegistration.css";
import backgroundDesign from "../assets/Background vector group.png";
import React, { useRef, useState } from 'react';
import axios from 'axios';
import logo from "../assets/zr red.png";
import { useNavigate } from "react-router-dom";

// Rest of the code...


const ShopRegistration = () => {
  const SIDInputRef = useRef();
  const emailInputRef = useRef();
  const shopNameInputRef = useRef();
  const locationInputRef = useRef();
  const addressInputRef = useRef();
  const firstNameInputRef = useRef();
  const lastNameInputRef = useRef();
  const phoneNoInputRef = useRef();
  const NICInputRef = useRef();
  const RcodeInputRef = useRef();

  const [validationLogic, setValidationLogic] = useState(false);
  const [buttonLogic, setButtonLogic] = useState(false);

  const navigation = useNavigate();

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const inputValues = {
      SID: SIDInputRef.current.value,
      email: emailInputRef.current.value,
      shop_name: shopNameInputRef.current.value,
      location: locationInputRef.current.value,
      address: addressInputRef.current.value,
      Fname: firstNameInputRef.current.value,
      Lname: lastNameInputRef.current.value,
      phoneNo: phoneNoInputRef.current.value,
      NIC: NICInputRef.current.value,
      Rcode: RcodeInputRef.current.value,
    };

    // if (
    //   Object.values(inputValues).some((value) => value.trim() === '')
    // ) 
    if (inputValues.SID.trim() === '' || inputValues.email.trim() === '' || inputValues.shop_name.trim() === '' || inputValues.location.trim() === '' || inputValues.address.trim() === '' || inputValues.Fname.trim() === '' || inputValues.Lname.trim() === '' || inputValues.phoneNo.trim() === '' || inputValues.NIC.trim() === ''||
    inputValues.Rcode.trim()=='')
    
    
    {
      setValidationLogic(true);
      return;
    }

    setValidationLogic(false);

    // Sending data to backend
    const handleClick = async () => {
      try {
        await axios.get("http://localhost:8800/shopadd", inputValues);
        setButtonLogic(true);
      } catch (err) {
        console.log(err);
      }
    };

    handleClick();
  };
  const imgOnclickHandler = () => {
    navigation("/");
  }
  return (
    <div className={classes.main_div}>
      {!buttonLogic ?   (<div className={classes.secondry_div}>

            <img className={classes.zr_logo} onClick={imgOnclickHandler} src={logo} alt="zr red logo" />
          <form onSubmit={formSubmitHandler} className={classes.form_main}>
           <h2 className={classes.form_heading}>Shop Registration.</h2> 
            <table className={classes.form_table}>
                <tbody>
                    <tr className={classes.form_tr1}>
                        <td>
                        SID:<br></br>
              <input ref={SIDInputRef} type="text" className={classes.form_inputs} />
                        </td>
                        <td>
                        Email:
              <input ref={emailInputRef} type="email" className={classes.form_inputs}/>
                        </td>
                        <td>
                        Shop Name:
              <input ref={shopNameInputRef} type="text" className={classes.form_inputs}/>
                        </td>
                    </tr>
                    <tr className={classes.form_tr1}>
                        <td>
                        Location:
              <input ref={locationInputRef} type="text" className={classes.form_inputs} />
                        </td>
                        <td>
                        Address:
              <input ref={addressInputRef} type="text" className={classes.form_inputs} />
                        </td>
                        <td>
                        First Name:
              <input ref={firstNameInputRef} type="text" className={classes.form_inputs}/>
                        </td>
                    </tr>
                    <tr className={classes.form_tr1}>
                        <td>
                        Last Name:
              <input ref={lastNameInputRef} type="text" className={classes.form_inputs} />
                        </td>
                        <td>
                        Phone No:
              <input ref={phoneNoInputRef} type="text" className={classes.form_inputs} />
                        </td>
                        <td>
                        NIC:
              <input ref={NICInputRef} type="text" className={classes.form_inputs}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                        Rcode:
              <input ref={RcodeInputRef} type="text" className={classes.form_inputs}/>
                        </td>
                    </tr>
            
                </tbody>
            </table>
        
            {/* <button type="submit">Register Shop</button> */}
          </form>
          {validationLogic && (
            <p className={classes.err_para}>All inputs should be filled*</p>)}
             <div className={classes.form_button_div}>
            <button type="submit" className={classes.form_cancel} >
              {" "}
              Cancel
            </button>
            <button className={classes.form_continue} onClick={formSubmitHandler}>Register</button>
          </div>
        </div>
      ) : (
        <p>Shop Registration Successful!</p>
      )}
      <img
    className={classes.img_back}
    src={backgroundDesign}
    alt="background vector"/>
    </div>
    
  );
};

export default ShopRegistration;
