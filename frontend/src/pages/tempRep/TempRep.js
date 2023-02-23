import React, { useEffect, useState } from "react";
import classes from "./TempRep.module.css";
import axios from "axios";
import NavbarAdmin from "../../ui/navbar/NavbarAdmin";
import RepCard from "./RepCard";

const TempRep = () => {
  const [tempReps, setTempReps] = useState([]);

  useEffect(() => {
    const fetchAllTempReps = async () => {
      try {
        const res = await axios.get("http://localhost:8800/temp_reps");
        setTempReps(res.data);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchAllTempReps();
  }, []);
  return (
    <div>
      {/* {tempReps.map ((tempR) =>(
        <div key = {tempR.RID}>
            <h4>{tempR.NIC}</h4>
            <h4>{tempR.RID}</h4>
            <h4>{tempR.address}</h4>
            <h4>{tempR.email}</h4>
            <h4>{tempR.full_name}</h4>
            <h4>{tempR.password}</h4>
            <h4>{tempR.phone}</h4>
            <h4>{tempR.registration_date}</h4>

            
        </div>
       ))} */}
     <NavbarAdmin  />
     <div className={classes.tempReps_card_div}>
     <RepCard/>
     <RepCard/>
     <RepCard/>
     
     </div>
    </div>
  );
};

export default TempRep;
