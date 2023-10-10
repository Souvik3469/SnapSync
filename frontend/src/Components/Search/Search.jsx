import { Button, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../Actions/User";
import User from "../User/User";
import "./Search.css";
import LeftBar from "../Leftbar/Leftbar";
import RightBar from "../Rightbar/Rightbar";

const Search = () => {
  const [name, setName] = React.useState("");

  const { users, loading } = useSelector((state) => state.allUsers);

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(getAllUsers(name));
  };

  return (
      <div style={{ display: "flex" }}>
            <LeftBar />
            <div style={{ flex: 6 }}>
    <div className="search">
      <form className="searchForm" onSubmit={submitHandler}>
        {/* <Typography variant="h3" style={{ padding: "2vmax" }}>
         SnapSync
        </Typography> */}
        <div className="div1">
        <span className="span1">Snap</span>
         <span className="span2">Sync</span>
        </div>
        <input
          type="text"
          value={name}
          placeholder="Name"
          required
          onChange={(e) => setName(e.target.value)}
        />

        <Button disabled={loading} type="submit">
          Search
        </Button>

        <div className="searchResults">
          {users &&
            users.map((user) => (
              <User
                key={user._id}
                userId={user._id}
                name={user.name}
                avatar={user.avatar.url}
              />
            ))}
        </div>
      </form>
    </div>
    </div>
     <RightBar />
    </div>
  );
};

export default Search;