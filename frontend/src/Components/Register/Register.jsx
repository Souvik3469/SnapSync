import { Avatar, Typography, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import "./Register.css";
import "./register.scss"
import { registerUser } from "../../Actions/User";
import { useAlert } from "react-alert";
import { CLEAR_ERRORS } from "../../constants/postConstants";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const alert = useAlert();
  const { loading, error } = useSelector((state) => state.user);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    const Reader = new FileReader();
    Reader.readAsDataURL(file);

    Reader.onload = () => {
      if (Reader.readyState === 2) {
        setAvatar(Reader.result);
      }
    };
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(registerUser(name, email, password, avatar));
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch({ type: CLEAR_ERRORS });
    }
  }, [dispatch, error, alert]);
  return (
  
      <div className="register">
      <div className="card">
        <div className="left">
          <h1>Snap Sync.</h1>
          <h2 className="h2">
           "Discover, Connect, Inspire"
          </h2>
          <span>Do you have an account?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <div className="av">
        <Avatar
          src={avatar}
          alt="User"
          sx={{ height: "5vmax", width: "5vmax",  justifyContent: "center" }}
          // style={{ justifyContent: "center", display: "flex" }}
        />
        </div>

        <input type="file" accept="image/*" onChange={handleImageChange} />
            <input
          type="text"
         
          placeholder="Name"
          // className="registerInputs"
          required
           value={name}
          onChange={(e) => setName(e.target.value)}
        />
             <input
          type="email"
          placeholder="Email"
          // className="registerInputs"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
             <input
          type="password"
          // className="registerInputs"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
            
           
            <button onClick={submitHandler}>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;