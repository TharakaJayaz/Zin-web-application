import React, { useRef, useState } from "react";
import classes from "./StockSearch.module.css";
import { GoSearch } from "react-icons/go";
import details from "../../../details/StockList";
import StockCard from "./Stock card/StockCard";

const StockSearch = (props) => {
  const [inputValue, setInputValue] = useState();
  const [suggestLogic, setSuggestLogicValue] = useState(false);
  const [displayDetails, setDisplayDetails] = useState("");
  const [displayLogic,setDisplayLogic] = useState(false);
  const informations = details;

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
       {console.log(displayLogic)}
      {displayLogic &&(<div><StockCard data = {displayDetails}/> </div>  )}
    </div>
  );
};

export default StockSearch;
