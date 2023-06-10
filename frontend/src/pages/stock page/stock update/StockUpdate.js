import React, { useState } from "react";
import classes from "./StockUpdate.module.css";
import backgroundLogo from "../../../assets/Background vector group.png";
import logo from "../../../assets/zr red.png";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const StockUpdate = () => {
  const navigation = useNavigate();

  // get values from redux toolkit state

  const currentDetails = useSelector((state) => state.stockUpdate);

  // set values from toolkit to useState to update inputs

  const [currntDetailsForInputs, setCurrntDetailsForInputs] = useState({
    id: currentDetails.id,
    date: currentDetails.date,
    salesRep: currentDetails.salesRep,
    vehicle: currentDetails.vehicle,
    route: currentDetails.route,
    itemList: currentDetails.itemList,
  });

  //create onChange handling functions for each input

  const idInputHandler = (event) => {
    setCurrntDetailsForInputs({ id: event.target.value });
  };

  const dateInputHandler = (event) => {
    setCurrntDetailsForInputs({ date: event.target.value });
  };

  const salesRepInputHandler = (event) => {
    setCurrntDetailsForInputs({ salesRep: event.target.value });
  };

  const vehicleInputHandler = (event) => {
    setCurrntDetailsForInputs({ vehicle: event.target.value });
  };

  const routeInputHandler = (event) => {
    setCurrntDetailsForInputs({ route: event.target.value });
  };

  const itemListInputHandler = (event) => {
    setCurrntDetailsForInputs({ itemList: event.target.value });
  };

  const logoHandler = () => {
    navigation("/");
  };

  // handling function for update button

  const updateHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className={classes.update_main_div}>
      <div className={classes.main_div_sub_div1}>
        <div className={classes.wrapper_div}>
          <section className={classes.sub_sec1}>
            <img src={logo} alt="logo" onClick={logoHandler} />
          </section>
          <section className={classes.sub_sec2}>Update Stock List</section>
          <section className={classes.sub_sec3}>
            <form>
              <table>
                <tbody>
                  <tr>
                    <td className={classes.td_left}>ID</td>
                    <td className={classes.td_right}>
                      <input
                        type="text"
                        onChange={idInputHandler}
                        className={classes.form_inputs}
                        value={currntDetailsForInputs.id}
                      />
                    </td>
                  </tr>

                  <tr>
                    <td className={classes.td_left}>Date</td>
                    <td className={classes.td_right}>
                      <input
                        type="text"
                        onChange={dateInputHandler}
                        className={classes.form_inputs}
                        value={currntDetailsForInputs.date}
                      />
                    </td>
                  </tr>

                  <tr>
                    <td className={classes.td_left}>Sales Rep</td>
                    <td className={classes.td_right}>
                      <input
                        type="text"
                        onChange={salesRepInputHandler}
                        className={classes.form_inputs}
                        value={currntDetailsForInputs.salesRep}
                      />
                    </td>
                  </tr>

                  <tr>
                    <td className={classes.td_left}>Vehicle</td>
                    <td className={classes.td_right}>
                      <input
                        type="text"
                        onChange={vehicleInputHandler}
                        className={classes.form_inputs}
                        value={currntDetailsForInputs.vehicle}
                      />
                    </td>
                  </tr>

                  <tr>
                    <td className={classes.td_left}>Route</td>
                    <td className={classes.td_right}>
                      <input
                        type="text"
                        onChange={routeInputHandler}
                        className={classes.form_inputs}
                        value={currntDetailsForInputs.route}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className={classes.td_left}>Item List</td>
                    <td className={classes.td_right}>
                      <input
                        type="text"
                        onChange={itemListInputHandler}
                        className={classes.form_inputs}
                        value={currntDetailsForInputs.itemList}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
              <section className={classes.sub_sec4}>
                <button onClick={updateHandler}>Update</button>
              </section>
            </form>
          </section>
        </div>
        <img
          src={backgroundLogo}
          alt="background"
          className={classes.background_img}
        />
      </div>
    </div>
  );
};

export default StockUpdate;
