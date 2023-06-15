import React, { useRef, useState } from "react";
import classes from "./RegisterRep.module.css";
import backgroundDesign from "../../assets/Background vector group.png";
import logo from "../../assets/zr red.png";
import { useNavigate } from "react-router-dom";
import ResitrationSuccess from "./ResitrationSuccess";
import axios from "axios";
import { Base64 } from 'js-base64';

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

  const [selectedGender, setSelectedGender] = useState("");

  //validation logic values
  const [validationLogic, setValidationLogic] = useState();
  const [passwordValidLogic, setPasswordValidLogic] = useState();
  const [passwordError, setpasswordError] = useState();
  const [confirmPasswordError, setConfirmPasswordError] = useState();
  const [emailValidLogic, setEmailValidLogic] = useState();
  const [nicValidLogic, setNicValidLogic] = useState();
  const [TPValidLogic, setTPValidLogic] = useState();
  const [buttonLogic, setButtonLogic] = useState(false);
  const [errorMessage, setErrorMessage] = useState();

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
      type: selectedGender,
      address: addressInputRef.current.value,
    }



    if (inputValues.rid.trim() === '' || inputValues.nic.trim() === '' || inputValues.registrationdate.trim() === '' || inputValues.fullname.trim() === '' || inputValues.password.trim() === '' || inputValues.email.trim() === '' || inputValues.phonenumber.trim() === '' || inputValues.type.trim() === '' || inputValues.address.trim() === '' || (selectedGender === '')) {
      setErrorMessage("All inputs should  be filled*");
      setValidationLogic(true);
      console.log('setting true')
      return;

    } else {
      setValidationLogic(false)
    }

    // FORM VALIDATION
    // password validation

    // setPasswordValidLogic(true);
    // if(inputValues.password!== inputValues.reenterpassword){
    //   setPasswordValidLogic(true);
    //   return;
    // }else{
    //   setPasswordValidLogic(false);
    // }


    //NIC validation
    const nicString = String(inputValues.nic);
    if ((/^\d{12}$/.test(nicString))) {
      setNicValidLogic(false);
    } else if (nicString.length === 10) {
      if (!(nicString.charAt(9) === "V" || nicString.charAt(9) === "v")) {
        setNicValidLogic(true);
        setErrorMessage("NIC does not has v");
        setValidationLogic(true);
        console.log("NIC does not has v");
      } else {
        setNicValidLogic(false);
      }
    } else {
      setErrorMessage("Invalid NIC");
      setValidationLogic(true);
      setNicValidLogic(true);
      console.log("Invalid NIC");
    }

    // email validation
    const emailString = String(inputValues.email);
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailString)) {
      setErrorMessage("Invalid E-mail");
      setValidationLogic(true);
      setEmailValidLogic(true);
      console.log("Invalid E-mail");
      return;
    } else {
      setEmailValidLogic(false);
    }

    //Phone number validation
    const mobString = String(inputValues.phonenumber);
    if (!(/^\d{10}$/.test(mobString))) {
      setErrorMessage("Phone number must have 10 digits");
      setValidationLogic(true);
      setTPValidLogic(true);
      console.log("Phone number must have 10 digits");
      return;
    } else {
      setTPValidLogic(false);
    }

    console.log(inputValues.rid, inputValues.nic, inputValues.registrationdate, inputValues.fullname, inputValues.password, inputValues.email, inputValues.phonenumber, inputValues.type, inputValues.address);

    console.log("validlogic", validationLogic, "email logic", emailValidLogic, "password logic", passwordValidLogic, "nic logic", nicValidLogic);

    if ((validationLogic === false) && (passwordValidLogic === false) && (emailValidLogic === false) && (nicValidLogic === false) && (TPValidLogic === false)) {
      console.log('validation all are correct');



      // sending data to backend

      const handleClick = async e => {
        var encode = Base64.encode(inputValues.password);
        inputValues.password = encode;
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
    if (passwordInputRef.current.value === confirmPasswordInputRef.current.value) {
      setConfirmPasswordError("");
      setPasswordValidLogic(false);
    } else {
      setConfirmPasswordError("Does not match with Confirm password");
      setPasswordValidLogic(true);

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
                  RID: <br></br>
                  <input ref={ridInputRef} type="text" className={classes.form_inputs} />
                </td>
                <td>
                  NIC: <br></br>
                  <input ref={nicInputRef} type="text" className={`${classes.form_inputs} ${nicValidLogic && (classes.err_style)}`} />
                </td>
                <td>
                  Registrationdate:<br></br>
                  <input ref={registrationdatelInputRef} type="date" className={`${classes.form_inputs} ${emailValidLogic && (classes.err_style)}`} />
                </td>
              </tr>
              <tr className={classes.form_tr2}>
                <td>
                  Fullname:<br></br>
                  <input ref={fullnameInputRef} type="text" className={classes.form_inputs} />
                </td>
                <td>
                  Password: <br></br>
                  <input ref={passwordInputRef} type="password" className={`${classes.form_inputs} ${passwordValidLogic && (classes.err_style)}`} />
                </td>
                <td>
                  Confirm Password: <br></br>
                  <input ref={confirmPasswordInputRef} type="password" onBlur={onBlurConfirmPassword} className={`${classes.form_inputs} ${passwordValidLogic && (classes.err_style)}`} />
                  <label style={{ color: "red" }}>{confirmPasswordError}</label>
                </td>

                <td>
                  Email: <br></br>
                  <input ref={emailInputRef} type="email" className={`${classes.form_inputs} ${emailValidLogic && (classes.err_style)}`} />
                </td>
              </tr>
              <tr className={classes.form_tr3}>
                <td>
                  Phonenumber: <br></br>
                  <input ref={phoneNoInputRef} type="text" className={`${classes.form_inputs} ${TPValidLogic && (classes.err_style)}`} />
                </td>




                <td>
                  Gender: <br />
                  {/* <select ref={typeInputRef} className={classes.form_inputs} onChange={(e) => typeInputRef.current.value = e.target.value}>
                    <option value="">Select gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select> */}
                  {/* <br/> */}
                  <div style={{ marginTop: 10 }}>
                    <input type="radio" value="Male" name="gender" style={{ marginLeft: 20, }} onChange={() => setSelectedGender("Male")} /><span style={{ color: "#000", fontSize: 15 }}>Male</span>
                    <input type="radio" value="Male" name="gender" style={{ marginLeft: 20, }} onChange={() => setSelectedGender("Female")} /><span style={{ color: "#000", fontSize: 15 }}>Female</span>
                  </div>
                </td>
                {/* <td>
                  Gender: <br></br>
                  <input ref={typeInputRef} type="text" className={classes.form_inputs} />
                </td> */}

                <td>
                  Address: <br></br>
                  <input ref={addressInputRef} type="text" className={classes.form_inputs}
                  />
                </td>
              </tr>
            </tbody>
          </table>
          {validationLogic && <p className={classes.err_para}>{errorMessage}</p>}

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
/*const ShopRegistration =()=>{
    const SIDinputRef = useRef();
    const emailinputRef = useRef();
    const shop_nameinputRef = useRef();
    const locationinputRef = useRef();
    const  FnameinputRef = useRef();
    const LnameinputRef = useRef();
    const phoneNoinputRef = useRef();
    const NICinputRef = useRef();
    const RcodeinputRef = useRef();
    
    const [emailValidLogic, setEmailValidLogic] = useState();
    const [nicValidLogic, setNicValidLogic] = useState();
    const[buttonLogic,setButtonLogic] = useState(false);
    
    const navigation = useNavigate();*/