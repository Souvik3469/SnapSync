import "./UpdatePassword.css";
import React, { useEffect, useState } from "react";
import { Typography, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { updatePassword } from "../../Actions/User";
import { useAlert } from "react-alert";
import LeftBar from "../Leftbar/Leftbar";
import RightBar from "../Rightbar/Rightbar";
import { CLEAR_ERRORS, CLEAR_MESSAGE } from "../../constants/postConstants";

const UpdatePassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const dispatch = useDispatch();
  const alert = useAlert();

  const { error, loading, message } = useSelector((state) => state.like);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(updatePassword(oldPassword, newPassword));
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
  }, [dispatch, error, alert, message]);

  return (
    <div style={{ display: "flex",backgroundColor:" rgb(64, 64, 71)"  }}>
            <LeftBar />
            <div style={{ flex: 6 }}>
    <div className="updatePassword">
      <form className="updatePasswordForm" onSubmit={submitHandler}>
        {/* <Typography variant="h3" style={{ padding: "2vmax" }}>
          HiFi
        </Typography> */}
            <div className="div1">
        <span className="span1">Snap</span>
         <span className="span2">Sync</span>
        </div>

        <input
          type="password"
          placeholder="Old Password"
          required
          value={oldPassword}
          className="updatePasswordInputs"
          onChange={(e) => setOldPassword(e.target.value)}
        />

        <input
          type="password"
          placeholder="New Password"
          required
          className="updatePasswordInputs"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />

        <Button disabled={loading} type="submit">
          Change Password
        </Button>
      </form>
    </div>
    </div>
     <RightBar/>
    </div>
  );
};

export default UpdatePassword;