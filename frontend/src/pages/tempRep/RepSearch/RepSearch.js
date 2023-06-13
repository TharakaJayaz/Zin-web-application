import React, { useEffect, useState } from "react";
import classes from "./RepSearch.module.css";
import { GoSearch } from "react-icons/go";
import RepSearchCard from "../RepSearchCard/RepSearchCard";
import axios from "axios";

const RepSearch = (props) => {
  const [reps, setReps] = useState();

  useEffect(() => {
    const fetchAllTempReps = async () => {
      try {
        const res = await axios.get("http://localhost:8800/reps_confirm"); // fetching tempary rep details from backend
        setReps(res.data); // assign backend data to tempReps
      } catch (err) {
        console.log(err);
      }
    };

    fetchAllTempReps();
    console.log("reps", reps);
  }, []);

  const details = reps;
  // const details = [
  //   {
  //     id: 1,
  //     name: "tharaka",
  //     gender:"male",
  //     mobile: "0718736614",
  //     bdate:"1999-01-02",
  //     nic: "992505729V",
  //     rdate: "2023-03-19",
  //     address: "192/16 bokotuwa junction,ethpitiya,walasmulla",
  //     email: "tha1@gmail.com",
  //   },
  //   {
  //     id: 2,
  //     name: "prabhath",
  //     gender:"male",
  //     mobile: "0779256365",
  //     bdate:"2000-01-02",
  //     nic: "992505730V",
  //     rdate: "2023-03-20",
  //     address: "162/4 nawala road,dehiwala",
  //     email: "pra1@gmail.com",
  //   },
  //   {
  //     id: 3,
  //     name: "tharaki",
  //     gender:"male",
  //     mobile: "0472245591",
  //     bdate:"1999-02-02",
  //     nic: "992505731V",
  //     rdate: "2023-03-29",
  //     address: "122/3 piliandala road,maharagama",
  //     email: "jay12@mail.com",
  //   },
  //   {
  //     id: 4,
  //     name: "tharuka",
  //     gender:"male",
  //     mobile: "0778776614",
  //     bdate:"1989-08-02",
  //     nic: "992505729V",
  //     rdate: "2023-02-9",
  //     address: "123/6,new road horana,mawanalla",
  //     email: "tharu12@gmail.com",
  //   },
  //   {
  //     id: 5,
  //     name: "janith",
  //     gender:"male",
  //     mobile: "0778736614",
  //     bdate:"1989-07-02",
  //     nic: "992505749V",
  //     rdate: "2023-01-9",
  //     address: "145/6 kumarasingha kuliyapitiya",
  //     email: "janith`@gmail.com",
  //   },
  //   {
  //     id: 6,
  //     name: "jayasingha",
  //     gender:"male",
  //     mobile: "0718736644",
  //     bdate:"1989-07-9",
  //     nic: "992505729V",
  //     rdate: "2023-01-9",
  //     address: "452/1 kuliyapitiya,kurunegala",
  //     email: "jay12@gmail.com",
  //   },
  // ];

  const [inputValue, setInputValue] = useState();
  //   const [displayId, setDisplayId] = useState("");
  const [displayDetails, setDisplayDetials] = useState({});
  const [displayLogic, setDisplayLogic] = useState(false);

  const [displayLogicTable, setDisplaylogicTable] = useState(false);

  const inputHandler = (event) => {
    setInputValue(event.target.value); // function to onclick on search button to get the enterd value of input
  };

  const submitHandler = (event) => {
    event.preventDefault();
    // console.log('entered name',inputValue)
    for (let i = 0; i < details.length; i++) {
      if (details[i].fullname === inputValue) {
        setDisplayDetials(details[i]); // set values of matching representative to display card
        setDisplayLogic(true);
        console.log(displayDetails);
        // console.log('id for entered value',details[i].id)
      }
    }
  };

  const inputBlurHandler = (event) => {
    setDisplaylogicTable(false);

    if (displayDetails !== " ") {
      setDisplayLogic(true);
    } // change logic value related to display detail table when lose focus on input element
  };

  const inputFocusHandler = (event) => {
    // cchange logic value related to display detail table when  focus on input element
    // if(!displayLogic){
    // setDisplaylogicTable(true)
    // }
    setDisplayLogic(false);
    setDisplaylogicTable(true);
  };

  // const tableDesicionHandler = ()  =>{
  //   if(inputBlurHandler && inputValue!==' '){
  //     setDisplaylogicTable(true);
  //   }
  // }

  const trHandler = (value) => {
    console.log("tr clicked");
  };

  return (
    <div className={`${classes.repSearch_main_div} ${props.classname}`}>
      <div className={classes.reSearch_second_div}>
        <form className={classes.repSearch_form} onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="Search..."
            onChange={inputHandler}
            onBlur={inputBlurHandler}
            onFocus={inputFocusHandler}
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
                .filter((user) =>
                  user.fullname.toLowerCase().includes(inputValue)
                ) // filter values and display in table
                .map((detial) => (
                  <tr
                    key={detial.RID}
                    className={classes.map_raw}
                    onClick={() => trHandler(detial.fullname)}
                  >
                    <td>{detial.fullname}</td>
                    <td>{detial.phoneNo}</td>
                    <td>{detial.NIC}</td>
                    <td>{detial.registrationdate}</td>
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
              name={displayDetails.fullname}
              mobile={displayDetails.phoneNo}
              nic={displayDetails.NIC}
              rdate={displayDetails.registrationdate}
              address={displayDetails.address}
              email={displayDetails.email}
              gender={displayDetails.type}
              bdate={displayDetails.registrationdate}
              id = {displayDetails.RID}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default RepSearch;
