import React from 'react';
import classes from './ItemUpdate.module.css';
import background from '../../../assets/Background vector group.png';

const ItemUpdate = () => {
  return (
    <div className={classes.updt_div}>
       <div>hello</div>
       <img src = {background} alt = 'background vector'   className={classes.back_img}/>
    </div>
  )
}

export default ItemUpdate
