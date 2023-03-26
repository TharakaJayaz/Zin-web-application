import React,{useRef, useState} from 'react';
import classes from './Update.module.css';
import background from '../../assets/Background vector group.png';
import logo from '../../assets/zr red.png';
import '../../functions.js';

const UpdateRep = () => {

    const nameInput = useRef();
    const mobileInput = useRef();
    const emailInput = useRef();
    const nicInput = useRef();
    const addressInput = useRef();
    const [errStatus,SetErrStatus] = useState(false);

    const submitHandler = event =>{
        event.preventDefault();
        const nameValue = nameInput.current.value;
        const mobileValue = mobileInput.current.value;
        const emailValue = emailInput.current.value;
        const nicValue = nicInput.current.value;
        const addressValue = addressInput.current.value;
        console.log(nameValue,mobileValue,emailValue,nicValue,addressValue);
        if(nameValue.trim() ===''||mobileValue.trim() ===''||emailValue.trim() ===''||nicValue.trim() ===''||addressValue.trim() ===''){
            SetErrStatus(true);
            console.log("one of each is empty");
        }

        

    }
  return (
    <form className={classes.form__updateRep} onSubmit = {submitHandler} >
     
     <div  className={classes.div_second__updateRep}>
        <img src = {logo} alt = "logo"  />
        <h1 className={classes.h1__updateRep}>Update Rep</h1>
        <div className={classes.sub_div__updateRep}>
            <span >Name </span>
            <input type = 'text'  ref={nameInput}/>
        </div>
        <div className={classes.sub_div__updateRep}>
            <span >Mobile </span>
            <input type = 'text'  ref={mobileInput}/>
        </div>
        <div className={classes.sub_div__updateRep}>
            <span >Email </span>
            <input type = 'text' ref={emailInput}  />
        </div>
        <div className={classes.sub_div__updateRep}>
            <span >NIC</span>
            <input type = 'text' ref={nicInput} />
        </div>
        <div className={classes.sub_div__updateRep}>
            <span >Address </span>
            <input type = 'text' ref={addressInput} />
        </div>
        {errStatus&&(<p>All Fields shuld be filled*</p>)}
        <button >Update</button>
     </div>
    
     <img src = {background}   alt = 'backgound vector' className={classes.backImg__updateRep} /> 
    </form>
  )
}

export default UpdateRep
