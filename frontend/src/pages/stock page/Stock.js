import React, { useState } from "react";
import NavbarStok from "../../ui/navbar/NavbarStok";
import classes from "./Stock.module.css";
import {IoChevronBackOutline} from 'react-icons/io5';
import StockSearch from "./stock search/StockSearch";
import NewStock from "./new stock/NewStock";

const Stock = () => {
  const [searchLogic, setSearchLogic] = useState(false);
  const [updateLogic, setUpdateLogic] = useState(false);
  const [buttonLogic, setButtonLogic] = useState(true);

  const btnHandler1 = () => {
    setButtonLogic(false);
    setSearchLogic(true);
  };

  const btnHandler2 = () => {
    setButtonLogic(false);
    setUpdateLogic(true);
  };

  const searchBackBtnHandler1 = () =>{
    setSearchLogic(false);
    setButtonLogic(true);
  }

  const searchBackBtnHandler2 = () =>{
    setUpdateLogic(false);
    setButtonLogic(true);
  }

  return (
    <div className={classes.stock_main}>
      <NavbarStok className={classes.nav_style} />
      {buttonLogic && (
        <div className={classes.stock_main_btn_div}>
          <div>
            <button onClick={btnHandler1} className={classes.btn_st}>
              Search Stock list
            </button>
            <button onClick={btnHandler2} className={classes.btn_sl}>
              {" "}
              Add New stock List
            </button>
          </div>
        </div>
      )}

      {searchLogic && (
        <div className={classes.serch_div}>
          <div className={classes.serch_div_btn_div}>
            <button onClick={searchBackBtnHandler1} > <IoChevronBackOutline className={classes.back_svg}/>   Back</button>
          </div>
          <StockSearch className = {classes.stock_search_style} />
        </div>
      )}
      {updateLogic && (
        <div className={classes.update_div}>

<div className={classes.serch_div_btn_div}>
            <button onClick={searchBackBtnHandler2} > <IoChevronBackOutline className={classes.back_svg}/>   Back</button>

          </div>
          <NewStock />
        </div>
      )}
    </div>
  );
};

export default Stock;
