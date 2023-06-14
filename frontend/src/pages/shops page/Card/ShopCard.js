import React from "react";
import classes from "./ShopCard.module.css";

const ShopCard = (props) => {
  return (
    <div className={`${classes.card_main} ${props.className}`}>
      <section className={classes.card_sec1}>
        <h2>Shop ID : <span>{props.details.SID}</span> </h2>
      </section>
      <section className={classes.card_sec2}>
        <table>
          <tbody>
            <tr>
              <td>
                Shop name
                <span>{props.details.shop_name}</span>
              </td>

              <td>
                Owner name
                <span>{props.details.Fname}</span>
              </td>

              <td>
                NIC
                <span>{props.details.NIC}</span>
              </td>
            </tr>

            <tr>
              <td>
               Rcode
                <span>{props.details.Rcode}</span>
              </td>

              <td>
                Mobile
                <span>{props.details.phoneNo}</span>
              </td>

              <td>
                Location
                <span className={classes.location_styl}>{props.details.location}</span>
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
