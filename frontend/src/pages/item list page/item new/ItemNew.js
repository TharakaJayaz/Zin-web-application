import React, { useState } from "react";
import classes from "./ItemNew.module.css";
import backgroundlogo from "../../../assets/Background vector group.png";
import logo from "../../../assets/zr red.png";
import { MdDelete } from "react-icons/md";
import { useSelector } from "react-redux";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

const ItemNew = (props) => {
  //  const currentDetails = useSelector(state => state.itemListUpdate);

  const navigation = useNavigate();

  const [currentDetails, setCurrentDetails] = useState({
    id: "",
    items: [{}],
  });

  const [confirmMessageLogic, setConfirmMessageLogic] = useState(false);
  const [tempValue, setTempValue] = useState();

  const LogoHandler = () => {
    navigation("/");
  };

  const yesBtnHandler = () => {
    // setCOnfirmLogic(true);
    setCurrentDetails(tempValue);
    setConfirmMessageLogic(false);
  };
  const noBtnHandler = () => {
    //  setCOnfirmLogic(false);
    setConfirmMessageLogic(false);
  };

  //defining useStats of adding input

  const [itemListIdVaue, setItemListIdValue] = useState("");
  const [itemVaue, setItemValue] = useState("");
  const [desVaue, setDesValue] = useState("");
  const [priceVaue, setPriceValue] = useState("");
  const [qtyVaue, setQtyValue] = useState("");

  //handeling functions for input form

  const ItemListInputHandler = (event) => {
    // if require get ItemListId s from hardcode values and make an array ane check for duplicate values
    if (currentDetails.id !== "") {
      return;
    }
    setItemListIdValue(event.target.value);
  };

  const itemInputHandler = (event) => {
    const currentItemID = currentDetails.items.map((item) => item.id);
    for (let i = 0; i < currentItemID.length; i++) {
      if (currentItemID[i] === event.target.value) {
        swal("Item Id should be unique !");

        return;
      }
    }

    setItemValue(event.target.value);

    console.log("current id values", currentItemID);
  };
  const desInputHandler = (event) => {
    setDesValue(event.target.value);
  };

  const priceInputHandler = (event) => {
    setPriceValue(event.target.value);
  };

  const qtyInputHandler = (event) => {
    setQtyValue(event.target.value);
  };

  const addBtnHandler = (event) => {
    event.preventDefault();

    let tempItemsValue = currentDetails.items;

    const tempAddValues = [
      {
        id: itemVaue,
        des: desVaue,
        price: priceVaue,
        qty: qtyVaue,
      },
    ];

    // tempItemsValue = tempItemsValue.push(tempAddValues);
    tempItemsValue = tempItemsValue.concat(tempAddValues);

    console.log("pushing values", tempItemsValue);

    // const tempIDvalue = currentDetails.id;

    const tempData = {
      id: itemListIdVaue,
      items: tempItemsValue,
    };

    setCurrentDetails(tempData);
    setItemValue("");
    setDesValue("");
    setPriceValue("");
    setQtyValue("");
  };

  const svgHandler = (value) => {
    setConfirmMessageLogic(true);

    const updatedValuesAfterDeletion = currentDetails.items.filter(
      (item) => item.id !== value
    );

    const tempID = currentDetails.id;

    const temp = {
      id: tempID,
      items: updatedValuesAfterDeletion,
    };
    console.log("datad object after deltion", temp);
    setTempValue(temp);
  };

  return (
    <div className={classes.ItemListUpdate_main}>
      {confirmMessageLogic && (
        <div className={classes.err_div}>
          <div className={classes.err_div_msg}>
            <section className={classes.err_div_msg_sec1}>
              Do You Want To Remove This Item ?{" "}
            </section>
            <section className={classes.err_div_msg_sec2}>
              <button className={classes.bt1} onClick={yesBtnHandler}>
                Yes
              </button>
              <button className={classes.bt2} onClick={noBtnHandler}>
                No
              </button>
            </section>
          </div>
        </div>
      )}
      <div className={classes.ILU_details}>
        <div className={classes.ILU_details_subDiv}>
          <section className={classes.details_div_sec1}>
            <img src={logo} alt="zr logo" onClick={LogoHandler} />
            <h1>New Item List</h1>
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
                    <tr key={item.id} className={classes.row_data}>
                      {/* {console.log('mapping id',item.id)} */}
                      <td>{item.id}</td>
                      <td>{item.des}</td>
                      <td>RS {item.price}.00</td>
                      <td>{item.qty}</td>
                      <td>
                        <MdDelete
                          className={classes.delete_svg}
                          onClick={() => svgHandler(item.id)}
                          key={item.id + "svg"}
                        />{" "}
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
                    <th>ItemList ID</th>
                    <th>Item ID</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>QTY</th>
                  </tr>
                  <tr className={classes.row_data}>
                    <td>
                      <input
                        type="text"
                        className={classes.input}
                        onChange={ItemListInputHandler}
                        value={itemListIdVaue}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className={classes.input}
                        onChange={itemInputHandler}
                        value={itemVaue}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className={classes.input}
                        onChange={desInputHandler}
                        value={desVaue}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className={classes.input}
                        onChange={priceInputHandler}
                        value={priceVaue}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className={classes.input}
                        onChange={qtyInputHandler}
                        value={qtyVaue}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </form>
            <section>
              <button onClick={addBtnHandler}>Add</button>
            </section>
          </section>
          <section className={classes.details_div_sec4}>
            <button>Save</button>
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

export default ItemNew;
