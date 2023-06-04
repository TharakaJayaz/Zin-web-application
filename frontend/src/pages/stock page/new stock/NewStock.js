import React from "react";
import classes from "./NewStock.module.css";
import logo from "../../../assets/zr red.png";
import { useNavigate } from "react-router-dom";

const NewStock = () => {
  const navigation = useNavigate();

  const imgOnclickHandler = () => {
    navigation("/");
  };
  return (
    <div className={classes.main_div}>
      <div className={classes.detail_div}>
        <section className={classes.detail_section1}>
          <img
            className={classes.zr_logo}
            onClick={imgOnclickHandler}
            src={logo}
            alt="zr red logo"
          />
        </section>
        <section className={classes.detail_section2}>
          <section className={classes.detail_section2_sub1}>
            New Stock List
          </section>
          <section className={classes.detail_section2_sub2}>
            <form>
              <table>
                <tbody>
                  <tr>
                    <td>
                      ID <input type="text" className={classes.form_inputs} />{" "}
                    </td>
                    <td>
                      Date <input type="text"    className={classes.form_inputs} />{" "}
                    </td>
                    <td>
                      Sales Rep <input type="text"   className={classes.form_inputs} />{" "}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Vehicle <input type="text" className={classes.form_inputs} />{" "}
                    </td>
                    <td>
                      Route <input type="text"    className={classes.form_inputs} />{" "}
                    </td>
                    <td>
                     Item List<input type="text"   className={classes.form_inputs} />{" "}
                    </td>
                  </tr>
                </tbody>
              </table>
            </form>
          </section>

          <section className={classes.detail_section2_sub3}>
            <button className={classes.sub3_btn_cancel}>Cancel</button>
            <button className={classes.sub3_btn_confirm}>Confirm</button>
          </section>
        </section>
      </div>
    </div>
  );
};

export default NewStock;
