import React from "react";
import classes from "./ItemListCard.module.css";
import { useNavigate } from "react-router-dom";

const ItemCArd = (props) => {
  const navigation = useNavigate();

  const updateBtnHandler = ()  =>{
       navigation("/stock_keeper/item_list/update");
  }
  return (
    <div className={`${classes.ItemCard_main} ${props.className}`}>
      <div className={classes.ItemCard_Info}>
        <section className={classes.ItemCard_sec1}>
          List ID:<span>{props.details.id}</span>
        </section>
        <section className={classes.ItemCard_sec2}>
          <table>
            <tbody>
              <tr className={classes.row_head}>
                <th>Item ID</th>
                <th>Description</th>
                <th>Price</th>
                <th>QTY</th>
              </tr>
              {console.log("details", props.details.items)}
              {props.details.items.map((item) => (
                <tr id={item.id}  className={classes.row_data} >
                  <td>{item.id}</td>
                  <td>{item.des}</td>
                  <td>RS {item.price}.00</td>
                  <td>{item.qty}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
        {/* <section className={classes.ItemCard_sec3}  ></section> */}
      </div>
      <div className={classes.ItemCard_btn}>
        <button className={classes.btn_update} onClick={updateBtnHandler} >Update</button>
        <button className={classes.btn_delete}>Delete</button>
      
      </div>
    </div>
  );
};

export default ItemCArd;
