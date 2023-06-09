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
          id: props.data.id,
          date:props.data.date,
          salesRep:props.data.saleRep,
          vehicle:props.data.vNo,
          route:"sample route",
          itemList:props.data.itemLId
         }))
    navigation('/stock_keeper/stock/stock_update');
  }
  return (
    <div className={classes.stockCard_main}>
      <div className={classes.stockCard_sub1}>
        <section className={classes.sub_sec1}>
          ID <span>{props.data.id}</span>
        </section>
        <section className={classes.sub_sec2}>
          <table>
            <tbody>
              <tr>
                <td>
                  Date<br></br> <span>{props.data.date}</span>
                </td>
                <td>
                  Sales Rep<br></br> <span>{props.data.saleRep} </span>
                </td>
              </tr>
              <tr>
                <td>
                  Vehicle<br></br> <span>{props.data.vNo} </span>
                </td>
                <td>
                  Route<br></br> <span>Sample Route</span>
                </td>
              </tr>
              <tr>
                <td>
                  Item list<br></br> <span>{props.data.itemLId} </span>
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
