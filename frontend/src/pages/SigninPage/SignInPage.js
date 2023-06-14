import * as React from "react";
import { useState } from "react";//this usestate will take the initial value as the argument and returns an array with two elements
import { Link, useNavigate } from "react-router-dom";
import classes from "./SignIn.module.css";
import backgroundLogo from "../../assets/Background vector group.png";
import logo from "../../assets/zr red.png";
import axios from "axios";//http request to the from the browser. commonly used to fetch data from the APIs.,update data on the server

const SignInPage = () => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [isVerified, setIsVerified] = useState(true);

  const navigate = useNavigate();//hook provided by the react-router-dom
//hooks can make the code readable and easier to maintain.allows developoers to add state and other features to functional components.
  const checkUser = value => {
    const regex = /^Ad/;
    
    if (regex.test(value)) {
      navigate('/admin/temp_reps');
    } else {
      navigate('/stock_keeper/item_list');
    }
    // if (value === 'http://localhost:8800/user') {
    //   navigate('/admin/temp_reps')
    // //} else if (value === 'stock') {
    // //  navigate('/stock_keeper/item_list')
    // } else {
    //   navigate('/');
    // }
  }

  const inputUsernameHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const inputPasswordeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  // handle the submition of the signin
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(enteredUsername, enteredPassword);
    axios.post("http://localhost:8800/userpw", {
      userid: enteredUsername,
      password: enteredPassword,
    }).then(data => {
      if (data.data.status) {
        console.log("Loged in");
        checkUser(enteredUsername);
        setIsVerified(true);
      } else {
        setIsVerified(false);
      }
    });
    setEnteredUsername(""); // create functions for checking admin or stock manager and call in here
    setEnteredPassword("");
  };
  return (
    <div className={classes.signIn_main_div}>
      {/* <Link to="/admin/temp_reps">
        <button>Admin</button>
      </Link>
      <Link to="/stock_keeper">
        <button>Stock keeper</button>
      </Link> */}

      <img src={logo} alt="zr image" className={classes.signIn_logo} />
      <div className={classes.signIn_second_div}>
        <div className={classes.signIn_third_div}>
          <h1 className={classes.signIn_third_div_heding}>Sign In</h1>
          <p className={classes.signIn_third_div_para}>
            Hello there! Sign in and manage <br></br>your works
          </p>
          {isVerified ? <></> : <p>Invalid Credentials</p>}
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
            <button type="submit">Sign in</button>
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