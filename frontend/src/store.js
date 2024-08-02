import { createStore, combineReducers, applyMiddleware } from "redux";
import {thunk} from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";


import {allUsersReducer,userProfileReducer,userReducer}from "./Reducers/userReducers"
import { likeReducer, myPostsReducer, postOfFollowingReducer, userPostsReducer } from "./Reducers/postReducers";




const reducer = combineReducers({
 user: userReducer,
    postOfFollowing: postOfFollowingReducer,
    allUsers: allUsersReducer,
    like:likeReducer,
    myPosts: myPostsReducer,
    userProfile: userProfileReducer,
    userPosts: userPostsReducer,
});
const initialState={}
const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

// import { configureStore } from "@reduxjs/toolkit";
// import {
//   allUsersReducer,
//   postOfFollowingReducer,
//   userProfileReducer,
//   userReducer,
// } from "./Reducers/User";
// import { likeReducer, myPostsReducer, userPostsReducer } from "./Reducers/Post";
// const store = configureStore({
//   reducer: {
//     user: userReducer,
//     postOfFollowing: postOfFollowingReducer,
//     allUsers: allUsersReducer,
//     like: likeReducer,
//     myPosts: myPostsReducer,
//     userProfile: userProfileReducer,
//     userPosts: userPostsReducer,
//   },
// });

// export default store;