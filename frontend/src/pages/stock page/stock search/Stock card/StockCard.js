import React from "react";
import classes from "./stockCard.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { stocKupdateAction } from "../../../../store";

const StockCard = (props) => {
  const navigation = useNavigate();
  const dispatch = useDispatch();

  const updateBtnHandler = () =>{
         dispatch(stocKupdateAction.add({
          id:props.data.ID,
          date:props.data.listdate,
          salesRep:props.data.srep,
          vehicle:props.data.vehicle,
          route:props.data.route,
          itemList:props.data.itemlist
         }))
    navigation('/stock_keeper/stock/stock_update');
  }

  console.log("recieved data",{
    id:props.data.ID,
    date:props.data.listdate,
    salesRep:props.data.srep,
    vehicle:props.data.vehicle,
    route:props.data.route,
    itemList:props.data.itemlist
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
                  Item list<br></br> <span>{props.data.itemlist} </span>
                </td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
      <div className={classes.stockCard_sub2}>
        <div className={classes.stockCard_sub2_main_div}>
          <button className={classes.btn_cancel}>Cancel</button>
          <button className={classes.btn_update} onClick={updateBtnHandler} >Update</button>
          <button className={classes.btn_delete}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default StockCard;
