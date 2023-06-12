import React, { useRef, useState } from "react";
import classes from "./RegisterRep.module.css";
import backgroundDesign from "../../assets/Background vector group.png";
import logo from "../../assets/zr red.png";
import { useNavigate } from "react-router-dom";
import ResitrationSuccess from "./ResitrationSuccess";
import axios from "axios";


const RegisterRep = () => {
  const ridInputRef = useRef();
  const nicInputRef = useRef();
  const registrationdatelInputRef = useRef();
  const fullnameInputRef = useRef();
  const passwordInputRef = useRef();
  const confirmPasswordInputRef = useRef();
  const emailInputRef = useRef();
  const phoneNoInputRef = useRef();
  const typeInputRef = useRef();
  const addressInputRef = useRef();

  //validation logic values
  const [validationLogic, setValidationLogic] = useState();
  const [passwordValidLogic, setPasswordValidLogic] = useState();
  const [passwordError, setpasswordError] = useState();
  const [confirmPasswordError, setConfirmPasswordError] = useState();
  const [emailValidLogic, setEmailValidLogic] = useState();
  const [nicValidLogic, setNicValidLogic] = useState();
  const [buttonLogic, setButtonLogic] = useState(false);

  const navigation = useNavigate();




  // const genderHandler = event =>{
  //   setGenderInput(event.target.value);

  // }



  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log("submitted");
    const inputValues = {
      rid: ridInputRef.current.value,
      nic: nicInputRef.current.value,
      registrationdate: registrationdatelInputRef.current.value,
      fullname: fullnameInputRef.current.value,
      password: passwordInputRef.current.value,
      email: emailInputRef.current.value,
      phonenumber: phoneNoInputRef.current.value,
      type: typeInputRef.current.value,
      address: addressInputRef.current.value,
    }

    if (inputValues.rid.trim() === '' || inputValues.nic.trim() === '' || inputValues.registrationdate.trim() === '' || inputValues.fullname.trim() === '' || inputValues.password.trim() === '' || inputValues.email.trim() === '' || inputValues.phonenumber.trim() === '' || inputValues.type.trim() === '' || inputValues.address.trim() === '') {
      setValidationLogic(false);
      console.log('setting true')
      return;

    } else {
      setValidationLogic(true)
    }

    // FORM VALIDATION
    // password validation

    setPasswordValidLogic(true);
    // if(inputValues.password!== inputValues.reenterpassword){
    //   setPasswordValidLogic(true);
    //   return;
    // }else{
    //   setPasswordValidLogic(false);
    // }

    // email validation

    const emailString = String(inputValues.email);
    if (!(emailString.includes('@'))) {
      setEmailValidLogic(false);
      console.log("email does not have @");
      return;
    } else {
      setEmailValidLogic(true)
    }

    //NIC validation
    const nicString = String(inputValues.nic);
    if (!(nicString.match('V') || nicString.includes('v'))) {
      setNicValidLogic(false);
      console.log("nic does not has v");
      return;
    } else {
      setNicValidLogic(true);
    }

    console.log(inputValues.rid, inputValues.nic, inputValues.registrationdate, inputValues.fullname, inputValues.password, inputValues.email, inputValues.phonenumber, inputValues.type, inputValues.address);

    console.log("validlogic", validationLogic, "email logic", emailValidLogic, "password logic", passwordValidLogic, "nic logic", nicValidLogic);

    if ((validationLogic === true) && (passwordValidLogic === true) && (emailValidLogic === true) && (nicValidLogic === true)) {
      console.log('validation all are correct');



      // sending data to backend

      const handleClick = async e => {
        try {
          await axios.post("http://localhost:8800/add", inputValues)
        } catch (err) {
          console.log(err);
        }
      }

      handleClick();
      setButtonLogic(true);
      // navigation("/");
    }
  };




  const handlepasswordchange = (event) => {
    setPasswordValidLogic(event.target.value);
    if (event.target.value.length < 8) {
      alert("password must have 8 characters")
    } else {
      setpasswordError(" ");
    }
  };


  const onBlurConfirmPassword = () => {
    if (passwordInputRef.current.value !== confirmPasswordInputRef.current.value) {
      setConfirmPasswordError("Does not match with Confirm password");
    } else {
      setConfirmPasswordError(null);
    }
  }




  const imgOnclickHandler = () => {
    navigation("/");
  }
  return (
    <div className={classes.main_div}>
      {!buttonLogic && (<div className={classes.secondry_div}>
        <img className={classes.zr_logo} onClick={imgOnclickHandler} src={logo} alt="zr red logo" />
        <form onSubmit={formSubmitHandler} className={classes.form_main}>
          <h2 className={classes.form_heading}>
            Sales Representative Registration
          </h2>
          <table className={classes.form_table}>
            <tbody>
              <tr className={classes.form_tr1}>
                <td>
                  rid <br></br>
                  <input ref={ridInputRef} type="text" className={classes.form_inputs} />
                </td>
                <td>
                  nic <br></br>
                  <input ref={nicInputRef} type="text" className={classes.form_inputs} />
                </td>
                <td>
                  registrationdate<br></br>
                  <input ref={registrationdatelInputRef} type="date" className={`${classes.form_inputs} ${emailValidLogic && (classes.err_style)}`} />
                </td>
              </tr>
              <tr className={classes.form_tr2}>
                <td>
                  fullname<br></br>
                  <input ref={fullnameInputRef} type="text" className={classes.form_inputs} />
                </td>
                <td>
                  Password <br></br>
                  <input ref={passwordInputRef} type="password" className={`${classes.form_inputs} ${passwordValidLogic && (classes.err_style)}`} />
                </td>
                <td>
                  Confirm Password <br></br>
                  <input ref={confirmPasswordInputRef} type="password" onBlur={onBlurConfirmPassword} className={`${classes.form_inputs} ${passwordValidLogic && (classes.err_style)}`} />
                  <label style={{ color: "red" }}>{confirmPasswordError}</label>
                </td>

                <td>
                  email <br></br>
                  <input ref={emailInputRef} type="email" className={`${classes.form_inputs} ${emailValidLogic && (classes.err_style)}`} />
                </td>
              </tr>
              <tr className={classes.form_tr3}>
                <td>
                  phonenumber <br></br>
                  <input ref={phoneNoInputRef} type="text" className={classes.form_inputs} />
                </td>

                <td>
                  type <br></br>
                  <input ref={typeInputRef} type="text" className={classes.form_inputs} />
                </td>

                <td>
                  address <br></br>
                  <input ref={addressInputRef} type="text" className={classes.form_inputs}
                  />
                </td>
              </tr>
            </tbody>
          </table>
          {validationLogic && <p className={classes.err_para}>All inputs should  be filled*</p>}

          <div className={classes.form_button_div}>
            <button type="submit" className={classes.form_cancel} >
              {" "}
              Cancel
            </button>
            <button className={classes.form_continue} onClick={formSubmitHandler}>Continue</button>
          </div>
        </form>
      </div>)}
      {buttonLogic && (<ResitrationSuccess style={classes.erro_message} />)}
      <img
        className={classes.img_back}
        src={backgroundDesign}
        alt="background vector"
      />
    </div>
  );
};

export default RegisterRep;
