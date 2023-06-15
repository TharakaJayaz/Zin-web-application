import React, { useState } from "react";
import classes from "./NewStock.module.css";
import logo from "../../../assets/zr red.png";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import axios from "axios";
import swal from 'sweetalert';
import { checkStockID } from "../../../functions/Validations";

const NewStock = () => {
  const navigation = useNavigate();

  const imgOnclickHandler = () => {
    navigation("/");
  };



  const [idInput,setIdInput] = useState("");
  const [dateInput,setDateInput] = useState("");
  const [saleRepInput,setSaleRepInput] = useState("");
  const [vehicleInput,setVehicleInput] = useState("");
  const [routeInput,setRouteInput] = useState("");
  const [itemListInput,setItemListInput] = useState("");
 

  const [iderr,setIDErr] = useState(false);
  const [dateerr,setDateErr] = useState(false);
  const [salesReperr,setSalesRepErr] = useState(false);
  const [vehicleerr,setVehicleErr] = useState(false);
  const [temListerr,setItemListErr] = useState(false);
  const [err,setErr] = useState(false);

  const idHandler = (event)  =>{
         setIdInput(event.target.value);
         if(!checkStockID(event.target.value)){
                setIDErr(true);
         }else{
          setIDErr(false);
         }

  };


  
  const dateHandler = (event)  =>{
         setDateInput(event.target.value);
         console.log("date val",event.target.value);
  }


  const saleRepHandler = (event)  =>{
       setSaleRepInput(event.target.value);
  }


  const vehicleHandler = (event)  =>{
      setVehicleInput(event.target.value);
  }

  const routeHandler = (event)  =>{
     setRouteInput(event.target.value);
  }
 
  const itemListHandler = (event)  =>{
  setItemListInput(event.target.value);
  }



  // const idSchema = yup.object().shape()({
  //     id:yup.string().required()
  // })



  const canselHandler = ()  =>{

  }

  const confirmHandler = async (event)  =>{
      event.preventDefault();
      // console.log({idInput,dateInput,saleRepInput,vehicleInput,routeInput,itemListInput});

      // const idValid = await idSchema.isValid({id:idInput});

      // console.log(idValid);

      try {
        // await axios.post("http://localhost:8800/reps", datas);
  
        await axios.post("http://localhost:8800/stocklist", {
          ID:idInput ,
          date: dateInput,
          srep: saleRepInput,
          vehicle: vehicleInput,
          route:routeInput ,
          itemlist: itemListInput,
         
        });
        // setErrStatus(true);
        // window.location.reload();
  
        console.log("add to sales rep table",{
          ID:idInput,
          
          date: dateInput,
          srep: saleRepInput,
          vehicle: vehicleInput,
          route:routeInput,
          itemlist: itemListInput,
         
        });
      } catch (err) {
        console.log("this is post error",err);
      }

      swal("Done!", "You added new stock list!", "success");
      window.location.reload();

  }
  return (
    <div className={classes.main_div}>
      <div className={classes.detail_div}>
        <section className={classes.detail_section1}>
          <img
            className={classes.zr_logo}
            onClick={imgOnclickHandler}
            src={logo}
            alt="zr red logo"
          />
        </section>
        <section className={classes.detail_section2}>
          <section className={classes.detail_section2_sub1}>
            New Stock List
          </section>
          <section className={classes.detail_section2_sub2}>
            <form>
              <table>
                <tbody>
                  <tr>
                    <td>
                      ID <input type="text"    onChange={idHandler}   value ={idInput} className={classes.form_inputs} />{" "}
                    </td>
                    <td>
                      Date <input type="date"  onChange={dateHandler}   className={classes.form_inputs} />{" "}
                    </td>
                    <td>
                      Sales Rep <input type="text"   onChange={saleRepHandler}   value={saleRepInput} className={classes.form_inputs} />{" "}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Vehicle <input type="text"   onChange={vehicleHandler} value={vehicleInput} className={classes.form_inputs} />{" "}
                    </td>
                    <td>
                      Route <input type="text"  onChange={routeHandler}   value={routeInput}  className={classes.form_inputs} />{" "}
                    </td>
                    <td>
                     Item List<input type="text"   onChange={itemListHandler} value={itemListInput}  className={classes.form_inputs} />{" "}
                    </td>
                  </tr>
                </tbody>
              </table>
              <section>  
              {iderr &&(  <span> Invalid ID</span>  )}
                
              </section>
              <section className={classes.detail_section2_sub3}>
            <button className={classes.sub3_btn_cancel}   onClick={canselHandler} >Cancel</button>
            <button className={classes.sub3_btn_confirm}  onClick={confirmHandler} >Confirm</button>
          </section>
            </form>
          </section>

        
        </section>
      </div>
    </div>
  );
};

export default NewStock;
