import "./leftBar.scss";
import { Link } from "react-router-dom";
import Friends from "../../assets/1.png";
import Groups from "../../assets/2.png";
import Market from "../../assets/3.png";
import Watch from "../../assets/4.png";
import Memories from "../../assets/5.png";
import Events from "../../assets/6.png";
import Gaming from "../../assets/7.png";
import Gallery from "../../assets/8.png";
import Videos from "../../assets/9.png";
import Messages from "../../assets/10.png";
import Tutorials from "../../assets/11.png";
import Courses from "../../assets/12.png";
import Fund from "../../assets/13.png";
import { Avatar, Button, Dialog, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";

import { deleteMyProfile, getMyPosts, logoutUser } from "../../Actions/User";
import Loader from "../Loader/Loader";
import Post from "../Post/Post";
import User from "../User/User";


const LeftBar = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const [tab, setTab] = useState(window.location.pathname);
  const { user, loading: userLoading } = useSelector((state) => state.user);

 

  const [followersToggle, setFollowersToggle] = useState(false);

  const [followingToggle, setFollowingToggle] = useState(false);
 

  // useEffect(() => {
  //   dispatch(getMyPosts());
  //   console.log(posts,"posts");
  //   console.log(user,"user")
  // }, [dispatch]);

  // useEffect(() => {
  //   if (error) {
  //     alert.error(error);
  //     dispatch({ type: "clearErrors" });
  //   }

  //   if (likeError) {
  //     alert.error(likeError);
  //     dispatch({ type: "clearErrors" });
  //   }
  //   if (message) {
  //     alert.success(message);
  //     dispatch({ type: "clearMessage" });
  //   }
  // }, [alert, error, message, likeError, dispatch]);

//   const { currentUser } = useContext(AuthContext);
  console.log("User2",user);
return userLoading === true ? (
    <Loader />
  ) : (
  // return(
    <div className="leftBar">

      
      <div className="container">
        <div className="menu">
          {/* <div className="user">
            <Link to={`/profile/${currentUser.id}`}>
            <img
              src={"/upload/" +currentUser.profilePic}
              alt=""
            />
            </Link>
            {/* <Link to={`/profile/${currentUser.id}`} style={{ textDecoration: "none" }}> */}
            {/* <span>{currentUser.name}</span> */}
            {/* </Link> */}
          {/* </div> */} 
          {user && (
                <>
          <div className="item">
               
             <Link to="/account" onClick={() => setTab("/account")}>
             <Avatar
              src={user.avatar.url}
              sx={{ height: "2vmax", width: "2vmax" }}
            />
             </Link>
            {/* <img src={Friends} alt="" /> */}
            <span>{user.name}</span>
           
          </div>
          <div className="item">
            <img src={Groups} alt=""  />
            <span className="text1" onClick={() => setFollowersToggle(!followersToggle)}>Followers</span>
             <span className="text2">{user.followers.length}</span>
          </div>
          <div className="item">
            <img src={Friends} alt="" />
            <span className="text1" onClick={() => setFollowingToggle(!followingToggle)}>Following</span>
             <span className="text2">{user.following.length}</span>
          </div>
          </>
               )}
               <Dialog
          open={followersToggle}
          onClose={() => setFollowersToggle(!followersToggle)}
        >
          <div className="DialogBox">
            <Typography variant="h4">Followers</Typography>

            {user && user.followers.length > 0 ? (
              user.followers.map((follower) => (
                <User
                  key={follower._id}
                  userId={follower._id}
                  name={follower.name}
                  avatar={follower.avatar.url}
                />
              ))
            ) : (
              <Typography style={{ margin: "2vmax" }}>
                You have no followers
              </Typography>
            )}
          </div>
        </Dialog>
         <Dialog
          open={followingToggle}
          onClose={() => setFollowingToggle(!followingToggle)}
        >
          <div className="DialogBox">
            <Typography variant="h4">Following</Typography>

            {user && user.following.length > 0 ? (
              user.following.map((follow) => (
                <User
                  key={follow._id}
                  userId={follow._id}
                  name={follow.name}
                  avatar={follow.avatar.url}
                />
              ))
            ) : (
              <Typography style={{ margin: "2vmax" }}>
                You're not following anyone
              </Typography>
            )}
          </div>
        </Dialog>

{/* <div>
              <button onClick={() => setFollowersToggle(!followersToggle)}>
                <Typography>Followers</Typography>
              </button>
              <Typography>{user.followers.length}</Typography>
            </div> */}

       
          <div className="item">
            <img src={Watch} alt="" />
            <span>Watch</span>
          </div>
          <div className="item">
            <img src={Memories} alt="" />
            <span>Memories</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Your shortcuts</span>
          <div className="item">
            <img src={Events} alt="" />
            <span>Events</span>
          </div>
          <div className="item">
            <img src={Gaming} alt="" />
            <span>Gaming</span>
          </div>
          <div className="item">
            <img src={Gallery} alt="" />
            <span>Gallery</span>
          </div>
          <div className="item">
            <img src={Videos} alt="" />
            <span>Videos</span>
          </div>
          <div className="item">
            <img src={Messages} alt="" />
            <span>Messages</span>
          </div>
        </div>
        <hr />
        
      </div>
    </div>
  );
};

export default LeftBar;
