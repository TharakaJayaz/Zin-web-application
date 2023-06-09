import React, { useRef, useState } from "react";
import classes from "./ItemSearch.module.css";
import NavbarStok from "../../../ui/navbar/NavbarStok";
import details from "../../../details/ItemList";
import { GoSearch } from "react-icons/go";
import { IoChevronBackOutline } from "react-icons/io5";
import ItemListCard from "./ItemCard/ItemListCard";
import { useNavigate } from "react-router-dom";

const ItemSearch = () => {
  const [inputValue, setInputValue] = useState();
  const [suggestLogic, setSuggestLogicValue] = useState(false);
  const [displayDetails, setDisplayDetails] = useState("");
  const [displayLogic, setDisplayLogic] = useState(false);

  const informations = details;

  const navigation = useNavigate();

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

const backBtnHandler =() =>{
    navigation("/stock_keeper/item_list");
}
    
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
  };

  return (
    <div className={classes.itemSearch_main}>
      <NavbarStok className={classes.nav_style} />
      <div className={classes.content_div}>
        <button className={classes.back_btn} 
         onClick={backBtnHandler}
        >
          {" "}
          <IoChevronBackOutline className={classes.back_svg} />
          Back
        </button>
        <section className={classes.input_sec}>
          <form onSubmit={submitHandler}>
            <input
              type="text"
              placeholder="Search..."
              onChange={inputHandler}
              onBlur={inputBlurHandler}
              onFocus={inputFocusHandler}
              value={inputValue}
              className={classes.item_search}
            />
            <button>
              <GoSearch className={classes.search_icon} />
            </button>
          </form>
        </section>

        {suggestLogic && (
          <div className={classes.suggest_div}>
            <div className={classes.suggest_div_sub_div}>
              {informations
                .filter((listItem) => listItem.id.includes(inputValue))
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
        {console.log("display details",displayDetails)}
        {displayLogic && <ItemListCard   className = {classes.card_style}    id = {displayDetails.id}  details = {displayDetails}/>}
        
      </div>
    </div>
  );
};

export default ItemSearch;
