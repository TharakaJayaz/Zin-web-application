import React from 'react'
import NavbarAdmin from '../../ui/navbar/NavbarAdmin';
import classes from './Shops.module.css';
import { useNavigate } from 'react-router-dom';

const Shops = () => {
  const navigation = useNavigate();


  const ReqBtnHandler = ()  =>{
      navigation("/admin/shops/shop_req");
  }

  const SerchBtnHandler = ()  =>{
     navigation("/admin/shops/shop_srch");
  }

  const NewBtnHandler = ()  =>{
    navigation("/admin/shops/shop_new");
  }
  return (
    <div className={classes.main_div}>
      <NavbarAdmin className = {classes.nav_style}/>
      <section className={classes.btn_sec}>
       <button className={classes.btn1}  onClick={ReqBtnHandler} >Shop Requests</button>
       <button className={classes.btn2}  onClick={SerchBtnHandler} >Search Shop</button>
       <button className={classes.btn3}  onClick={NewBtnHandler} >Add New Shop</button>
       
      </section>
    </div>
  )
}

export default Shops
