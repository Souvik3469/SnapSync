import React, { useState, } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Home,
  HomeOutlined,
  Add,
  AddOutlined,
  SearchOutlined,
  Search,
  AccountCircle,
  AccountCircleOutlined,

} from "@mui/icons-material";
import { Avatar, Button, Dialog, Typography } from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';
import { deleteMyProfile, getMyPosts, logoutUser } from "../../Actions/User";
const Header = () => {
  const [tab, setTab] = useState(window.location.pathname);
    const dispatch = useDispatch();
      const logoutHandler = () => {
    dispatch(logoutUser());
    alert.success("Logged out successfully");
  };
  return (
    <div className="header">
       <div className="div1">
        <span className="span3">Snap</span>
         <span className="span4">Sync</span>
        </div>
      {/* <span className="logo">SnapSync</span> */}
      <Link to="/" onClick={() => setTab("/")}>
        {tab === "/" ? <Home style={{ color: "aqua" }} /> : <HomeOutlined />}
      </Link>

      <Link to="/newpost" onClick={() => setTab("/newpost")}>
        {tab === "/newpost" ? (
          <Add style={{ color: "aqua" }} />
        ) : (
          <AddOutlined />
        )}
      </Link>

      <Link to="/search" onClick={() => setTab("/search")}>
        {tab === "/search" ? (
          <Search style={{ color: "aqua" }} />
        ) : (
          <SearchOutlined />
        )}
      </Link>

      <Link to="/account" onClick={() => setTab("/account")}>
        {tab === "/account" ? (
          <AccountCircle style={{ color: "aqua" }} />
        ) : (
          <AccountCircleOutlined />
        )}
      </Link>
       <Link to="/login" onClick={() => setTab("/login")}>
      <LogoutIcon style={{ color: "white" }} onClick={logoutHandler} />
      </Link>
         {/* <Button variant="contained" >
          Logout
        </Button> */}
    </div>
  );
};

export default Header;