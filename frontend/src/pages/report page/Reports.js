import React, { useState } from "react";
import classes from "./Report.module.css";
import NavbarAdmin from "../../ui/navbar/NavbarAdmin";
import { IoChevronBackOutline } from "react-icons/io5";
import details from "../../details/ReportDetails";
import { GoSearch } from "react-icons/go";
import ReportCard from "./ReportCard";

const Reports = (props) => {
  const [inputValue, setInputValue] = useState();
  const [suggestLogic, setSuggestLogicValue] = useState(false);
  const [displayDetails, setDisplayDetails] = useState("");
  const [displayLogic, setDisplayLogic] = useState(false);
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
    console.log("suggestDisplayHandler is working");
  };

  const updtBtnHandler = () => {};

  return (
    <div className={classes.main_div}>
      <NavbarAdmin />

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
          {<ReportCard className={classes.card_style}  details = {displayDetails}/>}
          {console.log("details to display", displayDetails)};
        </div>
      )}
    </div>
  );
};

export default Reports;
