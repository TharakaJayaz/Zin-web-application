import React from 'react';
import NavbarStok from '../../ui/navbar/NavbarStok';
import classes from './ItemList.module.css';
import { useNavigate } from 'react-router-dom';

const ItemList = () => {

   const navigation = useNavigate();

  const btnHandler1 = () => {
    navigation("/stock_keeper/item_list/search")
  }
  const btnHandler2 = () => {
    navigation("/stock_keeper/item_list/new")
  }



  return (
    <div className={classes.itemList_main}>
      <NavbarStok  className = {classes.nav_style} />

      <div className={classes.itemList_main_btn_div}>
          <div>
            <button onClick={btnHandler1} className={classes.btn_st}>
              Search Item list
            </button>
            <button onClick={btnHandler2} className={classes.btn_sl}>
              {" "}
              Add New Item List
            </button>
          </div>
        </div>
      
    </div>
  )
}

export default ItemList
