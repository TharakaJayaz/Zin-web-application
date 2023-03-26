import React, { useState } from "react";
import classes from "./RepSearch.module.css";
import { GoSearch } from "react-icons/go";
import RepSearchCard from "./RepSearchCard";

const RepSearch = (props) => {
  const details = [
    {
      id: 1,
      name: "tharaka",
      mobile: "0718736614",
      nic: "992505729V",
      rdate: "2023-3-9",
      address: "test address 192/16 bokotuwa junction,ethpitiya,walasmulla",
      email: "test@mail.com",
    },
    {
      id: 2,
      name: "prabhath",
      mobile: "0779256365",
      nic: "992505729V",
      rdate: "2023-3-9",
      address: "test address",
      email: "test@mail.com",
    },
    {
      id: 3,
      name: "jayarathna",
      mobile: "0472245591",
      nic: "992505729V",
      rdate: "2023-3-9",
      address: "test address",
      email: "test@mail.com",
    },
    {
      id: 4,
      name: "tharuka",
      mobile: "0718736614",
      nic: "992505729V",
      rdate: "2023-3-9",
      address: "test address",
      email: "test@mail.com",
    },
    {
      id: 5,
      name: "tharaka2",
      mobile: "0718736614",
      nic: "992505729V",
      rdate: "2023-3-9",
      address: "test address",
      email: "test@mail.com",
    },
    {
      id: 6,
      name: "tharaka22",
      mobile: "0718736614",
      nic: "992505729V",
      rdate: "2023-3-9",
      address: "test address",
      email: "test@mail.com",
    },
  ];

  const [inputValue, setInputValue] = useState();
  //   const [displayId, setDisplayId] = useState("");
  const [displayDetails, setDisplayDetials] = useState({});
  const [displayLogic, setDisplayLogic] = useState(false);

  const [displayLogicTable,setDisplaylogicTable] = useState(false);

  const inputHandler = (event) => {
    setInputValue(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    // console.log('entered name',inputValue)
    for (let i = 0; i < details.length; i++) {
      if (details[i].name === inputValue) {
        setDisplayDetials(details[i]);
        setDisplayLogic(true);
        console.log(displayDetails);
        // console.log('id for entered value',details[i].id)
      }
    }
  };

  const inputBlurHandler = event =>{
           setDisplaylogicTable(false)
  };

  const inputFocusHandler = event =>{
    if(!displayLogic){
    setDisplaylogicTable(true)
    }
  }

  // const tableDesicionHandler = ()  =>{
  //   if(inputBlurHandler && inputValue!==' '){
  //     setDisplaylogicTable(true);
  //   }
  // }

  

  return (
    <div className={`${classes.repSearch_main_div} ${props.classname}`}>
      <div className={classes.reSearch_second_div}>
        <form className={classes.repSearch_form} onSubmit={submitHandler}>
          <input type="text" placeholder="Search..." onChange={inputHandler} 
            onBlur = {inputBlurHandler}
            onFocus = {inputFocusHandler}
          />{" "}
          <button>
            <GoSearch className={classes.search_icon} />
          </button>
        </form>
        {displayLogicTable && (
          <table className={classes.repSearch_table}>
            <tbody>
              <tr>
                <th className={classes.heading1}>Full name</th>
                <th className={classes.heading2}>Mobile</th>
                <th className={classes.heading3}>NIC</th>
                <th className={classes.heading4}>Reg Date</th>
                <th className={classes.heading5}>Address</th>
                <th className={classes.heading6}>Email</th>
              </tr>
              {details
                .filter((user) => user.name.toLowerCase().includes(inputValue))
                .map((detial) => (
                  <tr key={detial.id} className={classes.map_raw}>
                    <td>{detial.name}</td>
                    <td>{detial.mobile}</td>
                    <td>{detial.nic}</td>
                    <td>{detial.rdate}</td>
                    <td>{detial.address}</td>
                    <td>{detial.email}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        )}
        <div className={classes.repSearch_item_display}>
          {displayLogic && (
            <RepSearchCard
              name={displayDetails.name}
              mobile={displayDetails.mobile}
              nic={displayDetails.nic}
              rdate={displayDetails.rdate}
              address={displayDetails.address}
              email={displayDetails.email}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default RepSearch;
