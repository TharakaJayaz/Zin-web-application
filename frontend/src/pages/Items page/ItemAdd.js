import React, { useState, useEffect, useRef } from "react";
import classes from "./Item.module.css";
import logo from "../../assets/ZR.png";
import ResitrationSuccess from "../Rep_register_page/RegisterRep";
import { useNavigate } from 'react-router-dom';
import backgroundDesign from "../../assets/Background vector group.png";
import background from '../../assets/Background vector group.png';
import axios from "axios";

const ItemAdd = () => {
  const stockIDInputRef = useRef();
  const qtyInputRef = useRef();
  const productnameInputRef = useRef();
  const nameInputRef = useRef();
  const manufacturedateInputRef = useRef();
  const expirydateInputRef = useRef();
  const discountInputRef = useRef();
  const imageInputRef = useRef();


  //validation logic values
  const [validationLogic, setValidationLogic] = useState();
  const [passwordValidLogic, setPasswordValidLogic] = useState();
  const [passwordError, setpasswordError] = useState();
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
      stockID: stockIDInputRef.current.value,
      qty: qtyInputRef.current.value,
      productname: productnameInputRef.current.value,
      name: nameInputRef.current.value,
      manufacturedate: manufacturedateInputRef.current.value,
      expirydate: expirydateInputRef.current.value,
      discount: discountInputRef.current.value,
      price: 0,
      image: imageInputRef.current.files[0]
    }

    return axios.postForm("http://localhost:8800/stock", inputValues).then(doc => {
      console.log(doc);
    }).catch(err => {
      console.error(err);
    })

    // if (inputValues.stockID.trim() === '' || inputValues.qty.trim() === '' || inputValues.name.trim() === '' || inputValues.manufacturedate.trim() === '' || inputValues.expirydate.trim() === '' || inputValues.discount.trim() === '' || inputValues.image.trim() === '') {
    //   setValidationLogic(false);
    //   console.log('setting true')
    //   return;

    // } else {
    //   setValidationLogic(true)
    // }

    // // FORM VALIDATION
    // // password validation

    // setPasswordValidLogic(true);
    // if (inputValues.password !== inputValues.reenterpassword) {
    //   setPasswordValidLogic(true);
    //   return;
    // } else {
    //   setPasswordValidLogic(false);
    // }

    // //email validation

    // const emailString = String(inputValues.email);
    // if (!(emailString.includes('@'))) {
    //   setEmailValidLogic(false);
    //   console.log("email does not have @");
    //   return;
    // } else {
    //   setEmailValidLogic(true)
    // }

    // //NIC validation
    // const nicString = String(inputValues.nic);
    // if (!(nicString.match('V') || nicString.includes('v'))) {
    //   setNicValidLogic(false);
    //   console.log("nic does not has v");
    //   return;
    // } else {
    //   setNicValidLogic(true);
    // }

    // console.log(inputValues.rid, inputValues.nic, inputValues.registrationdate, inputValues.fullname, inputValues.password, inputValues.email, inputValues.phonenumber, inputValues.type, inputValues.address);

    // console.log("validlogic", validationLogic, "email logic", emailValidLogic, "password logic", passwordValidLogic, "nic logic", nicValidLogic);

    // if ((validationLogic === true) && (passwordValidLogic === true) && (emailValidLogic === true) && (nicValidLogic === true)) {
    //   console.log('validation all are correct');



    //   // sending data to backend

    //   const handleClick = async e => {
    //     e.preventDefault();
    //     try {
    //       await axios.post("http://localhost:8800/salesrep", inputValues)
    //     } catch (err) {
    //       console.log(err);
    //     }
    //   }

    //   handleClick();
    //   setButtonLogic(true);
    //   // navigation("/");
    // }
  };




  // const handlepasswordchange = (event) => {
  //   setPasswordValidLogic(event.target.value);
  //   if (event.target.value.length < 8) {
  //     alert("password must have 8 characters")
  //   } else {
  //     setpasswordError(" ");
  //   }
  // };







  const imgOnclickHandler = () => {
    navigation("/");
  }







  return (
    <div className={classes.main_div}>
      {!buttonLogic && (<div className={classes.secondry_div}>
        <img className={classes.zr_logo} onClick={imgOnclickHandler} src={logo} alt="zr red logo" />
        <form onSubmit={formSubmitHandler} className={classes.form_main}>
          <h2 className={classes.form_heading}>
            Add Items
          </h2>

          <table className={classes.form_table}>
            <tbody>
              <tr className={classes.form_tr1}>
                <td>
                  stockID <br></br>
                  <input ref={stockIDInputRef} type="text" className={classes.form_inputs} />
                </td>

                <td>qty
                  <br></br>
                  <input ref={qtyInputRef} type="text" className={classes.form_inputs} />
                </td>

                <td>
                  productname<br></br>
                  <input ref={productnameInputRef} type="text" className={classes.form_inputs} />
                </td>
              </tr>


              <tr className={classes.form_tr2}>
                <td>name
                  <br></br>
                  <input ref={nameInputRef} type="text" className={classes.form_inputs} />
                </td>


                <td>
                  manufacturedate<br></br>
                  <input ref={manufacturedateInputRef} type="date" className={classes.form_inputs} />
                </td>

                <td>
                  expirydate <br></br>
                  <input ref={expirydateInputRef} type="date" className={`${classes.form_inputs} ${nicValidLogic && (classes.err_style)}`} />
                </td>
              </tr>
              <tr className={classes.form_tr3}>
                <td>
                  discount <br></br>
                  <input ref={discountInputRef} type="text" className={classes.form_inputs} />
                </td>

                <td>
                  image <br></br>
                  <input ref={imageInputRef} type="file" className={classes.form_inputs} name="image" />
                </td>

              </tr>
            </tbody>
          </table>
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

export default ItemAdd;
