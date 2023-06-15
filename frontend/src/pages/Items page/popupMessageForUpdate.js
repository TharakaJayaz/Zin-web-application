
import React, { useState, useEffect, useRef } from "react";
import classes from './popupMessage.module.css';
import { IoCheckmarkDoneCircleOutline } from 'react-icons/io5';

import backgroundDesign from "../../assets/Background vector group.png";
import logo from "../../assets/zr red.png";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const PopupMessageForUpdate = ({ onClose, data }) => {
    const [showPopup, setShowPopup] = useState(true);
    const [showpopupdate, setshowpopupupdate] = useState(false);
    const inputStyle = {
        padding: '10px'
    }

    console.log(data);
    const stockIDInputRef = useRef();
    const qtyInputRef = useRef();
    const productnameInputRef = useRef(data.productname);
    const nameInputRef = useRef(data.name);
    const priceInputRef = useRef(data.price);
    const manufacturedateInputRef = useRef(data.manufacturedate);
    const expirydateInputRef = useRef(data.expirydate);
    const discountInputRef = useRef(data.discount);
    const imageInputRef = useRef(data.image);


    useEffect(() => {
        stockIDInputRef.current.value = data.stockID;
        qtyInputRef.current.value = data.qty;
        productnameInputRef.current.value = data.productname;
        nameInputRef.current.value = data.name;
        priceInputRef.current.value = data.price;
        manufacturedateInputRef.current.value = data.manufacturedate;
        expirydateInputRef.current.value = data.expirydate;
        discountInputRef.current.value = data.discount;
        // imageInputRef.current.value = data.image;
    }, [data]);

    const [buttonLogic, setButtonLogic] = useState(false);

    const navigation = useNavigate();

    const reloadPage = () => {
        window.location.reload();
    };

    const buttonHandler = async (event) => {
        const itemData = {
            id: data,
        };

        try {
            const response = await axios.post('http://localhost:8800/updateItem', itemData);
            if (response.data === 'successfull') {
                window.location.reload();
            }
        } catch (err) {
            console.log(err);
        }
    };

    const formSubmitHandler = async (event) => {
        event.preventDefault();
        console.log(stockIDInputRef.current.value, qtyInputRef.current.value, productnameInputRef.current.value, nameInputRef.current.value,imageInputRef.current.value);
        debugger;
        const itemData = {
            stockID: stockIDInputRef.current.value,
            qty: qtyInputRef.current.value,
            productname: productnameInputRef.current.value,
            name: nameInputRef.current.value,
            price: priceInputRef.current.value,
            manufacturedate: manufacturedateInputRef.current.value,
            expirydate: expirydateInputRef.current.value,
            discount: discountInputRef.current.value,
            image: imageInputRef.current.value,
        };
        try {
            const response = await axios.post('http://localhost:8800/updateItem', itemData);
            debugger;
            if (response.status === 200) {
                window.location.reload();
            }
        } catch (err) {
            console.log(err);
        }

    };

    return (
        <div className="popup" style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div
                className="popup-content"
                style={{
                    padding: '20px',
                    backgroundColor: '#fff',
                    width: "679px",
                    height: "289px",
                    borderRadius: '5px',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <form onSubmit={formSubmitHandler} className={classes.form_main} >
                    <h2 className={classes.form_heading}>
                        Update Item
                    </h2>
                    <table className={classes.form_table}>
                        <tbody>
                            <tr style={{ margin: '50px' }} className={classes.form_tr1}>
                                <td>
                                    StockID <br></br>
                                    <input ref={stockIDInputRef} type="text" style={inputStyle} className={classes.form_inputs} readOnly />
                                </td>
                                <td>
                                    Qty <br></br>
                                    <input ref={qtyInputRef} type="text" style={inputStyle} className={classes.form_inputs} />
                                </td>
                                <td>
                                    productname<br></br>
                                    <input ref={productnameInputRef} type="text" style={inputStyle} className={classes.form_inputs} />
                                </td>
                            </tr>
                            <tr style={{ margin: '50px' }} className={classes.form_tr2}>
                                <td>
                                    Name<br></br>
                                    <input ref={nameInputRef} type="text" style={inputStyle} className={classes.form_inputs} />
                                </td>
                                <td>
                                    price <br></br>
                                    <input ref={priceInputRef} type="text" style={inputStyle} className={classes.form_inputs} />
                                </td>

                                <td>
                                    manufacturedate<br></br>
                                    <input ref={manufacturedateInputRef} type="date" style={inputStyle} className={classes.form_inputs} />
                                </td>
                            </tr>
                            <tr style={{ margin: '50px' }} className={classes.form_tr3}>
                                <td>
                                    expirydate <br></br>
                                    <input ref={expirydateInputRef} type="date" style={inputStyle} className={classes.form_inputs} />
                                </td>

                                <td>
                                    discount <br></br>
                                    <input ref={discountInputRef} type="text" style={inputStyle} className={classes.form_inputs} />
                                </td>

                                <td>
                                    Image <br></br>
                                    <input ref={imageInputRef} type="file" style={inputStyle} className={classes.form_inputs}
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    {/* {validationLogic && <p className={classes.err_para}>All inputs should  be filled*</p>} */}

                    <div className={classes.form_button_div}>
                        <button type="submit" style={{ textAlign: "center" }} className={classes.form_cancel} onClick={onClose} >
                            {" "}
                            Cancel
                        </button>
                        <button className={classes.form_continue} onClick={formSubmitHandler}>Continue</button>
                    </div>
                </form>
            </div>
        </div>
    )

    // const RegisterRep = () => {
    //     const stockIDInputRef = useRef();
    //     const qtyInputRef = useRef();
    //     const productnameInputRef = useRef();
    //     const nameInputRef = useRef();
    //     const priceInputRef = useRef();
    //     const manufacturedateInputRef = useRef();
    //     const expirydateInputRef = useRef();
    //     const discountInputRef = useRef();
    //     const imageInputRef = useRef();

    //     //validation logic values
    //     // const [validationLogic, setValidationLogic] = useState();
    //     // const [passwordValidLogic, setPasswordValidLogic] = useState();
    //     // const [passwordError, setpasswordError] = useState();
    //     // const [emailValidLogic, setEmailValidLogic] = useState();
    //     // const [nicValidLogic, setNicValidLogic] = useState();
    //     const [buttonLogic, setButtonLogic] = useState(false);

    //     const navigation = useNavigate();

    //     const formSubmitHandler = (event) => {
    //         event.preventDefault();
    //         console.log("submitted");
    //         const inputValues = {
    //             stockID: stockIDInputRef.current.value,
    //             qty: qtyInputRef.current.value,
    //             productname: productnameInputRef.current.value,
    //             name: nameInputRef.current.value,
    //             price: priceInputRef.current.value,
    //             manufacturedate: manufacturedateInputRef.current.value,
    //             expirydate: expirydateInputRef.current.value,
    //             discount: discountInputRef.current.value,
    //             image: imageInputRef.current.value,
    //         }

    //         if (inputValues.stockID.trim() === '' || inputValues.qty.trim() === '' || inputValues.productname.trim() === '' || inputValues.name.trim() === '' || inputValues.price.trim() === '' || inputValues.manufacturedate.trim() === '' || inputValues.expirydate.trim() === '' || inputValues.discount.trim() === '' || inputValues.image.trim() === '') {


    //             // FORM VALIDATION
    //             // password validation

    //             //   setPasswordValidLogic(true);
    //             // if(inputValues.password!== inputValues.reenterpassword){
    //             //   setPasswordValidLogic(true);
    //             //   return;
    //             // }else{
    //             //   setPasswordValidLogic(false);
    //             // }

    //             // email validation

    //             //const emailString = String(inputValues.email);
    //             //   if (!(emailString.includes('@'))) {
    //             //     setEmailValidLogic(false);
    //             //     console.log("email does not have @");
    //             //     return;
    //             //   } else {
    //             //     setEmailValidLogic(true)
    //             //   }

    //             //NIC validation
    //             //   const nicString = String(inputValues.nic);
    //             //   if (!(nicString.match('V') || nicString.includes('v'))) {
    //             //     setNicValidLogic(false);
    //             //     console.log("nic does not has v");
    //             //     return;
    //             //   } else {
    //             //     setNicValidLogic(true);
    //             //   }

    //             console.log(inputValues.stockID, inputValues.qty, inputValues.productname, inputValues.name, inputValues.price, inputValues.manufacturedate, inputValues.expirydate, inputValues.discount, inputValues.image);

    //             //   console.log("validlogic", validationLogic, "email logic", emailValidLogic, "password logic", passwordValidLogic, "nic logic", nicValidLogic);

    //             //   if ((validationLogic === true) && (passwordValidLogic === true) && (emailValidLogic === true) && (nicValidLogic === true)) 
    //             //   {
    //             //     console.log('validation all are correct');



    //             //     // sending data to backend

    //             //     const handleClick = async e => {
    //             //       try {
    //             //         await axios.post("http://localhost:8800/add", inputValues)
    //             //       } catch (err) {
    //             //         console.log(err);
    //             //       }
    //             //     }

    //             //     handleClick();
    //             //     setButtonLogic(true);
    //             //     // navigation("/");
    //             //   }
    //         };

    //         // const handlepasswordchange = (event) => {
    //         //   setPasswordValidLogic(event.target.value);
    //         //   if (event.target.value.length < 8) {
    //         //     alert("password must have 8 characters")
    //         //   } else {
    //         //     setpasswordError(" ");
    //         //   }
    //         // };

    //         const imgOnclickHandler = () => {
    //             navigation("/");
    //         }
    //         return (
    //             <div className={classes.main_div}>
    //                 {!buttonLogic && (<div className={classes.secondry_div}>
    //                     <img className={classes.zr_logo} onClick={imgOnclickHandler} src={logo} alt="zr red logo" />
    // <form onSubmit={formSubmitHandler} className={classes.form_main}>
    //     <h2 className={classes.form_heading}>
    //         Update Item
    //     </h2>
    //     <table className={classes.form_table}>
    //         <tbody>
    //             <tr className={classes.form_tr1}>
    //                 <td>
    //                     StockID <br></br>
    //                     <input ref={stockIDInputRef} type="text" className={classes.form_inputs} />
    //                 </td>
    //                 <td>
    //                     Qty <br></br>
    //                     <input ref={qtyInputRef} type="text" className={classes.form_inputs} />
    //                 </td>
    //                 <td>
    //                     productname<br></br>
    //                     <input ref={productnameInputRef} type="text" className={classes.form_inputs} />
    //                 </td>
    //             </tr>
    //             <tr className={classes.form_tr2}>
    //                 <td>
    //                     Name<br></br>
    //                     <input ref={nameInputRef} type="text" className={classes.form_inputs} />
    //                 </td>
    //                 <td>
    //                     price <br></br>
    //                     <input ref={priceInputRef} type="password" className={classes.form_inputs} />
    //                 </td>

    //                 <td>
    //                     manufacturedate<br></br>
    //                     <input ref={manufacturedateInputRef} type="date" className={classes.form_inputs} />
    //                 </td>
    //             </tr>
    //             <tr className={classes.form_tr3}>
    //                 <td>
    //                     expirydate <br></br>
    //                     <input ref={expirydateInputRef} type="date" className={classes.form_inputs} />
    //                 </td>

    //                 <td>
    //                     discount <br></br>
    //                     <input ref={discountInputRef} type="text" className={classes.form_inputs} />
    //                 </td>

    //                 <td>
    //                     Image <br></br>
    //                     <input ref={imageInputRef} type="file" className={classes.form_inputs}
    //                     />
    //                 </td>
    //             </tr>
    //         </tbody>
    //     </table>
    //     {/* {validationLogic && <p className={classes.err_para}>All inputs should  be filled*</p>} */}

    //     <div className={classes.form_button_div}>
    //         <button type="submit" className={classes.form_cancel} >
    //             {" "}
    //             Cancel
    //         </button>
    //         <button className={classes.form_continue} onClick={formSubmitHandler}>Continue</button>
    //     </div>
    // </form>
    //                 </div>)}
    //                 {/* {buttonLogic && (<ResitrationSuccess style={classes.erro_message} />)} */}
    //                 <img
    //                     className={classes.img_back}
    //                     src={backgroundDesign}
    //                     alt="background vector"
    //                 />
    //             </div>
    //         );
    //     };
    // }
};
export default PopupMessageForUpdate;
