import React, { useState, useEffect } from "react";
import axios from "axios"; 
import "./rightBar.scss";
import { Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers, getFollowingPosts } from "../../Actions/User";
import { Link } from "react-router-dom";
import User from "../User/User";

const RightBar = () => {
   const dispatch = useDispatch();
   const [tab, setTab] = useState(window.location.pathname);
  // const alert = useAlert();
  const { users, loading: usersLoading } = useSelector(
    (state) => state.allUsers
  );

  useEffect(() => {
    // dispatch(getFollowingPosts());
    
    // console.log(posts,"posts")
    // dispatch(getpost())
    dispatch(getAllUsers());
  }, [dispatch]);




//  useEffect(() => {
  
//     const apiUrl = "http://localhost:8800/api/users";

//     axios
//       .get(apiUrl)
//       .then((response) => {
       
//         const userData = response.data;
//         setSuggestedUsers(userData);
//         setIsLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//         setIsLoading(false); 
//       });
//   }, []);

//   console.log(suggestedUsers);

  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Suggestions For You</span>
        
               {users && users.length > 0 ? (
          users.map((user) => (
       
          <div className="user">
            <div className="userInfo">
            
               <User
              key={user._id}
              userId={user._id}
              name={user.name}
              avatar={user.avatar.url}
            />
            </div>
            {/* <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
        
            </div> */}
            {/* <div className="buttons">
              <button>follow</button>
              </div> */}
          </div>
                
                    ))
      ) : (
       <Typography>No Users Yet</Typography>
       )}
          {/* <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <span>Jane Doe</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div> */}
       
        </div>
        <div className="item">
          <span>Latest Activities</span>
          {/* {isLoading ? (
            <div>Loading...</div>
          ) : (
            suggestedUsers.map((user) => (
              <div className="user" key={user.id}>
                <div className="userInfo">
                  <img src={"/upload/" +user.profilePic} alt={user.name} />
                  <span>{user.name} changed their cover picture</span>
                  <span>1 min ago</span>
                </div>
               
              </div>
            ))
          )} */}
          
               {users && users.length > 0 ? (
          users.map((user) => (
       
          <div className="user">
            <div className="userInfo">
            
               <User
              key={user._id}
              userId={user._id}
              name={user.name}
              avatar={user.avatar.url}
            />
              <span className="cp"> changed their profile picture</span>
                  <span className="cp">1 min ago</span>
            </div>
            
          </div>
                
                    ))
      ) : (
       <Typography>No Activity Yet</Typography>
       )}
        {/* {users && users.length > 0 ? (
          users.map((user) => (
       
          <div className="user">
            <div className="userInfo">
            
               <User
              key={user._id}
              userId={user._id}
              name={user.name}
              avatar={user.avatar.url}
            />
              <span className="cp"> logged in</span>
                  <span className="cp">1 min ago</span>
            </div>
            
          </div>
                
                    ))
      ) : (
       <Typography>No Activity Yet</Typography>
       )} */}
       {/* <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <span>Jane Doe</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div> */}
         
        </div>
        <div className="item">
          <span>Online Friends</span>
         
          {/* {isLoading ? (
            <div>Loading...</div>
          ) : (
            suggestedUsers.map((user) => (
              <div className="user" key={user.id}>
                <div className="userInfo">
                  <img src={"/upload/" +user.profilePic} alt={user.name} />
                  <span>{user.name} </span>
                 
                </div>
               
              </div>
            ))
          )} */}
            {users && users.length > 0 ? (
          users.map((user) => (
       
          <div className="user">
            <div className="userInfo">
            
               <User
              key={user._id}
              userId={user._id}
              name={user.name}
              avatar={user.avatar.url}
            />
            </div>
            {/* <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
        
            </div> */}
          </div>
                
                    ))
      ) : (
       <Typography>No Online Friends </Typography>
       )}
          {/* <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <span>Jane Doe</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div> */}
         
          
        </div>
      </div>
    </div>
  );
};

export default RightBar;
