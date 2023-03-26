import React, { useRef, useState } from "react";
import classes from "./RegisterRep.module.css";
import backgroundDesign from "../../assets/Background vector group.png";
import logo from "../../assets/zr red.png";
import { useNavigate } from "react-router-dom";
import ResitrationSuccess from "./ResitrationSuccess";

const RegisterRep = () => {
  const nameInputRef = useRef();
  const mobileInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const cPasswordInputRef = useRef();
  const nicInputRef = useRef();
  const addressInputRef = useRef();
  const dobInputRef = useRef();
  const documentInputRef = useRef();
  const dateInputRef = useRef();
  const [genderInput,setGenderInput] = useState();

  //validation logic values
  const [validationLogic,setValidationLogic] = useState();
  const [passwordValidLogic,setPasswordValidLogic] = useState();
  const [emailValidLogic,setEmailValidLogic] = useState();
  const [nicValidLogic,setNicValidLogic] = useState();
  const[buttonLogic,setButtonLogic] = useState(false);

  const navigation = useNavigate();




  const genderHandler = event =>{
    setGenderInput(event.target.value);
   
  }
  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log("submitted");
    const inputValues ={
      nameValue:nameInputRef.current.value,
      mobileValue:mobileInputRef.current.value,
      emailValue:emailInputRef.current.value,
      passwordValue:passwordInputRef.current.value,
      cpasswordValue:cPasswordInputRef.current.value,
      nicValue:nicInputRef.current.value,
      adressValue:addressInputRef.current.value,
      dobValue:dobInputRef.current.value,
      documentValue:documentInputRef.current.value,
      dateValue:dateInputRef.current.value,
      genderValue:genderInput
    }

    if(inputValues.nameValue.trim()===''|| inputValues.mobileValue.trim()===''||inputValues.emailValue.trim()===''|| inputValues.passwordValue.trim()===''||inputValues.cpasswordValue.trim()===''|| inputValues.nicValue.trim()===''||inputValues.adressValue.trim()===''|| inputValues.dobValue===''|| inputValues.dateValue===''){
      setValidationLogic(true);
      console.log('setting true')
      return;
      
    }else{
      setValidationLogic(false)
    }

      // FORM VALIDATION

      


  // password validation

  if(inputValues.passwordValue!== inputValues.cpasswordValue){
    setPasswordValidLogic(true);
    return;
  }else{
    setPasswordValidLogic(false);
  }

  // email validation

  const emailString = String(inputValues.emailValue);


 if(!(emailString.includes('@'))){
  setEmailValidLogic(true);
  console.log("email does not have @");
  return;
 }else{
  setEmailValidLogic(false)
 }

 //NIC validation
 const nicString = String(inputValues.nicValue);
 if(!(nicString.match('V')||nicString.includes('v'))){
  setNicValidLogic(true);
  console.log("nic does not has v");
  return;
 }else{
  setNicValidLogic(false);
 }



    console.log(inputValues.nameValue,inputValues.mobileValue,inputValues.emailValue,inputValues.passwordValue,inputValues.cpasswordValue,inputValues.nicValue,inputValues.adressValue,inputValues.dobValue,inputValues.documentValue,inputValues.dateValue,inputValues.genderValue);

    console.log("validlogic",validationLogic,"email logic",emailValidLogic,"password logic",passwordValidLogic,"nic logic",nicValidLogic);

    if(!((validationLogic ===true)||(passwordValidLogic ===true)||(emailValidLogic ===true)||(nicValidLogic ===true))){
      console.log('validation all are correct');
      setButtonLogic(true);
      // navigation("/");
    }
  };

  





 

  return (
    <div className={classes.main_div}>
      {!buttonLogic &&(<div className={classes.secondry_div}>
        <img src={logo} alt="zr red logo" />
        <form onSubmit={formSubmitHandler} className={classes.form_main}>
          <h2 className={classes.form_heading}>
            Sales Representative Registration
          </h2>
          <table className={classes.form_table}>
            <tbody>
              <tr className={classes.form_tr1}>
                <td>
                  Name <br></br>
                  <input
                    ref={nameInputRef}
                    type="text"
                    className={classes.form_inputs}
                  />
                </td>

                <td>
                  Mobile <br></br>
                  <input
                    ref={mobileInputRef}
                    type="text"
                    className={classes.form_inputs}
                  />
                </td>

                <td>
                  Email <br></br>
                  <input
                    ref={emailInputRef}
                    type="text"
                    className={`${classes.form_inputs} ${emailValidLogic &&(classes.err_style)}`}
                  />
                </td>
              </tr>
              <tr className={classes.form_tr2}>
                <td>
                  Password <br></br>
                  <input
                    ref={passwordInputRef}
                    type="password"
                    className={classes.form_inputs}
                  />
                </td>

                <td>
                  Confirm Password <br></br>
                  <input
                    ref={cPasswordInputRef}
                    type="password"
                    className={`${classes.form_inputs} ${passwordValidLogic &&(classes.err_style)}`}
                  />
                </td>

                <td>
                  NIC <br></br>
                  <input
                    ref={nicInputRef}
                    type="text"
                    className={`${classes.form_inputs} ${nicValidLogic &&(classes.err_style)}`}
                  />
                </td>
              </tr>
              <tr className={classes.form_tr3}>
                <td>
                  Address <br></br>
                  <input
                    ref={addressInputRef}
                    type="text"
                    className={classes.form_inputs}
                  />
                </td>

                <td>
                  DOB <br></br>
                  <input
                    ref={dobInputRef}
                    type="date"
                    className={classes.form_inputs}
                  />
                </td>

                <td>
                  Document <br></br>
                  <input
                    ref={documentInputRef}
                    type="file"
                    className={classes.form_inputs}
                  />
                </td>
              </tr>
              <tr className={classes.form_tr4}>
                <td>
                  Date <br></br>
                  <input
                    ref={dateInputRef}
                    type="date"
                    className={classes.form_inputs}
                  />
                </td>

                <td>
                  Sex <br></br>
                  {/* <div className={classes.td_div}><input   value="option1"   type = 'radio' name ="name" className={classes.form_input_radio} /> <span>Male </span> </div>
                <div className={classes.td_div}><input   value="option2" checked type = 'radio' name ="name" className={classes.form_input_radio} /> <span>Female</span>  </div> */}
                  <select className={classes.form_select}  id="gender" name="gender" form="gender" onChange={genderHandler}>
                  <option value=" "> </option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option> 
                  </select>
                </td>

                {/* <td>
                empty   <br ></br>
                <input type = 'text' />
              </td> */}
              </tr>
            </tbody>
          </table>
          {validationLogic && <p className={classes.err_para}>All inputs should  be filled*</p>}
          <div className={classes.form_button_div}>
            <button type="submit" className={classes.form_cancel} >
              {" "}
              Cancel
            </button>
            <button className={classes.form_continue}>Continue</button>
          </div>
          
        </form>
      
      </div>  )}
   {buttonLogic&&(<ResitrationSuccess  style ={classes.erro_message} />  )}
      <img
        className={classes.img_back}
        src={backgroundDesign}
        alt="background vector"
      />
    </div>
  );
};

export default RegisterRep;
