import React, { useState, useEffect } from "react";
import axios from "axios"; 
import "./rightBar.scss";

const RightBar = () => {
  const [suggestedUsers, setSuggestedUsers] = useState([]);
   const [isLoading, setIsLoading] = useState(true); 

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
        
          
          <div className="user">
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
          </div>
          <div className="user">
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
          </div>
          <div className="user">
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
          </div>
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
       <div className="user">
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
          </div>
          <div className="user">
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
          </div>
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
          <div className="user">
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
          </div>
          <div className="user">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
