import React from "react";
import classes from "./ShopCard.module.css";

const ShopCard = (props) => {
  return (
    <div className={`${classes.card_main} ${props.className}`}>
      <section className={classes.card_sec1}>
        <h2>Shop ID : <span>{props.details.id}</span> </h2>
      </section>
      <section className={classes.card_sec2}>
        <table>
          <tbody>
            <tr>
              <td>
                Shop name
                <span>{props.details.shopName}</span>
              </td>

              <td>
                Owner name
                <span>{props.details.ownerName}</span>
              </td>

              <td>
                NIC
                <span>{props.details.nic}</span>
              </td>
            </tr>

            <tr>
              <td>
                Sex
                <span>{props.details.sex}</span>
              </td>

              <td>
                Mobile
                <span>{props.details.mobile}</span>
              </td>

              <td>
                DOB
                <span>{props.details.dob}</span>
              </td>
            </tr>

            <tr>
              <td>
                Address
                <span>{props.details.address}</span>
              </td>

              <td>
                Email
                <span>{props.details.email}</span>
              </td>

              <td>
                <span></span>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default ShopCard;
