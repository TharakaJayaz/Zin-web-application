import React, { useEffect, useState } from "react";
import classes from "./TempRep.module.css";
import axios from "axios";
import NavbarAdmin from "../../ui/navbar/NavbarAdmin";
import RepCard from "./RepCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { NavLink } from "react-router-dom";
const TempRep = () => {
  const [tempReps, setTempReps] = useState([]);
  const [routingValue, setroutingValue] = useState(false);
  // const [repValLength, setRepValLength] = useState();

  useEffect(() => {
    const fetchAllTempReps = async () => {
      try {
        const res = await axios.get("http://localhost:8800/reps");
        setTempReps(res.data);
        if (tempReps == null) {
          setroutingValue(true);
        }
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchAllTempReps();
    console.log(tempReps)
    // setRepValLength(tempReps.length);
  }, []);
  return (
    <div className={classes.tempRep_main_div}>
      <NavbarAdmin
        className={classes.navBarStyle}
        buttonstyle={classes.searchButtonStyle}
      />
      {!routingValue && (
        <div className={classes.tempReps_card_div}>
          <Swiper
            className={classes.tempReps_card_swiper}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={0}
            // slidesPerView={repValLength <3? repValLength : 3}
            slidesPerView = {2}
            // navigation
            pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            // onSlideChange={() => console.log("slide change")}
            // onSwiper={(swiper) => console.log(swiper)}
          >
            {tempReps.map((tempR) => (
              <SwiperSlide
                className={
                  classes.tempReps_card_swipeSlide
                }
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
                  password = {tempR.password}
                />
              </SwiperSlide>

              //  watch at 37:39
            ))}
          </Swiper>
        </div>
      )}
      {!routingValue && (
        <div className={classes.tempReps_route_button_div}>
          <NavLink to="view_reps">
            <button>View Reps</button>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default TempRep;
