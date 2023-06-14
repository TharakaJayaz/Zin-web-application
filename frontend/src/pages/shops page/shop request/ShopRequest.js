import React, { useEffect, useState } from "react";
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
import { IoChevronBackOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ShopRequest = () => {
  const [shops, setShops] = useState([]);
  useEffect(() => {
    const fetchAllTempShops = async () => {
      try {
        const res = await axios.get("http://localhost:8800/shoptemp"); // fetching tempary rep details from backend
        setShops(res.data); // assign backend data to shops
        console.log("data from backend", res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchAllTempShops();
  }, []);

  // const details = shops;
  console.log("details from back end", shops);
  const navigation = useNavigate();

  const backButtonHandler = () => {
    navigation("/admin/shops");
  };
 
  const [confirmLogic,setConfirmLogic] = useState(false);
  const [deleteLogic,setDeleteLogic] = useState(false);

  const [confirmValue,setConfirmValue]  = useState();
  const [deleteValue,setDeleteValue]  = useState();

  const confirmHandler = (e)  =>{
    console.log("confrim shop",e)
    setConfirmValue(e);
          setConfirmLogic(true);
  }

  const deleteHandler = (e)   =>{
    setDeleteValue(e);
       setDeleteLogic(true);
  }

  const yesBtnHandler = async ()  =>{
        if(confirmLogic){
          try {
            // await axios.post("http://localhost:8800/reps", datas);
      
            await axios.post("http://localhost:8800/shopconfirm", confirmValue);
            // setErrStatus(true);
            // window.location.reload();
      
            console.log("add to shop confirm table");
          } catch (err) {
            console.log(err);
          }

          try {
            await axios.delete("http://localhost:8800/shopconfirm/" + confirmValue.SID);
            
           
          } catch (err) {
            console.log(err);
          }


          setConfirmLogic(false);


        }else{

          try {
            await axios.delete("http://localhost:8800/shopconfirm/" + deleteValue.SID);
            
           
          } catch (err) {
            console.log(err);
          }


           setDeleteLogic(false);
        }
        window.location.reload();

  }

  const noBtnHandler = ()  =>{
           if(confirmLogic){
             setConfirmLogic(false);
           }else{
             setDeleteLogic(false);
           }
  }

  console.log("shops",shops);
  return (
    <div className={classes.main_div}>
      <div className={classes.sub_div}>
        <section className={classes.back_btn}>
          <button onClick={backButtonHandler}>
            {" "}
            <IoChevronBackOutline className={classes.back_svg} /> Back
          </button>
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
            {shops.map((shop) => (
              <SwiperSlide key={shop.SID}>
                <div className={classes.detail_subDiv} key={shop.shop_name}>
                  {console.log("wiriting details", shop)};
                  <section className={classes.sub_sec1} key={shop.SID + "sec"}>
                    <ShopCard details={shop} key={shop.SID + "SC"} />
                  </section>
                  <section className={classes.sub_sec2} key={shop.email}>
                    <button className={classes.btn_conf} key={shop.NIC}  onClick={() =>confirmHandler(shop)}>
                      Confirm
                    </button>
                    <button className={classes.btn_del} key={shop.SID + "A1"} onClick={() =>deleteHandler(shop)} >
                      Delete
                    </button>
                  </section>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        { confirmLogic &&(<div className={classes.err_div}>
        <div className={classes.err_div_msg}>
          <section className={classes.err_div_msg_sec1}>Do You Want To Confirm This Item ? </section>
          <section className={classes.err_div_msg_sec2}>
            <button className={classes.bt1} onClick={yesBtnHandler} >Yes</button>
            <button className={classes.bt2} onClick={noBtnHandler} >No</button>
          </section>
        </div>
      </div>)}

      { deleteLogic &&(<div className={classes.err_div}>
        <div className={classes.err_div_msg}>
          <section className={classes.err_div_msg_sec1}>Do You Want To Delete This Item ? </section>
          <section className={classes.err_div_msg_sec2}>
            <button className={classes.bt1} onClick={yesBtnHandler} >Yes</button>
            <button className={classes.bt2} onClick={noBtnHandler} >No</button>
          </section>
        </div>
      </div>)}

      </div>

      <img className={classes.background_img} src={backgroundLogo} alt="logo" />
    </div>
  );
};

export default ShopRequest;
