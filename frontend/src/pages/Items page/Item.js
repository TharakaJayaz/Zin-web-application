import React, { useState } from "react";
import classes from "./Item.module.css";
import NavbarAdmin from "../../ui/navbar/NavbarAdmin";
import ItemCard from "./ItemCard";
import { FaSearch } from "react-icons/fa";

import item1 from '../../assets/busicuit.jpg';
import item2 from '../../assets/lighter.jpg';
import item3 from '../../assets/tea bag.jpg';
import item4 from '../../assets/toffee.png';
import item5 from '../../assets/shampoo2.jpg';

const Item = () => {
  const Item_list = [
    {
      id:1,
      name:'buscuit',
      image:item1
    },
    {
      id:2,
      name:'lighter',
      image:item2
    },
    {
      id:3,
      name:'tea bag',
      image:item3
    },
    {
      id:4,
      name:'toffee',
      image:item4
    },
    {
      id:5,
      name:'shampoo',
      image:item5
    }
  ];

  const [inputValue,setInputValue]  = useState();
  const[cardLogic,setCardLogic] = useState(false);

  const inputHandler = event =>{
    //  console.log(event.target.value);
     setInputValue(event.target.value)
  } ;
   return (
    <div className={classes.item_main}>
      <NavbarAdmin>
       
        <>
       
          <input
            className={classes.nav_input}
            type="text"
            placeholder=" Search...."
            onChange={inputHandler}
            value = {inputValue}
          />
          <button className={classes.nav_btn}>
          
            <FaSearch className={classes.svg} />
          </button>
        </>
      </NavbarAdmin>
      <div className={classes.item_style}>
      <ItemCard style={classes.itemcard_style} count={[400, 600]} />
      </div>
    </div>
  );
};

export default Item;
