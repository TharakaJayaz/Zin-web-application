import React from "react";
import classes from "./ShopRequest.module.css";
import backgroundLogo from "../../../assets/Background vector group.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import ShopCard from "../Card/ShopCard";

import details from "../../../details/TempShops";
import {IoChevronBackOutline} from 'react-icons/io5';
import { useNavigate } from "react-router-dom";

const ShopRequest = () => {
  const navigation = useNavigate();

  const backButtonHandler = ()  =>{
             navigation("/admin/shops");
  }
  return (
    <div className={classes.main_div}>
      <div className={classes.sub_div}>
        <section className={classes.back_btn}>
          <button  onClick={backButtonHandler} > <IoChevronBackOutline className={classes.back_svg}/>  Back</button>
        </section>
        <div className={classes.detail_div}>
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
           

            {details.map((shop) => (

              <SwiperSlide key={shop.id}>
                <div className={classes.detail_subDiv} key={shop.id +shop.address} >
                  <section className={classes.sub_sec1} key={shop.id + shop.email}>
                    <ShopCard   details = {shop}    />
                  </section>
                  <section className={classes.sub_sec2}  key={shop.email +shop.sex}>
                    <button className={classes.btn_conf}  key={shop.id + shop.email} >Confirm</button>
                    <button className={classes.btn_del}  key={shop.id + shop.sex}>Delete</button>
                  </section>
                </div>
              </SwiperSlide>

            ))}
          </Swiper>
        </div>
      </div>

      <img className={classes.background_img} src={backgroundLogo} alt="logo" />
    </div>
  );
};

export default ShopRequest;
