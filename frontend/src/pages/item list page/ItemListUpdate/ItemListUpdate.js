import React, { useState } from "react";
import classes from "./ItemListUpdate.module.css";
import backgroundlogo from "../../../assets/Background vector group.png";
import logo from "../../../assets/zr red.png";
import { MdDelete } from "react-icons/md";
import { useSelector } from "react-redux";

const ItemListUpdate = (props) => {
//  const currentDetails = useSelector(state => state.itemListUpdate); 
  const [currentDetails, setCurrentDetails] = useState(
    useSelector((state) => state.itemListUpdate)
  );

  // const [confirmlogic,setCOnfirmLogic] = useState(false);
  const [confirmMessageLogic,setConfirmMessageLogic] = useState(false);
  const[tempValue,setTempValue] = useState();


        const yesBtnHandler = ()  =>{
              // setCOnfirmLogic(true);
              setCurrentDetails(tempValue);
              setConfirmMessageLogic(false);
        }
     const noBtnHandler = ()  =>{
            //  setCOnfirmLogic(false);
             setConfirmMessageLogic(false);
     }

  const svgHandler = (value) => {
   
        setConfirmMessageLogic(true);
    
    const updatedValuesAfterDeletion = currentDetails.items.filter((item) =>item.id !== value);

    const tempID = currentDetails.id;
    
    const temp = {
      id:tempID,
      items:updatedValuesAfterDeletion
      
    }
    console.log("datad object after deltion",temp);
     setTempValue(temp);
    
  };

  return (
    <div className={classes.ItemListUpdate_main}>
     { confirmMessageLogic &&(<div className={classes.err_div}>
        <div className={classes.err_div_msg}>
          <section className={classes.err_div_msg_sec1}>Do You Want To Remove This Item ? </section>
          <section className={classes.err_div_msg_sec2}>
            <button className={classes.bt1} onClick={yesBtnHandler} >Yes</button>
            <button className={classes.bt2} onClick={noBtnHandler} >No</button>
          </section>
        </div>
      </div>)}
      <div className={classes.ILU_details}>
        <div className={classes.ILU_details_subDiv}>
          <section className={classes.details_div_sec1}>
            <img src={logo} alt="zr logo" />
            <h1>Update Item List</h1>
          </section>
          <section className={classes.details_div_sec2}>
            <form>
              <table>
                <tbody>
                  <tr className={classes.row_head}>
                    <th>Item ID</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>QTY</th>
                    <th></th>
                  </tr>
                  {currentDetails.items.map((item) => (
                    <tr  key={item.id} className={classes.row_data}>
                      {/* {console.log('mapping id',item.id)} */}
                      <td >{item.id}</td>
                      <td >{item.des}</td>
                      <td >RS {item.price}.00</td>
                      <td >{item.qty}</td>
                      <td >
                        
                          <MdDelete className={classes.delete_svg}   onClick={() =>svgHandler(item.id)}  key={item.id +"svg" }  />{" "}
                        
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </form>
          </section>

          <section className={classes.details_div_sec3}>
            <form>
              <table>
                <tbody>
                  <tr className={classes.row_head}>
                    <th>Item ID</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>QTY</th>
                  </tr>
                  <tr className={classes.row_data}>
                    <td>
                      <input type="text" className={classes.input} />
                    </td>
                    <td>
                      <input type="text" className={classes.input} />
                    </td>
                    <td>
                      <input type="text" className={classes.input} />
                    </td>
                    <td>
                      <input type="text" className={classes.input} />
                    </td>
                  </tr>
                </tbody>
              </table>
            </form>
            <section>
              <button>Add</button>
            </section>
          </section>
          <section className={classes.details_div_sec4}>
            <button>Update</button>
          </section>
        </div>
      </div>

      <img
        src={backgroundlogo}
        alt="background"
        className={classes.background_img}
      />
    </div>
  );
};

export default ItemListUpdate;
