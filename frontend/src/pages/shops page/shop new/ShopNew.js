import React, { useState } from "react";
import classes from "./ShopNew.module.css";
import backgroundLogo from "../../../assets/Background vector group.png";
import logo from "../../../assets/zr red.png";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import axios from "axios";

const ShopNew = () => {
  const navigation = useNavigate();

  const logoHandler = () => {
    navigation("/admin/shops");
  };

  const [currntDetailsForInputs, setCurrntDetailsForInputs] = useState({
    SID:"",
    shop_name: "",
    Fname: "",
    Lname: "",
    location: "",
    phoneNo: "",
    email: "",
    NIC:"",
    Rcode:"",
    address: ""

    // id:currentDetails.id,
    // shopName: currentDetails.shopName,
    // ownerName: currentDetails.ownerName,
    // nic: currentDetails.nic,
    // mobile: currentDetails.mobile,
    // email: currentDetails.email,
    // dob:currentDetails.dob,
    // address:currentDetails.address,
    // sex: currentDetails.sex
  });


  const [shopNamevalue,setshopNameValue]  = useState();
  const [idvalue,setidValue]  = useState();
  const [ownerNamevalue,setownerNameValue]  = useState();
  const [locationvalue,setlocationValue]  = useState();
  const [mobilevalue,setmobileValue]  = useState();
  const [emailvalue,setemailValue]  = useState();
  const [nicvalue,setnicValue]  = useState();
  const [rcodevalue,setrcodeValue]  = useState();
  const [addvalue,setaddValue]  = useState();


  const shopIdInputHandler = (event) => {
      setidValue(event.target.value);
  };

  const shopNameInputHandler = (event) => {
    setshopNameValue(event.target.value);
  };

  const ownerNameInputHandler = (event) => {
    setownerNameValue(event.target.value);
  };

  const locationInputHandler = (event) => {
    setlocationValue(event.target.value);
  };

  const addressInputHandler = (event) => {
    setaddValue(event.target.value);
  };

  const mobileInputHandler = (event) => {
    setmobileValue(event.target.value);
  };

  const nicInputHandler = (event) => {
    setnicValue(event.target.value);
  };

  const rcodeInputHandler = (event) => {
    setrcodeValue(event.target.value);
  };

  const emailInputHandler = (event) => {
    setemailValue(event.target.value);
  };

  const addHandler = async (event) => {
  
    event.preventDefault();

    setCurrntDetailsForInputs({
         
      SID:idvalue,
      shop_name: shopNamevalue,
      Fname: ownerNamevalue.split(" ")[0],
      Lname: ownerNamevalue.split(" ")[1],
      location: locationvalue,
      phoneNo: mobilevalue,
      email: emailvalue,
      NIC:nicvalue,
      Rcode:rcodevalue,
      address: addvalue
      });
      
      // setidValue("");
      // setshopNameValue("");
      // setownerNameValue("");
      // setlocationValue("");
      // setaddValue("");
      // setmobileValue("");
      // setnicValue("");
      // setrcodeValue("");
      // setemailValue("");
      // swal("sucessfully added");


      // console.log("final details",{
         
      //   SID:idvalue,
      //   shop_name: shopNamevalue,
      //   Fname: ownerNamevalue.split(" ")[0],
      //   Lname: ownerNamevalue.split(" ")[1],
      //   location: locationvalue,
      //   phoneNo: mobilevalue,
      //   email: emailvalue,
      //   NIC:nicvalue,
      //   Rcode:rcodevalue,
      //   address: addvalue
      //   });

      try {
        // await axios.post("http://localhost:8800/reps", datas);
  
        await axios.post("http://localhost:8800/shopconfirm", {
         
        SID:idvalue,
        shop_name: shopNamevalue,
        Fname: ownerNamevalue.split(" ")[0],
        Lname: ownerNamevalue.split(" ")[1],
        location: locationvalue,
        phoneNo: mobilevalue,
        email: emailvalue,
        NIC:nicvalue,
        Rcode:rcodevalue,
        address: addvalue
        });
        // setErrStatus(true);
        // window.location.reload();
  
        console.log("add to shop confirm table");
      } catch (err) {
        console.log(err);
      }

      swal("Done!", "You add shop details!", "success");
        setidValue("");
      setshopNameValue("");
      setownerNameValue("");
      setlocationValue("");
      setaddValue("");
      setmobileValue("");
      setnicValue("");
      setrcodeValue("");
      setemailValue("");
      navigation("/admin/shops");
      



      



  };

  return (
    <div className={classes.main_div}>
      <div className={classes.main_div_sub_div1}>
        
        <div className={classes.wrapper_div}>
          <section className={classes.sub_sec1}>
            <img src={logo} alt="logo" onClick={logoHandler} />
          </section>
          <section className={classes.sub_sec2}>Enter New Shop</section>
          <section className={classes.sub_sec3}>
            <form>
              <table>
                <tbody>
                  <tr>
                    <td className={classes.td_left}>Shop ID</td>
                    <td className={classes.td_right}>
                      <input
                        type="text"
                        onChange={shopIdInputHandler}
                        className={classes.form_inputs}
                        value={idvalue}
                      />
                    </td>
                  </tr>
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

                  <tr>
                    <td className={classes.td_left}>Location</td>
                    <td className={classes.td_right}>
                      <input
                        type="text"
                        onChange={locationInputHandler}
                        className={classes.form_inputs}
                        value={locationvalue}
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
                        value={addvalue}
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
                    <td className={classes.td_left}>Rcode</td>
                    <td className={classes.td_right}>
                      <input
                        type="text"
                        onChange={rcodeInputHandler}
                        className={classes.form_inputs}
                        value={rcodevalue}
                      />
                    </td>
                  </tr>

                  {/* <tr>
                    <td className={classes.td_left}>Email</td>
                    <td className={classes.td_right}>
                      <input
                        type="text"
                        onChange={emailInputHandler}
                        className={classes.form_inputs}
                        value={emailvalue}
                      />
                    </td>
                  </tr> */}
                </tbody>
              </table>
              <section className={classes.sub_sec4}>
                <button onClick={addHandler}>Add</button>
                
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

export default ShopNew;
