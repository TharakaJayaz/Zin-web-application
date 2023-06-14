import React, { useEffect, useRef, useState } from "react";
import classes from "./StockSearch.module.css";
import { GoSearch } from "react-icons/go";
import details from "../../../details/StockList";
import StockCard from "./Stock card/StockCard";
import axios from "axios";

const StockSearch = (props) => {
  const [inputValue, setInputValue] = useState();
  const [suggestLogic, setSuggestLogicValue] = useState(false);
  const [displayDetails, setDisplayDetails] = useState("");
  const [displayLogic,setDisplayLogic] = useState(false);
  

 const [stockList,setStockList] = useState("");
  useEffect(() => {
    const fetchAllStockDetails = async () => {
      try {
        const res = await axios.get("http://localhost:8800/stocklist"); // fetching stocklist details from backend
        setStockList(res.data); // assign backend data to tempReps
        console.log("values from backend",res.data)
      } catch (err) {
        console.log(err);
      }
    };

    fetchAllStockDetails();
    console.log("stock list from backend", stockList);
  }, []);

  const informations = stockList;

  const submitHandler = (event) => {
    event.preventDefault();
    setSuggestLogicValue(false);
    setDisplayLogic(true);

    for (let i = 0; i < informations.length; i++) {
      if (informations[i].id === inputValue.trim()) {
        setDisplayDetails(informations[i]);
        console.log("setting display details",informations[i])
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

  return (
    <div className={`${classes.stock_search_main}  ${props.className} `}>
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
              .filter((listItem) => listItem.ID.includes(inputValue))
              .map((list) => (
                <div
                  key={list.ID}
                  onClick={suggestDisplayHandler}
                  className={classes.suggest_div_display}
                >
                  {" "}
                  {list.ID}
                </div>
              ))}
          </div>
        </div>
      )}
       {console.log("data for card",displayDetails)}
      {displayLogic &&(<div><StockCard data = {displayDetails}/> </div>  )}
    </div>
  );
};

export default StockSearch;
