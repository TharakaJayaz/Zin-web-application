import * as React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import classes from "./SignIn.module.css";
import backgroundLogo from "../../assets/Background vector group.png";
import logo from "../../assets/zr red.png";

const SignInPage = () => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  const navigate = useNavigate();

  const checkUser = value =>{
    if(value ==='admin'){
        navigate('/admin/temp_reps')
    }
    if(value ==='stock'){
      navigate('/stock_keeper/stock')
  }
  }

  const inputUsernameHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const inputPasswordeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(enteredUsername, enteredPassword);
    checkUser(enteredUsername);
    setEnteredUsername(""); // create functions for checking admin or stock manager and call in here
    setEnteredPassword("");
  };

  const imgClickHandler = ()  =>{
    navigate("/");
  }
  return (
    <div className={classes.signIn_main_div}>
      {/* <Link to="/admin/temp_reps">
        <button>Admin</button>
      </Link>
      <Link to="/stock_keeper">
        <button>Stock keeper</button>
      </Link> */}

      <img src={logo} alt="zr image" className={classes.signIn_logo} onClick ={imgClickHandler}/>
      <div className={classes.signIn_second_div}>
        <div className={classes.signIn_third_div}>
          <h1 className={classes.signIn_third_div_heding}>Sign In</h1>
          <p className={classes.signIn_third_div_para}>
            Hello there! Sign in and manage <br></br>your works
          </p>
          <form
            className={classes.signIn_third_div_input_form}
            onSubmit={submitHandler}
          >
            <input
              type="text"
              placeholder="username"
              value={enteredUsername}
              onChange={inputUsernameHandler}
            />
            <input
              type="password"
              placeholder="password"
              value={enteredPassword}
              onChange={inputPasswordeHandler}
            />
            <button>Sign in</button>
          </form>
        </div>
      </div>

      <img
        className={classes.signIn_image}
        src={backgroundLogo}
        alt="background image"
      />
    </div>
  );
};

export default SignInPage;
