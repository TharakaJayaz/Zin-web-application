import React from 'react';
import classes from './StockUpdate.module.css';
import backgroundLogo from "../../../assets/Background vector group.png";
import logo from '../../../assets/zr red.png'
import { useNavigate } from 'react-router-dom';
const StockUpdate = () => {
    const navigation = useNavigate();

    const logoHandler = () =>{
            navigation("/");
    }
         {/* install redux toolkit and get details for update using previous page */}



  return (

   
    <div className={classes.update_main_div}>
        <div className={classes.main_div_sub_div1}>
            <div className={classes.wrapper_div}>
            <section className={classes.sub_sec1}>
                <img src = {logo}  alt = "logo"  onClick={logoHandler}  />
            </section>
            <section className={classes.sub_sec2}>
                Update Stock List
            </section>
            <section className={classes.sub_sec3}>
                <form>
                    <table>
                        <tbody>
                            <tr>
                                <td className={classes.td_left}>ID</td>
                                <td className={classes.td_right}><input type='text' className={classes.form_inputs}  /></td>
                               
                            </tr>

                            <tr>
                                <td className={classes.td_left}>Date</td>
                                <td className={classes.td_right}><input type='text' className={classes.form_inputs}  /></td>
                               
                            </tr>

                            <tr>
                                <td className={classes.td_left}>Sales Rep</td>
                                <td className={classes.td_right}><input type='text' className={classes.form_inputs}  /></td>
                               
                            </tr>

                            <tr>
                                <td className={classes.td_left}>Vehicle</td>
                                <td className={classes.td_right}><input type='text' className={classes.form_inputs}  /></td>
                               
                            </tr>

                            <tr>
                                <td className={classes.td_left}>Route</td>
                                <td className={classes.td_right}><input type='text' className={classes.form_inputs}  /></td>
                               
                            </tr>
                            <tr>
                                <td className={classes.td_left}>Item List</td>
                                <td className={classes.td_right}><input type='text' className={classes.form_inputs}  /></td>
                               
                            </tr>


                        </tbody>
                    </table>
                </form>
            </section>
            <section className={classes.sub_sec4}>
                <button  >Update</button>
            </section>
        </div>
     <img src = {backgroundLogo}   alt = "background"  className={classes.background_img} />
     </div>
    </div>
  )
}

export default StockUpdate
