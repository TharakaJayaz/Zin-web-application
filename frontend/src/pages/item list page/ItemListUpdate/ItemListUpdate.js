import React from "react";
import classes from "./ItemListUpdate.module.css";
import backgroundlogo from "../../../assets/Background vector group.png";
import logo from "../../../assets/zr red.png";
import { MdDelete } from "react-icons/md";

const ItemListUpdate = () => {
  return (
    <div className={classes.ItemListUpdate_main}>
      <div className={classes.ILU_details}>
        <div className={classes.ILU_details_subDiv}>
          <section className={classes.details_div_sec1}>
            <img src={logo} alt="zr logo" />
            <h1>Update Item List</h1>
          </section>
          <section className={classes.details_div_sec2}>
            <form>
              <table>
                <tbody>
                  <tr className={classes.row_head}>
                    <th>Item ID</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>QTY</th>
                    <th></th>
                  </tr>
                  <tr className={classes.row_data}>
                    <td>24A34</td>
                    <td>test item</td>
                    <td>200</td>
                    <td>50</td>
                    <td>
                      <MdDelete className={classes.delete_svg} />
                    </td>
                  </tr>
                </tbody>
              </table>
            </form>
          </section>

          <section className={classes.details_div_sec3}>
            <form>
              <table>
                <tbody>
                  <tr className={classes.row_head}>
                    <th>Item ID</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>QTY</th>
                  </tr>
                  <tr className={classes.row_data}>
                    <td>
                      <input type="text" className={classes.input} />
                    </td>
                    <td>
                      <input type="text" className={classes.input} />
                    </td>
                    <td>
                      <input type="text" className={classes.input} />
                    </td>
                    <td>
                      <input type="text" className={classes.input} />
                    </td>
                  </tr>
                </tbody>
              </table>
            </form>
            <section>
              <button>Add</button>
            </section>
          </section>
          <section className={classes.details_div_sec4}>
            <button>Update</button>
          </section>
        </div>
      </div>

      <img
        src={backgroundlogo}
        alt="background"
        className={classes.background_img}
      />
    </div>
  );
};

export default ItemListUpdate;
