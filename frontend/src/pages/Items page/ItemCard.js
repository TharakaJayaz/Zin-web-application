import React, { Fragment, useState, useEffect } from "react";
import classes from "./ItemCard.module.css";
import lighter from "../../assets/lighter.jpg";
import { FaSearch } from "react-icons/fa";
const ItemCard = (props) => {
  const [style, setStyle] = useState(); // styling state for progess bar
  const [itemCount, setItemCount] = useState();

  const searchHandler = (event) => {
    console.log(event.target.value);
  };

  // useEffect(() => {
  //   setItemCount(Math.round(props.count[0] / props.count[1]));

  //   console.log(itemCount);
  //   // ItemCount = (props.count[0] / props.count[1]) * 100;
  //   setStyle({
  //     opacity: 1,
  //     width:`${itemCount*100}%`, 
  //   });
  // }, []);
  return (
    //     <div className={classes.item_main}>
    //       <div className={classes.wrap_div}>
    //         {/* img of item */}
    //         {/* <img src = {biscuit} /> */}

    //   <div>
    //         {/* <table>
    //             <tbody>
    //                 <tr>
    //                     <td className={classes.left_td}>Name</td>
    //                     <td className={classes.right_td}>OREO</td>
    //                 </tr>
    //                 <tr>
    //                     <td className={classes.left_td}>Price</td>
    //                     <td className={classes.right_td}>RS.150.00</td>
    //                 </tr>
    //                 <tr>
    //                     <td className={classes.left_td}>Manufacture</td>
    //                     <td className={classes.right_td}>MUNCHEE</td>
    //                 </tr>
    //                 <tr>
    //                     <td className={classes.left_td}>Mfg date:</td>
    //                     <td className={classes.right_td}>2/3/2023</td>
    //                 </tr>
    //                 <tr>
    //                     <td className={classes.left_td}>Exp date:</td>
    //                     <td className={classes.right_td}>2/3/2023</td>
    //                 </tr>
    //                 <tr>
    //                     <td className={classes.left_td}>Discount</td>
    //                     <td className={classes.right_td}>RS.2.00</td>
    //                 </tr>
    //                 <tr>
    //                     <td className={classes.left_td}>Availability</td>
    //                     <td className={classes.right_td}>500 units</td>
    //                 </tr>
    //             </tbody>
    //         </table> */}
    //         </div>

    //       </div>

    //       {/* <button className={classes.update}>Update</button>
    //       <button className={classes.cancel}>Delete</button> */}

    //     </div>
    <div className={`${classes.prdct_main} ${props.style}`}>
      {/* <div className={classes.inpt_div}>
    <input type='text'  placeholder=' Search....'  value={search}  onChange = {searchHandler}/>
    <button> <FaSearch className={classes.svg}/></button>

    </div> */}
      <div className={classes.ic_main}>
        {/* intialize  */}
        <div className={classes.prdct_left}>
        
          {/* divide page into 2 parts*/}
          <img src={lighter} alt="product image" />
          <div className={classes.prdct_head}>
            <h1>Munchee cream craker</h1>
            <h3><span>RS.</span>480.00</h3>
            <h4>Discount </h4>
          </div>
        </div>
        <div className={classes.prdct_right}>
        
          {/* divide page into 2 parts*/}
          <div className={classes.item_desc}>
            {/* <div className={classes.right_des}>
              <span className={classes.sp_left}>Manufacture</span> <br></br>
              <span className={classes.sp_right}>Munchee</span>
            </div>

            <div className={classes.right_des}>        
              <span className={classes.sp_left}>mdf date</span> <br></br>
              <span className={classes.sp_right}>2023-02-28</span>
            </div>

            <div className={classes.right_des}>
              <span className={classes.sp_left}>exp date</span> <br></br>
              <span className={classes.sp_right}>2023-02-28</span>
            </div>

            <div className={classes.right_des}>
              <span className={classes.sp_left}>exp date</span> <br></br>
              <span className={classes.sp_right}>2023-02-28</span>
            </div> */}
            <table>
              <tbody>
                <tr>
                  <td>
                    <span className={classes.sp_up}>Manufacture</span>

                    <span className={classes.sp_down}>Munchee</span>
                  </td>
                  <td>
                    <span className={classes.sp_up}>mdf date</span>
                    <span className={classes.sp_down}>2023-02-28</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className={classes.sp_up}>exp date</span>
                    <span className={classes.sp_down}>2023-02-28</span>
                  </td>
                  <td>
                    <span className={classes.sp_up}>exp date</span>
                    <span className={classes.sp_down}>2023-02-28</span>
                  </td>
                </tr>
              </tbody>
            </table>
            {/* <div className={classes.i_count_div}>
              <p>Availability</p>
              <h5>1500</h5>
              <div className={classes.fill1_div}>
                <div className={classes.fill2_div} style={style}>
                  <span>{itemCount * 100}%</span>
                </div>
              </div>
            </div> */}
           <p>Availability
           <h5>1500 units</h5>  </p>
           <div className={classes.btn_div}>
            <button className={classes.btn_updt}>Update</button>
            <button className={classes.btn_dlt}>Delete</button>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
