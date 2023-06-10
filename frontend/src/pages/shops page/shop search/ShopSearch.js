import React, { useState} from "react";
import classes from "./ShopSearch.module.css";
import details from "../.././../details/Shops";
import { GoSearch } from "react-icons/go";
import ShopCard from "../Card/ShopCard";
import backgroundLogo from "../../../assets/Background vector group.png";
import {IoChevronBackOutline} from 'react-icons/io5';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { shopUpdateAction } from "../../../store";

const ShopSearch = (props) => {
  const [inputValue, setInputValue] = useState();
  const [suggestLogic, setSuggestLogicValue] = useState(false);
  const [displayDetails, setDisplayDetails] = useState("");
  const [displayLogic, setDisplayLogic] = useState(false);
  const informations = details;

  const navigation = useNavigate();
  const dispatch = useDispatch();

  const submitHandler = (event) => {
    event.preventDefault();
    setSuggestLogicValue(false);
    setDisplayLogic(true);

    for (let i = 0; i < informations.length; i++) {
      if (informations[i].id === inputValue.trim()) {
        setDisplayDetails(informations[i]);
      }
    }

    //  console.log(displayDetails);
  };

  const inputHandler = (event) => {
    setInputValue(event.target.value);
  };

  const inputBlurHandler = () => {
    if (inputValue !== null) {
      return;
    }
    setSuggestLogicValue(false);
  };

  const inputFocusHandler = () => {
    //  if(inputValue !==null){
    //     setSuggestLogicValue(true);
    //  }
    setSuggestLogicValue(true);
    setDisplayLogic(false);
  };

  const suggestDisplayHandler = (event) => {
    setInputValue(event.target.innerHTML);
    console.log("suggestDisplayHandler is working");
  };


  const updtBtnHandler = () =>{

      dispatch(shopUpdateAction.add(displayDetails))
      navigation("/admin/shops/shop_srch/update");
  }

  const dltBtnHandler = () =>{
    
  }
  const backButtonHandler = ()  =>{
    navigation("/admin/shops");
}

  return (
    <div className={`${classes.stock_search_main}  ${props.className} `}>
      <section className={classes.back_btn}>
          <button  onClick={backButtonHandler} > <IoChevronBackOutline className={classes.back_svg}/>  Back</button>
        </section>
      <form className={classes.repSearch_form} onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Search..."
          onChange={inputHandler}
          onBlur={inputBlurHandler}
          onFocus={inputFocusHandler}
          value={inputValue}
        />{" "}
        <button>
          <GoSearch className={classes.search_icon} />
        </button>
      </form>
      {suggestLogic && (
        <div className={classes.suggest_div}>
          <div className={classes.suggest_div_sub_div}>
            {informations
              .filter((shop) => shop.id.includes(inputValue))
              .map((list) => (
                <div
                  key={list.id}
                  onClick={suggestDisplayHandler}
                  className={classes.suggest_div_display}
                >
                  {" "}
                  {list.id}
                </div>
              ))}
          </div>
        </div>
      )}
      {console.log(displayLogic)}
      {displayLogic && (
        <div className={classes.logic_display_div}>
          {" "}
          <ShopCard
            className={classes.card_style}
            details={displayDetails}
          />
           <section><button className={classes.btn_updt} onClick={updtBtnHandler}  >Update</button>{" "}
           <button className={classes.btn_dlt}>Delete</button></section>{" "}
        </div>
      )}
      <img className={classes.background_img} src={backgroundLogo} alt="logo" />
    </div>
  );
};

export default ShopSearch;
