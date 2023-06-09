import React from 'react';
import NavbarStok from '../../../ui/navbar/NavbarStok';
import classes from './ItemNew.module.css';

const ItemNew = () => {
  return (
    <div className={classes.itemNew_main}>
    <NavbarStok  className = {classes.nav_style} />
    </div>
  )
}

export default ItemNew
