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

  const [idValue, setIdValue] = useState(currentDetails.id);

  const [dateValue, setdateValue] = useState(currentDetails.date);
  const [salesRepValue, setsalesRepValue] = useState(currentDetails.salesRep);
  const [vehicleValue, setvehicleValue] = useState(currentDetails.vehicle);
  const [routeValue, setrouteValue] = useState(currentDetails.route);
  const [itemListValue, setitemListValue] = useState(currentDetails.itemList);

  const idInputHandler = (event) => {
    setIdValue(event.target.value);
  };

  const dateInputHandler = (event) => {
    setdateValue(event.target.value);
  };

  const salesRepInputHandler = (event) => {
    setsalesRepValue(event.target.value);
  };

  const vehicleInputHandler = (event) => {
    setvehicleValue(event.target.value);
  };

  const routeInputHandler = (event) => {
    setrouteValue(event.target.value);
  };

  const itemListInputHandler = (event) => {
    setitemListValue(event.target.value);
  };

  const logoHandler = () => {
    navigation("/");
  };

  // handling function for update button



  const updateHandler = (event) => {
    event.preventDefault();
    console.log("clicked");

    setCurrntDetailsForInputs({
      id: idValue,
      date: dateValue,
      salesRep: salesRepValue,
      vehicle: vehicleValue,
      route: routeValue,
      itemList: itemListValue,
    });
    console.log("value after update", currntDetailsForInputs);
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
                        value={idValue}
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
                        value={dateValue}
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
                        value={salesRepValue}
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
                        value={vehicleValue}
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
                        value={routeValue}
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
                        value={itemListValue}
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
