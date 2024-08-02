import React, { useEffect, useState } from "react";
import "./login.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../Actions/User";
import { useAlert } from "react-alert";
import { CLEAR_ERRORS, CLEAR_MESSAGE } from "../../constants/postConstants";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const alert = useAlert();

  const { error } = useSelector((state) => state.user);
  const { message } = useSelector((state) => state.like);

  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(loginUser(email, password));
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch({ type: CLEAR_ERRORS });
    }
    if (message) {
      alert.success(message);
      dispatch({ type: CLEAR_MESSAGE });
    }
  }, [alert, error, dispatch, message]);

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Snap Sync.</h1>
          <h2 className="h2">
            "Discover, Connect, Inspire"
          </h2>
          <span>Don't you have an account?</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form onSubmit={loginHandler}>
            <input
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Login</button>
          </form>
          <Link to="/forgot/password">
            <button className="forgot-password">Forgot Password?</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
