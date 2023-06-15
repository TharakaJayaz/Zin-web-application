import React, { useState } from "react";
import classes from "./stockCard.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { stocKupdateAction } from "../../../../store";
import axios from "axios";

const StockCard = (props) => {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const [deleteLogic,setDeleteLogic] = useState(false);

  const updateBtnHandler = () =>{
         dispatch(stocKupdateAction.add({
          id:props.data.ID,
          date:props.data.listdate,
          salesRep:props.data.srep,
          vehicle:props.data.vehicle,
          route:props.data.route,
          itemList:props.data.Itemlist
         }))
    navigation('/stock_keeper/stock/stock_update');
  };

 const yesBtnHandler = async()  =>{
  try {
    await axios.delete("http://localhost:8800/stocklist/" + props.data.ID);
    
   
  } catch (err) {
    console.log(err);
  }
  setDeleteLogic(false);
  window.location.reload();
 }

 const noBtnHandler = ()  =>{
    setDeleteLogic(false);
 }



  const deletebtnHandler = ()  =>{
       setDeleteLogic(true);
  }

  console.log("recieved data",{
    id:props.data.ID,
    date:props.data.listdate,
    salesRep:props.data.srep,
    vehicle:props.data.vehicle,
    route:props.data.route,
    itemList:props.data.Itemlist
   });
  return (
    <div className={classes.stockCard_main}>
      <div className={classes.stockCard_sub1}>
        <section className={classes.sub_sec1}>
          ID <span>{props.data.ID}</span>
        </section>
        <section className={classes.sub_sec2}>
          <table>
            <tbody>
              <tr>
                <td>
                  Date<br></br> <span>{props.data.listdate}</span>
                </td>
                <td>
                  Sales Rep<br></br> <span>{props.data.srep} </span>
                </td>
              </tr>
              <tr>
                <td>
                  Vehicle<br></br> <span>{props.data.vehicle} </span>
                </td>
                <td>
                  Route<br></br> <span>{props.data.route}</span>
                </td>
              </tr>
              <tr>
                <td>
                  Item list<br></br> <span>{props.data.Itemlist} </span>
                </td>
                <td></td>
              </tr>
            </tbody>
            { deleteLogic &&(<div className={classes.err_div}>
        <div className={classes.err_div_msg}>
          <section className={classes.err_div_msg_sec1}>Do You Want To delete This stock list ? </section>
          <section className={classes.err_div_msg_sec2}>
            <button className={classes.bt1} onClick={yesBtnHandler} >Yes</button>
            <button className={classes.bt2} onClick={noBtnHandler} >No</button>
          </section>
        </div>
      </div>)}
          </table>
        </section>
      </div>
      <div className={classes.stockCard_sub2}>
        <div className={classes.stockCard_sub2_main_div}>
          <button className={classes.btn_cancel}>Cancel</button>
          <button className={classes.btn_update} onClick={updateBtnHandler} >Update</button>
          <button className={classes.btn_delete} onClick={deletebtnHandler}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default StockCard;
