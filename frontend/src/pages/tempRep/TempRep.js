import React, { useEffect, useState } from "react";
import classes from "./TempRep.module.css";
import axios from "axios";
import NavbarAdmin from "../../ui/navbar/NavbarAdmin";
import RepCard from "./RepCard/RepCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import RepSearch from "./RepSearch/RepSearch";
const TempRep = () => {
  const [tempReps, setTempReps] = useState([]);
  const [enableValue, setEnableValue] = useState(false);

  useEffect(() => {
    const fetchAllTempReps = async () => {
      try {
        const res = await axios.get("http://localhost:8800/reps"); // fetching tempary rep details from backend
        setTempReps(res.data); // assign backend data to tempReps
      } catch (err) {
        console.log(err);
      }
    };

    fetchAllTempReps();
  }, []);
 
  console.log(tempReps);
  const buttonHandler = () => {
    setEnableValue(true);
  };

  return (
    <div className={classes.tempRep_main_div}>
      <NavbarAdmin
        className={classes.navBarStyle}
        buttonstyle={classes.searchButtonStyle}
      />
      {!enableValue && (
        <button className={classes.routing_button} onClick={buttonHandler}>
          View Reps
        </button>
      )}
      {!enableValue && (
        <div className={classes.tempReps_card_div}>
          <Swiper
            className={classes.tempReps_card_swiper}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={0}
            // slidesPerView={repValLength <3? repValLength : 3}
            slidesPerView={1}
            // navigation
            pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            // onSlideChange={() => console.log("slide change")}
            // onSwiper={(swiper) => console.log(swiper)}
          >
            {tempReps.map((tempR) => (
              <SwiperSlide
                className={classes.tempReps_card_swipeSlide}
                key={tempR.RID}
              >
                <RepCard
                  nic={tempR.NIC}
                  address={tempR.address}
                  email={tempR.email}
                  name={tempR.full_name}
                  mobile={tempR.phone}
                  rdate={tempR.registration_date}
                  rid={tempR.RID}
                  password={tempR.password}
                  
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
      {enableValue && <RepSearch />}
    </div>
  );
};

export default TempRep;
